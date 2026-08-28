import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, RotateCcw, Clock, Globe, ShieldCheck } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Button } from '@/components/ui/Button'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Shipping, Delivery & Returns | Kingsford Leather',
  description:
    'Information regarding made-to-order production timelines, express courier delivery, 30-day returns, and marketplace buyer guarantees on Etsy & eBay.',
  alternates: {
    canonical: '/shipping-returns',
  },
}

export default function ShippingReturnsPage() {
  return (
    <div className="bg-white py-6 sm:py-10">
      <Container size="narrow">
        {/* Breadcrumb */}
        <Breadcrumbs items={[{ label: 'Shipping & Returns' }]} className="mb-4" />

        {/* Hero Header */}
        <div className="space-y-3 mb-8">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8b5a35] block">
            Policies &amp; Dispatch
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1c1a17] font-normal tracking-tight leading-[1.15]">
            Shipping, Delivery &amp; Returns
          </h1>
          <p className="text-sm sm:text-base text-[#706a62] leading-relaxed font-sans">
            Everything you need to know about our made-to-order production schedules, tracked express couriers, and marketplace purchase protection.
          </p>
        </div>

        {/* Timelines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
          <div className="bg-[#f8f6f2] border border-[#ded7ce] rounded-[4px] p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#8b5a35]" />
              <h2 className="font-serif font-medium text-xl text-[#1c1a17]">
                Production Schedules
              </h2>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-[#706a62] font-sans">
              <div className="p-3 bg-white rounded-[4px] border border-[#ded7ce] space-y-1">
                <strong className="text-[#1c1a17] block">Standard Sizes (XS–3XL):</strong>
                <span>Dispatched from the workshop bench in 3–5 business days.</span>
              </div>
              <div className="p-3 bg-white rounded-[4px] border border-[#ded7ce] space-y-1">
                <strong className="text-[#8b5a35] block">Custom Made-to-Measure:</strong>
                <span>Custom drafted, bench-cut, and tailored in 10–14 business days.</span>
              </div>
            </div>
          </div>

          <div className="bg-[#f8f6f2] border border-[#ded7ce] rounded-[4px] p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-[#8b5a35]" />
              <h2 className="font-serif font-medium text-xl text-[#1c1a17]">
                Tracked Express Delivery
              </h2>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-[#706a62] font-sans">
              <div className="p-3 bg-white rounded-[4px] border border-[#ded7ce] space-y-1">
                <strong className="text-[#1c1a17] block">Courier Carriers:</strong>
                <span>Shipped via international express couriers (DHL, FedEx, UPS, or Canada Post).</span>
              </div>
              <div className="p-3 bg-white rounded-[4px] border border-[#ded7ce] space-y-1">
                <strong className="text-[#1c1a17] block">Transit Time:</strong>
                <span>5–8 business days to Canada, US, UK, and Europe once dispatched.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Returns & Remake Policy */}
        <div className="bg-[#efe9e1] border border-[#ded7ce] rounded-[4px] p-8 sm:p-10 space-y-6 mb-12">
          <div className="flex items-center gap-3">
            <RotateCcw className="w-6 h-6 text-[#8b5a35] shrink-0" />
            <div>
              <h2 className="font-serif font-medium text-2xl text-[#1c1a17]">
                30-Day Returns &amp; Workshop Remake Guarantee
              </h2>
              <span className="text-xs text-[#8b5a35] uppercase font-semibold">
                Backed by Etsy Purchase Protection &amp; eBay Money Back Guarantee
              </span>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-[#706a62] leading-relaxed font-sans">
            <p>
              <strong className="text-[#1c1a17]">Standard Off-the-Rack Orders:</strong> If your standard-sized jacket does not fit as expected, you may exchange for a different size or return it within 30 days of receipt in unworn, original condition with all tags intact.
            </p>
            <p>
              <strong className="text-[#1c1a17]">Custom Made-to-Measure Orders:</strong> Because bespoke garments are patterned and cut exclusively to your individual measurements, they cannot be returned for a simple change of mind. However, if there is <em>any workshop error or dimensional discrepancy against your submitted numbers</em>, we will alter or remake the jacket completely free of charge.
            </p>
            <p>
              All orders placed through our official storefronts on Etsy and eBay are protected by complete marketplace buyer policies.
            </p>
          </div>
        </div>

        {/* Outro */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#ded7ce]">
          <Link
            href="/contact"
            className="text-xs font-semibold text-[#8b5a35] hover:underline"
          >
            Have a question about an order? Contact workshop →
          </Link>
          <Button href="/shop" variant="primary" size="md">
            <span>Explore Catalogue</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </Container>
    </div>
  )
}
