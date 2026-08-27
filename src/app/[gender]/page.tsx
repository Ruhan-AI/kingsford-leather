import React, { Suspense } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { PRODUCTS, Gender } from '@/lib/products'
import { SITE, absoluteUrl } from '@/lib/site'
import { ShopView } from '@/app/shop/ShopView'

type Props = {
  params: Promise<{ gender: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { gender } = await params
  if (gender !== 'men' && gender !== 'women') return {}

  const title =
    gender === 'men'
      ? "Men's Leather Jackets & Outerwear"
      : "Women's Leather & Suede Outerwear"
  const description =
    gender === 'men'
      ? "Explore handcrafted men's leather jackets: cafe racers, heavy cowhide biker jackets, suede bombers, and shearling aviators, ordered through Etsy and eBay."
      : "Shop tailored women's genuine leather outerwear: western suede truckers, shearling flight jackets, blazers, and coats. Custom sizing available through Etsy & eBay."

  return {
    title,
    description,
    alternates: {
      canonical: `/${gender}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE.url}/${gender}`,
      siteName: 'Kingsford Leather',
      images: [
        {
          url: '/images/og-card.png',
          width: 1200,
          height: 630,
          alt: `Kingsford Leather ${gender}'s Collection`,
        },
      ],
      type: 'website',
    },
  }
}

export async function generateStaticParams() {
  return [{ gender: 'men' }, { gender: 'women' }]
}

export default async function GenderCollectionPage({ params }: Props) {
  const { gender } = await params

  if (gender !== 'men' && gender !== 'women') {
    notFound()
  }

  const collection = PRODUCTS.filter((p) => p.gender === gender || p.gender === 'unisex')
  const title = gender === 'men' ? "Men's Leather Collection" : "Women's Leather Collection"
  const subtitle =
    gender === 'men'
      ? 'Heavyweight cowhide double-riders, vintage cafe racers, suede bombers and flight jackets cut to order.'
      : 'Tailored feminine cuts, western suede truckers, shearling aviators, and blazers handcrafted to your numbers.'

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description: subtitle,
    url: `${SITE.url}/${gender}`,
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

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: `${gender === 'men' ? "Men's" : "Women's"} Collection`,
        item: `${SITE.url}/${gender}`,
      },
    ],
  }

  return (
    <div className="bg-night text-bone min-h-screen py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-spec text-muted">
          <Link href="/" className="hover:text-bone transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-muted/60" />
          <span className="text-brass capitalize">{gender}'s Collection</span>
        </nav>

        {/* Header Banner */}
        <div className="bg-charcoal border border-bone/10 rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl space-y-3">
            <h1 className="font-brand font-bold text-3xl sm:text-5xl text-white tracking-[0.015em]">
              {title}
            </h1>
            <p className="font-body text-base sm:text-lg text-bone-warm leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Grid & Filters */}
        <Suspense fallback={<div className="py-20 text-center font-spec text-muted">Loading {gender}'s collection...</div>}>
          <ShopView allProducts={collection} />
        </Suspense>

      </div>
    </div>
  )
}
