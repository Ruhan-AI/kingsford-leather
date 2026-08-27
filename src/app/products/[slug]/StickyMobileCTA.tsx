'use client'

import React from 'react'
import { ExternalLink } from 'lucide-react'
import { Product } from '@/lib/products'
import { trackEvent } from '@/lib/analytics/events'

interface StickyMobileCTAProps {
  product: Product
  primaryLink: { url: string; marketplace: string }
}

export function StickyMobileCTA({ product, primaryLink }: StickyMobileCTAProps) {

  const handleBuyClick = () => {
    trackEvent('outbound_marketplace_click', {
      product_id: product.id,
      product_slug: product.slug,
      marketplace: primaryLink.marketplace as any,
      location: 'sticky_mobile_bar',
    })
  }

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 p-3 bg-night/95 backdrop-blur-xl border-t border-bone/15 shadow-2xl">
      <div className="flex items-center gap-2">

        <a
          href={primaryLink.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleBuyClick}
          className="flex-1 py-3.5 px-4 bg-saddle hover:bg-oxblood text-white font-display font-bold text-xs rounded-xl transition-all shadow-lg flex items-center justify-between cursor-pointer"
        >
          <div className="flex flex-col text-left">
            <span className="text-[10px] font-spec uppercase text-bone-warm">
              Order on {primaryLink.marketplace}
            </span>
            <span className="font-spec font-bold text-sm">
              CA${product.salePrice.toFixed(2)}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <span>Buy Now</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </div>
        </a>
      </div>
    </div>
  )
}
