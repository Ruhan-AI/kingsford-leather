'use client'

import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Product } from '@/lib/products'
import { trackEvent } from '@/lib/analytics/events'

interface StickyMobileCTAProps {
  product: Product
  primaryLink: { url: string; marketplace: string }
}

export function StickyMobileCTA({ product, primaryLink }: StickyMobileCTAProps) {
  const handleBuyClick = () => {
    trackEvent('marketplace_click', {
      productId: product.id,
      productSlug: product.slug,
      marketplace: primaryLink.marketplace.toLowerCase() as 'etsy' | 'ebay',
      source: 'product',
      destinationType: 'product',
    })
  }

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 p-3 bg-white/95 backdrop-blur-md border-t border-[#ded7ce] shadow-xl">
      <div className="flex items-center gap-2">
        <a
          href={primaryLink.url}
          target="_blank"
          rel="noopener noreferrer sponsored nofollow"
          onClick={handleBuyClick}
          className="flex-1 py-3 px-4 bg-[#8b5a35] hover:bg-[#5d3923] text-white font-medium text-xs rounded-[4px] transition-all shadow-xs flex items-center justify-between cursor-pointer focus-ring"
        >
          <div className="flex flex-col text-left">
            <span className="text-[10px] uppercase text-white/80">
              Order on {primaryLink.marketplace}
            </span>
            <span className="font-semibold text-sm">
              CA${product.salePrice.toFixed(2)}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <span>Buy Now</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </a>
      </div>
    </div>
  )
}
