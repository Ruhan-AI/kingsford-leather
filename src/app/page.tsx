import React from 'react'
import type { Metadata } from 'next'
import { EditorialHero } from '@/components/sections/EditorialHero'
import { BrandPrinciples } from '@/components/sections/BrandPrinciples'
import { FeaturedEdit } from '@/components/sections/FeaturedEdit'
import { CategoryRail } from '@/components/sections/CategoryRail'
import { CuratedArchive } from '@/components/sections/CuratedArchive'
import { WorkshopStory } from '@/components/sections/WorkshopStory'
import { ReviewsSection } from '@/components/sections/ReviewsSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { FAQS } from '@/lib/data/faqs'
import { MarketplaceCTA } from '@/components/sections/MarketplaceCTA'

export const metadata: Metadata = {
  title: { absolute: 'Kingsford Leather | Handmade Leather Outerwear' },
  description:
    'Handmade leather jackets, coats and vests direct from the workshop. Biker, cafe racer, bomber and western cuts, in standard or made-to-measure sizing.',
}

export default function HomePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((item) => ({
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
      {/* 1. Cinematic Hero */}
      <EditorialHero />

      {/* 2. Brand Principles (Why Kingsford) */}
      <BrandPrinciples />

      {/* 4. Featured Edit (Asymmetric Showcase) */}
      <FeaturedEdit />

      {/* 5. Shop by Cut (Category Rail) */}
      <CategoryRail />

      {/* 6. Curated Outerwear Archive */}
      <CuratedArchive />

      {/* 7. Workshop Story & Sialkot Heritage */}
      <WorkshopStory />

      {/* 8. Verified Customer Reviews */}
      <ReviewsSection />

      {/* 9. Honest FAQ */}
      <FAQSection />

      {/* 10. Final Marketplace Conversion CTA */}
      <MarketplaceCTA />
    </div>
  )
}
