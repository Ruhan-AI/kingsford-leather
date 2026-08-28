import React from 'react'
import { Star, ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { REVIEWS } from '@/lib/data/reviews'
import { SITE, SHOP_STATS } from '@/lib/site'

export function VerifiedReviews() {
  const featuredReviews = REVIEWS.slice(0, 4)

  return (
    <section className="bg-white py-10 sm:py-14 border-b border-[#ded7ce]">
      <Container size="wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8">
          <div>
            <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#8b5a35] mb-1">
              Customer Experiences
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1c1a17] font-normal tracking-tight">
              Verified Marketplace Reviews
            </h2>
          </div>

          <div className="mt-3 md:mt-0 flex items-center gap-4 text-xs text-[#706a62]">
            <div className="flex items-center gap-1.5">
              <div className="flex text-[#8b5a35]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-[#1c1a17]">
                {SHOP_STATS.rating.toFixed(1)} / 5.0
              </span>
            </div>
            <span>•</span>
            <span>{SHOP_STATS.reviewCount}+ Global Ratings</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {featuredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#f8f6f2] border border-[#ded7ce] rounded-[4px] p-4 sm:p-5 flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#8b5a35]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] text-[#706a62] uppercase font-semibold">
                    via {review.source}
                  </span>
                </div>

                <p className="text-xs text-[#2c2925] leading-relaxed font-sans italic">
                  &ldquo;{review.content}&rdquo;
                </p>
              </div>

              <div className="pt-2.5 border-t border-[#ded7ce]/70 flex items-center justify-between text-[11px]">
                <span className="font-serif font-medium text-[#1c1a17]">
                  {review.author}
                </span>
                <span className="text-[#706a62]">{review.location}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={SITE.etsyUrl}
            target="_blank"
            rel="noopener noreferrer sponsored nofollow"
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#8b5a35] hover:text-[#5d3923] underline"
          >
            <span>Read all verified customer reviews on Etsy</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </Container>
    </section>
  )
}
