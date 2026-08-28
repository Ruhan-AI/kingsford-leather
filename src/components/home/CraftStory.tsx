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
    <section className="bg-[#f8f6f2] py-10 sm:py-14 border-b border-[#ded7ce]">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Workshop Visual Artwork (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full rounded-[4px] overflow-hidden bg-[#efe9e1] border border-[#ded7ce] shadow-xs">
              <Image
                src="/images/workshop/dress-form-mens.jpg"
                alt="Kingsford Leather craftsmanship tailoring on dress form"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-center"
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-[2px] border border-[#ded7ce] text-[10px] font-semibold text-[#8b5a35] uppercase tracking-wider">
                Artisan Construction
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Proof Points (7 cols) */}
          <div className="lg:col-span-7">
            <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#8b5a35] mb-1">
              Our Process
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1c1a17] font-normal tracking-tight leading-[1.15] mb-3.5">
              Character lives in the details.
            </h2>
            <p className="text-sm sm:text-base text-[#706a62] leading-relaxed mb-5 font-sans">
              Kingsford Leather was founded on the principle that genuine leather outerwear should outlive the fast-fashion cycle. From hand-burnished edges and heavy YKK hardware to clean quilted linings and bespoke measurement adjustments, we build pieces that look better with every mile.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-5">
              {points.map((pt, idx) => (
                <div
                  key={idx}
                  className="bg-white p-3.5 rounded-[4px] border border-[#ded7ce] space-y-1"
                >
                  <pt.icon className="w-4 h-4 text-[#8b5a35]" />
                  <h3 className="text-xs font-serif font-semibold text-[#1c1a17]">
                    {pt.title}
                  </h3>
                  <p className="text-[11px] text-[#706a62] leading-relaxed font-sans">
                    {pt.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Button href="/craftsmanship" variant="secondary" size="md">
                <span>Workshop Standards</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
