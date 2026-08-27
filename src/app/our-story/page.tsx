import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Globe, Award, ShieldCheck } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Button } from '@/components/ui/Button'
import { SITE, SHOP_STATS } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Our Story & Heritage | Kingsford Leather',
  description:
    'Discover the Kingsford Leather story. Combining Canadian customer care with bench-cut made-to-order leather craftsmanship.',
  alternates: {
    canonical: '/our-story',
  },
}

export default function OurStoryPage() {
  return (
    <div className="bg-white py-8 sm:py-16">
      <Container size="narrow">
        {/* Breadcrumb */}
        <Breadcrumbs items={[{ label: 'Our Story' }]} className="mb-6" />

        {/* Hero Header */}
        <div className="space-y-4 mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8b5a35] block">
            Brand Origin & Philosophy
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1c1a17] font-normal tracking-tight leading-[1.15]">
            Handcrafted for wild roads &amp; cold climates.
          </h1>
          <p className="text-base sm:text-lg text-[#706a62] leading-relaxed font-sans">
            Kingsford Leather was founded on a straightforward conviction: authentic, bench-crafted leather jackets should outlast seasonal trends without inflated retail luxury markups.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] rounded-[4px] overflow-hidden border border-[#ded7ce] bg-[#efe9e1] mb-12 shadow-xs">
          <Image
            src="/images/hero-workshop.jpg"
            alt="Kingsford Leather artisan workbench"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 760px"
          />
        </div>

        {/* Story Prose */}
        <div className="space-y-8 text-sm sm:text-base text-[#2c2925] leading-relaxed font-sans">
          <div className="bg-[#f8f6f2] border border-[#ded7ce] rounded-[4px] p-6 sm:p-8 space-y-4">
            <h2 className="text-2xl font-serif text-[#1c1a17] font-medium">
              The Direct-from-Maker Model
            </h2>
            <p className="text-[#706a62]">
              Kingsford Leather operates with an honest, transparent structure: Canadian customer care, creative direction, and digital operations paired directly with dedicated cutting and stitching benches in Sialkot, a region renowned globally for generations of leather craftsmanship.
            </p>
            <p className="text-[#706a62]">
              Rather than acting as anonymous intermediaries or mass retailers, our team oversees every pattern, hide selection, and brass fitting from the workshop floor straight to your door.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#f8f6f2] border border-[#ded7ce] rounded-[4px] p-6 space-y-3">
              <Globe className="w-5 h-5 text-[#8b5a35]" />
              <h3 className="text-lg font-serif font-medium text-[#1c1a17]">
                Marketplace Buyer Trust
              </h3>
              <p className="text-xs sm:text-sm text-[#706a62] leading-relaxed">
                By selling exclusively through verified official shops on Etsy and eBay, we give every buyer complete purchase protection, escrow security, and transparent review tracking.
              </p>
            </div>

            <div className="bg-[#f8f6f2] border border-[#ded7ce] rounded-[4px] p-6 space-y-3">
              <Award className="w-5 h-5 text-[#8b5a35]" />
              <h3 className="text-lg font-serif font-medium text-[#1c1a17]">
                Zero Warehouse Waste
              </h3>
              <p className="text-xs sm:text-sm text-[#706a62] leading-relaxed">
                Nothing sits in a warehouse collecting dust. Each piece is cut and stitched only after your order is confirmed, ensuring fresh, supple hides and pristine tailoring.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-[#ded7ce] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#706a62]">
              Explore our verified ratings:{' '}
              <a
                href={SITE.etsyUrl}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="font-semibold text-[#1c1a17] underline"
              >
                Etsy ({SHOP_STATS.rating.toFixed(1)} ★)
              </a>{' '}
              ·{' '}
              <a
                href={SITE.ebayUrl}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="font-semibold text-[#1c1a17] underline"
              >
                eBay ({SHOP_STATS.ebayPositivePercent}%)
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Button href="/craftsmanship" variant="secondary" size="md">
                <span>Craftsmanship</span>
              </Button>
              <Button href="/shop" variant="primary" size="md">
                <span>View Collection</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
