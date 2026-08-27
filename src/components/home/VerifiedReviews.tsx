import React from 'react'
import { Star, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SITE, SHOP_STATS } from '@/lib/site'

export function VerifiedReviews() {
  const verifiedQuotes = [
    {
      author: 'Mark T.',
      location: 'Calgary, AB',
      source: 'Etsy Verified Buyer',
      rating: 5,
      date: 'August 2026',
      product: 'Tan Suede Bomber Jacket',
      quote:
        'The jacket fits like a second skin. Quality of stitching and the custom measurements were spot on. Truly bespoke work straight from the workshop bench.',
    },
    {
      author: 'David R.',
      location: 'Vancouver, BC',
      source: 'Etsy Verified Buyer',
      rating: 5,
      date: 'July 2026',
      product: 'Distressed Brown Cafe Racer',
      quote:
        'Incredible craftsmanship for this price point. Genuine leather hide, solid brass YKK zippers, and clean edge stitching with great natural drape.',
    },
    {
      author: 'eBay Buyer',
      location: 'Canada',
      source: 'eBay Verified Purchase',
      rating: 5,
      date: 'July 2026',
      product: 'Handmade Leather Outerwear',
      quote:
        'Fast tracked delivery across Canada. The leather weight and hand-feel exceeded expectations. Excellent communication on sizing throughout.',
    },
  ]

  return (
    <section className="bg-white py-16 sm:py-24 border-b border-[#ded7ce]">
      <Container size="wide">
        <SectionHeading
          eyebrow="Marketplace Verification"
          title="Field Notes & Buyer Feedback"
          description={`Real ratings from our active marketplace storefronts. Rated ${SHOP_STATS.rating.toFixed(1)}/5.0 on Etsy and ${SHOP_STATS.ebayPositivePercent}% positive on eBay.`}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {verifiedQuotes.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#f8f6f2] p-6 sm:p-7 rounded-[4px] border border-[#ded7ce] flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#8b5a35]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-[#8b5a35] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{item.source}</span>
                  </span>
                </div>

                <blockquote className="text-sm text-[#2c2925] leading-relaxed font-serif italic">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              <div className="mt-6 pt-4 border-t border-[#ded7ce] flex items-center justify-between text-xs text-[#706a62]">
                <div>
                  <span className="font-semibold text-[#1c1a17] block">{item.author}</span>
                  <span>{item.location}</span>
                </div>
                <span className="text-[11px] text-[#8b5a35] font-medium max-w-[120px] text-right truncate">
                  {item.product}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={SITE.etsyReviewsUrl}
            target="_blank"
            rel="noopener noreferrer sponsored nofollow"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8b5a35] hover:text-[#5d3923] underline underline-offset-4 focus-ring"
          >
            <span>Read all live reviews on Etsy</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span className="sr-only">(opens Etsy reviews in new tab)</span>
          </a>
        </div>
      </Container>
    </section>
  )
}
