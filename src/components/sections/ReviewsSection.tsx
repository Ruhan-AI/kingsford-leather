import React from 'react'
import { Star, ShieldCheck, CheckCircle2, Scissors, ExternalLink } from 'lucide-react'
import { REVIEWS } from '@/lib/data/reviews'

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-[#14191c] text-[#deded8] border-t border-[#deded8]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#d4ac5e]/10 border border-[#d4ac5e]/30 text-[#d4ac5e] text-xs font-spec uppercase tracking-widest mb-2">
              <Star className="w-3.5 h-3.5 fill-[#d4ac5e]" />
              <span>Real Marketplace Feedback</span>
            </div>
            <h2 className="font-brand font-bold text-3xl sm:text-5xl text-[#deded8] tracking-[0.015em]">
              Customer Field Reports.
            </h2>
            <p className="font-body text-base text-[#8b9298] mt-2 max-w-xl">
              Authentic reviews from Canadian and global riders, collectors, and everyday outerwear enthusiasts who ordered directly from our workshop.
            </p>
          </div>

          {/* Rating Summary Pill */}
          <div className="bg-[#192025] border border-[#deded8]/15 rounded-xl p-4 flex items-center gap-4">
            <div className="text-center border-r border-[#deded8]/10 pr-4">
              <div className="font-spec font-black text-3xl text-[#d4ac5e]">5.0</div>
              <div className="flex text-[#d4ac5e] gap-0.5 justify-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
            </div>
            <div className="text-xs font-spec space-y-1">
              <div className="text-white font-bold">100% Positive Feedback</div>
              <div className="text-[#8b9298]">Etsy: KingsfordLeatherCA</div>
              <div className="text-[#8b9298]">eBay: kingsfordleather</div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#192025] border border-[#deded8]/10 rounded-xl p-6 flex flex-col justify-between space-y-4 hover:border-[#d4ac5e]/30 transition-all shadow-md"
            >
              <div className="space-y-3">
                {/* Rating & Source */}
                <div className="flex items-center justify-between">
                  <div className="flex text-[#d4ac5e] gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-spec px-2 py-0.5 rounded bg-[#14191c] border border-[#deded8]/10 text-[#c5c3b9]">
                    Verified on {review.source}
                  </span>
                </div>

                {/* Title & Body */}
                <h4 className="font-display font-bold text-sm text-white leading-snug">
                  "{review.title}"
                </h4>
                <p className="font-body text-xs text-[#c5c3b9] leading-relaxed">
                  {review.content}
                </p>
              </div>

              {/* Author & Product Info */}
              <div className="pt-4 border-t border-[#deded8]/10 space-y-1.5 font-spec text-xs">
                <div className="flex items-center justify-between text-[#deded8]">
                  <span className="font-bold flex items-center gap-1.5">
                    <span>{review.author}</span>
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                  </span>
                  <span className="text-[#8b9298] text-[11px]">{review.location}</span>
                </div>
                <div className="text-[11px] text-[#8b9298] flex items-center justify-between">
                  <span className="line-clamp-1">{review.productName}</span>
                  {review.customFit && (
                    <span className="text-[#d4ac5e] flex items-center gap-1 shrink-0">
                      <Scissors className="w-2.5 h-2.5" />
                      <span>Custom Fit</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee */}
        <div className="mt-12 text-center">
          <a
            href="https://www.etsy.com/ca/shop/KingsfordLeatherCA#reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#192025] hover:bg-[#1f262b] border border-[#deded8]/15 text-xs font-spec text-[#deded8] hover:text-white transition-all"
          >
            <span>Read All Verified Reviews on Etsy</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#b8733e]" />
          </a>
        </div>

      </div>
    </section>
  )
}
