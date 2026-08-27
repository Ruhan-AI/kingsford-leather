import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Sparkles, Wind, Droplets, Sun, AlertTriangle } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Leather Care & Preservation Guide | Kingsford Leather',
  description:
    'Essential care instructions for handcrafted leather jackets. Proper cleaning, conditioning, storage, and water resistance for cowhide, suede, and shearling.',
  alternates: {
    canonical: '/care-guide',
  },
}

export default function CareGuidePage() {
  const careSections = [
    {
      icon: Wind,
      title: '1. Storage & Daily Handling',
      points: [
        'Always hang your jacket on a wide, contoured wooden hanger to support the shoulder pads and prevent sagging.',
        'Store in a cool, dry, well-ventilated closet away from damp basements or hot attics.',
        'Use breathable cotton garment bags for seasonal storage. Never store genuine leather in non-breathable plastic bags.',
      ],
    },
    {
      icon: Droplets,
      title: '2. Rain & Moisture Response',
      points: [
        'If caught in rain, gently wipe excess water off with a soft, clean dry cloth.',
        'Allow the jacket to dry naturally at room temperature on its wooden hanger.',
        'Never use hairdryers, radiators, or tumble dryers; direct heat evaporates the natural oils in the hide, causing stiffness and cracking.',
      ],
    },
    {
      icon: Sparkles,
      title: '3. Routine Conditioning (Smooth Leather)',
      points: [
        'Condition full-grain cowhide and sheepskin once or twice a year using a high-grade natural beeswax or lanolin leather balm.',
        'Test any conditioner on a small concealed area (such as the inner hem facing) first.',
        'Apply sparingly with a microfiber cloth in circular motions, allow 30 minutes to absorb, and gently buff off excess.',
      ],
    },
    {
      icon: AlertTriangle,
      title: '4. Suede & Shearling Specifics',
      points: [
        'Never apply liquid leather balms or waxes to suede or nubuck surfaces.',
        'Use a dedicated crepe or brass-bristle suede brush to lift dust and restore the nap.',
        'For shearling fleece collars, use a wide-tooth comb to gently untangle wool fibers without pulling.',
      ],
    },
  ]

  return (
    <div className="bg-white py-8 sm:py-16">
      <Container size="narrow">
        {/* Breadcrumb */}
        <Breadcrumbs items={[{ label: 'Care Guide' }]} className="mb-6" />

        {/* Header */}
        <div className="space-y-4 mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8b5a35] block">
            Preservation & Maintenance
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1c1a17] font-normal tracking-tight leading-[1.15]">
            How to Care for Your Leather Outerwear
          </h1>
          <p className="text-base sm:text-lg text-[#706a62] leading-relaxed font-sans">
            Genuine leather is a living material that develops a rich, individual patina with age. Follow these workshop guidelines to keep your jacket supple for decades.
          </p>
        </div>

        {/* Care Sections Grid */}
        <div className="space-y-6 mb-12">
          {careSections.map((section, idx) => (
            <div
              key={idx}
              className="bg-[#f8f6f2] border border-[#ded7ce] rounded-[4px] p-6 sm:p-8 space-y-4"
            >
              <div className="flex items-center gap-3">
                <section.icon className="w-5 h-5 text-[#8b5a35] shrink-0" />
                <h2 className="text-xl font-serif font-medium text-[#1c1a17]">
                  {section.title}
                </h2>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#706a62] font-sans">
                {section.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <span className="text-[#8b5a35] font-bold mt-0.5">•</span>
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Professional Cleaning Notice */}
        <div className="bg-[#efe9e1] border border-[#ded7ce] rounded-[4px] p-6 sm:p-8 space-y-3 mb-12">
          <h3 className="text-lg font-serif font-medium text-[#1c1a17]">
            When to Seek Professional Leather Cleaning
          </h3>
          <p className="text-xs sm:text-sm text-[#706a62] leading-relaxed font-sans">
            For deep grease stains, ink marks, or full interior lining cleaning, always consult a professional leather cleaning specialist rather than a conventional dry cleaner. Standard dry cleaning chemicals strip essential natural oils from genuine hides.
          </p>
        </div>

        {/* Outro */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#ded7ce]">
          <Link
            href="/shipping-returns"
            className="text-xs font-semibold text-[#8b5a35] hover:underline"
          >
            ← Marketplace Shipping &amp; Returns
          </Link>
          <Button href="/shop" variant="primary" size="md">
            <span>Explore The Collection</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </Container>
    </div>
  )
}
