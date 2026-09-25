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
    <section className="relative bg-white pt-4 pb-8 sm:pt-6 sm:pb-12 border-b border-[#ded7ce]">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left Column: Brand Story & Conversion Path (5 cols on lg) */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center">
            <Reveal delay={0.1}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif text-[#1c1a17] tracking-tight leading-[1.1] text-balance mb-3.5 font-normal">
                Leather with character. Made for the years ahead.
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-sm sm:text-base text-[#706a62] leading-relaxed max-w-xl mb-5 font-sans">
                Explore 52 handcrafted leather jackets, coats, and suede bombers. Tailored to standard or custom measurements, and purchased securely through our verified Etsy and eBay shops.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-5">
                <Button href="/shop" variant="primary" size="md" className="w-full sm:w-auto">
                  <span>Explore the Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button href="/craftsmanship" variant="secondary" size="md" className="w-full sm:w-auto">
                  <span>Discover Our Craft</span>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="pt-4 border-t border-[#ded7ce] flex items-center gap-3 text-xs text-[#706a62]">
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
                  &amp;{' '}
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

          {/* Right Column: Hero Visual Frame (7 cols on lg) */}
          <div className="lg:col-span-6 xl:col-span-7">
            <ImageReveal>
              <div className="relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] lg:aspect-[16/10] w-full rounded-[4px] overflow-hidden bg-[#efe9e1] border border-[#ded7ce] shadow-xs">
                <Image
                  src="/images/hero-workshop.jpg"
                  alt="Kingsford Leather Workshop & Bench Craft"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover object-center"
                />

                {/* Subtle bottom-left editorial caption badge */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-[2px] border border-[#ded7ce] text-[11px] font-medium text-[#1c1a17] shadow-xs flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8b5a35]" />
                  <span>Bench-cut in premium cowhides &amp; shearling</span>
                </div>
              </div>
            </ImageReveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
