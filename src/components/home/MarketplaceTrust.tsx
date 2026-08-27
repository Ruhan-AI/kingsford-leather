import React from 'react'
import { ArrowUpRight, ShieldCheck, Truck, RefreshCw, Lock } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SITE, SHOP_STATS } from '@/lib/site'

export function MarketplaceTrust() {
  return (
    <section className="bg-[#f8f6f2] py-16 sm:py-24 border-b border-[#ded7ce]">
      <Container size="wide">
        <SectionHeading
          eyebrow="Marketplace Protection"
          title="Safe, Protected Shopping on Etsy & eBay"
          description="We use Etsy and eBay for all order processing, payment escrow, and dispatch tracking. You get full buyer protection, transparent reviews, and zero payment risk on an external store."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Etsy Storefront Card */}
          <div className="bg-white p-8 rounded-[4px] border border-[#ded7ce] shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-[#ded7ce]">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#8b5a35]">
                    Official Etsy Shop
                  </span>
                  <h3 className="text-2xl font-serif font-medium text-[#1c1a17]">
                    KingsfordLeatherCA
                  </h3>
                </div>
                <span className="text-sm font-semibold bg-[#f8f6f2] text-[#8b5a35] px-2.5 py-1 rounded-[2px] border border-[#ded7ce]">
                  {SHOP_STATS.rating.toFixed(1)} ★ Rating
                </span>
              </div>

              <ul className="space-y-3 text-sm text-[#706a62] pt-2 font-sans">
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#8b5a35] shrink-0 mt-0.5" />
                  <span><strong>Etsy Purchase Protection:</strong> Full refund if your piece doesn&apos;t arrive or isn&apos;t as described.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Truck className="w-4 h-4 text-[#8b5a35] shrink-0 mt-0.5" />
                  <span><strong>Free Delivery on Etsy:</strong> Express courier dispatch included across Canadian & global listings.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Lock className="w-4 h-4 text-[#8b5a35] shrink-0 mt-0.5" />
                  <span><strong>Encrypted Checkout:</strong> Apple Pay, Google Pay, PayPal, and all major credit cards.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#ded7ce]">
              <a
                href={SITE.etsyUrl}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#8b5a35] hover:bg-[#5d3923] text-white rounded-[4px] font-medium text-sm transition-colors focus-ring"
              >
                <span>Visit Kingsford on Etsy</span>
                <ArrowUpRight className="w-4 h-4" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          </div>

          {/* eBay Storefront Card */}
          <div className="bg-white p-8 rounded-[4px] border border-[#ded7ce] shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-[#ded7ce]">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#8b5a35]">
                    Official eBay Shop
                  </span>
                  <h3 className="text-2xl font-serif font-medium text-[#1c1a17]">
                    kingsfordleather
                  </h3>
                </div>
                <span className="text-sm font-semibold bg-[#f8f6f2] text-[#1c1a17] px-2.5 py-1 rounded-[2px] border border-[#ded7ce]">
                  {SHOP_STATS.ebayPositivePercent}% Positive
                </span>
              </div>

              <ul className="space-y-3 text-sm text-[#706a62] pt-2 font-sans">
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#8b5a35] shrink-0 mt-0.5" />
                  <span><strong>eBay Money Back Guarantee:</strong> Get the item you ordered or your money back.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Truck className="w-4 h-4 text-[#8b5a35] shrink-0 mt-0.5" />
                  <span><strong>Tracked Express Delivery:</strong> Full international tracking from dispatch to doorstep.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <RefreshCw className="w-4 h-4 text-[#8b5a35] shrink-0 mt-0.5" />
                  <span><strong>Direct Seller Messaging:</strong> Send custom sizing requests directly through eBay messages.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#ded7ce]">
              <a
                href={SITE.ebayUrl}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#1c1a17] hover:bg-[#2c2925] text-white rounded-[4px] font-medium text-sm transition-colors focus-ring"
              >
                <span>Visit Kingsford on eBay</span>
                <ArrowUpRight className="w-4 h-4" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
