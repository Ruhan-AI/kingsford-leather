'use client'

import React, { useState } from 'react'
import { Hammer, Sparkles, Shield, Compass, Scissors, CheckCircle, ArrowRight } from 'lucide-react'

const LEATHER_TYPES = [
  {
    id: 'cowhide',
    name: 'Full-Grain Cowhide (1.2mm - 1.3mm)',
    description:
      'Heavy, rugged, and road-ready. High natural tensile strength, resists abrasion and wind chill. Develops a rich, burnished patina across stress points over years of wear.',
    bestFor: 'Classic Biker, Double Riders, Heavy Moto Silhouettes',
    feel: 'Structured heft with supple break-in',
  },
  {
    id: 'sheepskin',
    name: 'Top-Grain Sheepskin (0.9mm - 1.0mm)',
    description:
      'Incredibly soft, lightweight, and immediately comfortable with zero break-in period. Moves naturally with the body while retaining clean, tailored lines.',
    bestFor: 'Cafe Racers, Tailored Blazers, Everyday Casual Jackets',
    feel: 'Silky smooth drape with buttery hand-feel',
  },
  {
    id: 'suede',
    name: 'Genuine Velvety Suede Leather',
    description:
      'Buffed underside of natural hides yielding a warm, luxurious napped texture. Absorbs dyes deeply for rich earthy tans, cognac browns, and charcoal hues.',
    bestFor: 'Western Truckers, Aviator Flight Jackets, Autumn Coats',
    feel: 'Matte, textured, and deeply tactile',
  },
  {
    id: 'shearling',
    name: 'Natural Shearling & Toscana Fur',
    description:
      'Intact wool fleece backed directly onto genuine tanned hide. Nature’s most effective thermal insulator against harsh Canadian winters.',
    bestFor: 'Sub-Zero Aviators, B3 Winter Jackets, Storm Coats',
    feel: 'Plush warmth with rugged exterior armor',
  },
]

export function Craftsmanship() {
  const [selectedLeather, setSelectedLeather] = useState(LEATHER_TYPES[0])

  return (
    <section id="craftsmanship" className="py-20 bg-[#101417] text-[#deded8] border-t border-[#deded8]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#b8733e]/10 border border-[#b8733e]/30 text-[#d4ac5e] text-xs font-spec uppercase tracking-widest">
            <Hammer className="w-3.5 h-3.5" />
            <span>Direct Workshop Standards</span>
          </div>
          <h2 className="font-brand font-bold text-3xl sm:text-5xl text-[#deded8] tracking-[0.015em]">
            Cold Ground, Warm Hide.
          </h2>
          <p className="font-body text-base sm:text-lg text-[#8b9298] leading-relaxed">
            Most retail brands charge $600+ by layering distributors, marketing agencies, and showroom rent. We operate our own cutting benches and work directly with real hides.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <div className="bg-[#192025] border border-[#deded8]/10 rounded-xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#14191c] border border-[#deded8]/15 flex items-center justify-center text-[#d4ac5e]">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-white">100% Real Animal Hides</h3>
            <p className="font-body text-xs text-[#8b9298] leading-relaxed">
              Never PU, bonded leather, or cheap pleather. Every panel is cut from genuine cowhide, sheepskin, or goat suede that breathes and ages naturally.
            </p>
          </div>

          <div className="bg-[#192025] border border-[#deded8]/10 rounded-xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#14191c] border border-[#deded8]/15 flex items-center justify-center text-[#b8733e]">
              <Scissors className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-white">Pattern Master Precision</h3>
            <p className="font-body text-xs text-[#8b9298] leading-relaxed">
              Every hide has unique stretch and grain orientation. Our craftsmen inspect each skin and hand-cut individual pieces to avoid weak grain flaws.
            </p>
          </div>

          <div className="bg-[#192025] border border-[#deded8]/10 rounded-xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#14191c] border border-[#deded8]/15 flex items-center justify-center text-[#d4ac5e]">
              <Hammer className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-white">Antiqued Brass Hardware</h3>
            <p className="font-body text-xs text-[#8b9298] leading-relaxed">
              Heavy gauge metal zippers, brass snap buttons, and cast buckles engineered to endure wind resistance, sub-zero temps, and repeated friction.
            </p>
          </div>

          <div className="bg-[#192025] border border-[#deded8]/10 rounded-xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#14191c] border border-[#deded8]/15 flex items-center justify-center text-[#b8733e]">
              <CheckCircle className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-white">Direct-to-Buyer Economics</h3>
            <p className="font-body text-xs text-[#8b9298] leading-relaxed">
              Transparent CA$140 – CA$450 pricing. By shipping directly from our production workshop, you get $800-tier leather goods without middleman markups.
            </p>
          </div>

        </div>

        {/* Interactive Material Inspector */}
        <div className="bg-[#192025] border border-[#deded8]/15 rounded-2xl p-6 sm:p-10">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Left selector buttons */}
            <div className="w-full lg:w-1/3 space-y-2">
              <div className="font-spec text-xs uppercase tracking-widest text-[#d4ac5e] mb-3">
                Select Hide Grade to Inspect
              </div>
              {LEATHER_TYPES.map((lt) => (
                <button
                  key={lt.id}
                  onClick={() => setSelectedLeather(lt)}
                  className={`w-full text-left p-3.5 rounded-lg border transition-all font-display text-sm flex items-center justify-between ${
                    selectedLeather.id === lt.id
                      ? 'bg-[#14191c] border-[#d4ac5e] text-white font-bold'
                      : 'bg-[#14191c]/50 border-[#deded8]/10 text-[#8b9298] hover:text-[#deded8]'
                  }`}
                >
                  <span>{lt.name.split('(')[0]}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${selectedLeather.id === lt.id ? 'text-[#d4ac5e]' : 'opacity-0'}`} />
                </button>
              ))}
            </div>

            {/* Right details box */}
            <div className="w-full lg:w-2/3 bg-[#14191c] border border-[#deded8]/10 rounded-xl p-6 sm:p-8 space-y-5">
              <div className="flex items-center justify-between border-b border-[#deded8]/10 pb-4">
                <h4 className="font-display font-bold text-xl text-white">
                  {selectedLeather.name}
                </h4>
                <span className="px-2.5 py-1 rounded bg-[#b8733e]/20 text-[#b8733e] text-xs font-spec uppercase">
                  Workshop Grade
                </span>
              </div>

              <p className="font-body text-base text-[#c5c3b9] leading-relaxed">
                {selectedLeather.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-spec text-xs pt-2">
                <div className="p-3 bg-[#192025] rounded border border-[#deded8]/10">
                  <span className="text-[#8b9298] block mb-1">BEST SUITED FOR:</span>
                  <span className="text-[#deded8] font-semibold">{selectedLeather.bestFor}</span>
                </div>
                <div className="p-3 bg-[#192025] rounded border border-[#deded8]/10">
                  <span className="text-[#8b9298] block mb-1">TACTILE FEEL & DRAPE:</span>
                  <span className="text-[#d4ac5e] font-semibold">{selectedLeather.feel}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
