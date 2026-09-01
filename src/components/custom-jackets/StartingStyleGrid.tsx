'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, Sparkles } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { CUSTOM_JACKETS_CONTENT, SilhouetteOption } from '@/content/custom-jackets'
import { trackEvent } from '@/lib/analytics/events'

interface StartingStyleGridProps {
  onSelectSilhouette?: (silhouette: SilhouetteOption) => void
}

export function StartingStyleGrid({ onSelectSilhouette }: StartingStyleGridProps) {
  const { silhouettes } = CUSTOM_JACKETS_CONTENT

  const handleSelect = (sil: SilhouetteOption) => {
    trackEvent('custom_style_select', {
      garmentType: sil.id,
      baseProductSlug: sil.sampleProductSlug,
      source: 'style-card',
    })

    if (onSelectSilhouette) {
      onSelectSilhouette(sil)
    }

    const formEl = document.getElementById('custom-request-heading') || document.getElementById('custom-request-form')
    formEl?.scrollIntoView({ behavior: 'smooth' })
    formEl?.focus()
  }

  return (
    <section id="starting-silhouettes" className="bg-white py-12 sm:py-16 border-b border-[#ded7ce]">
      <Container size="default">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#8b5a35] mb-1">
              Catalogue Inspiration
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1c1a17] font-normal tracking-tight">
              Start with a Proven Silhouette
            </h2>
            <p className="text-sm sm:text-base text-[#706a62] max-w-2xl mt-2 font-sans">
              Choose an existing Kingsford garment cut as your design foundation, or request adaptations in leather type, color, length, or hardware.
            </p>
          </div>

          <Link
            href="/shop"
            className="text-xs sm:text-sm font-medium text-[#8b5a35] hover:text-[#5d3923] inline-flex items-center gap-1.5 transition-colors shrink-0 focus-ring"
          >
            <span>Explore all 49 ready pieces</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {silhouettes.map((sil) => (
            <div
              key={sil.id}
              className="group flex flex-col bg-[#f8f6f2] rounded-[4px] border border-[#ded7ce] overflow-hidden hover:border-[#8b5a35]/60 hover:shadow-xs transition-all duration-300"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#efe9e1]">
                <Image
                  src={sil.image}
                  alt={`${sil.name} leather outerwear silhouette`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-[2px] border border-[#ded7ce] text-[11px] font-medium text-[#1c1a17]">
                  {sil.name}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <h3 className="font-serif font-medium text-lg text-[#1c1a17]">
                    {sil.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#8b5a35] uppercase tracking-wider">
                    {sil.tagline}
                  </p>
                  <p className="text-xs text-[#706a62] leading-relaxed pt-1">
                    {sil.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#ded7ce] flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => handleSelect(sil)}
                    className="flex-1 py-2 px-3 bg-white hover:bg-[#8b5a35] text-[#1c1a17] hover:text-white rounded-[2px] border border-[#ded7ce] hover:border-[#8b5a35] text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 focus-ring"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Use as Starting Point</span>
                  </button>

                  <Link
                    href={`/collections/${sil.categorySlug}`}
                    className="p-2 text-[#706a62] hover:text-[#1c1a17] hover:bg-white rounded-[2px] transition-colors focus-ring"
                    title={`View ${sil.name} collection`}
                    aria-label={`View ${sil.name} collection`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
