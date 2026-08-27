import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How this site handles analytics, and why payment and personal data stay with the marketplace you order from.',
  alternates: {
    canonical: '/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <div className="bg-night text-bone min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 font-body text-bone-warm leading-relaxed">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-spec text-muted">
          <Link href="/" className="hover:text-bone transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-muted/60" />
          <span className="text-brass">Privacy Policy</span>
        </nav>

        {/* Header */}
        <div className="space-y-3">
          <span className="text-xs font-spec uppercase tracking-widest text-brass block">
            Data Governance &amp; AI Ethics
          </span>
          <h1 className="font-brand font-bold text-3xl sm:text-5xl text-white tracking-[0.015em]">
            Privacy Policy
          </h1>
          <p className="text-sm font-spec text-muted">
            Last Updated: February 2026
          </p>
        </div>


        {/* Standard Website Analytics & Marketplace Transactions */}
        <div className="space-y-6 text-sm">
          <h2 className="font-brand font-bold text-2xl text-white">
            1. Marketplace Transactions &amp; Payment Data
          </h2>
          <p>
            Kingsford Leather does not collect, store, or process credit card numbers or financial credentials directly on this website. All commercial checkout transactions take place on our official storefronts on Etsy (<a href={SITE.etsyUrl} target="_blank" rel="noopener noreferrer" className="text-brass underline">KingsfordLeatherCA</a>) and eBay (<a href={SITE.ebayUrl} target="_blank" rel="noopener noreferrer" className="text-brass underline">kingsfordleather</a>), subject to their respective buyer data protection standards.
          </p>

          <h2 className="font-brand font-bold text-2xl text-white pt-4">
            2. Anonymous Analytics
          </h2>
          <p>
            We collect anonymized, non-PII aggregate website analytics (such as page views, button clicks, and anonymous error reporting) to improve navigation, optimize mobile layout speed, and assess outer garments popularity.
          </p>

          <h2 className="font-brand font-bold text-2xl text-white pt-4">
            3. Contact &amp; Correspondence
          </h2>
          <p>
            If you contact us via email ({SITE.email}) or marketplace message, your communication is used solely to answer your questions, assist with sizing, and coordinate workshop production. We never sell or share your contact details.
          </p>

          <h2 className="font-brand font-bold text-2xl text-white pt-4">
            4. Contact Our Data Representative
          </h2>
          <p>
            If you have questions regarding our data practices or wish to submit an inquiry, email us at <a href={`mailto:${SITE.email}`} className="text-brass underline font-bold">{SITE.email}</a>.
          </p>
        </div>

      </div>
    </div>
  )
}
