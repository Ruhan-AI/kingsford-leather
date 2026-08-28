import React, { Suspense } from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { CatalogueShell } from '@/components/catalog/CatalogueShell'
import { PRODUCTS } from '@/lib/products'
import { SITE } from '@/lib/site'

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
    title: `${title} | Kingsford Leather`,
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
      ? 'Heavyweight cowhide double-riders, vintage cafe racers, suede bombers, and flight jackets cut to order in standard or bespoke sizing.'
      : 'Tailored feminine silhouettes, western suede truckers, shearling aviators, and blazers handcrafted to your measurements.'

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description: subtitle,
    url: `${SITE.url}/${gender}`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: collection.length,
      itemListElement: collection.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${SITE.url}/products/${item.slug}`,
        name: item.title,
        image: `${SITE.url}${item.image}`,
      })),
    },
  }

  return (
    <div className="bg-white py-5 sm:py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <Container size="wide">
        {/* Breadcrumb & Header */}
        <div className="mb-5">
          <Breadcrumbs
            items={[{ label: `${gender === 'men' ? "Men's" : "Women's"} Collection` }]}
            className="mb-2.5"
          />
          <div className="bg-[#f8f6f2] border border-[#ded7ce] rounded-[4px] p-5 sm:p-7">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8b5a35] block mb-1">
              Curated Silhouette
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1c1a17] font-normal tracking-tight">
              {title}
            </h1>
            <p className="text-xs sm:text-sm text-[#706a62] mt-1.5 max-w-2xl font-sans">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Dynamic Catalogue */}
        <Suspense
          fallback={
            <div className="py-20 text-center text-[#706a62] font-serif">
              Loading {gender}&apos;s collection...
            </div>
          }
        >
          <CatalogueShell initialProducts={collection} lockedGender={gender as 'men' | 'women'} />
        </Suspense>
      </Container>
    </div>
  )
}
