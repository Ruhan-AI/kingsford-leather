import React from 'react'
import { Product } from '@/lib/products'
import { ProductCard } from './ProductCard'

interface ProductGridProps {
  products: readonly Product[]
  columns?: 3 | 4
}

export function ProductGrid({ products, columns = 4 }: ProductGridProps) {
  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-${columns} gap-4 sm:gap-6`}
    >
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
