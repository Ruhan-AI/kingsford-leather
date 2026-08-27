import React from 'react'
import { Scissors, Ruler, ShieldCheck, Hammer } from 'lucide-react'

/**
 * Raised strip that rides up over the bottom edge of the hero.
 *
 * Four claims, each one verifiable. Note what is deliberately absent: a blanket
 * "free shipping" line. Free delivery is true of the Etsy listings and not of
 * eBay, which charges a flat tracked fee — so the promise lives on the pieces
 * where it holds rather than across the whole site.
 */
const ITEMS = [
  {
    icon: Scissors,
    title: 'Made to order',
    desc: 'Cut when you order it, never off a warehouse shelf.',
  },
  {
    icon: Ruler,
    title: 'Standard or custom size',
    desc: 'Most pieces can be cut to your own measurements.',
  },
  {
    icon: ShieldCheck,
    title: 'Tracked marketplace purchase',
    desc: 'Etsy and eBay buyer protection on every order.',
  },
  {
    icon: Hammer,
    title: 'Direct from the workshop',
    desc: 'No middleman between the bench and you.',
  },
]

export function TrustStrip() {
  return (
    <div className="relative z-20 -mt-12 sm:-mt-14 lg:-mt-16 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="rounded-2xl sm:rounded-3xl border border-bone/15 bg-charcoal/95 backdrop-blur-2xl shadow-2xl px-6 sm:px-8 lg:px-10 py-6 sm:py-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y divide-bone/10 sm:divide-y-0 lg:divide-x lg:divide-bone/10">
          {ITEMS.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className={`flex items-start gap-3.5 sm:gap-4 ${
                  idx !== 0 ? 'pt-5 sm:pt-0 lg:pl-8' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-brass/10 border border-brass/25 flex items-center justify-center text-brass shrink-0 shadow-inner mt-0.5">
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div className="min-w-0 space-y-1">
                  <p className="font-display font-semibold text-sm text-white leading-tight">
                    {item.title}
                  </p>
                  <p className="font-body text-xs text-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
