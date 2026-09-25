'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { PRODUCTS } from '@/lib/products'
import { SectionReveal } from '@/components/motion/SectionReveal'

export function FeaturedEdit() {

  // Select 3 premier showcase pieces
  const heroProduct = PRODUCTS[0] // Tan Suede Bomber
  const sideProduct1 = PRODUCTS[1] // Brown Suede Trucker
  const sideProduct2 = PRODUCTS[2] // Black Cafe Racer

  return (
    <section className="py-20 bg-night text-bone border-t border-bone/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2 max-w-xl">
            <h2 className="font-brand font-bold text-3xl sm:text-4xl text-white tracking-[0.01em]">
              The Workshop Featured Edit
            </h2>
            <p className="font-body text-sm sm:text-base text-muted">
              Three benchmark cuts representing our leather selection, tailored proportions, and finishing detail.
            </p>
          </div>

          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-xs font-display font-bold text-bone-warm hover:text-white transition-colors"
          >
            <span>View all 52 outerwear pieces</span>
            <ArrowRight className="w-4 h-4 text-brass" />
          </Link>
        </div>

        {/* Asymmetric Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Hero Product (7 cols) */}
          <SectionReveal className="lg:col-span-7 bg-charcoal border border-bone/15 rounded-3xl overflow-hidden p-6 sm:p-10 flex flex-col justify-between group shadow-xl hover:border-brass/40 transition-all">
            <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden bg-night">
              <Image
                src={heroProduct.image}
                alt={heroProduct.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="px-3 py-1 bg-night/85 backdrop-blur-md text-brass text-xs font-spec uppercase rounded-full border border-brass/30">
                  {heroProduct.material}
                </span>
                <span className="px-3 py-1 bg-saddle text-white text-xs font-spec font-bold uppercase rounded-full">
                  Featured Cut
                </span>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-bone/10 pb-4">
                <div>
                  <span className="font-spec text-xs text-brass uppercase tracking-wider">
                    {heroProduct.category}
                  </span>
                  <h3 className="font-brand font-bold text-2xl text-white mt-0.5">
                    {heroProduct.title}
                  </h3>
                </div>
                <div className="font-spec text-2xl font-black text-white">
                  CA${heroProduct.salePrice.toFixed(2)}
                </div>
              </div>

              <p className="font-body text-sm text-bone-warm leading-relaxed">
                {heroProduct.blurb}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href={`/products/${heroProduct.slug}`}
                  className="py-3 px-6 bg-smoke hover:bg-night text-white font-display font-bold text-xs rounded-xl border border-bone/15 transition-colors"
                >
                  View Product
                </Link>


                {heroProduct.etsyUrl && (
                  <a
                    href={heroProduct.etsyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-5 bg-saddle hover:bg-oxblood text-white font-display font-bold text-xs rounded-xl transition-all ml-auto flex items-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <span>Buy on Etsy</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </SectionReveal>

          {/* 2 Complementary Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
            {[sideProduct1, sideProduct2].map((prod) => (
              <SectionReveal
                key={prod.id}
                className="bg-charcoal border border-bone/15 rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row gap-5 items-center group shadow-xl hover:border-brass/40 transition-all flex-1"
              >
                <div className="relative aspect-square w-full sm:w-40 rounded-2xl overflow-hidden bg-night shrink-0">
                  <Image
                    src={prod.image}
                    alt={prod.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="180px"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-night/85 text-[9px] font-spec uppercase text-brass">
                    {prod.material}
                  </div>
                </div>

                <div className="space-y-2.5 flex-1 min-w-0">
                  <span className="font-spec text-[10px] text-brass uppercase tracking-wider">
                    {prod.category}
                  </span>
                  <h4 className="font-brand font-bold text-base text-white line-clamp-1">
                    {prod.title}
                  </h4>
                  <div className="font-spec text-base font-bold text-white">
                    CA${prod.salePrice.toFixed(2)}
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <Link
                      href={`/products/${prod.slug}`}
                      className="py-2 px-3.5 bg-smoke hover:bg-night text-white font-display font-bold text-[11px] rounded-lg border border-bone/15 transition-colors"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
