import React, { Suspense } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { PRODUCTS } from '@/lib/products'
import { SITE, absoluteUrl } from '@/lib/site'
import { ShopView } from './ShopView'

export const metadata: Metadata = {
  title: 'Shop Leather Jackets & Outerwear',
  description:
    'All 49 pieces: biker jackets, cafe racers, bombers, truckers, coats and vests in leather, suede and shearling. Standard sizes or made-to-measure.',
  alternates: {
    canonical: '/shop',
  },
}

export default function ShopPage() {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'All Outerwear — Kingsford Leather Catalogue',
    description: 'Complete archive of handcrafted genuine leather, suede, and shearling outerwear.',
    url: `${SITE.url}/shop`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: PRODUCTS.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${SITE.url}/products/${item.slug}`,
        name: item.title,
        image: absoluteUrl(item.image),
      })),
    },
  }

  return (
    <div className="bg-night text-bone min-h-screen py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-spec text-muted">
          <Link href="/" className="hover:text-bone transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-muted/60" />
          <span className="text-brass">Shop All Outerwear</span>
        </nav>

        {/* Hero Header */}
        <div className="bg-charcoal border border-bone/10 rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl space-y-3">
            <h1 className="font-brand font-bold text-3xl sm:text-5xl text-white tracking-[0.015em]">
              The Complete Collection
            </h1>
            <p className="font-body text-base sm:text-lg text-bone-warm leading-relaxed">
              Every jacket is bench-cut to order from authentic cowhide, sheepskin, or suede. Available in standard off-the-rack sizing (XS–5XL) or tailored to your custom measurements.
            </p>
          </div>
        </div>

        {/* Dynamic Shop Grid & Filters (Wrapped in Suspense for searchParams) */}
        <Suspense fallback={<div className="py-20 text-center font-spec text-muted">Loading catalogue archive...</div>}>
          <ShopView allProducts={PRODUCTS} />
        </Suspense>

      </div>
    </div>
  )
}
