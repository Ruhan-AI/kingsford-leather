import React from 'react'
import { Star, CheckCircle2, Scissors, ExternalLink } from 'lucide-react'
import { PUBLISHABLE_REVIEWS } from '@/lib/data/reviews'
import { SITE, SHOP_STATS } from '@/lib/site'

export function ReviewsSection() {
  // Only reviews that carry a live marketplace link are rendered. See the note
  // at the top of lib/data/reviews.ts for why the badge has to be earned.
  const reviews = PUBLISHABLE_REVIEWS

  return (
    <section id="reviews" className="py-20 bg-night text-bone border-t border-bone/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <h2 className="font-brand font-bold text-3xl sm:text-5xl text-white tracking-[0.015em]">
              What Buyers Say
            </h2>
            <p className="font-body text-base text-bone-warm mt-2 max-w-xl">
              Every review lives on the marketplace it was left on, where anyone can read it
              in full alongside the order it came from.
            </p>
          </div>

          {/* Rating Summary Pill */}
          <div className="bg-charcoal border border-bone/15 rounded-2xl p-4 flex items-center gap-4 shadow-xl">
            <div className="text-center border-r border-bone/10 pr-4">
              <div className="font-spec font-black text-3xl text-brass">
                {SHOP_STATS.rating.toFixed(1)}
              </div>
              <div className="flex text-brass gap-0.5 justify-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
            </div>
            <div className="text-xs font-spec space-y-1">
              <div className="text-white font-bold">{SHOP_STATS.ebayPositivePercent}% Positive Feedback</div>
              <div className="text-muted">Etsy: {SITE.etsyShop} ({SHOP_STATS.reviewCount} reviews)</div>
              <div className="text-muted">eBay: kingsfordleather ({SHOP_STATS.ebayFeedbackCount} reviews)</div>
            </div>
          </div>
        </div>

        {/* Nothing substantiated yet — send people to the real thing rather
            than filling the space with testimonials we cannot point at. */}
        {reviews.length === 0 && (
          <div className="rounded-2xl border border-bone/15 bg-charcoal p-8 sm:p-10 text-center space-y-4">
            <p className="font-body text-base text-bone-warm max-w-xl mx-auto">
              The workshop is new: {SHOP_STATS.reviewCount} reviews on Etsy and{' '}
              {SHOP_STATS.ebayFeedbackCount} feedback ratings on eBay so far. Rather than
              reprint them here, read them where they were left.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
              <a
                href={SITE.etsyReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-saddle hover:bg-oxblood text-white font-display font-bold text-sm transition-colors"
              >
                <span>Read the Etsy reviews</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={SITE.ebayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-charcoal hover:bg-smoke text-bone hover:text-white border border-bone/20 font-display font-semibold text-sm transition-colors"
              >
                <span>See eBay feedback</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-charcoal border border-bone/15 rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-brass/40 transition-all shadow-md"
            >
              <div className="space-y-3">
                {/* Rating & Source */}
                <div className="flex items-center justify-between">
                  <div className="flex text-brass gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-spec px-2 py-0.5 rounded bg-night border border-bone/10 text-bone-warm">
                    Verified on {review.source}
                  </span>
                </div>

                {/* Title & Body */}
                <h4 className="font-display font-bold text-sm text-white leading-snug">
                  "{review.title}"
                </h4>
                <p className="font-body text-xs text-bone-warm leading-relaxed">
                  {review.content}
                </p>
              </div>

              {/* Author & Product Info */}
              <div className="pt-4 border-t border-bone/10 space-y-1.5 font-spec text-xs">
                <div className="flex items-center justify-between text-bone">
                  <span className="font-bold flex items-center gap-1.5">
                    <span>{review.author}</span>
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  </span>
                  <span className="text-muted text-[11px]">{review.location}</span>
                </div>
                <div className="text-[11px] text-muted flex items-center justify-between">
                  <span className="line-clamp-1">{review.productName}</span>
                  {review.customFit && (
                    <span className="text-brass flex items-center gap-1 shrink-0">
                      <Scissors className="w-2.5 h-2.5" />
                      <span>Custom Fit</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Link */}
        <div className="mt-12 text-center">
          <a
            href={SITE.etsyReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-charcoal hover:bg-smoke border border-bone/15 text-xs font-display font-bold text-bone hover:text-white transition-all shadow-md"
          >
            <span>Read All Verified Customer Feedback on Etsy</span>
            <ExternalLink className="w-3.5 h-3.5 text-brass" />
          </a>
        </div>

      </div>
    </section>
  )
}
