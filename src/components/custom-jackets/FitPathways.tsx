'use client'

import React from 'react'
import Link from 'next/link'
import { Check, ArrowRight, Ruler } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { CUSTOM_JACKETS_CONTENT, FitPathway } from '@/content/custom-jackets'
import { trackEvent } from '@/lib/analytics/events'

interface FitPathwaysProps {
  onSelectFit?: (profile: 'men' | 'women' | 'unisex' | 'not-sure') => void
}

export function FitPathways({ onSelectFit }: FitPathwaysProps) {
  const { fitPathways } = CUSTOM_JACKETS_CONTENT

  const handleSelect = (pathway: FitPathway) => {
    trackEvent('custom_fit_select', {
      fitProfile: pathway.fitProfileValue,
      source: 'style-card',
    })

    if (onSelectFit) {
      onSelectFit(pathway.fitProfileValue)
    }

    const formEl = document.getElementById('custom-request-heading') || document.getElementById('custom-request-form')
    formEl?.scrollIntoView({ behavior: 'smooth' })
    formEl?.focus()
  }

  return (
    <section id="fit-pathways" className="bg-white py-12 sm:py-16 border-b border-[#ded7ce]">
      <Container size="default">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div className="max-w-2xl">
            <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#8b5a35] mb-1">
              Pattern Cutting &amp; Fit
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1c1a17] font-normal tracking-tight">
              Fit Pathways &amp; Sizing Directions
            </h2>
            <p className="text-sm sm:text-base text-[#706a62] mt-2 font-sans">
              Choose your sizing approach. Standard off-the-rack sizing is available, or our master cutters can create an individual blueprint from your measurements.
            </p>
          </div>

          <Link
            href="/size-guide"
            className="text-xs sm:text-sm font-medium text-[#8b5a35] hover:text-[#5d3923] inline-flex items-center gap-1.5 transition-colors shrink-0 focus-ring"
          >
            <Ruler className="w-4 h-4" />
            <span>Read full Size &amp; Measuring Guide</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fitPathways.map((pathway) => (
            <div
              key={pathway.id}
              className="bg-[#f8f6f2] rounded-[4px] border border-[#ded7ce] p-6 flex flex-col justify-between space-y-6 hover:border-[#8b5a35]/60 hover:shadow-xs transition-all duration-300"
            >
              <div className="space-y-4">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8b5a35] block">
                    {pathway.subtitle}
                  </span>
                  <h3 className="font-serif font-medium text-xl text-[#1c1a17] mt-1">
                    {pathway.title}
                  </h3>
                </div>

                <p className="text-xs text-[#706a62] leading-relaxed">
                  {pathway.description}
                </p>

                <ul className="space-y-2 pt-2 border-t border-[#ded7ce]">
                  {pathway.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#2c2925]">
                      <Check className="w-3.5 h-3.5 text-[#8b5a35] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => handleSelect(pathway)}
                className="w-full py-2.5 px-4 bg-white hover:bg-[#8b5a35] text-[#1c1a17] hover:text-white rounded-[2px] border border-[#ded7ce] hover:border-[#8b5a35] text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 focus-ring"
              >
                <span>{pathway.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
