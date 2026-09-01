'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowDown, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { CUSTOM_JACKETS_CONTENT } from '@/content/custom-jackets'
import { trackEvent } from '@/lib/analytics/events'

interface CustomHeroProps {
  onStartRequest?: () => void
}

export function CustomHero({ onStartRequest }: CustomHeroProps) {
  const { hero } = CUSTOM_JACKETS_CONTENT

  const handleStartClick = () => {
    trackEvent('custom_primary_cta_click', { source: 'hero' })
    if (onStartRequest) {
      onStartRequest()
    } else {
      const formEl = document.getElementById('custom-request-heading') || document.getElementById('custom-request-form')
      formEl?.scrollIntoView({ behavior: 'smooth' })
      formEl?.focus()
    }
  }

  const handleExploreClick = () => {
    const sectionEl = document.getElementById('starting-silhouettes')
    sectionEl?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative bg-white pt-6 pb-12 sm:pt-10 sm:pb-16 border-b border-[#ded7ce]">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Copy & CTAs (approx 45%) */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center space-y-6">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#8b5a35] mb-2.5">
                <Sparkles className="w-3.5 h-3.5 text-[#8b5a35]" />
                {hero.eyebrow}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif text-[#1c1a17] tracking-tight leading-[1.1] text-balance font-normal">
                {hero.title}
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[#706a62] leading-relaxed font-sans max-w-xl">
              {hero.body}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <button
                type="button"
                id="hero-start-request-btn"
                onClick={handleStartClick}
                className="inline-flex items-center justify-center font-medium transition-all duration-200 focus-ring cursor-pointer select-none rounded-[4px] text-center bg-[#8b5a35] text-white hover:bg-[#5d3923] active:bg-[#4a2d1b] text-sm px-5 py-3 h-12 gap-2 shadow-xs"
              >
                <span>{hero.primaryCta}</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleExploreClick}
                className="inline-flex items-center justify-center font-medium transition-all duration-200 focus-ring cursor-pointer select-none rounded-[4px] text-center bg-white text-[#1c1a17] border border-[#ded7ce] hover:bg-[#f8f6f2] hover:border-[#1c1a17] text-sm px-5 py-3 h-12 gap-2"
              >
                <span>{hero.secondaryCta}</span>
                <ArrowRight className="w-4 h-4 text-[#706a62]" />
              </button>
            </div>

            <div className="pt-4 border-t border-[#ded7ce] flex items-center gap-2.5 text-xs text-[#706a62]">
              <ShieldCheck className="w-4 h-4 text-[#8b5a35] shrink-0" />
              <span>{hero.trustNote}</span>
            </div>
          </div>

          {/* Right Column: Imagery Composition (approx 55%) */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="grid grid-cols-12 gap-4 items-center">
              {/* Main Primary Image */}
              <div className="col-span-8 relative aspect-[4/5] rounded-[4px] overflow-hidden bg-[#efe9e1] border border-[#ded7ce] shadow-xs">
                <Image
                  src={hero.primaryImage}
                  alt="Kingsford Leather tailoring dress form and custom jacket silhouette"
                  fill
                  priority
                  sizes="(max-width: 768px) 65vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-[2px] border border-[#ded7ce] text-[11px] font-medium text-[#1c1a17] shadow-xs flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8b5a35]"></span>
                  <span>Bench-Cut in Sialkot Workshop</span>
                </div>
              </div>

              {/* Secondary Detail Image Crop */}
              <div className="col-span-4 flex flex-col gap-4">
                <div className="relative aspect-square rounded-[4px] overflow-hidden bg-[#efe9e1] border border-[#ded7ce] shadow-xs">
                  <Image
                    src={hero.detailImage}
                    alt="Artisanal leather stitching and bench tools"
                    fill
                    sizes="(max-width: 768px) 35vw, 20vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-xs text-white text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-[2px]">
                    Craft
                  </div>
                </div>

                <div className="bg-[#f8f6f2] border border-[#ded7ce] rounded-[4px] p-4 text-xs space-y-1">
                  <span className="font-semibold text-[#1c1a17] block font-serif text-sm">Individual Patterns</span>
                  <p className="text-[#706a62] leading-relaxed">
                    Custom shoulder, sleeve, and chest proportions cut from raw hides.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
