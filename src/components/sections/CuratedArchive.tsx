import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PRODUCTS } from '@/lib/products'
import { ProductCard } from '@/components/product/ProductCard'
import { ProductGridReveal } from '@/components/motion/ProductGridReveal'

export function CuratedArchive() {
  // Show 8 diverse curated jackets on the home page
  const curatedProducts = PRODUCTS.slice(0, 8)

  return (
    <section className="py-20 bg-night text-bone border-t border-bone/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-2xl space-y-2">
          <h2 className="font-brand font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-[0.01em]">
            Curated Outerwear Archive
          </h2>
          <p className="font-body text-base text-bone-warm">
            Explore our current made-to-order outerwear lineup. Available in standard off-the-rack sizing or bespoke measurements.
          </p>
        </div>

        {/* Grid */}
        <ProductGridReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {curatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGridReveal>

        {/* Bottom Prominent Catalogue CTA */}
        <div className="pt-6 sm:pt-8 flex flex-col items-center justify-center gap-4 sm:gap-5 text-center">
          <Link
            href="/shop"
            className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-saddle hover:bg-saddle-hover text-white font-display font-semibold text-sm sm:text-base px-9 py-4 shadow-xl shadow-saddle/25 hover:shadow-saddle/40 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
          >
            <span>Explore Full Catalogue ({PRODUCTS.length} Pieces)</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <p className="font-spec text-xs sm:text-[13px] text-muted tracking-wide">
            All 52 handcrafted jackets with standard &amp; custom sizing options
          </p>
        </div>

      </div>
    </section>
  )
}
