import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Mail, MessageSquare, ExternalLink, Clock } from 'lucide-react'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact & Custom Enquiries',
  description:
    'Contact the Kingsford Leather workshop for custom sizing advice, leather questions, or Etsy/eBay order support.',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="bg-night text-bone min-h-screen py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-spec text-muted">
          <Link href="/" className="hover:text-bone transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-muted/60" />
          <span className="text-brass">Contact &amp; Support</span>
        </nav>

        {/* Hero Header */}
        <div className="space-y-4 max-w-3xl">
          <h1 className="font-brand font-bold text-3xl sm:text-5xl text-white tracking-[0.015em] leading-tight">
            We’re Here to Help You Find Your Fit
          </h1>
          <p className="font-body text-base sm:text-xl text-bone-warm leading-relaxed">
            Whether you need guidance measuring your shoulders, want custom hide recommendations, or have an inquiry regarding your order, our team is directly at your service.
          </p>
        </div>

        {/* Direct Channels Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Email */}
          <div className="bg-charcoal border border-bone/15 rounded-2xl p-6 space-y-4 shadow-lg flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-smoke text-brass flex items-center justify-center border border-brass/20">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-brand font-bold text-lg text-white">Email Us Directly</h3>
              <p className="font-body text-xs text-muted leading-relaxed">
                For custom order consulting, wholesale requests, or general customer care questions.
              </p>
            </div>
            <a
              href={`mailto:${SITE.email}`}
              className="py-2.5 px-4 bg-smoke hover:bg-night text-white font-display font-bold text-xs rounded-xl border border-bone/15 text-center transition-colors block"
            >
              {SITE.email}
            </a>
          </div>

          {/* Etsy Messages */}
          <div className="bg-charcoal border border-bone/15 rounded-2xl p-6 space-y-4 shadow-lg flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-smoke text-saddle flex items-center justify-center border border-saddle/20">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="font-brand font-bold text-lg text-white">Etsy Direct Message</h3>
              <p className="font-body text-xs text-muted leading-relaxed">
                Fastest response for sizing verification and custom order personalization notes.
              </p>
            </div>
            <a
              href={SITE.etsyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 bg-saddle hover:bg-oxblood text-white font-display font-bold text-xs rounded-xl text-center transition-colors flex items-center justify-center gap-1.5 shadow-md"
            >
              <span>Message on Etsy</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* eBay Messages */}
          <div className="bg-charcoal border border-bone/15 rounded-2xl p-6 space-y-4 shadow-lg flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-smoke text-brass flex items-center justify-center border border-brass/20">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-brand font-bold text-lg text-white">eBay Direct Message</h3>
              <p className="font-body text-xs text-muted leading-relaxed">
                Reach us regarding active eBay listings, custom offers, and shipment tracking.
              </p>
            </div>
            <a
              href={SITE.ebayUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 bg-smoke hover:bg-night text-bone hover:text-white font-display font-bold text-xs rounded-xl border border-bone/15 text-center transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Message on eBay</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Operating Hours Note */}
        <div className="bg-charcoal/60 border border-bone/10 rounded-2xl p-6 text-xs font-spec text-muted space-y-2">
          <div className="flex items-center gap-2 text-white font-bold">
            <Clock className="w-4 h-4 text-brass" />
            <span>Response Turnaround</span>
          </div>
          <p className="leading-relaxed">
            Our team responds to all inquiries within 12–24 hours (Monday to Saturday). Sizing reviews submitted through Etsy/eBay order notes are checked prior to pattern cutting.
          </p>
        </div>

      </div>
    </div>
  )
}
