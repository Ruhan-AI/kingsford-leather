'use client'

import React from 'react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Accordion } from '@/components/ui/Accordion'
import { FAQS } from '@/lib/data/faqs'

export function HomeFAQ() {
  const accordionItems = FAQS.map((item, idx) => ({
    id: `faq-${idx}`,
    title: item.q,
    content: <p>{item.a}</p>,
    defaultOpen: idx === 0,
  }))

  return (
    <section className="bg-white py-16 sm:py-24 border-b border-[#ded7ce]">
      <Container size="narrow">
        <SectionHeading
          eyebrow="Questions & Answers"
          title="Frequently Asked Questions"
          description="Everything you need to know about made-to-order production, custom measurements, materials, and marketplace buyer protection."
        />

        <div className="mt-8">
          <Accordion items={accordionItems} />
        </div>
      </Container>
    </section>
  )
}
