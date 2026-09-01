'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { PRODUCTS, Product } from '@/lib/products'
import { SilhouetteOption } from '@/content/custom-jackets'
import { trackEvent } from '@/lib/analytics/events'

interface StartingStyleGridProps {
  onSelectSilhouette?: (silhouette: SilhouetteOption) => void
}

interface ProvenListingConfig {
  id: string
  name: string
  tagline: string
  categorySlug: string
  productSlug: string
}

const PROVEN_SILHOUETTES: ProvenListingConfig[] = [
  {
    id: 'bomber',
    name: 'Bomber & Aviator',
    tagline: 'Ribbed trims, storm collar, vintage flight attitude',
    categorySlug: 'bomber',
    productSlug: 'mens-tan-suede-bomber-shearling-collar',
  },
  {
    id: 'cafe-racer',
    name: 'Cafe Racer',
    tagline: 'Band collar, clean chest lines, streamlined motoring profile',
    categorySlug: 'cafe-racer',
    productSlug: 'mens-black-cafe-racer-racing-stripes',
  },
  {
    id: 'biker',
    name: 'Biker & Double Rider',
    tagline: 'Asymmetrical cross-zip, wide notch lapels, structured cowhide',
    categorySlug: 'biker',
    productSlug: 'mens-black-belted-double-rider',
  },
  {
    id: 'trucker',
    name: 'Western & Trucker',
    tagline: 'Pointed chest yokes, shank buttons, tailored waist taper',
    categorySlug: 'trucker',
    productSlug: 'brown-suede-trucker-western',
  },
  {
    id: 'shearling-coats',
    name: 'Shearling & Fur',
    tagline: 'Natural fleece lining, heavyweight cold-weather insulation',
    categorySlug: 'shearling',
    productSlug: 'womens-toscana-sheepskin-gilet-olive',
  },
  {
    id: 'vests-tailoring',
    name: 'Duster & Tailored Trench',
    tagline: 'Extended drop length, structured collar, protective drape',
    categorySlug: 'coats',
    productSlug: 'mens-brown-distressed-leather-duster',
  },
]

