import React from 'react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Accordion } from '@/components/ui/Accordion'
import { FAQS } from '@/lib/data/faqs'

export function HomeFAQ() {
  const homeFaqs = FAQS.slice(0, 5).map((faq, index) => ({
    id: `faq-${index}`,
    title: faq.q,
    content: <p>{faq.a}</p>,
  }))

  return (
    <section className="bg-white py-10 sm:py-14 border-b border-[#ded7ce]">
      <Container size="narrow">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Orders, Sizing & Guarantees"
          description="Common questions regarding made-to-order production times, custom measurements, and marketplace checkout."
        />

        <div className="bg-[#f8f6f2] border border-[#ded7ce] rounded-[4px] p-5 sm:p-7">
          <Accordion items={homeFaqs} />
        </div>
      </Container>
    </section>
  )
}
