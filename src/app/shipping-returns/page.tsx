import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, RotateCcw, Clock, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Shipping & Returns',
  description:
    'Information regarding production times, express tracked international courier shipping, 30-day returns, and workshop remake guarantees.',
  alternates: {
    canonical: '/shipping-returns',
  },
}

export default function ShippingReturnsPage() {
  return (
    <div className="bg-night text-bone min-h-screen py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-spec text-muted">
          <Link href="/" className="hover:text-bone transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-muted/60" />
          <span className="text-brass">Shipping &amp; Returns</span>
        </nav>

        {/* Hero Header */}
        <div className="space-y-4 max-w-3xl">
          <h1 className="font-brand font-bold text-3xl sm:text-5xl text-white tracking-[0.015em] leading-tight">
            Shipping, Delivery &amp; Returns
          </h1>
          <p className="font-body text-base sm:text-xl text-bone-warm leading-relaxed">
            Everything you need to know about our made-to-order production timelines, express courier partners, and workshop return policies.
          </p>
        </div>

        {/* Production & Shipping Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-charcoal border border-bone/15 rounded-2xl p-6 sm:p-8 space-y-4 shadow-lg">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-brass" />
              <h2 className="font-brand font-bold text-xl text-white">
                Production Timelines
              </h2>
            </div>
            <div className="space-y-2 text-xs font-display">
              <div className="p-3.5 rounded-xl bg-smoke/40 border border-bone/10 space-y-1">
                <strong className="text-white font-bold block">Standard Sizes (XS–5XL):</strong>
                <span className="text-muted leading-relaxed font-body">Dispatched from the workshop bench in 3–5 business days.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-smoke/40 border border-bone/10 space-y-1">
                <strong className="text-brass font-bold block">Custom Made-to-Measure:</strong>
                <span className="text-muted leading-relaxed font-body">Custom drafted, bench-cut, and assembled in 10–14 business days.</span>
              </div>
            </div>
          </div>

          <div className="bg-charcoal border border-bone/15 rounded-2xl p-6 sm:p-8 space-y-4 shadow-lg">
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-brass" />
              <h2 className="font-brand font-bold text-xl text-white">
                Express Tracked Delivery
              </h2>
            </div>
            <div className="space-y-2 text-xs font-display">
              <div className="p-3.5 rounded-xl bg-smoke/40 border border-bone/10 space-y-1">
                <strong className="text-white font-bold block">Courier Partners:</strong>
                <span className="text-muted leading-relaxed font-body">All parcels are shipped via tracked international express (DHL, FedEx, UPS, or Canada Post).</span>
              </div>
              <div className="p-3.5 rounded-xl bg-smoke/40 border border-bone/10 space-y-1">
                <strong className="text-white font-bold block">Transit Time:</strong>
                <span className="text-muted leading-relaxed font-body">5–8 business days to Canada, US, UK, and Europe once dispatched. Tracking is emailed immediately.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Returns & Remake Policy */}
        <div className="bg-charcoal border border-bone/10 rounded-2xl p-8 space-y-6">
          <div className="flex items-center gap-3">
            <RotateCcw className="w-7 h-7 text-brass shrink-0" />
            <div>
              <h2 className="font-brand font-bold text-2xl text-white">
                30-Day Returns &amp; Workshop Remake Guarantee
              </h2>
              <span className="font-spec text-xs text-brass uppercase">
                Secured via Etsy &amp; eBay Buyer Protection
              </span>
            </div>
          </div>

          <div className="space-y-4 font-body text-sm text-bone-warm leading-relaxed">
            <p>
              <strong>Off-the-Rack Orders:</strong> If your standard-sized jacket does not fit as expected, you may exchange for a different size or return it within 30 days of receipt in unworn, original condition.
            </p>
            <p>
              <strong>Custom Made-to-Measure Orders:</strong> Because bespoke jackets are patterned exclusively to your body measurements, they cannot be returned for a simple change of mind. However, if there is <em>any workshop error or dimensional discrepancy against your submitted numbers</em>, we will alter or remake the jacket completely free of charge.
            </p>
            <p>
              All purchases on our official Etsy and eBay storefronts are backed by full marketplace buyer guarantees.
            </p>
          </div>
        </div>

        {/* Action Link */}
        <div className="pt-4 flex items-center justify-between">
          <Link
            href="/contact"
            className="text-xs font-display font-bold text-bone-warm hover:text-white underline"
          >
            Have a question about an existing order? Contact us →
          </Link>
          <Link
            href="/shop"
            className="py-3 px-6 rounded-xl bg-saddle hover:bg-oxblood text-white font-display font-bold text-xs transition-colors shadow-md"
          >
            Shop Outerwear
          </Link>
        </div>

      </div>
    </div>
  )
}