export function StartingStyleGrid({ onSelectSilhouette }: StartingStyleGridProps) {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null)

  const handleSelect = (silConfig: ProvenListingConfig, product?: Product) => {
    trackEvent('custom_style_select', {
      garmentType: silConfig.id,
      baseProductSlug: silConfig.productSlug,
      source: 'proven-listing-card',
    })

    if (onSelectSilhouette) {
      onSelectSilhouette({
        id: silConfig.id,
        name: silConfig.name,
        tagline: silConfig.tagline,
        description: product?.blurb || silConfig.tagline,
        image: product?.image || '/images/catalogue/82b19dc4cf21.jpg',
        categorySlug: silConfig.categorySlug,
        sampleProductSlug: silConfig.productSlug,
      })
    }

    const formEl =
      document.getElementById('custom-request-heading') ||
      document.getElementById('custom-request-form')
    formEl?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="starting-silhouettes" className="bg-white py-12 sm:py-16 border-b border-[#ded7ce]">
      <Container size="default">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#8b5a35] mb-1">
              Catalogue Inspiration
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1c1a17] font-normal tracking-tight">
              Start with a Proven Silhouette
            </h2>
            <p className="text-sm sm:text-base text-[#706a62] max-w-2xl mt-2 font-sans leading-relaxed">
              Every custom commission begins from one of our benchmark outerwear patterns. Choose an authentic piece below to prefill your custom brief with its cut, proportions, and base specifications.
            </p>
          </div>

          <Link
            href="/shop"
            className="text-xs sm:text-sm font-medium text-[#8b5a35] hover:text-[#5d3923] inline-flex items-center gap-1.5 transition-colors shrink-0 focus-ring"
          >
            <span>Explore all 49 ready pieces</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 6-Card Proven Listings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {PROVEN_SILHOUETTES.map((sil) => {
            const product = PRODUCTS.find((p) => p.slug === sil.productSlug)
            if (!product) return null

            const hasSecondaryImage = product.images && product.images.length > 1
            const secondaryImage = hasSecondaryImage ? product.images[1] : null
            const isHovered = hoveredSlug === product.slug

            return (
              <div
                key={sil.id}
                onMouseEnter={() => setHoveredSlug(product.slug)}
                onMouseLeave={() => setHoveredSlug(null)}
                className="group flex flex-col bg-white rounded-[4px] border border-[#ded7ce] overflow-hidden hover:border-[#8b5a35] hover:shadow-md transition-all duration-300"
              >
                {/* Product Image Frame with 4:5 aspect ratio */}
                <div className="relative aspect-[4/5] w-full bg-[#f8f6f2] overflow-hidden">
                  <Link
                    href={`/products/${product.slug}`}
                    className="block relative w-full h-full focus-ring"
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={`object-cover object-top transition-all duration-500 ${
                        isHovered && secondaryImage ? 'opacity-0 scale-103' : 'opacity-100 scale-100'
                      }`}
                    />
                    {secondaryImage && (
                      <Image
                        src={secondaryImage}
                        alt={`${product.title} alternate view`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className={`object-cover object-top transition-all duration-500 absolute inset-0 ${
                          isHovered ? 'opacity-100 scale-103' : 'opacity-0 scale-100'
                        }`}
                      />
                    )}
                  </Link>

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 pointer-events-none">
                    <span className="px-2 py-0.5 rounded-[2px] bg-white/95 backdrop-blur-xs text-[10px] font-semibold uppercase tracking-wider text-[#1c1a17] border border-[#ded7ce]">
                      {product.material}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 pointer-events-none">
                    <span className="px-2 py-0.5 rounded-[2px] bg-[#1c1a17]/85 backdrop-blur-xs text-[10px] font-medium uppercase tracking-wider text-white">
                      {sil.name}
                    </span>
                  </div>
                </div>

                {/* Product Listing Info */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-[#8b5a35] uppercase tracking-wider">
                      <span>{product.gender} Outerwear</span>
                      <span>·</span>
                      <span>{product.category.replace('-', ' ')}</span>
                    </div>

                    <Link
                      href={`/products/${product.slug}`}
                      className="block font-serif font-medium text-lg text-[#1c1a17] hover:text-[#8b5a35] transition-colors leading-snug line-clamp-1"
                    >
                      {product.title}
                    </Link>

                    <p className="text-xs text-[#706a62] leading-relaxed line-clamp-2">
                      {sil.tagline}
                    </p>
                  </div>

                  {/* Price & Primary/Secondary Listing Buttons */}
                  <div className="pt-3 border-t border-[#ded7ce] space-y-3">
                    {/* Price Row */}
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-semibold tracking-wider text-[#706a62] block mb-0.5">
                          Base Commission From
                        </span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-lg font-bold text-[#1c1a17]">
                            CA${product.salePrice.toFixed(2)}
                          </span>
                          {product.listPrice > product.salePrice && (
                            <span className="text-xs text-[#a7a39b] line-through">
                              CA${product.listPrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                      </div>

                      <span className="text-[11px] text-[#3f6548] font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#3f6548]" />
                        <span>Made to Order</span>
                      </span>
                    </div>

                    {/* Primary Button: PROPER PROMINENT BUTTON */}
                    <button
                      type="button"
                      onClick={() => handleSelect(sil, product)}
                      className="w-full py-2.5 px-4 bg-[#8b5a35] hover:bg-[#5d3923] text-white text-xs sm:text-sm font-semibold rounded-[2px] transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer focus-ring"
                    >
                      <Sparkles className="w-4 h-4 text-[#e0cfbe]" />
                      <span>Use as Starting Point</span>
                    </button>

                    {/* Secondary Row: Full Details Link */}
                    <div className="flex items-center justify-between pt-1 text-[11px]">
                      <Link
                        href={`/products/${product.slug}`}
                        className="font-medium text-[#8b5a35] hover:text-[#5d3923] hover:underline inline-flex items-center gap-1 focus-ring"
                      >
                        <span>View Garment Specs & Sizing</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>

                      {product.etsyUrl && (
                        <a
                          href={product.etsyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#706a62] hover:text-[#1c1a17] hover:underline"
                        >
                          Etsy Listing ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
