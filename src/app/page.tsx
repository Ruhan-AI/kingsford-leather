import React from 'react'
import type { Metadata } from 'next'
import { EditorialHero } from '@/components/home/EditorialHero'
import { CollectionRail } from '@/components/home/CollectionRail'
import { FeaturedEdit } from '@/components/home/FeaturedEdit'
import { GenderEditorial } from '@/components/home/GenderEditorial'
import { CraftStory } from '@/components/home/CraftStory'
import { SilhouetteGrid } from '@/components/home/SilhouetteGrid'
import { FeaturedCollectionStory } from '@/components/home/FeaturedCollectionStory'
import { MarketplaceTrust } from '@/components/home/MarketplaceTrust'
import { VerifiedReviews } from '@/components/home/VerifiedReviews'
import { GuideCards } from '@/components/home/GuideCards'
import { HomeFAQ } from '@/components/home/HomeFAQ'
import { ClosingCTA } from '@/components/home/ClosingCTA'
import { FAQS } from '@/lib/data/faqs'

export const metadata: Metadata = {
  title: { absolute: 'Kingsford Leather | Handcrafted Leather Outerwear & Made-To-Measure Jackets' },
  description:
    'Handmade genuine leather and suede outerwear made to order. Explore 52 biker, cafe racer, bomber, and shearling cuts with standard or custom sizing, purchased on Etsy and eBay.',
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
    <div className="flex flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* 1. White Editorial Hero */}
      <EditorialHero />

      {/* 2. Collection Navigation Rail */}
      <CollectionRail />

      {/* 3. The Kingsford Edit (Featured Products) */}
      <FeaturedEdit />

      {/* 4. Men & Women Editorial Asymmetric Cards */}
      <GenderEditorial />

      {/* 5. Craftsmanship Story */}
      <CraftStory />

      {/* 6. Shop by Silhouette Image Grid */}
      <SilhouetteGrid />

      {/* 7. Featured Collection Story */}
      <FeaturedCollectionStory />

      {/* 8. Marketplace Purchase Clarity & Protection */}
      <MarketplaceTrust />

      {/* 9. Verified Customer Reviews */}
      <VerifiedReviews />

      {/* 10. Leather Knowledge & Guides */}
      <GuideCards />

      {/* 11. Frequently Asked Questions */}
      <HomeFAQ />

      {/* 12. Closing Call to Action */}
      <ClosingCTA />
    </div>
  )
}
