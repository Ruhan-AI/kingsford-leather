import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Globe, Award } from 'lucide-react'
import { Crest } from '@/components/brand/Crest'
import { Wordmark } from '@/components/brand/Wordmark'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Our Story & Workshop',
  description:
    'Discover the Kingsford Leather story. Combining Canadian market customer care with our dedicated bench craft workshop in Sialkot, Pakistan.',
  alternates: {
    canonical: '/our-story',
  },
}

export default function OurStoryPage() {
  return (
    <div className="bg-night text-bone min-h-screen py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-spec text-muted">
          <Link href="/" className="hover:text-bone transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-muted/60" />
          <span className="text-brass">Our Story</span>
        </nav>

        {/* Hero Header */}
        <div className="space-y-4 max-w-3xl">
          <h1 className="font-brand font-bold text-3xl sm:text-5xl text-white tracking-[0.015em] leading-tight">
            Handcrafted for Wild Roads &amp; Cold Nights
          </h1>
          <p className="font-body text-base sm:text-xl text-bone-warm leading-relaxed">
            Kingsford Leather was founded on a simple conviction: authentic, bench-crafted leather jackets shouldn’t require a 400% retail luxury markup.
          </p>
        </div>

        {/* Visual Feature Image */}
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-bone/15 shadow-2xl bg-night">
          <Image
            src="/images/catalogue/a765b524b418.jpg"
            alt="Kingsford Leather Workshop Benches"
            fill
            priority
            className="object-cover brightness-75"
            sizes="(max-width: 1024px) 100vw, 1000px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-transparent to-transparent flex flex-col justify-end p-8">
            <span className="font-spec text-xs text-brass uppercase tracking-widest">
              Sialkot Workshop Bench
            </span>
            <span className="font-brand font-bold text-xl text-white">
              Every hide individually selected, hand-cut, and master-stitched
            </span>
          </div>
        </div>

        {/* Editorial Story Content */}
        <div className="space-y-8 font-body text-base sm:text-lg text-bone-warm leading-relaxed">
          <div className="bg-charcoal border border-bone/10 rounded-2xl p-8 space-y-4">
            <h2 className="font-brand font-bold text-2xl text-white">
              The Dual Heritage Model
            </h2>
            <p>
              Kingsford Leather operates with an honest, transparent structure: Canadian customer care, creative direction, and digital operations paired directly with our dedicated cutting and stitching benches in Sialkot, Pakistan.
            </p>
            <p>
              Sialkot has been recognized globally for generations as the historic heart of leather craftsmanship. Rather than acting as anonymous intermediaries or dropshippers, our team oversees every pattern, hide selection, and brass fitting from the workshop floor straight to the client.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-charcoal border border-bone/10 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-smoke text-brass flex items-center justify-center border border-brass/20">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-brand font-bold text-lg text-white">Direct Marketplace Model</h3>
              <p className="font-body text-sm text-muted">
                By selling exclusively through verified official storefronts on Etsy and eBay, we give every customer full buyer protection, escrow security, and transparent reviews while passing direct maker pricing on to you.
              </p>
            </div>

            <div className="bg-charcoal border border-bone/10 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-smoke text-saddle flex items-center justify-center border border-saddle/20">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-brand font-bold text-lg text-white">No Warehouse Stagnation</h3>
              <p className="font-body text-sm text-muted">
                Nothing sits in a warehouse collecting dust. Each piece is crafted upon order in standard sizes or tailored to your bespoke measurements, ensuring supple leather and pristine construction.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-6 border-t border-bone/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/craftsmanship"
            className="py-3.5 px-6 rounded-xl bg-charcoal hover:bg-smoke text-white font-display font-bold text-xs border border-bone/15 transition-colors"
          >
            Explore Workshop Craftsmanship →
          </Link>
          <Link
            href="/shop"
            className="py-3.5 px-6 rounded-xl bg-saddle hover:bg-oxblood text-white font-display font-bold text-xs transition-colors shadow-md"
          >
            Explore The Collection
          </Link>
        </div>

      </div>
    </div>
  )
}
