'use client'

import React, { useState, useMemo, useEffect, useCallback } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { Product, CATEGORIES } from '@/lib/products'
import { FilterPanel } from './FilterPanel'
import { FilterDrawer } from './FilterDrawer'
import { CatalogueToolbar } from './CatalogueToolbar'
import { ActiveFilters, ActiveFilterItem } from './ActiveFilters'
import { ProductGrid } from './ProductGrid'
import { EmptyResults } from './EmptyResults'

interface CatalogueShellProps {
  initialProducts: readonly Product[]
  lockedGender?: 'men' | 'women'
  lockedCategory?: string
  title?: string
}

export function CatalogueShell({
  initialProducts,
  lockedGender,
  lockedCategory,
}: CatalogueShellProps) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  // URL state
  const qParam = searchParams.get('q') || ''
  const genderParam = lockedGender || searchParams.get('gender') || ''
  const categoryParam = lockedCategory || searchParams.get('category') || ''
  const materialParam = searchParams.get('material') || ''
  const marketplaceParam = searchParams.get('marketplace') || ''
  const sortParam = searchParams.get('sort') || 'featured'

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)

  const updateParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (value) {
        params.set(key, value)
      } else {
        params.delete(key)
      }
      router.push(`${pathname}?${params.toString()}`, { scroll: false })
    },
    [pathname, router, searchParams]
  )

  const handleClearAll = () => {
    const params = new URLSearchParams()
    if (lockedGender) params.set('gender', lockedGender)
    if (lockedCategory) params.set('category', lockedCategory)
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }

  const handleRemoveFilter = (key: string) => {
    updateParam(key, '')
  }

  // Filter products
  const filteredProducts = useMemo(() => {
    let list = [...initialProducts]

    // Search query
    if (qParam.trim()) {
      const q = qParam.trim().toLowerCase()
      list = list.filter((p) => {
        return (
          p.title.toLowerCase().includes(q) ||
          p.marketplaceTitle.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.material.toLowerCase().includes(q) ||
          p.blurb.toLowerCase().includes(q)
        )
      })
    }

    // Gender
    if (genderParam) {
      list = list.filter((p) => p.gender === genderParam || p.gender === 'unisex')
    }

    // Category
    if (categoryParam) {
      list = list.filter((p) => p.category === categoryParam)
    }

    // Material
    if (materialParam) {
      const mat = materialParam.toLowerCase()
      list = list.filter((p) => p.material.toLowerCase().includes(mat))
    }

    // Marketplace
    if (marketplaceParam === 'etsy') {
      list = list.filter((p) => Boolean(p.etsyUrl))
    } else if (marketplaceParam === 'ebay') {
      list = list.filter((p) => Boolean(p.ebayUrl))
    }

    // Sorting
    if (sortParam === 'price-asc') {
      list.sort((a, b) => a.salePrice - b.salePrice)
    } else if (sortParam === 'price-desc') {
      list.sort((a, b) => b.salePrice - a.salePrice)
    } else if (sortParam === 'name-asc') {
      list.sort((a, b) => a.title.localeCompare(b.title))
    } else if (sortParam === 'name-desc') {
      list.sort((a, b) => b.title.localeCompare(a.title))
    }

    return list
  }, [
    initialProducts,
    qParam,
    genderParam,
    categoryParam,
    materialParam,
    marketplaceParam,
    sortParam,
  ])

  // Active filter items for chips
  const activeFilters: ActiveFilterItem[] = useMemo(() => {
    const items: ActiveFilterItem[] = []
    if (qParam) {
      items.push({ key: 'q', label: `Search: "${qParam}"`, value: qParam })
    }
    if (genderParam && !lockedGender) {
      items.push({ key: 'gender', label: `Gender: ${genderParam}`, value: genderParam })
    }
    if (categoryParam && !lockedCategory) {
      const catObj = CATEGORIES.find((c) => c.slug === categoryParam)
      items.push({
        key: 'category',
        label: `Cut: ${catObj ? catObj.label : categoryParam}`,
        value: categoryParam,
      })
    }
    if (materialParam) {
      items.push({ key: 'material', label: `Material: ${materialParam}`, value: materialParam })
    }
    if (marketplaceParam) {
      items.push({
        key: 'marketplace',
        label: `Marketplace: ${marketplaceParam.toUpperCase()}`,
        value: marketplaceParam,
      })
    }
    return items
  }, [qParam, genderParam, lockedGender, categoryParam, lockedCategory, materialParam, marketplaceParam])

  return (
    <div>
      {/* Toolbar */}
      <CatalogueToolbar
        totalResults={filteredProducts.length}
        searchQuery={qParam}
        onSearchChange={(q) => updateParam('q', q)}
        sortBy={sortParam}
        onSortChange={(s) => updateParam('sort', s)}
        onOpenMobileFilters={() => setMobileFilterOpen(true)}
        activeFiltersCount={activeFilters.length}
      />

      {/* Active Filter Chips */}
      <ActiveFilters
        filters={activeFilters}
        onRemove={handleRemoveFilter}
        onClearAll={handleClearAll}
      />

      <div className="flex gap-8 items-start">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <FilterPanel
            selectedGender={genderParam}
            selectedCategory={categoryParam}
            selectedMaterial={materialParam}
            selectedMarketplace={marketplaceParam}
            onGenderChange={(g) => updateParam('gender', g)}
            onCategoryChange={(c) => updateParam('category', c)}
            onMaterialChange={(m) => updateParam('material', m)}
            onMarketplaceChange={(m) => updateParam('marketplace', m)}
          />
        </div>

        {/* Product Grid or Empty State */}
        <div className="flex-1 min-w-0">
          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} columns={3} />
          ) : (
            <EmptyResults onClearFilters={handleClearAll} />
          )}
        </div>
      </div>

      {/* Mobile Filter Sheet */}
      <FilterDrawer
        isOpen={mobileFilterOpen}
        onClose={() => setMobileFilterOpen(false)}
        totalResults={filteredProducts.length}
        selectedGender={genderParam}
        selectedCategory={categoryParam}
        selectedMaterial={materialParam}
        selectedMarketplace={marketplaceParam}
        onGenderChange={(g) => updateParam('gender', g)}
        onCategoryChange={(c) => updateParam('category', c)}
        onMaterialChange={(m) => updateParam('material', m)}
        onMarketplaceChange={(m) => updateParam('marketplace', m)}
        onClearAll={handleClearAll}
      />
    </div>
  )
}
