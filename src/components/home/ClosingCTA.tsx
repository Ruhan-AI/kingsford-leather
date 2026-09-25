import React from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { SITE } from '@/lib/site'

export function ClosingCTA() {
  return (
    <section className="bg-white py-10 sm:py-14">
      <Container size="narrow">
        <div className="bg-[#f8f6f2] border border-[#ded7ce] rounded-[4px] p-6 sm:p-10 text-center space-y-4 shadow-xs">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8b5a35] block">
            Direct Bench Craft
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1c1a17] font-normal tracking-tight max-w-xl mx-auto leading-tight">
            Find the jacket that will stay with you for decades.
          </h2>

          <p className="text-xs sm:text-sm text-[#706a62] max-w-md mx-auto leading-relaxed font-sans">
            Explore 52 handcrafted styles in standard XS–3XL or custom made-to-measure sizing. Safe, protected checkouts on Etsy and eBay.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Button href="/shop" variant="primary" size="md">
              <span>Explore All 52 Pieces</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="/size-guide" variant="secondary" size="md">
              <span>Size &amp; Fit Guide</span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
