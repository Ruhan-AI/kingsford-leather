import React from 'react'
import Link from 'next/link'
import { ShieldCheck, Shirt, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { Crest } from '@/components/brand/Crest'
import { Wordmark } from '@/components/brand/Wordmark'
import { SITE, SHOP_STATS } from '@/lib/site'

export function Footer() {
  return (
    <footer className="bg-night text-bone border-t border-bone/10 pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 3 Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-14 border-b border-bone/10">
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-charcoal/60 border border-bone/10">
            <div className="p-3 rounded-xl bg-smoke text-brass border border-brass/20 shrink-0">
              <Shirt className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-white">
                Handmade &amp; Made to Measure
              </h4>
              <p className="font-body text-sm text-muted mt-1 leading-relaxed">
                Every piece is bench-cut to order in standard sizes or tailored to your specific chest and sleeve measurements.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-2xl bg-charcoal/60 border border-bone/10">
            <div className="p-3 rounded-xl bg-smoke text-saddle border border-saddle/20 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-white">
                Direct Workshop Pricing
              </h4>
              <p className="font-body text-sm text-muted mt-1 leading-relaxed">
                Bench-crafted in our dedicated facility. Premium cowhide, sheepskin, and suede without third-party retail markups.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-2xl bg-charcoal/60 border border-bone/10">
            <div className="p-3 rounded-xl bg-smoke text-brass border border-brass/20 shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-white">
                Verified Marketplaces
              </h4>
              <p className="font-body text-sm text-muted mt-1 leading-relaxed">
                Official storefronts on Etsy (<span className="text-brass font-bold">5.0★</span>) and eBay (<span className="text-brass font-bold">100% Positive</span>) with full buyer guarantee.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation & Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-14 border-b border-bone/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <Link
              href="/"
              className="inline-flex items-center gap-3.5 sm:gap-4 group select-none"
              aria-label="Kingsford Leather Home"
            >
              <Crest
                size={58}
                className="shrink-0 transition-transform duration-300 group-hover:scale-105"
              />
              <Wordmark size="lg" />
            </Link>
            <p className="font-body text-sm text-bone-warm max-w-sm leading-relaxed">
              We craft heavy cowhide double-riders, vintage cafe racers, suede bombers, and custom outerwear. Every order completes safely on Etsy or eBay, with their buyer protection behind it.
            </p>
          </div>

          {/* Collections */}
          <div>
            <h5 className="font-spec text-xs uppercase tracking-widest text-brass mb-4">
              Collections
            </h5>
            <ul className="space-y-2.5 text-sm font-display text-muted">
              <li>
                <Link href="/shop" className="hover:text-white transition-colors">
                  All Outerwear
                </Link>
              </li>
              <li>
                <Link href="/men" className="hover:text-white transition-colors">
                  Men's Outerwear
                </Link>
              </li>
              <li>
                <Link href="/women" className="hover:text-white transition-colors">
                  Women's Outerwear
                </Link>
              </li>
              <li>
                <Link href="/collections/biker" className="hover:text-white transition-colors">
                  Biker &amp; Moto
                </Link>
              </li>
              <li>
                <Link href="/collections/cafe-racer" className="hover:text-white transition-colors">
                  Cafe Racer
                </Link>
              </li>
              <li>
                <Link href="/collections/bomber" className="hover:text-white transition-colors">
                  Bomber &amp; Flight
                </Link>
              </li>
              <li>
                <Link href="/collections/shearling" className="hover:text-white transition-colors">
                  Shearling &amp; Aviator
                </Link>
              </li>
            </ul>
          </div>

          {/* Guides & Craft */}
          <div>
            <h5 className="font-spec text-xs uppercase tracking-widest text-brass mb-4">
              Guides &amp; Story
            </h5>
            <ul className="space-y-2.5 text-sm font-display text-muted">
              <li>
                <Link href="/our-story" className="hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/craftsmanship" className="hover:text-white transition-colors">
                  Craftsmanship &amp; Workshop
                </Link>
              </li>
              <li>
                <Link href="/leather-guide" className="hover:text-white transition-colors">
                  Leather &amp; Hide Guide
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="hover:text-white transition-colors">
                  Size &amp; Custom Measuring
                </Link>
              </li>
              <li>
                <Link href="/shipping-returns" className="hover:text-white transition-colors">
                  Shipping &amp; Returns
                </Link>
              </li>
            </ul>
          </div>

          {/* Channels & Policy */}
          <div>
            <h5 className="font-spec text-xs uppercase tracking-widest text-brass mb-4">
              Official Channels
            </h5>
            <ul className="space-y-2.5 text-sm font-display text-muted">
              <li>
                <a
                  href={SITE.etsyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-bone"
                >
                  <span>Etsy Store</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-brass" />
                </a>
              </li>
              <li>
                <a
                  href={SITE.ebayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-bone"
                >
                  <span>eBay Store</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-brass" />
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact &amp; Custom Requests
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy &amp; AI Data
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-spec text-muted gap-4">
          <div>
            © {new Date().getFullYear()} Kingsford Leather. Handcrafted Leather Outerwear.
          </div>
          <div className="flex items-center gap-5">
            <span>Prices: CAD ($)</span>
            <span>•</span>
            <span>Etsy &amp; eBay Secured Transactions</span>
            <span>•</span>
            <span>Direct Maker Workshop</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
