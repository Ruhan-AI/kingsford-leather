import React from 'react'
import { Product } from '@/lib/products'
import { ProductCard } from './ProductCard'

interface ProductGridProps {
  products: readonly Product[]
  columns?: 3 | 4
}

/*
 * Full class strings, not `lg:grid-cols-${columns}`.
 *
 * Tailwind scans source text, so an interpolated class name is never generated.
 * The old version only worked because another file happened to use the literal
 * `lg:grid-cols-3` / `lg:grid-cols-4` — delete that file and this grid silently
 * collapses to two columns with no error anywhere.
 *
 * `md` matters too: without it, 768–1023px tablets fell from the desktop layout
 * straight back to the 2-column phone grid, giving iPad-sized cards.
 */
const COLUMN_CLASSES = {
  3: 'grid-cols-2 md:grid-cols-3',
  4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
} as const

export function ProductGrid({ products, columns = 4 }: ProductGridProps) {
  return (
    <div className={`grid ${COLUMN_CLASSES[columns]} gap-4 sm:gap-6`}>
      {products.map((product, idx) => (
        <ProductCard
          key={product.id}
          product={product}
          priority={idx < 4}
        />
      ))}
    </div>
  )
}
