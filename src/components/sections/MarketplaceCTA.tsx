import React from 'react'
import { ExternalLink, Truck } from 'lucide-react'
import { SITE } from '@/lib/site'

export function MarketplaceCTA() {
  return (
    <section className="py-20 bg-night text-bone border-t border-bone/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl sm:rounded-[32px] overflow-hidden bg-gradient-to-br from-charcoal via-night to-charcoal border border-brass/30 p-8 sm:p-14 lg:p-16 shadow-2xl text-center space-y-8">
          
          <div className="max-w-3xl mx-auto space-y-4">

            <h2 className="font-brand font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-[0.01em]">
              Found Your Jacket? Order Through The Marketplace You Trust
            </h2>

            <p className="font-body text-base sm:text-lg text-bone-warm leading-relaxed">
              We list all our verified jackets on official Etsy and eBay storefronts so you enjoy full buyer protection, flexible payment methods, and real-time express tracking.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href={SITE.etsyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-4 px-8 bg-saddle hover:bg-oxblood text-white font-display font-bold text-sm rounded-2xl transition-all shadow-xl shadow-saddle/20 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Explore Official Etsy Shop</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href={SITE.ebayUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-4 px-8 bg-smoke hover:bg-charcoal text-bone hover:text-white border border-bone/20 font-display font-bold text-sm rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore eBay Store</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs font-spec text-muted">
            <span className="flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-brass" />
              <span>Free Delivery On Etsy Listings</span>
            </span>
            <span>•</span>
            <span>Express Tracked Couriers Worldwide</span>
            <span>•</span>
            <span>Custom Sizing Accepted via Order Notes</span>
          </div>

        </div>

      </div>
    </section>
  )
}
