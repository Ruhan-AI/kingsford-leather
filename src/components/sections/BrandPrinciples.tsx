import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Hammer, Ruler, Shield } from 'lucide-react'
import { SectionReveal } from '@/components/motion/SectionReveal'

export function BrandPrinciples() {
  const cards = [
    {
      title: 'Direct From Maker',
      tagline: 'No Middleman. No Markups.',
      desc: 'We own our cutting and stitching benches in Sialkot. You speak directly with the team that patterns, cuts, and finishes your jacket.',
      image: '/images/catalogue/a765b524b418.jpg',
      icon: Hammer,
      link: '/our-story',
      cta: 'Our Workshop Story',
    },
    {
      title: 'Made For You',
      tagline: 'Standard Sizes or Made-to-Measure',
      desc: 'Whether ordering off-the-rack (XS–5XL) or sending exact chest, waist, and sleeve numbers, every piece is individually bench-cut to order.',
      image: '/images/catalogue/8352644af515.jpg',
      icon: Ruler,
      link: '/size-guide',
      cta: 'Custom Measuring Guide',
    },
    {
      title: 'Built To Last',
      tagline: 'Full-Grain Hides & Antiqued Hardware',
      desc: 'Authentic 1.2mm cowhide, velvety suede, shearling fleece, and solid brass YKK zippers. Leather that earns character with every year you ride.',
      image: '/images/catalogue/82b19dc4cf21.jpg',
      icon: Shield,
      link: '/craftsmanship',
      cta: 'Explore Leather Standards',
    },
  ]

  return (
    <section className="py-20 bg-night text-bone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <h2 className="font-brand font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-[0.01em]">
            Why Discerning Buyers Choose Kingsford
          </h2>
          <p className="font-body text-base text-bone-warm leading-relaxed">
            Outerwear created with workshop integrity, honest material specifications, and personal craftsmanship.
          </p>
        </div>

        {/* 3 Large Editorial Brand Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon
            return (
              <SectionReveal
                key={card.title}
                delay={idx * 0.1}
                className="group relative rounded-3xl overflow-hidden border border-bone/15 bg-charcoal flex flex-col justify-between min-h-[460px] p-8 shadow-xl transition-all duration-300 hover:border-brass/50"
              >
                {/* Background Image with Dark Vignette */}
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover object-center brightness-[0.25] group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night via-night/60 to-transparent" />

                {/* Card Header */}
                <div className="relative z-10 space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-smoke/80 border border-brass/30 text-brass flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-spec text-[11px] text-brass uppercase tracking-wider block">
                      {card.tagline}
                    </span>
                    <h3 className="font-brand font-bold text-2xl text-white mt-1">
                      {card.title}
                    </h3>
                  </div>
                </div>

                {/* Card Description & Link */}
                <div className="relative z-10 space-y-4 pt-6">
                  <p className="font-body text-sm text-bone-warm leading-relaxed">
                    {card.desc}
                  </p>
                  <Link
                    href={card.link}
                    className="inline-flex items-center gap-2 text-xs font-display font-bold text-white group-hover:text-brass transition-colors"
                  >
                    <span>{card.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </SectionReveal>
            )
          })}
        </div>

      </div>
    </section>
  )
}
