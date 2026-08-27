import React, { Suspense } from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { CatalogueShell } from '@/components/catalog/CatalogueShell'
import { PRODUCTS, CATEGORIES } from '@/lib/products'
import { SITE } from '@/lib/site'

type Props = {
  params: Promise<{ category: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const found = CATEGORIES.find((c) => c.slug === category)
  if (!found) return {}

  const title = `${found.label} Leather Outerwear | Kingsford Leather`
  const description = `Discover handcrafted ${found.label.toLowerCase()} jackets and outerwear made to order from genuine cowhide, sheepskin, and suede hides. Available through Etsy and eBay.`

  return {
    title,
    description,
    alternates: {
      canonical: `/collections/${category}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE.url}/collections/${category}`,
      siteName: 'Kingsford Leather',
      images: [
        {
          url: '/images/og-card.png',
          width: 1200,
          height: 630,
          alt: `Kingsford Leather ${found.label}`,
        },
      ],
      type: 'website',
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
    <div className="bg-white py-8 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <Container size="wide">
        {/* Breadcrumb & Header */}
        <div className="mb-8">
          <Breadcrumbs
            items={[
              { label: 'Shop', href: '/shop' },
              { label: catObj.label },
            ]}
            className="mb-4"
          />

          <div className="bg-[#f8f6f2] border border-[#ded7ce] rounded-[4px] p-6 sm:p-10">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8b5a35] block mb-2">
              Silhouette Showcase
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1c1a17] font-normal tracking-tight">
              {catObj.label} Outerwear
            </h1>
            <p className="text-sm sm:text-base text-[#706a62] mt-2 max-w-2xl font-sans">
              Explore our bench-cut {catObj.label.toLowerCase()} pieces. Every jacket is individually tailored upon order from select hides with standard or custom sizing.
            </p>
          </div>
        </div>

        {/* Dynamic Catalogue */}
        <Suspense
          fallback={
            <div className="py-20 text-center text-[#706a62] font-serif">
              Loading {catObj.label.toLowerCase()} collection...
            </div>
          }
        >
          <CatalogueShell initialProducts={collection} lockedCategory={category} />
        </Suspense>
      </Container>
    </div>
  )
}
