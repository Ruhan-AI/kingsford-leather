import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Mail, MessageSquare, Clock } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { SITE, SHOP_STATS } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact & Custom Enquiries | Kingsford Leather',
  description:
    'Contact the Kingsford Leather workshop for custom sizing advice, hide consultations, or Etsy/eBay order support.',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="bg-white py-6 sm:py-10">
      <Container size="narrow">
        {/* Breadcrumb */}
        <Breadcrumbs items={[{ label: 'Contact Workshop' }]} className="mb-4" />

        {/* Hero Header */}
        <div className="space-y-3 mb-8">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8b5a35] block">
            Customer Care &amp; Consultation
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1c1a17] font-normal tracking-tight leading-[1.15]">
            We&apos;re Here to Help You Find Your Fit
          </h1>
          <p className="text-sm sm:text-base text-[#706a62] leading-relaxed font-sans">
            Whether you need guidance measuring your shoulders, want custom hide recommendations, or have an inquiry regarding an order, our team is directly at your service.
          </p>
        </div>

        {/* Contact Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {/* Email */}
          <div className="bg-[#f8f6f2] border border-[#ded7ce] rounded-[4px] p-6 space-y-4 flex flex-col justify-between shadow-xs">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-[4px] bg-white text-[#8b5a35] flex items-center justify-center border border-[#ded7ce]">
                <Mail className="w-4 h-4" />
              </div>
              <h3 className="font-serif font-medium text-lg text-[#1c1a17]">
                Email Workshop
              </h3>
              <p className="text-xs text-[#706a62] leading-relaxed font-sans">
                For custom order consulting, hide selection, or general inquiries.
              </p>
            </div>
            <a
              href={`mailto:${SITE.email}`}
              /* `truncate` hid the end of the address once this card sits in the
                 3-column grid at md+. An email is worth reading in full, so let
                 it wrap instead — break-all because it is a single long token. */
              className="py-2 px-3 bg-white hover:bg-[#efe9e1] text-[#1c1a17] font-medium text-xs rounded-[4px] border border-[#ded7ce] text-center transition-colors block break-all focus-ring"
            >
              {SITE.email}
            </a>
          </div>

          {/* Etsy Messages */}
          <div className="bg-[#f8f6f2] border border-[#ded7ce] rounded-[4px] p-6 space-y-4 flex flex-col justify-between shadow-xs">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-[4px] bg-white text-[#8b5a35] flex items-center justify-center border border-[#ded7ce]">
                <MessageSquare className="w-4 h-4" />
              </div>
              <h3 className="font-serif font-medium text-lg text-[#1c1a17]">
                Etsy Direct Message
              </h3>
              <p className="text-xs text-[#706a62] leading-relaxed font-sans">
                Fastest response for sizing verification and custom order personalization.
              </p>
            </div>
            <a
              href={SITE.etsyUrl}
              target="_blank"
              rel="noopener noreferrer sponsored nofollow"
              className="py-2 px-3 bg-[#8b5a35] hover:bg-[#5d3923] text-white font-medium text-xs rounded-[4px] text-center transition-colors flex items-center justify-center gap-1 focus-ring"
            >
              <span>Message on Etsy</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* eBay Messages */}
          <div className="bg-[#f8f6f2] border border-[#ded7ce] rounded-[4px] p-6 space-y-4 flex flex-col justify-between shadow-xs">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-[4px] bg-white text-[#1c1a17] flex items-center justify-center border border-[#ded7ce]">
                <Clock className="w-4 h-4" />
              </div>
              <h3 className="font-serif font-medium text-lg text-[#1c1a17]">
                eBay Direct Message
              </h3>
              <p className="text-xs text-[#706a62] leading-relaxed font-sans">
                Reach us regarding active eBay listings, custom offers, and tracking.
              </p>
            </div>
            <a
              href={SITE.ebayUrl}
              target="_blank"
              rel="noopener noreferrer sponsored nofollow"
              className="py-2 px-3 bg-white hover:bg-[#efe9e1] text-[#1c1a17] font-medium text-xs rounded-[4px] border border-[#ded7ce] text-center transition-colors flex items-center justify-center gap-1 focus-ring"
            >
              <span>Message on eBay</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Operating Hours & Response Note */}
        <div className="bg-[#efe9e1] border border-[#ded7ce] rounded-[4px] p-6 text-xs text-[#706a62] space-y-1.5 mb-12 font-sans">
          <div className="flex items-center gap-2 text-[#1c1a17] font-semibold">
            <Clock className="w-4 h-4 text-[#8b5a35]" />
            <span>Response Turnaround Time</span>
          </div>
          <p className="leading-relaxed">
            Our team responds to all inquiries within 12–24 hours (Monday to Saturday). Custom measurement notes submitted during Etsy/eBay checkout are reviewed before pattern cutting begins.
          </p>
        </div>

        {/* Outro */}
        <div className="pt-4 flex items-center justify-between border-t border-[#ded7ce]">
          <Link
            href="/size-guide"
            className="text-xs font-semibold text-[#8b5a35] hover:underline"
          >
            ← View Size &amp; Measuring Guide
          </Link>
          <Link
            href="/shop"
            className="text-xs font-semibold text-[#1c1a17] hover:text-[#8b5a35]"
          >
            Explore Outerwear Collection →
          </Link>
        </div>
      </Container>
    </div>
  )
}
