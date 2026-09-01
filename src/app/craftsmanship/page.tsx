import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Craftsmanship & Tailoring Standards | Kingsford Leather',
  description:
    'Step inside the Kingsford Leather workshop. Master pattern cutting, hide selection, double-stitched bonded seams, and solid antiqued brass hardware.',
  alternates: {
    canonical: '/craftsmanship',
  },
}

export default function CraftsmanshipPage() {
  const steps = [
    {
      num: '01',
      title: 'Individual Hide Selection',
      desc: 'We select top and full-grain cowhides (1.2mm–1.3mm), supple sheepskins (0.9mm–1.0mm), natural suedes, and genuine shearling pelts. No synthetic plastic PU is used in our leather lines.',
    },
    {
      num: '02',
      title: 'Master Pattern Drafting',
      desc: 'Whether cutting standard XS–3XL or custom bespoke orders, master tailors draft individual paper patterns to maintain shoulder balance, armhole mobility, and clean lines.',
    },
    {
      num: '03',
      title: 'Bench Cutting & Grain Alignment',
      desc: 'Each panel is hand-cut with razor shears. We align grain direction across chest panels, sleeves, and back yokes to ensure uniform aging and prevent irregular stretching.',
    },
    {
      num: '04',
      title: 'Bonded Thread & Reinforced Seams',
      desc: 'Stitched using high-tensile bonded nylon thread with reinforced topstitching on high-stress points like shoulders, elbows, and pocket welts.',
    },
    {
      num: '05',
      title: 'Antiqued Brass Hardware Assembly',
      desc: 'Fitted with heavy YKK metal zippers, antiqued brass snaps, and custom buckle closures tested for smooth action in extreme Canadian cold.',
    },
    {
      num: '06',
      title: 'Final Bench Inspection & Conditioning',
      desc: 'Before dispatch, each jacket undergoes a 12-point inspection, measurement verification against order notes, and gentle natural leather balm conditioning.',
    },
  ]

  return (
    <div className="bg-white py-6 sm:py-10">
      <Container size="narrow">
        {/* Breadcrumb */}
        <Breadcrumbs items={[{ label: 'Craftsmanship' }]} className="mb-4" />

        {/* Hero Header */}
        <div className="space-y-3 mb-8">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8b5a35] block">
            Artisan Bench Standards
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1c1a17] font-normal tracking-tight leading-[1.15]">
            The Architecture of a Kingsford Jacket
          </h1>
          <p className="text-sm sm:text-base text-[#706a62] leading-relaxed font-sans">
            Every seam, hide selection, and brass rivet is engineered to endure decades of hard riding, travel, and cold climates.
          </p>
        </div>

        {/* 6 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-[#f8f6f2] border border-[#ded7ce] rounded-[4px] p-6 sm:p-7 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif font-bold text-xl text-[#8b5a35]">
                  {s.num}
                </span>
                <CheckCircle2 className="w-4 h-4 text-[#8b5a35]" />
              </div>
              <h3 className="font-serif font-medium text-lg text-[#1c1a17]">
                {s.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#706a62] leading-relaxed font-sans">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Quality Commitment Callout */}
        <div className="bg-[#efe9e1] border border-[#ded7ce] rounded-[4px] p-8 sm:p-10 space-y-6 mb-12">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-[#8b5a35] shrink-0" />
            <div>
              <h2 className="text-2xl font-serif font-medium text-[#1c1a17]">
                Authentic Material Sourcing
              </h2>
              <span className="text-xs text-[#8b5a35] uppercase tracking-wider font-semibold">
                Genuine Hides • Solid Metal Hardware • Made to Order
              </span>
            </div>
          </div>

          <p className="text-sm text-[#706a62] leading-relaxed font-sans">
            Unlike fast-fashion retailers who disguise synthetic plastics under luxury names, we explicitly state genuine materials on every single garment. When you purchase cowhide, you receive heavyweight leather that molds to your frame and acquires a rich patina over the years.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button href="/custom-jackets" variant="primary" size="md">
              <span>Custom Jackets Portal</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="/leather-guide" variant="secondary" size="md">
              <span>Read Full Leather Guide</span>
            </Button>
            <Button href="/size-guide" variant="secondary" size="md">
              <span>Size &amp; Fit Guide</span>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
