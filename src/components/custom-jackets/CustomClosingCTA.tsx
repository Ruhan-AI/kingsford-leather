'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowUp, ArrowRight, Sparkles } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { trackEvent } from '@/lib/analytics/events'

interface CustomClosingCTAProps {
  onStartRequest?: () => void
}

export function CustomClosingCTA({ onStartRequest }: CustomClosingCTAProps) {
  const handleScrollToForm = () => {
    trackEvent('custom_primary_cta_click', { source: 'closing' })
    if (onStartRequest) {
      onStartRequest()
    } else {
      const formEl = document.getElementById('custom-request-heading') || document.getElementById('custom-request-form')
      formEl?.scrollIntoView({ behavior: 'smooth' })
      formEl?.focus()
    }
  }

  return (
    <section className="bg-white py-14 sm:py-20">
      <Container size="narrow">
        <div className="text-center space-y-5 max-w-xl mx-auto">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#8b5a35]">
            <Sparkles className="w-3.5 h-3.5 text-[#8b5a35]" />
            Direct from Workshop
          </span>

          <h2 className="text-3xl sm:text-4xl font-serif text-[#1c1a17] font-normal tracking-tight">
            Have a jacket idea in mind?
          </h2>

          <p className="text-sm sm:text-base text-[#706a62] leading-relaxed">
            Share the details you already know. We will evaluate hide feasibility, sizing balance, and provide honest guidance before any cutting begins.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleScrollToForm}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#8b5a35] hover:bg-[#5d3923] text-white text-sm font-medium rounded-[4px] transition-colors flex items-center justify-center gap-2 shadow-xs focus-ring"
            >
              <span>Return to Request Form</span>
              <ArrowUp className="w-4 h-4" />
            </button>

            <Link
              href="/shop"
              className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-[#f8f6f2] text-[#1c1a17] border border-[#ded7ce] text-sm font-medium rounded-[4px] transition-colors flex items-center justify-center gap-2 focus-ring"
            >
              <span>Explore All 49 Pieces</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
