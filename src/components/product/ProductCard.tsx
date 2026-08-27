'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { Product, primaryBuyLink } from '@/lib/products'

export function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false)

  const discountPercent =
    product.listPrice > product.salePrice
      ? Math.round(((product.listPrice - product.salePrice) / product.listPrice) * 100)
      : 0

  const primaryLink = primaryBuyLink(product)
  const secondaryImage = product.images?.[1] || product.image

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-charcoal border border-bone/15 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-brass/50 transition-all duration-300 shadow-lg hover:shadow-2xl"
    >
      {/* Product Image Area with Crossfade */}
      <div className="relative aspect-[4/5] w-full bg-night overflow-hidden">
        <Link href={`/products/${product.slug}`} className="block relative w-full h-full">
          {/* Primary Image */}
          <Image
            src={product.image}
            alt={product.title}
            fill
            className={`object-cover transition-all duration-500 ${
              isHovered && secondaryImage !== product.image ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
            }`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />

          {/* Secondary Hover Image */}
          {secondaryImage !== product.image && (
            <Image
              src={secondaryImage}
              alt={`${product.title} alternate view`}
              fill
              className={`object-cover transition-all duration-500 absolute inset-0 ${
                isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
              }`}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          )}
        </Link>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 pointer-events-none">
          <span className="px-2.5 py-0.5 rounded-full bg-night/85 backdrop-blur-md text-[10px] font-spec uppercase tracking-wider text-brass border border-brass/30">
            {product.material}
          </span>
          {discountPercent > 0 && (
            <span className="px-2 py-0.5 rounded-full bg-oxblood text-white text-[10px] font-spec font-bold uppercase">
              {discountPercent}% OFF
            </span>
          )}
        </div>

      </div>

      {/* Info & Bottom Bar */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3.5">
        <div className="space-y-1">
          <div className="flex items-center justify-between text-[11px] font-spec text-muted">
            <span className="capitalize">{product.category.replace('-', ' ')}</span>
            <span className="capitalize">{product.gender}</span>
          </div>

          <Link href={`/products/${product.slug}`} className="block group-hover:text-brass transition-colors">
            <h3 className="font-brand font-bold text-sm text-white line-clamp-1">
              {product.title}
            </h3>
          </Link>

          <p className="font-body text-xs text-muted line-clamp-2 leading-relaxed">
            {product.blurb}
          </p>
        </div>

        {/* Price & Actions */}
        <div className="space-y-3 pt-2 border-t border-bone/10">
          <div className="flex items-baseline justify-between font-spec">
            <div>
              <span className="text-base font-black text-white">
                CA${product.salePrice.toFixed(2)}
              </span>
              {discountPercent > 0 && (
                <span className="text-xs text-muted line-through ml-2">
                  CA${product.listPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* Marketplace indicators */}
            <div className="flex items-center gap-1 text-[10px] font-spec text-muted">
              {product.etsyUrl && <span className="text-saddle font-bold">Etsy</span>}
              {product.etsyUrl && product.ebayUrl && <span>/</span>}
              {product.ebayUrl && <span>eBay</span>}
            </div>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <Link
              href={`/products/${product.slug}`}
              className="py-2.5 px-3 rounded-xl bg-smoke hover:bg-night text-bone hover:text-white border border-bone/15 text-xs font-display font-semibold text-center transition-colors flex items-center justify-center gap-1"
            >
              <span>View Piece</span>
            </Link>

            <a
              href={primaryLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-3 rounded-xl bg-saddle hover:bg-oxblood text-white text-xs font-display font-bold text-center transition-all flex items-center justify-center gap-1 shadow-sm"
            >
              <span>Buy on {primaryLink.marketplace}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
