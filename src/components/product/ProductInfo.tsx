'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Ruler, ChevronDown } from 'lucide-react'
import { Product } from '@/lib/products'
import { MarketplaceButtons } from './MarketplaceButtons'

interface ProductInfoProps {
  product: Product
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [openSpec, setOpenSpec] = useState<string | null>('materials')

  const discountPercent =
    product.listPrice > product.salePrice
      ? Math.round(((product.listPrice - product.salePrice) / product.listPrice) * 100)
      : 0

  const toggleSpec = (key: string) => {
    setOpenSpec((prev) => (prev === key ? null : key))
  }

  return (
    <div className="space-y-8">
      {/* Title & Material Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-spec">
          <span className="px-3 py-1 rounded-full bg-smoke border border-bone/10 uppercase tracking-widest text-brass">
            {product.category.replace('-', ' ')}
          </span>
          <span className="px-3 py-1 rounded-full bg-smoke border border-bone/10 uppercase tracking-widest text-bone-warm">
            {product.gender}
          </span>
          <span className="text-muted">•</span>
          <span className="text-muted">SKU: {product.id}</span>
        </div>

        <h1 className="font-brand font-bold text-3xl sm:text-4xl text-white tracking-[0.01em]">
          {product.title}
        </h1>

        {/* Pricing */}
        <div className="flex items-baseline gap-3 pt-1">
          <span className="font-spec font-black text-3xl text-white">
            CA${product.salePrice.toFixed(2)}
          </span>
          {discountPercent > 0 && (
            <>
              <span className="font-spec text-lg text-muted line-through">
                CA${product.listPrice.toFixed(2)}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-oxblood text-white font-spec text-xs font-bold uppercase">
                Save {discountPercent}%
              </span>
            </>
          )}
        </div>
      </div>

      {/* Description Blurb */}
      <p className="font-body text-base text-bone-warm leading-relaxed">
        {product.blurb}
      </p>


      {/* Sizing & Made-To-Measure Guidance Box */}
      <div className="p-5 rounded-2xl bg-charcoal border border-bone/15 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-xs font-spec uppercase tracking-wider text-brass">
            <Ruler className="w-4 h-4" />
            <span>Available Sizes</span>
          </h2>
          <Link
            href="/size-guide"
            className="text-xs font-display font-bold text-bone-warm hover:text-white underline"
          >
            View Measuring Guide →
          </Link>
        </div>

        {/* Standard Sizes Pills */}
        <div className="flex flex-wrap gap-2">
          {['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'].map((s) => (
            <span
              key={s}
              className="py-1.5 px-3 rounded-lg bg-smoke border border-bone/10 text-xs font-spec text-white"
            >
              {s}
            </span>
          ))}
          <span className="py-1.5 px-3 rounded-lg bg-saddle/20 border border-brass/40 text-xs font-spec text-brass font-bold">
            Custom Made-to-Measure
          </span>
        </div>

        <p className="font-body text-xs text-muted leading-relaxed">
          Order in standard sizing or choose custom tailored cut. When ordering on Etsy or eBay, enter your chest, sleeve, and back length in the order notes or send via direct message.
        </p>
      </div>

      {/* Marketplace Outbound Buying CTAs */}
      <div className="pt-2">
        <MarketplaceButtons product={product} size="large" />
      </div>

      {/* Accordion Specifications */}
      <div className="space-y-3 pt-4 border-t border-bone/10 font-display">
        {/* Spec: Material */}
        <div className="border border-bone/10 rounded-xl overflow-hidden bg-charcoal">
          <button
            type="button"
            onClick={() => toggleSpec('materials')}
            className="w-full p-4 text-left flex items-center justify-between text-sm font-bold text-white cursor-pointer"
          >
            <span>Material &amp; Construction</span>
            <ChevronDown
              className={`w-4 h-4 text-brass transition-transform ${
                openSpec === 'materials' ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openSpec === 'materials' && (
            <div className="p-4 pt-1 text-xs font-body text-bone-warm leading-relaxed border-t border-bone/10 space-y-2">
              <p>
                <strong>Specification:</strong> {product.material}
              </p>
              <p>
                Individually bench-cut to align hide grain and avoid stretch deformities over time. Double-stitched high-stress seams with bonded nylon thread.
              </p>
            </div>
          )}
        </div>

        {/* Spec: Shipping & Dispatch */}
        <div className="border border-bone/10 rounded-xl overflow-hidden bg-charcoal">
          <button
            type="button"
            onClick={() => toggleSpec('shipping')}
            className="w-full p-4 text-left flex items-center justify-between text-sm font-bold text-white cursor-pointer"
          >
            <span>Production &amp; Dispatch Timeline</span>
            <ChevronDown
              className={`w-4 h-4 text-brass transition-transform ${
                openSpec === 'shipping' ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openSpec === 'shipping' && (
            <div className="p-4 pt-1 text-xs font-body text-bone-warm leading-relaxed border-t border-bone/10 space-y-1.5">
              <p>
                • <strong>Standard sizes:</strong> Dispatch in 3–5 business days.
              </p>
              <p>
                • <strong>Made-to-Measure:</strong> Patterned and tailored in 10–14 days.
              </p>
              <p>
                • <strong>Courier:</strong> Express tracked delivery with tracking numbers provided immediately.
              </p>
            </div>
          )}
        </div>

        {/* Spec: Remake Guarantee */}
        <div className="border border-bone/10 rounded-xl overflow-hidden bg-charcoal">
          <button
            type="button"
            onClick={() => toggleSpec('guarantee')}
            className="w-full p-4 text-left flex items-center justify-between text-sm font-bold text-white cursor-pointer"
          >
            <span>Workshop Guarantee &amp; Remakes</span>
            <ChevronDown
              className={`w-4 h-4 text-brass transition-transform ${
                openSpec === 'guarantee' ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openSpec === 'guarantee' && (
            <div className="p-4 pt-1 text-xs font-body text-bone-warm leading-relaxed border-t border-bone/10 space-y-1.5">
              <p>
                If your bespoke jacket deviates from your submitted numbers or has any workshop defect, we alter or remake it free of charge. Full buyer protection via Etsy &amp; eBay.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
