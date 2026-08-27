import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of service, intellectual property, product descriptions, and marketplace ordering terms for Kingsford Leather.',
  alternates: {
    canonical: '/terms',
  },
}

export default function TermsPage() {
  return (
    <div className="bg-night text-bone min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 font-body text-bone-warm leading-relaxed">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-spec text-muted">
          <Link href="/" className="hover:text-bone transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-muted/60" />
          <span className="text-brass">Terms of Service</span>
        </nav>

        {/* Header */}
        <div className="space-y-3">
          <span className="text-xs font-spec uppercase tracking-widest text-brass block">
            Legal Terms &amp; Conditions
          </span>
          <h1 className="font-brand font-bold text-3xl sm:text-5xl text-white tracking-[0.015em]">
            Terms of Service
          </h1>
          <p className="text-sm font-spec text-muted">
            Last Updated: February 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-sm">
          <h2 className="font-brand font-bold text-xl text-white">
            1. Overview &amp; Commercial Scope
          </h2>
          <p>
            Kingsford Leather provides an editorial showroom for handcrafted leather outerwear. All final retail orders, payment processing, escrow, and shipment tracking are executed via our official storefronts on Etsy (<a href={SITE.etsyUrl} target="_blank" rel="noopener noreferrer" className="text-brass underline">KingsfordLeatherCA</a>) and eBay (<a href={SITE.ebayUrl} target="_blank" rel="noopener noreferrer" className="text-brass underline">kingsfordleather</a>).
          </p>

          <h2 className="font-brand font-bold text-xl text-white pt-4">
            2. Product Descriptions &amp; Natural Leather Variations
          </h2>
          <p>
            Because our jackets are bench-crafted from authentic full-grain cowhide, sheepskin, natural suede, and shearling pelts, natural variations in grain texture, subtle dye pull-up, and leather character are intrinsic qualities of genuine hides. We endeavor to display product images and specifications with highest fidelity.
          </p>


          <h2 className="font-brand font-bold text-xl text-white pt-4">
            3. Made-To-Measure Terms
          </h2>
          <p>
            For made-to-measure orders, customers are responsible for submitting accurate physical measurements in order notes. Kingsford Leather warrants that the finished garment will be bench-cut to the submitted numbers within standard master tailor tolerances (±0.5 inches).
          </p>

          <h2 className="font-brand font-bold text-xl text-white pt-4">
            4. Intellectual Property
          </h2>
          <p>
            All brand crests, monograms, editorial copy, product patterns, and photography on this site are the property of Kingsford Leather and protected by applicable copyright and trademark laws.
          </p>
        </div>

      </div>
    </div>
  )
}
