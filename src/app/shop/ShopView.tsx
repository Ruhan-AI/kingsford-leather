'use client'

import React, { useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { Product } from '@/lib/products'
import { CollectionFilters } from '@/components/product/CollectionFilters'
import { ProductCard } from '@/components/product/ProductCard'
import { ProductGridReveal } from '@/components/motion/ProductGridReveal'
import { RotateCcw } from 'lucide-react'

export function ShopView({ allProducts }: { allProducts: readonly Product[] }) {
  const searchParams = useSearchParams()

  const category = searchParams.get('category') || 'all'
  const gender = searchParams.get('gender') || 'all'
  const material = searchParams.get('material') || 'all'
  const sort = searchParams.get('sort') || 'featured'
  const q = searchParams.get('q') || ''

  const filtered = useMemo(() => {
    return allProducts
      .filter((p) => {
        if (category !== 'all' && p.category !== category) return false
        if (gender !== 'all' && p.gender !== gender && p.gender !== 'unisex') return false
        if (material !== 'all') {
          if (!p.material.toLowerCase().includes(material.toLowerCase())) return false
        }
        if (q.trim()) {
          const query = q.toLowerCase()
          const matchTitle = p.title.toLowerCase().includes(query)
          const matchBlurb = p.blurb.toLowerCase().includes(query)
          const matchCat = p.category.toLowerCase().includes(query)
          const matchMat = p.material.toLowerCase().includes(query)
          if (!matchTitle && !matchBlurb && !matchCat && !matchMat) return false
        }
        return true
      })
      .sort((a, b) => {
        if (sort === 'price-asc') return a.salePrice - b.salePrice
        if (sort === 'price-desc') return b.salePrice - a.salePrice
        return 0
      })
  }, [allProducts, category, gender, material, sort, q])

  return (
    <div className="space-y-8">
      {/* Controls & Filter Bar */}
      <CollectionFilters
        totalCount={allProducts.length}
        filteredCount={filtered.length}
      />

      {/* Grid or Empty State */}
      {filtered.length > 0 ? (
        <section aria-labelledby="results-heading">
          {/* Every page that renders this grid — /shop, /men, /women and each
              /collections/* — previously went straight from its H1 to product
              cards with no H2 in between, leaving a flat outline. */}
          <h2 id="results-heading" className="sr-only">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'} in this collection
          </h2>
          <ProductGridReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductGridReveal>
        </section>
      ) : (
        <div className="py-20 px-6 text-center space-y-4 bg-charcoal/40 rounded-3xl border border-bone/10 max-w-xl mx-auto">
          <div className="w-12 h-12 rounded-full bg-smoke flex items-center justify-center text-brass mx-auto">
            <RotateCcw className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="font-brand font-bold text-xl text-white">
              No Outerwear Matches These Filters
            </h3>
            <p className="font-body text-sm text-muted">
              Try removing some active filters or searching for broader terms like "suede", "biker", or "bomber".
            </p>
          </div>
          <a
            href="/shop"
            className="inline-block py-2.5 px-6 rounded-xl bg-saddle hover:bg-oxblood text-white font-display font-bold text-xs transition-colors cursor-pointer shadow-md"
          >
            Clear All Active Filters
          </a>
        </div>
      )}
    </div>
  )
}
