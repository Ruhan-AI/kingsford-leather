'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQS } from '@/lib/data/faqs'

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 bg-night text-bone border-t border-bone/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-3 mb-14">
          <h2 className="font-brand font-bold text-3xl sm:text-5xl text-white tracking-[0.015em]">
            Frequently Asked Questions
          </h2>
          <p className="font-body text-base text-bone-warm">
            Factual answers regarding our made-to-measure process, materials, and marketplace ordering.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4 font-display">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="bg-charcoal border border-bone/15 rounded-2xl overflow-hidden transition-all shadow-md"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-white hover:text-brass transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-brass shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm font-body text-bone-warm leading-relaxed border-t border-bone/10">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
