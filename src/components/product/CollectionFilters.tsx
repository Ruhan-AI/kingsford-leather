'use client'

import React, { useState, useEffect } from 'react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { Search, SlidersHorizontal, X, Filter } from 'lucide-react'
import { CATEGORIES } from '@/lib/products'

interface CollectionFiltersProps {
  totalCount: number
  filteredCount: number
  hideGenderFilter?: boolean
}

export function CollectionFilters({
  totalCount,
  filteredCount,
  hideGenderFilter = false,
}: CollectionFiltersProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)

  // Current filter values from URL
  const currentCategory = searchParams.get('category') || 'all'
  const currentGender = searchParams.get('gender') || 'all'
  const currentMaterial = searchParams.get('material') || 'all'
  const currentSort = searchParams.get('sort') || 'featured'
  const currentQuery = searchParams.get('q') || ''

  const [localQuery, setLocalQuery] = useState(currentQuery)

  useEffect(() => {
    setLocalQuery(currentQuery)
  }, [currentQuery])

  const updateParam = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value && value !== 'all') {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    updateParam('q', localQuery.trim() || null)
  }

  const clearAllFilters = () => {
    setLocalQuery('')
    router.replace(pathname, { scroll: false })
  }

  const hasActiveFilters =
    currentCategory !== 'all' ||
    currentGender !== 'all' ||
    currentMaterial !== 'all' ||
    currentSort !== 'featured' ||
    currentQuery !== ''

  const materials = ['all', 'Suede', 'Cowhide', 'Sheepskin', 'Fabric']

  return (
    <div className="space-y-4">
      {/* Desktop & Tablet Top Filter Bar */}
      <div className="bg-charcoal border border-bone/15 rounded-2xl p-4 sm:p-5 shadow-lg flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        
        {/* Left: Search Bar */}
        <form onSubmit={handleSearchSubmit} className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-brass absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={localQuery}
            onChange={(e) => setLocalQuery(e.target.value)}
            placeholder="Search cut, color, material..."
            className="w-full pl-10 pr-10 py-2.5 bg-smoke/80 border border-bone/10 rounded-xl text-xs font-display text-white placeholder:text-muted focus:outline-none focus:border-brass"
          />
          {localQuery && (
            <button
              type="button"
              onClick={() => {
                setLocalQuery('')
                updateParam('q', null)
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-white cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </form>

        {/* Right: Quick Desktop Selectors */}
        <div className="flex flex-wrap items-center gap-3">
          
          {/* Gender Filter (if not on gender landing page) */}
          {!hideGenderFilter && (
            <select
              value={currentGender}
              onChange={(e) => updateParam('gender', e.target.value)}
              className="py-2.5 px-3 bg-smoke border border-bone/10 rounded-xl text-xs font-display text-bone-warm focus:outline-none focus:border-brass cursor-pointer"
              aria-label="Filter by gender"
            >
              <option value="all">All Genders</option>
              <option value="men">Men's Outerwear</option>
              <option value="women">Women's Outerwear</option>
              <option value="unisex">Unisex</option>
            </select>
          )}

          {/* Category Filter */}
          <select
            value={currentCategory}
            onChange={(e) => updateParam('category', e.target.value)}
            className="py-2.5 px-3 bg-smoke border border-bone/10 rounded-xl text-xs font-display text-bone-warm focus:outline-none focus:border-brass cursor-pointer"
            aria-label="Filter by category"
          >
            <option value="all">All Silhouettes</option>
            {CATEGORIES.map((cat) => (
              <option key={cat.slug} value={cat.slug}>
                {cat.label}
              </option>
            ))}
          </select>

          {/* Material Filter */}
          <select
            value={currentMaterial}
            onChange={(e) => updateParam('material', e.target.value)}
            className="py-2.5 px-3 bg-smoke border border-bone/10 rounded-xl text-xs font-display text-bone-warm focus:outline-none focus:border-brass cursor-pointer"
            aria-label="Filter by material"
          >
            <option value="all">All Materials</option>
            <option value="Suede">Natural Suede</option>
            <option value="Genuine leather">Full-Grain Leather</option>
            <option value="Fabric">Structured Fabric</option>
          </select>

          {/* Sort By */}
          <select
            value={currentSort}
            onChange={(e) => updateParam('sort', e.target.value)}
            className="py-2.5 px-3 bg-smoke border border-bone/10 rounded-xl text-xs font-display text-bone-warm focus:outline-none focus:border-brass cursor-pointer"
            aria-label="Sort products"
          >
            <option value="featured">Featured Order</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="newest">Newest Arrivals</option>
          </select>


          {/* Mobile Filter Button */}
          <button
            type="button"
            onClick={() => setMobileFilterOpen(true)}
            className="lg:hidden py-2.5 px-3.5 bg-smoke text-bone rounded-xl border border-bone/15 text-xs font-display font-bold flex items-center gap-1.5 cursor-pointer ml-auto"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-brass" />
            <span>Filters</span>
          </button>
        </div>

      </div>

      {/* Active Filters Summary Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-1 text-xs font-spec">
        <div className="flex items-center gap-2 text-muted">
          <span>Showing <strong className="text-white">{filteredCount}</strong> of {totalCount} designs</span>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearAllFilters}
              className="text-brass hover:underline ml-2 cursor-pointer font-bold"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Active Pill Tags */}
        <div className="flex flex-wrap items-center gap-1.5">
          {currentCategory !== 'all' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-charcoal border border-bone/15 text-[11px] text-bone-warm">
              <span className="capitalize">{currentCategory}</span>
              <button
                type="button"
                onClick={() => updateParam('category', null)}
                className="hover:text-white cursor-pointer"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          {currentGender !== 'all' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-charcoal border border-bone/15 text-[11px] text-bone-warm">
              <span className="capitalize">{currentGender}</span>
              <button
                type="button"
                onClick={() => updateParam('gender', null)}
                className="hover:text-white cursor-pointer"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          {currentMaterial !== 'all' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-charcoal border border-bone/15 text-[11px] text-bone-warm">
              <span>{currentMaterial}</span>
              <button
                type="button"
                onClick={() => updateParam('material', null)}
                className="hover:text-white cursor-pointer"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {mobileFilterOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 lg:hidden flex justify-end animate-in fade-in duration-200"
        >
          <div
            className="fixed inset-0 bg-night/80 backdrop-blur-sm"
            onClick={() => setMobileFilterOpen(false)}
          />

          <div className="relative z-10 w-full max-w-sm bg-night border-l border-bone/15 shadow-2xl h-full flex flex-col justify-between overflow-y-auto p-6 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-bone/10">
              <h3 className="font-brand font-bold text-lg text-white">Filter Catalogue</h3>
              <button
                type="button"
                onClick={() => setMobileFilterOpen(false)}
                className="p-2 rounded-lg bg-charcoal text-bone hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Category Filter */}
            <div className="space-y-2">
              <span className="text-xs font-spec uppercase tracking-wider text-brass block">
                Silhouette
              </span>
              <div className="grid grid-cols-2 gap-2 font-display text-xs">
                <button
                  type="button"
                  onClick={() => updateParam('category', 'all')}
                  className={`p-2.5 rounded-lg text-left cursor-pointer ${
                    currentCategory === 'all'
                      ? 'bg-saddle text-white font-bold'
                      : 'bg-charcoal text-bone-warm'
                  }`}
                >
                  All Silhouettes
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.slug}
                    type="button"
                    onClick={() => updateParam('category', cat.slug)}
                    className={`p-2.5 rounded-lg text-left cursor-pointer ${
                      currentCategory === cat.slug
                        ? 'bg-saddle text-white font-bold'
                        : 'bg-charcoal text-bone-warm'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Gender Filter */}
            {!hideGenderFilter && (
              <div className="space-y-2">
                <span className="text-xs font-spec uppercase tracking-wider text-brass block">
                  Gender
                </span>
                <div className="grid grid-cols-3 gap-2 font-display text-xs">
                  {['all', 'men', 'women'].map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => updateParam('gender', g)}
                      className={`p-2.5 rounded-lg text-center capitalize cursor-pointer ${
                        currentGender === g
                          ? 'bg-saddle text-white font-bold'
                          : 'bg-charcoal text-bone-warm'
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Done & Reset */}
            <div className="pt-4 border-t border-bone/10 space-y-2">
              <button
                type="button"
                onClick={() => setMobileFilterOpen(false)}
                className="w-full py-3.5 bg-saddle text-white rounded-xl font-display font-bold text-sm cursor-pointer"
              >
                Apply Filters ({filteredCount} Items)
              </button>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="w-full py-2.5 bg-charcoal text-muted hover:text-white rounded-xl font-display text-xs cursor-pointer"
                >
                  Reset All
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
