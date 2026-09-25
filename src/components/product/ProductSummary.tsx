import React from 'react'
import { Product } from '@/lib/products'
import { MarketplaceActions } from './MarketplaceActions'
import { SizeFitNote } from './SizeFitNote'
import { ProductDetails } from './ProductDetails'

interface ProductInfoProps {
  product: Product
}

export function ProductSummary({ product }: ProductInfoProps) {
  return (
    <div className="space-y-6">
      {/* Category & Status */}
      <div>
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] font-semibold text-[#8b5a35] mb-2">
          <span>{product.gender} Outerwear</span>
          <span>•</span>
          <span>{product.category.replace('-', ' ')}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif text-[#1c1a17] font-normal tracking-tight leading-tight">
          {product.title}
        </h1>

        <p className="text-sm text-[#706a62] mt-2.5 leading-relaxed font-sans">
          {product.blurb}
        </p>
      </div>

      {/* Pricing & Material */}
      <div className="py-4 border-y border-[#ded7ce] flex items-center justify-between">
        <div>
          <span className="text-xs text-[#706a62] block mb-0.5">Verified Price</span>
          <div className="flex items-baseline gap-3 flex-wrap">
            <span className="text-2xl sm:text-3xl font-semibold text-[#1c1a17]">
              CA${product.salePrice.toFixed(2)}
            </span>
            {product.listPrice > product.salePrice && (
              <span className="text-sm text-[#a7a39b] line-through">
                CA${product.listPrice.toFixed(2)}
              </span>
            )}
            {product.etsyPrice && product.ebayPrice && product.etsyPrice !== product.ebayPrice && (
              <span className="text-xs text-[#706a62] font-normal">
                (Etsy: CA${product.etsyPrice.toFixed(2)} • eBay: CA${product.ebayPrice.toFixed(2)})
              </span>
            )}
          </div>
        </div>

        <div className="text-right">
          <span className="text-xs text-[#706a62] block mb-0.5">Leather Material</span>
          <span className="text-xs font-semibold text-[#1c1a17] bg-[#f8f6f2] px-2.5 py-1 rounded-[2px] border border-[#ded7ce] inline-block">
            {product.material}
          </span>
        </div>
      </div>

      {/* Sizing & Tailoring Note */}
      <SizeFitNote gender={product.gender} />

      {/* Centralized Marketplace Conversion Buttons */}
      <MarketplaceActions product={product} />

      {/* Detailed Accordions */}
      <ProductDetails product={product} />
    </div>
  )
}
