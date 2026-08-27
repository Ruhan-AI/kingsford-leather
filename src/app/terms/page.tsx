import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms of Service | Kingsford Leather',
  description:
    'Terms of service, natural hide variations, made-to-measure guarantees, and marketplace purchasing terms for Kingsford Leather.',
  alternates: {
    canonical: '/terms',
  },
}

export default function TermsPage() {
  return (
    <div className="bg-white py-8 sm:py-16">
      <Container size="narrow">
        {/* Breadcrumb */}
        <Breadcrumbs items={[{ label: 'Terms of Service' }]} className="mb-6" />

        {/* Header */}
        <div className="space-y-3 mb-10 pb-6 border-b border-[#ded7ce]">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8b5a35] block">
            Legal Terms &amp; Conditions
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1c1a17] font-normal tracking-tight leading-[1.15]">
            Terms of Service
          </h1>
          <p className="text-xs text-[#706a62] font-sans">
            Last Updated: August 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-sm text-[#2c2925] leading-relaxed font-sans">
          <div className="space-y-3">
            <h2 className="text-xl font-serif font-medium text-[#1c1a17]">
              1. Overview &amp; Marketplace Showroom Model
            </h2>
            <p className="text-[#706a62]">
              Kingsford Leather provides an editorial showroom and product discovery experience. All commercial checkouts, payment processing, escrow protection, and shipment deliveries are executed securely via our official storefronts on Etsy (<a href={SITE.etsyUrl} target="_blank" rel="noopener noreferrer" className="text-[#8b5a35] underline font-medium">KingsfordLeatherCA</a>) and eBay (<a href={SITE.ebayUrl} target="_blank" rel="noopener noreferrer" className="text-[#8b5a35] underline font-medium">kingsfordleather</a>).
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-serif font-medium text-[#1c1a17]">
              2. Natural Leather Variations
            </h2>
            <p className="text-[#706a62]">
              Because our jackets are handcrafted from genuine full-grain cowhide, sheepskin, natural suede, and shearling pelts, subtle variations in natural grain texture, pull-up patina, and hand feel are inherent characteristics of real leather. We photograph each piece under natural light to accurately represent each silhouette.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-serif font-medium text-[#1c1a17]">
              3. Made-to-Measure Tailoring Standards
            </h2>
            <p className="text-[#706a62]">
              For custom made-to-measure orders, customers provide their body measurements in the marketplace order notes. Kingsford Leather warrants that the finished garment will be bench-cut to the submitted dimensions within standard master tailor tolerances (±0.5 inches). In case of workshop dimensional error, we alter or remake the garment free of charge.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-serif font-medium text-[#1c1a17]">
              4. Intellectual Property
            </h2>
            <p className="text-[#706a62]">
              All brand crests, photography, product patterns, and editorial copy on this site are the property of Kingsford Leather and protected by copyright and intellectual property laws.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
