import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/motion/Reveal'
import { ImageReveal } from '@/components/motion/ImageReveal'
import { SITE, SHOP_STATS } from '@/lib/site'

export function EditorialHero() {
  return (
    <section className="relative bg-white pt-6 pb-16 sm:pt-12 sm:pb-24 border-b border-[#ded7ce]">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Brand Story & Conversion Path (7 cols on lg) */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center">
            <Reveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f8f6f2] border border-[#ded7ce] rounded-full text-xs text-[#8b5a35] font-semibold uppercase tracking-[0.14em] mb-6">
                <span>Handmade Leather Outerwear</span>
                <span className="w-1 h-1 rounded-full bg-[#8b5a35]" />
                <span>Made to Order</span>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#1c1a17] tracking-tight leading-[1.08] text-balance mb-6 font-normal">
                Leather with character. Made for the years ahead.
              </h1>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-base sm:text-lg text-[#706a62] leading-relaxed max-w-xl mb-8 font-sans">
                Explore 49 handcrafted leather jackets, coats, and suede bombers. Tailored to standard or custom measurements, and purchased securely through our verified Etsy and eBay shops.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
                <Button href="/shop" variant="primary" size="lg" className="w-full sm:w-auto">
                  <span>Explore the Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button href="/craftsmanship" variant="secondary" size="lg" className="w-full sm:w-auto">
                  <span>Discover Our Craft</span>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="pt-6 border-t border-[#ded7ce] flex items-center gap-4 text-xs text-[#706a62]">
                <ShieldCheck className="w-4 h-4 text-[#8b5a35] shrink-0" />
                <span>
                  Official Storefronts:{' '}
                  <a
                    href={SITE.etsyUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored nofollow"
                    className="font-semibold text-[#1c1a17] hover:text-[#8b5a35] underline underline-offset-2"
                  >
                    Etsy ({SHOP_STATS.rating.toFixed(1)} ★)
                  </a>{' '}
                  and{' '}
                  <a
                    href={SITE.ebayUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored nofollow"
                    className="font-semibold text-[#1c1a17] hover:text-[#8b5a35] underline underline-offset-2"
                  >
                    eBay ({SHOP_STATS.ebayPositivePercent}%)
                  </a>
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Hero Visual Artwork (5/7 cols on lg) */}
          <div className="lg:col-span-6 xl:col-span-7">
            <ImageReveal delay={0.2}>
              <div className="relative aspect-[4/3] lg:aspect-[16/11] w-full rounded-[4px] overflow-hidden bg-[#efe9e1] border border-[#ded7ce] shadow-sm">
                <Image
                  src="/images/hero-workshop.jpg"
                  alt="Kingsford Leather artisan workshop and genuine leather jacket on dress form"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 720px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-xs px-4 py-2.5 rounded-[4px] border border-[#ded7ce] flex items-center justify-between text-xs">
                  <span className="font-serif text-[#1c1a17] font-medium">
                    Genuine Leather & Suede Sourcing
                  </span>
                  <span className="text-[#8b5a35] font-semibold uppercase tracking-wider text-[10px]">
                    49 Unique Cuts
                  </span>
                </div>
              </div>
            </ImageReveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
