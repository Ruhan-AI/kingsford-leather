import React from 'react'
import { Hero } from '@/components/sections/Hero'
import { LeatherExplorer } from '@/components/sections/LeatherExplorer'
import { TheDocket } from '@/components/sections/TheDocket'
import { Craftsmanship } from '@/components/sections/Craftsmanship'
import { ReviewsSection } from '@/components/sections/ReviewsSection'
import { FAQSection } from '@/components/sections/FAQSection'

const FAQ_ITEMS = [
  {
    q: 'How does the Made-To-Measure (Docket) ordering work?',
    a: 'Simply select your desired jacket style, then measure your chest, shoulders, sleeve, back length, waist, and bicep with a flexible tape measure. On Etsy, paste your numbers into the order personalization box; on eBay, send them to us as a message the moment you order. Our master pattern cutter verifies the proportions before cutting the leather.',
  },
  {
    q: 'How long does production and shipping take to Canada & US?',
    a: 'Off-the-rack standard sizes typically dispatch within 3–5 business days. Custom Made-To-Measure pieces require approximately 10–14 days for pattern cutting, tailoring, and hardware assembly. All orders are dispatched via express tracked courier with tracking provided immediately.',
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
    q: 'Why are your prices CA$143–$293 while luxury brands charge $800+?',
    a: 'Most fashion brands outsource manufacturing to independent workshops, mark it up 300%, and spend millions on downtown retail leases and celebrity ads. We own our cutting and stitching benches and ship direct from workshop to buyer.',
  },
]

export default function HomePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <TheDocket />
      <LeatherExplorer />
      <Craftsmanship />
      <ReviewsSection />
      <FAQSection />
    </div>
  )
}

