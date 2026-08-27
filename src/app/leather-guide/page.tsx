import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Droplets } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Leather & Hide Guide | Kingsford Leather',
  description:
    'Comprehensive guide to leather grades, hide weights, and care. Learn about 1.2mm full-grain cowhide, buttery sheepskin, natural suede, and authentic shearling.',
  alternates: {
    canonical: '/leather-guide',
  },
}

export default function LeatherGuidePage() {
  const hides = [
    {
      name: 'Full-Grain Cowhide',
      weight: '1.2mm – 1.3mm Heavyweight',
      character: 'Substantial, rugged, windproof, develops deep pull-up patina',
      bestFor: 'Biker jackets, cafe racers, cruiser outerwear',
      care: 'Condition annually with natural beeswax or leather balm.',
    },
    {
      name: 'Soft Sheepskin / Nappa',
      weight: '0.9mm – 1.0mm Midweight',
      character: 'Buttery soft, immediate drape, lightweight comfort, minimal break-in',
      bestFor: 'Bombers, blazers, everyday city outerwear, women’s jackets',
      care: 'Keep dry; condition with lightweight leather cream.',
    },
    {
      name: 'Natural Suede (Cow / Goat / Sheep)',
      weight: 'Velvety Nap Finish',
      character: 'Rich tactile texture, warm earthy hues, casual elegance',
      bestFor: 'Trucker jackets, western outerwear, collared bombers',
      care: 'Brush nap with crepe suede brush; apply water-repellent protector.',
    },
    {
      name: 'Authentic Shearling Fleece',
      weight: 'Natural Sheepskin + Wool Pelt',
      character: 'Ultimate thermal insulation, breathable natural wool, luxury winter warmth',
      bestFor: 'B3 aviators, flight jackets, winter trench coats',
      care: 'Store in breathable garment bags; professional leather clean when needed.',
    },
  ]

  return (
    <div className="bg-white py-8 sm:py-16">
      <Container size="narrow">
        {/* Breadcrumb */}
        <Breadcrumbs items={[{ label: 'Leather Guide' }]} className="mb-6" />

        {/* Header */}
        <div className="space-y-4 mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8b5a35] block">
            Material Education
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1c1a17] font-normal tracking-tight leading-[1.15]">
            Understanding Leather Grades &amp; Hides
          </h1>
          <p className="text-base sm:text-lg text-[#706a62] leading-relaxed font-sans">
            Leather is not one generic material. Here is how we select our hides, assess weights, and match specific leathers to outerwear archetypes.
          </p>
        </div>

        {/* Hide Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {hides.map((hide) => (
            <div
              key={hide.name}
              className="bg-[#f8f6f2] border border-[#ded7ce] rounded-[4px] p-6 sm:p-7 space-y-4 shadow-xs"
            >
              <div className="space-y-1 border-b border-[#ded7ce] pb-3">
                <span className="text-[11px] font-semibold text-[#8b5a35] uppercase tracking-wider block">
                  {hide.weight}
                </span>
                <h3 className="text-xl font-serif font-medium text-[#1c1a17]">
                  {hide.name}
                </h3>
              </div>

              <div className="space-y-2.5 text-xs text-[#2c2925] font-sans">
                <div>
                  <strong className="text-[#1c1a17] block font-semibold">Character &amp; Feel:</strong>
                  <span className="text-[#706a62] leading-relaxed">{hide.character}</span>
                </div>
                <div>
                  <strong className="text-[#1c1a17] block font-semibold">Best Suited For:</strong>
                  <span className="text-[#706a62] leading-relaxed">{hide.bestFor}</span>
                </div>
                <div>
                  <strong className="text-[#8b5a35] block font-semibold">Care Advice:</strong>
                  <span className="text-[#706a62] leading-relaxed">{hide.care}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Care Guidelines */}
        <div className="bg-[#efe9e1] border border-[#ded7ce] rounded-[4px] p-8 sm:p-10 space-y-6 mb-12">
          <h2 className="text-2xl font-serif font-medium text-[#1c1a17] flex items-center gap-2.5">
            <Droplets className="w-5 h-5 text-[#8b5a35]" />
            <span>Preserving Your Leather Outerwear</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-[#706a62] font-sans">
            <div className="p-4 rounded-[4px] bg-white border border-[#ded7ce] space-y-1.5">
              <h4 className="font-semibold text-[#1c1a17] text-sm font-serif">1. Storage &amp; Hangers</h4>
              <p className="leading-relaxed">
                Always hang your jacket on a wide, contoured wooden hanger to preserve the shoulder silhouette.
              </p>
            </div>

            <div className="p-4 rounded-[4px] bg-white border border-[#ded7ce] space-y-1.5">
              <h4 className="font-semibold text-[#1c1a17] text-sm font-serif">2. Rain &amp; Moisture</h4>
              <p className="leading-relaxed">
                If caught in heavy rain, allow the jacket to dry naturally at room temperature away from radiators.
              </p>
            </div>

            <div className="p-4 rounded-[4px] bg-white border border-[#ded7ce] space-y-1.5">
              <h4 className="font-semibold text-[#1c1a17] text-sm font-serif">3. Conditioning</h4>
              <p className="leading-relaxed">
                Apply a thin layer of natural beeswax balm once a year to keep cowhide supple and prevent drying.
              </p>
            </div>
          </div>
        </div>

        {/* Outro */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#ded7ce]">
          <Link
            href="/size-guide"
            className="text-xs font-semibold text-[#8b5a35] hover:underline"
          >
            ← Proceed to Size &amp; Fit Guide
          </Link>
          <Button href="/shop" variant="primary" size="md">
            <span>Explore Leather Styles</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </Container>
    </div>
  )
}
