import React from 'react'
import { ArrowUpRight, ShieldCheck, Lock } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SITE } from '@/lib/site'

export function MarketplaceClarity() {
  return (
    <section className="bg-white py-10 sm:py-14 border-b border-[#ded7ce]">
      <Container size="default">
        <div className="bg-[#f8f6f2] border border-[#ded7ce] rounded-[4px] p-6 sm:p-10 space-y-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#8b5a35] mb-1.5">
              <Lock className="w-3.5 h-3.5" />
              Verified Transaction Model
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#1c1a17] font-normal">
              How Checkout &amp; Buyer Protection Work
            </h2>
            <p className="text-xs sm:text-sm text-[#706a62] mt-2 leading-relaxed">
              To keep our business streamlined and ensure maximum security for our clients, Kingsford Leather operates direct from maker with purchases conducted through established marketplace platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Etsy Channel Box */}
            <div className="bg-white border border-[#ded7ce] rounded-[4px] p-5 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-serif font-medium text-lg text-[#1c1a17]">
                    Etsy Storefront
                  </span>
                  <span className="text-[11px] font-semibold text-[#8b5a35] bg-[#f8f6f2] px-2 py-0.5 rounded-[2px] border border-[#ded7ce]">
                    KingsfordLeatherCA
                  </span>
                </div>
                <p className="text-xs text-[#706a62] leading-relaxed">
                  Upon approving your custom jacket specifications, we publish a private or tailored Etsy listing with your exact measurements. Checkout with PayPal, Apple Pay, or credit card with full Etsy Purchase Protection.
                </p>
              </div>

              <a
                href={SITE.etsyUrl}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="py-2 px-3 bg-[#f8f6f2] hover:bg-[#8b5a35] text-[#8b5a35] hover:text-white rounded-[2px] border border-[#ded7ce] text-xs font-semibold transition-colors flex items-center justify-center gap-1 focus-ring"
              >
                <span>Visit Kingsford Etsy Store</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* eBay Channel Box */}
            <div className="bg-white border border-[#ded7ce] rounded-[4px] p-5 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-serif font-medium text-lg text-[#1c1a17]">
                    eBay Storefront
                  </span>
                  <span className="text-[11px] font-semibold text-[#1c1a17] bg-[#f8f6f2] px-2 py-0.5 rounded-[2px] border border-[#ded7ce]">
                    kingsfordleather
                  </span>
                </div>
                <p className="text-xs text-[#706a62] leading-relaxed">
                  For clients who prefer eBay, custom offers or tailored listings are provided with official eBay Money Back Guarantee protection, tracked international dispatch, and verified feedback scores.
                </p>
              </div>

              <a
                href={SITE.ebayUrl}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="py-2 px-3 bg-[#f8f6f2] hover:bg-[#1c1a17] text-[#1c1a17] hover:text-white rounded-[2px] border border-[#ded7ce] text-xs font-semibold transition-colors flex items-center justify-center gap-1 focus-ring"
              >
                <span>Visit Kingsford eBay Store</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
