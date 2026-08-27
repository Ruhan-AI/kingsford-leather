import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Droplets } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Leather & Hide Guide',
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
      care: 'Keep dry; condition with lightweight cream.',
    },
    {
      name: 'Natural Suede (Cow / Goat / Sheep)',
      weight: 'Velvety Nap Finish',
      character: 'Rich tactile texture, warm earthy hues, casual elegance',
      bestFor: 'Trucker jackets, western outerwear, collared bombers',
      care: 'Brush nap with crepe suede brush; apply water-repellent spray.',
    },
    {
      name: 'Authentic Shearling Fleece',
      weight: 'Natural Sheepskin + Wool Pelt',
      character: 'Ultimate thermal insulation, breathable natural wool, luxury warmth',
      bestFor: 'B3 aviators, flight jackets, winter coats',
      care: 'Store in breathable garment bags; professional leather clean.',
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
          <span className="text-brass">Leather &amp; Hide Guide</span>
        </nav>

        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <h1 className="font-brand font-bold text-3xl sm:text-5xl text-white tracking-[0.015em] leading-tight">
            Understanding Leather Grades &amp; Hides
          </h1>
          <p className="font-body text-base sm:text-xl text-bone-warm leading-relaxed">
            Leather is not one generic material. Here is how we select our hides, assess weights, and match specific leathers to outerwear archetypes.
          </p>
        </div>

        {/* Hide Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hides.map((hide) => (
            <div
              key={hide.name}
              className="bg-charcoal border border-bone/15 rounded-2xl p-6 sm:p-8 space-y-4 shadow-lg hover:border-brass/40 transition-colors"
            >
              <div className="space-y-1 border-b border-bone/10 pb-3">
                <span className="text-[11px] font-spec text-brass uppercase tracking-wider block">
                  {hide.weight}
                </span>
                <h3 className="font-brand font-bold text-2xl text-white">
                  {hide.name}
                </h3>
              </div>

              <div className="space-y-2 text-xs font-display">
                <div>
                  <strong className="text-bone-warm font-bold block">Character &amp; Feel:</strong>
                  <span className="text-muted leading-relaxed font-body">{hide.character}</span>
                </div>
                <div>
                  <strong className="text-bone-warm font-bold block">Best Suited For:</strong>
                  <span className="text-muted leading-relaxed font-body">{hide.bestFor}</span>
                </div>
                <div>
                  <strong className="text-brass font-bold block">Care Advice:</strong>
                  <span className="text-muted leading-relaxed font-body">{hide.care}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leather Care & Longevity */}
        <div className="bg-charcoal border border-bone/10 rounded-2xl p-8 space-y-6">
          <h2 className="font-brand font-bold text-2xl text-white flex items-center gap-2.5">
            <Droplets className="w-6 h-6 text-brass" />
            <span>How To Care For Your Kingsford Jacket</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs font-display">
            <div className="p-4 rounded-xl bg-smoke/60 border border-bone/10 space-y-2">
              <h4 className="font-bold text-white text-sm">1. Storage &amp; Hangers</h4>
              <p className="text-muted font-body leading-relaxed">
                Always hang your jacket on a wide, contoured wooden hanger to preserve the shoulder silhouette. Never use wire hangers.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-smoke/60 border border-bone/10 space-y-2">
              <h4 className="font-bold text-white text-sm">2. Rain &amp; Moisture</h4>
              <p className="text-muted font-body leading-relaxed">
                If caught in heavy rain, allow the jacket to dry naturally at room temperature away from direct heaters or radiators.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-smoke/60 border border-bone/10 space-y-2">
              <h4 className="font-bold text-white text-sm">3. Annual Conditioning</h4>
              <p className="text-muted font-body leading-relaxed">
                Apply a thin layer of natural beeswax balm once a year to keep cowhide supple and prevent drying or cracking.
              </p>
            </div>
          </div>
        </div>

        {/* Outro */}
        <div className="pt-4 flex items-center justify-between">
          <Link
            href="/size-guide"
            className="text-xs font-display font-bold text-bone-warm hover:text-white underline"
          >
            ← Proceed to Sizing &amp; Measurement Guide
          </Link>
          <Link
            href="/shop"
            className="py-3 px-6 rounded-xl bg-saddle hover:bg-oxblood text-white font-display font-bold text-xs transition-colors shadow-md"
          >
            Explore Leather Styles
          </Link>
        </div>

      </div>
    </div>
  )
}
