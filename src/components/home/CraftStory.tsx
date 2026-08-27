import React from 'react'
import Image from 'next/image'
import { ArrowRight, Scissors, Shield, Ruler } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export function CraftStory() {
  const points = [
    {
      icon: Scissors,
      title: 'Cut & Made to Order',
      description:
        'Each jacket is cut individually after your order is confirmed, avoiding wasteful warehouse overstock.',
    },
    {
      icon: Shield,
      title: 'Top-Grain & Cowhide Sourcing',
      description:
        'Selected cowhides, supple sheepskins, and rich suedes hand-matched for texture, drape, and long-term patina.',
    },
    {
      icon: Ruler,
      title: 'Standard & Bespoke Fit',
      description:
        'Choose standard sizing (XS to 3XL) or provide custom body measurements directly through our marketplace contact.',
    },
  ]

  return (
    <section className="bg-[#f8f6f2] py-16 sm:py-24 border-b border-[#ded7ce]">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Workshop Visual Artwork (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full rounded-[4px] overflow-hidden bg-[#efe9e1] border border-[#ded7ce] shadow-sm">
              <Image
                src="/images/workshop/dress-form-mens.jpg"
                alt="Kingsford Leather craftsmanship tailoring on dress form"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-center"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-[2px] border border-[#ded7ce] text-[11px] font-semibold text-[#8b5a35] uppercase tracking-wider">
                Artisan Construction
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Proof Points (7 cols) */}
          <div className="lg:col-span-7">
            <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#8b5a35] mb-2">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1c1a17] font-normal tracking-tight leading-[1.15] mb-6">
              Character lives in the details.
            </h2>
            <p className="text-base text-[#706a62] leading-relaxed mb-8 font-sans">
              Kingsford Leather was founded on the principle that genuine leather outerwear should outlive the fast-fashion cycle. From hand-burnished edges and heavy YKK hardware to clean quilted linings and bespoke measurement adjustments, we build pieces that look better with every mile.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 pt-6 border-t border-[#ded7ce]">
              {points.map((pt, idx) => (
                <div key={idx} className="space-y-2">
                  <pt.icon className="w-5 h-5 text-[#8b5a35]" />
                  <h4 className="text-sm font-serif font-semibold text-[#1c1a17]">
                    {pt.title}
                  </h4>
                  <p className="text-xs text-[#706a62] leading-relaxed font-sans">
                    {pt.description}
                  </p>
                </div>
              ))}
            </div>

            <Button href="/craftsmanship" variant="primary" size="md">
              <span>Explore Craftsmanship</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
