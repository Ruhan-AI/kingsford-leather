import React from 'react'
import { ShieldCheck, Star, Clock, RotateCcw, ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SITE, SHOP_STATS } from '@/lib/site'

export function MarketplaceTrust() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Marketplace Buyer Protection',
      description:
        'All purchases are protected by Etsy Purchase Protection and eBay Money Back Guarantee with secure escrow checkouts.',
    },
    {
      icon: Star,
      title: 'Verified Customer Reviews',
      description: `${SHOP_STATS.rating.toFixed(1)} ★ on Etsy across ${SHOP_STATS.reviewCount}+ verified customer orders, with a ${SHOP_STATS.ebayPositivePercent}% positive feedback rating on eBay.`,
    },
    {
      icon: Clock,
      title: 'Fast Dispatch & Live Tracking',
      description:
        'Standard off-the-rack sizes dispatch in 3–5 days; custom made-to-measure orders ship in 10–14 days via tracked couriers.',
    },
    {
      icon: RotateCcw,
      title: '30-Day Returns & Exchanges',
      description:
        'Simple 30-day return policy on standard sizes. Free pattern adjustments and remake support for custom sizing inquiries.',
    },
  ]

  return (
    <section className="bg-[#f8f6f2] py-10 sm:py-14 border-b border-[#ded7ce]">
      <Container size="wide">
        <SectionHeading
          eyebrow="Purchasing Confidence"
          title="Direct Maker Pricing, Complete Protection"
          description="We operate exclusively through official verified shops on Etsy and eBay so you enjoy transparent ratings and guaranteed buyer security."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#ded7ce] rounded-[4px] p-4 sm:p-5 space-y-2.5 shadow-xs"
            >
              <div className="w-8 h-8 rounded-[2px] bg-[#f8f6f2] text-[#8b5a35] flex items-center justify-center border border-[#ded7ce]">
                <pillar.icon className="w-4 h-4" />
              </div>
              <h3 className="font-serif font-medium text-base text-[#1c1a17]">
                {pillar.title}
              </h3>
              <p className="text-xs text-[#706a62] leading-relaxed font-sans">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Verified Storefront Links Bar */}
        <div className="bg-white border border-[#ded7ce] rounded-[4px] p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-xs text-[#706a62]">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#1c1a17]">Etsy Shop:</span>
              <span>KingsfordLeatherCA ({SHOP_STATS.rating.toFixed(1)} ★)</span>
            </div>
            <span className="hidden sm:inline text-[#ded7ce]">|</span>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#1c1a17]">eBay Store:</span>
              <span>kingsfordleather ({SHOP_STATS.ebayPositivePercent}% Positive)</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={SITE.etsyUrl}
              target="_blank"
              rel="noopener noreferrer sponsored nofollow"
              className="px-3.5 py-2 bg-[#8b5a35] hover:bg-[#5d3923] text-white text-xs font-semibold rounded-[2px] transition-colors flex items-center gap-1 focus-ring"
            >
              <span>Visit Etsy Store</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href={SITE.ebayUrl}
              target="_blank"
              rel="noopener noreferrer sponsored nofollow"
              className="px-3.5 py-2 bg-[#f8f6f2] hover:bg-[#efe9e1] text-[#1c1a17] text-xs font-semibold rounded-[2px] border border-[#ded7ce] transition-colors flex items-center gap-1 focus-ring"
            >
              <span>Visit eBay Store</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
