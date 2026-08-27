import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Shield, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Craftsmanship & Bench Process',
  description:
    'Step inside the Kingsford Leather workshop. Master pattern cutting, full-grain hide selection, double-stitched bonded seams, and solid antiqued brass hardware.',
  alternates: {
    canonical: '/craftsmanship',
  },
}

export default function CraftsmanshipPage() {
  const steps = [
    {
      num: '01',
      title: 'Individual Hide Selection',
      desc: 'We reject corrected or synthetic grain. Only top and full-grain cowhides (1.2mm–1.3mm), supple sheepskin (0.9mm–1.0mm), natural suede, and genuine shearling pelts are chosen.',
    },
    {
      num: '02',
      title: 'Master Pattern Drafting',
      desc: 'Whether cutting standard XS–5XL or bespoke made-to-measure orders, master tailors draft patterns to maintain balance, armhole mobility, and flattering torso lines.',
    },
    {
      num: '03',
      title: 'Bench Cutting & Grain Alignment',
      desc: 'Each panel is hand-cut with razor shears. We align grain direction across chest panels, sleeves, and back yokes to ensure uniform aging and prevent stretching.',
    },
    {
      num: '04',
      title: 'Bonded Stitching & Reinforced Seams',
      desc: 'Stitched using heavy-duty bonded nylon thread with reinforced topstitching on stress points like shoulders, elbows, and pocket welts.',
    },
    {
      num: '05',
      title: 'Antiqued Brass Hardware Assembly',
      desc: 'Fitted with heavy YKK metal zippers, antiqued brass snaps, and custom buckle closures tested for smooth action in extreme cold.',
    },
    {
      num: '06',
      title: 'Bench Inspection & Hand Conditioning',
      desc: 'Before dispatch, each jacket undergoes a 12-point inspection, measurement verification against order notes, and gentle leather balm conditioning.',
    },
  ]

  return (
    <div className="bg-night text-bone min-h-screen py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-spec text-muted">
          <Link href="/" className="hover:text-bone transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-muted/60" />
          <span className="text-brass">Craftsmanship</span>
        </nav>

        {/* Hero Header */}
        <div className="space-y-4 max-w-3xl">
          <h1 className="font-brand font-bold text-3xl sm:text-5xl text-white tracking-[0.015em] leading-tight">
            The Architecture of a Kingsford Jacket
          </h1>
          <p className="font-body text-base sm:text-xl text-bone-warm leading-relaxed">
            Every seam, hide selection, and brass rivet is engineered to endure decades of hard riding, travel, and cold Canadian winters.
          </p>
        </div>

        {/* 6 Craft Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-charcoal border border-bone/15 rounded-2xl p-6 sm:p-8 space-y-3 shadow-lg hover:border-brass/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-spec font-black text-2xl text-brass">
                  {s.num}
                </span>
                <CheckCircle2 className="w-5 h-5 text-brass/60" />
              </div>
              <h3 className="font-brand font-bold text-xl text-white">
                {s.title}
              </h3>
              <p className="font-body text-sm text-bone-warm leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Leather Quality Standards Callout */}
        <div className="bg-charcoal/80 border border-brass/30 rounded-3xl p-8 sm:p-12 space-y-6 shadow-2xl">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-brass shrink-0" />
            <div>
              <h2 className="font-brand font-bold text-2xl text-white">
                Our Non-Negotiable Material Integrity
              </h2>
              <span className="font-spec text-xs text-brass uppercase">
                Zero PU • Zero Bonded Scrap • Zero Shortcuts
              </span>
            </div>
          </div>

          <p className="font-body text-base text-bone-warm leading-relaxed">
            Unlike fast-fashion retailers who disguise plastic pleather under fancy names, we specify real materials on every single garment. When you purchase cowhide, you receive heavyweight full-grain leather that molds to your frame and acquires a rich patina over the years.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/leather-guide"
              className="py-3 px-6 rounded-xl bg-saddle hover:bg-oxblood text-white font-display font-bold text-xs transition-colors shadow-md"
            >
              Read Full Leather &amp; Hide Guide →
            </Link>
            <Link
              href="/size-guide"
              className="py-3 px-6 rounded-xl bg-smoke hover:bg-night text-white font-display font-bold text-xs border border-bone/15 transition-colors"
            >
              Custom Measurement Instructions
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
