import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Scissors, ArrowRight, ShieldCheck, Sparkles, Star, ChevronDown } from 'lucide-react'
import { PRODUCTS } from '@/lib/products'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#14191c] overflow-hidden pt-8 pb-16">
      {/* Subtle background ambient gradients */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-40"></div>
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#b8733e]/10 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[#5e1c20]/15 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Workshop Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1f262b] border border-[#deded8]/15 text-[#d4ac5e] text-xs font-spec tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#d4ac5e] animate-pulse"></span>
              <span>DIRECT-FROM-MAKER OUTERWEAR • CANADA</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-brand font-bold text-4xl sm:text-5xl xl:text-6xl tracking-[0.01em] text-[#deded8] leading-[1.12]">
              Handcrafted for <br className="hidden sm:inline" />
              <span className="text-[#b8733e]">Wild Roads</span> & <br className="hidden sm:inline" />
              <span className="text-white">Cold Nights.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="font-body text-lg sm:text-xl text-[#c5c3b9] max-w-xl leading-relaxed">
              No middleman markup. No synthetic leather. Every jacket is crafted from genuine heavyweight cowhide, soft sheepskin, and rich suede — tailored to off-the-rack sizes or your exact personal measurements.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="#collection"
                className="px-8 py-4 bg-[#b8733e] hover:bg-[#5e1c20] text-white font-display font-bold text-base rounded tracking-wide transition-all shadow-xl shadow-[#b8733e]/20 flex items-center justify-center gap-2 group"
              >
                <span>Browse All Jackets</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#docket"
                className="px-7 py-4 bg-[#1f262b] hover:bg-[#2b353b] text-[#deded8] hover:text-white border border-[#deded8]/20 font-display font-semibold text-base rounded tracking-wide transition-all flex items-center justify-center gap-2.5"
              >
                <Scissors className="w-4 h-4 text-[#d4ac5e]" />
                <span>The Custom Docket</span>
              </Link>
            </div>

            {/* Quick Proof Metrics */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#deded8]/10 max-w-lg">
              <div>
                <div className="font-spec font-bold text-xl sm:text-2xl text-[#deded8]">{PRODUCTS.length}</div>
                <div className="font-spec text-[11px] text-[#8b9298] uppercase tracking-wider mt-0.5">Authentic Cuts</div>
              </div>
              <div>
                <div className="font-spec font-bold text-xl sm:text-2xl text-[#d4ac5e]">100%</div>
                <div className="font-spec text-[11px] text-[#8b9298] uppercase tracking-wider mt-0.5">Real Hides</div>
              </div>
              <div>
                <div className="font-spec font-bold text-xl sm:text-2xl text-[#deded8]">5.0 ★</div>
                <div className="font-spec text-[11px] text-[#8b9298] uppercase tracking-wider mt-0.5">Etsy Reviews</div>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Cards */}
          <div className="lg:col-span-5 relative">
            {/* Main Featured Jacket Card */}
            <div className="relative rounded-2xl overflow-hidden bg-[#1f262b] border border-[#deded8]/15 shadow-2xl group">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="https://i.etsystatic.com/66400165/r/il/e19a0a/8382014017/il_794xN.8382014017_1nbe.jpg"
                  alt="Tan Suede Bomber Jacket with Shearling Collar"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14191c] via-[#14191c]/20 to-transparent"></div>

                {/* Floating Price & Made to Measure Tag */}
                <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                  <span className="px-3 py-1 bg-[#14191c]/80 backdrop-blur-md border border-[#deded8]/20 text-[#d4ac5e] text-xs font-spec uppercase tracking-wider rounded">
                    Made-To-Measure Available
                  </span>
                  <span className="px-2.5 py-0.5 bg-[#5e1c20] text-white text-[10px] font-spec tracking-widest uppercase rounded self-start">
                    35% OFF LIST
                  </span>
                </div>

                {/* Bottom Card Summary */}
                <div className="absolute bottom-0 inset-x-0 p-5 space-y-1">
                  <div className="font-spec text-xs text-[#d4ac5e] tracking-wider uppercase">
                    Tan Suede • Shearling Collar
                  </div>
                  <h3 className="font-display font-bold text-xl text-white">
                    Tan Suede Bomber Jacket
                  </h3>
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-baseline gap-2 font-spec">
                      <span className="text-xl font-bold text-white">CA$193.04</span>
                      <span className="text-xs text-[#8b9298] line-through">CA$296.99</span>
                    </div>
                    <Link
                      href="/products/mens-tan-suede-bomber-shearling-collar"
                      className="text-xs font-spec text-[#deded8] hover:text-[#d4ac5e] underline underline-offset-4 flex items-center gap-1"
                    >
                      <span>View Specifications</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlapping Tailor Stamp Card */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 bg-[#14191c] border border-[#d4ac5e]/40 p-4 rounded-xl shadow-2xl backdrop-blur-md max-w-[240px]">
              <div className="flex items-center gap-2.5 text-[#d4ac5e] mb-1">
                <Scissors className="w-4 h-4" />
                <span className="font-spec text-xs font-bold uppercase tracking-wider">The Cutting Bench</span>
              </div>
              <p className="font-body text-xs text-[#c5c3b9] leading-snug">
                Send your exact chest & arm lengths for a precision custom cut.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
