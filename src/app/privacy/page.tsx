import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy | Kingsford Leather',
  description:
    'How this website handles anonymous discovery analytics, and why all payment and customer transactions are handled directly through Etsy and eBay.',
  alternates: {
    canonical: '/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <div className="bg-white py-8 sm:py-16">
      <Container size="narrow">
        {/* Breadcrumb */}
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} className="mb-6" />

        {/* Header */}
        <div className="space-y-3 mb-10 pb-6 border-b border-[#ded7ce]">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8b5a35] block">
            Data Governance &amp; Transparency
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1c1a17] font-normal tracking-tight leading-[1.15]">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#706a62] font-sans">
            Last Updated: August 2026
          </p>
        </div>

        {/* Policy Content */}
        <div className="space-y-8 text-sm text-[#2c2925] leading-relaxed font-sans">
          <div className="space-y-3">
            <h2 className="text-xl font-serif font-medium text-[#1c1a17]">
              1. Marketplace Purchases &amp; Zero Payment Collection
            </h2>
            <p className="text-[#706a62]">
              Kingsford Leather does not collect, process, or store payment cards, banking information, or customer billing credentials on this website. All commercial transactions take place exclusively on our verified storefronts on Etsy (<a href={SITE.etsyUrl} target="_blank" rel="noopener noreferrer" className="text-[#8b5a35] underline font-medium">KingsfordLeatherCA</a>) and eBay (<a href={SITE.ebayUrl} target="_blank" rel="noopener noreferrer" className="text-[#8b5a35] underline font-medium">kingsfordleather</a>), which are governed by their respective privacy standards and secure payment gateways.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-serif font-medium text-[#1c1a17]">
              2. Anonymous Website Analytics
            </h2>
            <p className="text-[#706a62]">
              We collect aggregate, non-personally identifiable website metrics (such as page views, search interactions, and outbound marketplace button clicks) solely to assess product catalog interest, improve site performance, and ensure fast page loading. We do not use third-party behavioral advertising trackers or cross-site tracking cookies.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-serif font-medium text-[#1c1a17]">
              3. Direct Communication
            </h2>
            <p className="text-[#706a62]">
              When you email us at <a href={`mailto:${SITE.email}`} className="text-[#8b5a35] font-semibold">{SITE.email}</a> or message our workshop on Etsy/eBay, your information is used solely to respond to your inquiry and coordinate custom measurements. We will never sell, lease, or distribute your email address or contact details to third parties.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-serif font-medium text-[#1c1a17]">
              4. Contact Us
            </h2>
            <p className="text-[#706a62]">
              If you have any questions regarding this Privacy Policy, please contact our team at{' '}
              <a href={`mailto:${SITE.email}`} className="text-[#8b5a35] font-semibold underline">
                {SITE.email}
              </a>.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
