'use client'

import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const FAQS = [
  {
    q: 'How does the Made-To-Measure (Docket) ordering work?',
    a: 'Simply select your desired jacket style, measure your chest, shoulders, sleeve, back length, waist, and bicep using a flexible tape measure, and paste your numbers into the order personalization box on Etsy. Our master pattern cutter verifies the proportions before cutting the leather.',
  },
  {
    q: 'How long does production and shipping take to Canada & US?',
    a: 'Off-the-rack standard sizes typically dispatch within 3–5 business days. Custom Made-To-Measure pieces require approximately 10–14 days for pattern cutting, tailoring, and hardware assembly. All orders are dispatched via express tracked courier (DHL / FedEx / Canada Post) with tracking provided immediately.',
  },
  {
    q: 'Are your jackets made of 100% genuine animal leather?',
    a: 'Yes, unconditionally. We strictly work with genuine full-grain cowhide (1.2mm–1.3mm), soft sheepskin (0.9mm–1.0mm), natural suede, and authentic shearling fleece. We never use PU, faux leather, or bonded scrap leather.',
  },
  {
    q: 'What is your return & remake policy?',
    a: 'We stand behind our craftsmanship 100%. If an off-the-rack jacket has any sizing or defect issue, you can exchange or return it within 30 days. For Made-to-Measure pieces, if there is any error on our workshop cutting bench against your submitted numbers, we will alter or remake it free of charge.',
  },
  {
    q: 'Why are your prices CA$140–$450 while luxury brands charge $800+?',
    a: 'Most fashion brands outsource manufacturing to independent workshops, mark it up 300%, and spend millions on downtown retail leases and celebrity ads. We own our cutting and stitching benches and ship direct from workshop to buyer.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 bg-[#101417] text-[#deded8] border-t border-[#deded8]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#b8733e]/10 border border-[#b8733e]/30 text-[#d4ac5e] text-xs font-spec uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Inquiries</span>
          </div>
          <h2 className="font-brand font-bold text-3xl sm:text-5xl text-[#deded8] tracking-[0.015em]">
            Frequently Asked Questions.
          </h2>
          <p className="font-body text-base text-[#8b9298]">
            Everything you need to know about our leather sourcing, custom measurement docket, and workshop shipping.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4 font-display">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="bg-[#192025] border border-[#deded8]/10 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-white hover:text-[#d4ac5e] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#d4ac5e] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm font-body text-[#c5c3b9] leading-relaxed border-t border-[#deded8]/10">
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
