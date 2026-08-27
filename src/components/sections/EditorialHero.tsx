'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Ruler } from 'lucide-react'
import { HeroReveal } from '@/components/motion/HeroReveal'

/**
 * Cinematic Workshop Hero
 *
 * Authentic workshop backdrop with balanced margins and generous container width (max-w-4xl),
 * ensuring headline, description, and trust badges do not break into awkward extra lines.
 */
export function EditorialHero() {
  return (
    <section className="relative px-3 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-9">
      <div className="relative max-w-7xl mx-auto">
        {/* Main Hero Container */}
        <div className="relative min-h-[560px] sm:min-h-[600px] lg:min-h-[640px] rounded-3xl sm:rounded-[36px] overflow-hidden border border-bone/15 shadow-2xl bg-night flex items-center">
          
          {/* 1. Cinematic Workshop Backdrop with Kingsford Logo on Wall */}
          <Image
            src="/images/hero-workshop-branded.jpg"
            alt="Kingsford Leather Workshop"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center scale-[1.02] brightness-95"
          />

          {/* 2. Color Grading & Legibility Scrims (Crisp text on left, clear logo view on right) */}
          <div className="absolute inset-0 bg-gradient-to-r from-night via-night/85 sm:via-night/75 md:via-night/65 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-night/75 via-transparent to-night/30" />
          <div className="absolute inset-0 bg-grain pointer-events-none opacity-25" />

          {/* 3. Warm Ambient Backlight */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-brass/15 blur-3xl pointer-events-none" />

          {/* 4. Editorial Content & Interactive UI */}
          <div className="relative h-full w-full flex items-center z-10">
            <HeroReveal className="w-full px-6 sm:px-10 lg:px-14 xl:px-16 py-10 sm:py-14 max-w-3xl lg:max-w-4xl xl:max-w-5xl flex flex-col justify-center gap-5 sm:gap-6">
              
              {/* Main Headline - Clean 2-Line Structure */}
              <h1
                data-hero-elem
                className="font-brand font-bold text-white tracking-tight leading-[1.12]"
              >
                <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-bone">
                  Handcrafted for
                </span>
                <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mt-1 sm:mt-1.5">
                  <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-bone via-bone-warm to-brass">
                    Wild Roads
                  </span>{' '}
                  <span className="font-light text-bone-warm/90 not-italic">
                    &amp; Cold Nights
                  </span>
                </span>
              </h1>

              {/* Subtext - Smooth Natural Flow */}
              <p
                data-hero-elem
                className="font-body text-sm sm:text-base lg:text-lg text-bone-warm/90 leading-relaxed max-w-2xl lg:max-w-3xl"
              >
                Direct from our workshop bench, cut to order in standard sizing (XS–5XL) or to your bespoke measurements — with guaranteed marketplace buyer protection.
              </p>

              {/* Popular Cuts Quick-Discovery Chips */}
              <div data-hero-elem className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-xs font-spec text-muted mr-1">Popular cuts:</span>
                {[
                  { label: 'Bomber', href: '/collections/bomber' },
                  { label: 'Cafe Racer', href: '/collections/cafe-racer' },
                  { label: 'Biker & Moto', href: '/collections/biker' },
                  { label: 'Trucker', href: '/collections/trucker' },
                  { label: 'Shearling', href: '/collections/shearling' },
                ].map((cut) => (
                  <Link
                    key={cut.label}
                    href={cut.href}
                    className="px-3 py-1 rounded-lg bg-smoke/80 hover:bg-night border border-bone/15 hover:border-brass/50 text-bone-warm hover:text-white text-xs font-display font-medium backdrop-blur-md transition-all cursor-pointer"
                  >
                    {cut.label}
                  </Link>
                ))}
              </div>

              {/* Action Buttons */}
              <div
                data-hero-elem
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1 sm:pt-2"
              >
                <Link
                  href="/shop"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-saddle hover:bg-saddle-hover text-white font-display font-semibold text-sm px-8 py-3.5 shadow-lg shadow-saddle/25 transition-all duration-200 cursor-pointer"
                >
                  <span>Shop The Collection</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/size-guide"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-bone/30 hover:border-brass hover:text-brass text-bone font-display font-semibold text-sm px-7 py-3.5 backdrop-blur-sm bg-charcoal/60 hover:bg-charcoal/80 transition-all duration-200 cursor-pointer"
                >
                  <Ruler className="w-4 h-4 text-brass" />
                  <span>Custom Made to Measure</span>
                </Link>
              </div>

              {/* Workshop Proof Micro-Metrics - 1 Single Horizontal Line */}
              <div
                data-hero-elem
                className="flex flex-wrap sm:flex-nowrap items-center gap-x-4 sm:gap-x-5 gap-y-1.5 pt-2 text-xs sm:text-[13px] font-spec text-bone-warm/85 whitespace-normal sm:whitespace-nowrap"
              >
                <span className="inline-flex items-center gap-1.5 shrink-0">
                  <span className="text-brass">★</span> 4.9/5 Rating (Etsy &amp; eBay)
                </span>
                <span className="hidden sm:inline text-bone/30 shrink-0">•</span>
                <span className="inline-flex items-center gap-1.5 shrink-0">
                  <span className="text-brass">✓</span> Free US &amp; UK Delivery
                </span>
                <span className="hidden sm:inline text-bone/30 shrink-0">•</span>
                <span className="inline-flex items-center gap-1.5 shrink-0">
                  <span className="text-brass">⚒</span> 1.2mm Full-Grain Hides
                </span>
              </div>

            </HeroReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
