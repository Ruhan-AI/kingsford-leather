import React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Crest } from '@/components/brand/Crest'
import { Wordmark } from '@/components/brand/Wordmark'
import { SITE, SHOP_STATS } from '@/lib/site'

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1c1a17] text-[#efe9e1] pt-16 pb-12 border-t border-[#2c2925]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#2c2925]">
          {/* Column 1: Brand Summary (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3.5 group select-none hover:opacity-95 transition-opacity"
              aria-label="Kingsford Leather Home"
            >
              <Crest
                size={44}
                className="shrink-0 transition-transform duration-200 group-hover:scale-105"
              />
              <Wordmark size="sm" tone="onDark" />
            </Link>
            <p className="text-sm text-[#a7a39b] leading-relaxed max-w-sm font-sans">
              Handcrafted leather outerwear made to order. Direct from our workshop to Canadian and international riders, collectors, and enthusiasts.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs text-[#a7a39b]">
              <span>🇨🇦 Canadian Owned & Operated</span>
              <span>•</span>
              <span>Standard & Custom Sizing</span>
            </div>
          </div>

          {/* Column 2: Shop (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#c9a378]">
              Catalogue
            </span>
            <ul className="space-y-2 text-sm text-[#a7a39b]">
              <li>
                <Link href="/shop" className="inline-block py-1 hover:text-white transition-colors">
                  All 49 Pieces
                </Link>
              </li>
              <li>
                <Link href="/men" className="inline-block py-1 hover:text-white transition-colors">
                  Men&apos;s Collection
                </Link>
              </li>
              <li>
                <Link href="/women" className="inline-block py-1 hover:text-white transition-colors">
                  Women&apos;s Collection
                </Link>
              </li>
              <li>
                <Link href="/collections/biker" className="inline-block py-1 hover:text-white transition-colors">
                  Biker & Moto
                </Link>
              </li>
              <li>
                <Link href="/collections/cafe-racer" className="inline-block py-1 hover:text-white transition-colors">
                  Cafe Racer
                </Link>
              </li>
              <li>
                <Link href="/collections/bomber" className="inline-block py-1 hover:text-white transition-colors">
                  Bomber & Aviator
                </Link>
              </li>
              <li>
                <Link href="/collections/shearling" className="inline-block py-1 hover:text-white transition-colors">
                  Shearling & Fur
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Learn & Craft (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#c9a378]">
              Craft & Guides
            </span>
            <ul className="space-y-2 text-sm text-[#a7a39b]">
              <li>
                <Link href="/craftsmanship" className="inline-block py-1 hover:text-white transition-colors">
                  Craftsmanship
                </Link>
              </li>
              <li>
                <Link href="/leather-guide" className="inline-block py-1 hover:text-white transition-colors">
                  Leather Guide
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="inline-block py-1 hover:text-white transition-colors">
                  Size & Fit Guide
                </Link>
              </li>
              <li>
                <Link href="/care-guide" className="inline-block py-1 hover:text-white transition-colors">
                  Leather Care Guide
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="inline-block py-1 hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Help & Policies (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#c9a378]">
              Help & Policies
            </span>
            <ul className="space-y-2 text-sm text-[#a7a39b]">
              <li>
                <Link href="/shipping-returns" className="inline-block py-1 hover:text-white transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/contact" className="inline-block py-1 hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="inline-block py-1 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="inline-block py-1 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Marketplaces (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#c9a378]">
              Marketplace Shops
            </span>
            <div className="space-y-2.5">
              <a
                href={SITE.etsyUrl}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="group block p-2.5 rounded bg-[#262a2d] hover:bg-[#2c2925] border border-[#3f3e3a] transition-colors"
              >
                <div className="flex items-center justify-between text-xs font-medium text-white">
                  <span>Etsy Store</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#c9a378] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-[#a7a39b] mt-0.5">
                  ★ {SHOP_STATS.rating.toFixed(1)} Rating · Free Delivery
                </p>
              </a>

              <a
                href={SITE.ebayUrl}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="group block p-2.5 rounded bg-[#262a2d] hover:bg-[#2c2925] border border-[#3f3e3a] transition-colors"
              >
                <div className="flex items-center justify-between text-xs font-medium text-white">
                  <span>eBay Store</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#c9a378] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-[#a7a39b] mt-0.5">
                  {SHOP_STATS.ebayPositivePercent}% Positive Feedback
                </p>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#706a62]">
          <p>
            © {currentYear} Kingsford Leather. All rights reserved. Order processing, payments, and buyer protection handled securely by Etsy & eBay.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-[#a7a39b] transition-colors">
              Privacy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-[#a7a39b] transition-colors">
              Terms
            </Link>
            <span>•</span>
            <Link href="/shipping-returns" className="hover:text-[#a7a39b] transition-colors">
              Marketplace Policies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
