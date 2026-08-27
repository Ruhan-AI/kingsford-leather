'use client'

import React from 'react'
import { ArrowUpRight, ShieldCheck } from 'lucide-react'
import { Product } from '@/lib/products'
import { trackEvent } from '@/lib/analytics/events'

interface MarketplaceButtonsProps {
  product: Product
  size?: 'normal' | 'large'
}

export function MarketplaceButtons({ product, size = 'large' }: MarketplaceButtonsProps) {
  const handleMarketplaceClick = (marketplace: 'etsy' | 'ebay') => {
    trackEvent('marketplace_click', {
      productId: product.id,
      productSlug: product.slug,
      marketplace,
      source: 'product',
      destinationType: 'product',
    })
  }

  return (
    <div className="space-y-3">
      <div className="flex flex-col sm:flex-row items-stretch gap-3">
        {/* Etsy Primary Button */}
        {product.etsyUrl && (
          <a
            href={product.etsyUrl}
            target="_blank"
            rel="noopener noreferrer sponsored nofollow"
            onClick={() => handleMarketplaceClick('etsy')}
            className={`flex-1 py-4 px-6 bg-[#8b5a35] hover:bg-[#5d3923] text-white font-medium rounded-[4px] transition-all flex items-center justify-center gap-2 group cursor-pointer focus-ring shadow-xs ${
              size === 'large' ? 'text-base' : 'text-sm'
            }`}
          >
            <span>Purchase on Etsy (Direct Listing)</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        )}

        {/* eBay Secondary Button */}
        {product.ebayUrl && (
          <a
            href={product.ebayUrl}
            target="_blank"
            rel="noopener noreferrer sponsored nofollow"
            onClick={() => handleMarketplaceClick('ebay')}
            className={`py-4 px-6 bg-white hover:bg-[#f8f6f2] text-[#1c1a17] border border-[#ded7ce] font-medium rounded-[4px] transition-all flex items-center justify-center gap-2 cursor-pointer focus-ring ${
              size === 'large' ? 'text-base' : 'text-sm'
            }`}
          >
            <span>Purchase on eBay</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        )}
      </div>

      {/* Trust guarantees badge */}
      <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-[#706a62] pt-1 font-sans">
        <ShieldCheck className="w-4 h-4 text-[#8b5a35] shrink-0" />
        <span>Secured checkout with Etsy Purchase Protection &amp; eBay Money Back Guarantee</span>
      </div>
    </div>
  )
}
