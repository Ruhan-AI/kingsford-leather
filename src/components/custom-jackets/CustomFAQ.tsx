'use client'

import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { CUSTOM_JACKETS_CONTENT } from '@/content/custom-jackets'
import { trackEvent } from '@/lib/analytics/events'

export function CustomFAQ() {
  const { faq } = CUSTOM_JACKETS_CONTENT
  const [openIds, setOpenIds] = useState<string[]>([faq[0]?.id || ''])

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => {
      const isCurrentlyOpen = prev.includes(id)
      if (isCurrentlyOpen) {
        return prev.filter((item) => item !== id)
      } else {
        trackEvent('custom_faq_expand', { source: 'faq', guideSlug: id })
        return [...prev, id]
      }
    })
  }

  // Schema for JSON-LD SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <section id="custom-faq" className="bg-white py-12 sm:py-16 border-b border-[#ded7ce]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Container size="narrow">
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#8b5a35] mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            Common Questions
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1c1a17] font-normal tracking-tight">
            Custom Order FAQs
          </h2>
          <p className="text-sm text-[#706a62] mt-2 font-sans">
            Honest answers about lead times, measurements, hide grades, and marketplace checkout protection.
          </p>
        </div>

        <div className="space-y-3">
          {faq.map((item) => {
            const isOpen = openIds.includes(item.id)
            return (
              <div
                key={item.id}
                className="border border-[#ded7ce] rounded-[4px] bg-[#f8f6f2] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  id={`faq-btn-${item.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${item.id}`}
                  onClick={() => toggleFaq(item.id)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-serif text-base sm:text-lg text-[#1c1a17] hover:text-[#8b5a35] transition-colors focus-ring"
                >
                  <span className="font-normal">{item.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#706a62] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#8b5a35]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-content-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${item.id}`}
                    className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#706a62] leading-relaxed border-t border-[#ded7ce]/60 bg-white"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
