import React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SITE } from '@/lib/site'

export function AnnouncementBar() {
  return (
    <div className="bg-[#f8f6f2] border-b border-[#ded7ce] text-[#706a62] text-xs py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="hidden sm:flex items-center gap-4">
          <span className="font-medium text-[#1c1a17]">
            Made to Order in Canada & Worldwide
          </span>
          <span className="text-[#ded7ce]">|</span>
          <span>Standard & Bespoke Sizing</span>
        </div>
        <div className="mx-auto sm:mx-0 flex items-center gap-2">
          <span>Discover Kingsford Leather on</span>
          <a
            href={SITE.etsyUrl}
            target="_blank"
            rel="noopener noreferrer sponsored nofollow"
            className="font-medium text-[#8b5a35] hover:text-[#5d3923] inline-flex items-center gap-0.5 focus-ring"
          >
            Etsy
            <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <span>and</span>
          <a
            href={SITE.ebayUrl}
            target="_blank"
            rel="noopener noreferrer sponsored nofollow"
            className="font-medium text-[#8b5a35] hover:text-[#5d3923] inline-flex items-center gap-0.5 focus-ring"
          >
            eBay
            <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>
    </div>
  )
}
