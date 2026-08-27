import React, { Suspense } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { PRODUCTS, CATEGORIES } from '@/lib/products'
import { SITE, absoluteUrl } from '@/lib/site'
import { ShopView } from '@/app/shop/ShopView'

type Props = {
  params: Promise<{ category: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const found = CATEGORIES.find((c) => c.slug === category)
  if (!found) return {}

  const title = `${found.label} Jackets & Outerwear`
  const description = `Discover handcrafted ${found.label.toLowerCase()} outerwear bench-cut from genuine hides. Standard sizing and bespoke made-to-measure.`

  return {
    title,
    description,
    alternates: {
      canonical: `/collections/${category}`,
    },
  }
}

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }))
}

export default async function CategoryCollectionPage({ params }: Props) {
  const { category } = await params
  const catObj = CATEGORIES.find((c) => c.slug === category)

  if (!catObj) {
    notFound()
  }

  const collection = PRODUCTS.filter((p) => p.category === category)

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${catObj.label} Collection`,
    description: `Handcrafted ${catObj.label.toLowerCase()} outerwear from Kingsford Leather.`,
    url: `${SITE.url}/collections/${category}`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: collection.map((item, index) => ({
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
          <Link href="/shop" className="hover:text-bone transition-colors">
            Shop
          </Link>
          <ChevronRight className="w-3 h-3 text-muted/60" />
          <span className="text-brass">{catObj.label}</span>
        </nav>

        {/* Header Banner */}
        <div className="bg-charcoal border border-bone/10 rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl space-y-3">
            <h1 className="font-brand font-bold text-3xl sm:text-5xl text-white tracking-[0.015em]">
              {catObj.label} Outerwear
            </h1>
            <p className="font-body text-base sm:text-lg text-bone-warm leading-relaxed">
              Explore our bench-cut {catObj.label.toLowerCase()} pieces. Every jacket is individually crafted upon order from select hides.
            </p>
          </div>
        </div>

        {/* Grid & Filters */}
        <Suspense fallback={<div className="py-20 text-center font-spec text-muted">Loading category collection...</div>}>
          <ShopView allProducts={collection} />
        </Suspense>

      </div>
    </div>
  )
}
