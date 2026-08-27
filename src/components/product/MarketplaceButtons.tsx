'use client'

import React from 'react'
import { ExternalLink, ShieldCheck } from 'lucide-react'
import { Product } from '@/lib/products'
import { trackEvent } from '@/lib/analytics/events'

interface MarketplaceButtonsProps {
  product: Product
  size?: 'normal' | 'large'
}

export function MarketplaceButtons({ product, size = 'large' }: MarketplaceButtonsProps) {
  const handleMarketplaceClick = (marketplace: 'Etsy' | 'eBay') => {
    trackEvent('outbound_marketplace_click', {
      product_id: product.id,
      product_slug: product.slug,
      marketplace,
      category: product.category,
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
            rel="noopener noreferrer"
            onClick={() => handleMarketplaceClick('Etsy')}
            className={`flex-1 py-4 px-6 bg-saddle hover:bg-oxblood text-white font-display font-bold rounded-2xl transition-all shadow-xl shadow-saddle/20 flex items-center justify-center gap-2 group cursor-pointer ${
              size === 'large' ? 'text-base' : 'text-sm'
            }`}
          >
            <span>Order on Official Etsy Shop</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        )}

        {/* eBay Secondary Button */}
        {product.ebayUrl && (
          <a
            href={product.ebayUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleMarketplaceClick('eBay')}
            className={`py-4 px-6 bg-charcoal hover:bg-smoke text-bone hover:text-white border border-bone/15 font-display font-semibold rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
              size === 'large' ? 'text-base' : 'text-sm'
            }`}
          >
            <span>Order on eBay</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>

      {/* Trust guarantees badge */}
      <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-spec text-muted pt-1">
        <ShieldCheck className="w-4 h-4 text-brass shrink-0" />
        <span>Secured checkout with Etsy Buyer Protection &amp; eBay Money Back Guarantee</span>
      </div>
    </div>
  )
}
