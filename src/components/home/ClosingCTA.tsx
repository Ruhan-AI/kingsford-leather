import React from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { SITE, SHOP_STATS } from '@/lib/site'

export function ClosingCTA() {
  return (
    <section className="bg-[#f8f6f2] py-20 sm:py-28 border-b border-[#ded7ce] text-center">
      <Container size="narrow">
        <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#8b5a35] mb-3">
          Kingsford Leather
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1c1a17] font-normal tracking-tight leading-[1.15] mb-6">
          Find the piece that becomes part of your story.
        </h2>
        <p className="text-base text-[#706a62] leading-relaxed max-w-xl mx-auto mb-10 font-sans">
          Browse the complete 49-piece catalogue of biker, cafe racer, bomber, shearling, and tailored coats. Custom sizing available on all made-to-order listings.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button href="/shop" variant="primary" size="lg" className="w-full sm:w-auto">
            <span>Shop All 49 Pieces</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button href="/craftsmanship" variant="secondary" size="lg" className="w-full sm:w-auto">
            <span>Read Craft Story</span>
          </Button>
        </div>

        <div className="pt-6 border-t border-[#ded7ce] max-w-md mx-auto flex items-center justify-center gap-6 text-xs text-[#706a62]">
          <a
            href={SITE.etsyUrl}
            target="_blank"
            rel="noopener noreferrer sponsored nofollow"
            className="font-medium text-[#1c1a17] hover:text-[#8b5a35] inline-flex items-center gap-1 focus-ring"
          >
            <span>Etsy Shop ({SHOP_STATS.rating.toFixed(1)} ★)</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <span>•</span>
          <a
            href={SITE.ebayUrl}
            target="_blank"
            rel="noopener noreferrer sponsored nofollow"
            className="font-medium text-[#1c1a17] hover:text-[#8b5a35] inline-flex items-center gap-1 focus-ring"
          >
            <span>eBay Shop ({SHOP_STATS.ebayPositivePercent}%)</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </Container>
    </section>
  )
}
