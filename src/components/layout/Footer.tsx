import React from 'react'
import Link from 'next/link'
import { ShieldCheck, Scissors, ArrowUpRight, HeartHandshake } from 'lucide-react'
import { Crest } from '@/components/brand/Crest'
import { Wordmark } from '@/components/brand/Wordmark'

export function Footer() {
  return (
    <footer className="bg-[#101417] text-[#deded8] border-t border-[#deded8]/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 3 Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-14 border-b border-[#deded8]/10">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-[#1f262b] text-[#d4ac5e] border border-[#deded8]/10 shrink-0">
              <Scissors className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-[#deded8]">Made-To-Measure Guarantee</h4>
              <p className="font-body text-sm text-[#8b9298] mt-1 leading-relaxed">
                Provide your custom chest, waist, and sleeve measurements. Every jacket is individually bench-cut to your numbers.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-[#1f262b] text-[#b8733e] border border-[#deded8]/10 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-[#deded8]">Zero Middleman Markup</h4>
              <p className="font-body text-sm text-[#8b9298] mt-1 leading-relaxed">
                Direct from our craft facility in Pakistan to Canadian and worldwide buyers. Top-tier cowhide, sheepskin, and suede without retail inflation.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-[#1f262b] text-[#d4ac5e] border border-[#deded8]/10 shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-[#deded8]">Verified Marketplaces</h4>
              <p className="font-body text-sm text-[#8b9298] mt-1 leading-relaxed">
                Official stores on Etsy (<span className="text-[#d4ac5e]">5.0★</span>) and eBay (<span className="text-[#d4ac5e]">100% Positive</span>) with buyer protection and tracked delivery.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-14 border-b border-[#deded8]/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-4">
              <Crest size={58} className="shrink-0" />
              <div className="flex flex-col">
                <Wordmark size="md" />
                <span className="font-spec text-[10px] tracking-[0.18em] text-[#8b9298] uppercase mt-2 text-center">
                  Handcrafted for Wild Roads &amp; Cold Nights
                </span>
              </div>
            </div>
            <p className="font-body text-sm text-[#8b9298] max-w-sm leading-relaxed">
              We are a team of leather crafters, pattern masters, and riders. Our jackets are built with real heft, thick stitching, and patinas that age with every mile you ride.
            </p>
            <div className="pt-2 font-spec text-xs text-[#c5c3b9] space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Customer Care: Canada Market Entity</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d4ac5e]"></span>
                <span>Workshop: Sialkot Craft Facility</span>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h5 className="font-spec text-xs uppercase tracking-widest text-[#d4ac5e] mb-4">Collections</h5>
            <ul className="space-y-2.5 text-sm font-display text-[#8b9298]">
              <li>
                <Link href="/men" className="hover:text-[#deded8] transition-colors">
                  Men's Leather Jackets
                </Link>
              </li>
              <li>
                <Link href="/women" className="hover:text-[#deded8] transition-colors">
                  Women's Outerwear
                </Link>
              </li>
              <li>
                <Link href="/#collection" className="hover:text-[#deded8] transition-colors">
                  Biker & Double Rider
                </Link>
              </li>
              <li>
                <Link href="/#collection" className="hover:text-[#deded8] transition-colors">
                  Cafe Racer & Minimal
                </Link>
              </li>
              <li>
                <Link href="/#collection" className="hover:text-[#deded8] transition-colors">
                  Suede & Shearling Aviator
                </Link>
              </li>
              <li>
                <Link href="/#collection" className="hover:text-[#deded8] transition-colors">
                  Western Truckers & Vests
                </Link>
              </li>
            </ul>
          </div>

          {/* Sizing & Tailoring */}
          <div>
            <h5 className="font-spec text-xs uppercase tracking-widest text-[#d4ac5e] mb-4">Custom Sizing</h5>
            <ul className="space-y-2.5 text-sm font-display text-[#8b9298]">
              <li>
                <Link href="/#docket" className="hover:text-[#deded8] text-[#c5c3b9] transition-colors flex items-center gap-1">
                  <span>The Docket System</span>
                  <Scissors className="w-3 h-3 text-[#d4ac5e]" />
                </Link>
              </li>
              <li>
                <Link href="/#docket" className="hover:text-[#deded8] transition-colors">
                  How to Measure Chest & Sleeve
                </Link>
              </li>
              <li>
                <Link href="/#craftsmanship" className="hover:text-[#deded8] transition-colors">
                  Leather Weights & Hides
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-[#deded8] transition-colors">
                  Custom Fit Guarantee
                </Link>
              </li>
              <li>
                <Link href="/#reviews" className="hover:text-[#deded8] transition-colors">
                  Buyer Fit Photos & Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Stores & Channels */}
          <div>
            <h5 className="font-spec text-xs uppercase tracking-widest text-[#d4ac5e] mb-4">Official Channels</h5>
            <ul className="space-y-2.5 text-sm font-display text-[#8b9298]">
              <li>
                <a
                  href="https://www.etsy.com/ca/shop/KingsfordLeatherCA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#deded8] transition-colors flex items-center gap-1.5 text-[#deded8]"
                >
                  <span>Etsy: KingsfordLeatherCA</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#b8733e]" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.ebay.com/usr/kingsfordleather"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#deded8] transition-colors flex items-center gap-1.5"
                >
                  <span>eBay: kingsfordleather</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#b8733e]" />
                </a>
              </li>
              <li>
                <span className="text-xs text-[#8b9298] block pt-2">
                  All transactions secured by marketplace buyer protection.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-spec text-[#8b9298] gap-4">
          <div>
            © {new Date().getFullYear()} Kingsford Leather. All rights reserved. Handcrafted Outerwear.
          </div>
          <div className="flex items-center gap-6">
            <span>Currency: CAD ($)</span>
            <span>•</span>
            <span>Direct Maker Workshop</span>
            <span>•</span>
            <span>Tracked Shipping Worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
