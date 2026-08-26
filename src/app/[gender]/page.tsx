import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft, ExternalLink, Scissors, Sparkles, ChevronRight } from 'lucide-react'
import { PRODUCTS, Gender, primaryBuyLink } from '@/lib/products'
import { SITE } from '@/lib/site'

type Props = {
  params: Promise<{ gender: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { gender } = await params
  if (gender !== 'men' && gender !== 'women') return {}
  
  const title = gender === 'men' ? "Men's Handcrafted Leather Jackets & Outerwear" : "Women's Genuine Leather Jackets & Suede Outerwear"
  const description =
    gender === 'men'
      ? "Explore handcrafted men's leather jackets: cafe racers, heavy cowhide biker jackets, suede bombers, and shearling aviators. Standard sizing and made-to-measure bespoke options."
      : "Shop tailored women's genuine leather outerwear: western suede truckers, shearling flight jackets, biker coats, and trench outerwear. Custom sizing available."

  return {
    title,
    description,
    keywords: [
      `${gender} leather jackets`,
      `${gender} custom leather coat`,
      `${gender} suede bomber jacket`,
      `${gender} cafe racer leather`,
      `${gender} biker motorcycle jacket`,
      'made to measure leather outerwear',
      'Kingsford Leather Canada',
    ],
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
  const title = gender === 'men' ? "Men's Outerwear Collection" : "Women's Outerwear Collection"
  const subtitle =
    gender === 'men'
      ? 'Heavyweight cowhide double-riders, vintage cafe racers, suede bombers and flight jackets.'
      : 'Tailored feminine cuts, western suede truckers, shearling aviators and trench coats.'

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
        image: item.image,
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
    <div className="bg-[#14191c] text-[#deded8] min-h-screen py-10">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-spec text-[#8b9298]">
          <Link href="/" className="hover:text-[#deded8] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-[#8b9298]/60" />
          <span className="text-[#d4ac5e] capitalize">
            {gender}'s Collection
          </span>
        </nav>

        {/* Header Banner */}
        <div className="bg-[#192025] border border-[#deded8]/10 rounded-2xl p-8 sm:p-12 mb-12 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="text-xs font-spec uppercase tracking-widest text-[#d4ac5e]">
              Curated Archive • {collection.length} Styles Available
            </span>
            <h1 className="font-brand font-bold text-3xl sm:text-5xl text-white tracking-[0.015em]">
              {title}
            </h1>
            <p className="font-body text-base sm:text-lg text-[#c5c3b9] leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {collection.map((product) => {
            const discountPercent = Math.round(
              ((product.listPrice - product.salePrice) / product.listPrice) * 100
            )
            return (
              <div
                key={product.id}
                className="bg-[#192025] border border-[#deded8]/10 rounded-xl overflow-hidden flex flex-col group hover:border-[#d4ac5e]/40 transition-all duration-300 shadow-md"
              >
                <div className="relative aspect-[4/5] w-full bg-[#14191c]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-500"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                  <div className="absolute top-3 left-3 flex gap-1">
                    <span className="px-2 py-0.5 rounded bg-[#14191c]/80 text-[10px] font-spec uppercase text-[#c5c3b9] border border-[#deded8]/15">
                      {product.material}
                    </span>
                    {discountPercent > 0 && (
                      <span className="px-2 py-0.5 rounded bg-[#5e1c20] text-white text-[10px] font-spec font-bold uppercase">
                        {discountPercent}% OFF
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-display font-bold text-sm text-[#deded8] line-clamp-1 group-hover:text-[#d4ac5e] transition-colors">
                      {product.title}
                    </h3>
                    <p className="font-body text-xs text-[#8b9298] line-clamp-2 mt-1">
                      {product.blurb}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#deded8]/10 flex items-baseline justify-between font-spec">
                    <span className="text-base font-bold text-white">
                      CA${product.salePrice.toFixed(2)}
                    </span>
                    {product.listPrice > product.salePrice && (
                      <span className="text-xs text-[#8b9298] line-through">
                        CA${product.listPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <Link
                      href={`/products/${product.slug}`}
                      className="w-full py-2 bg-[#14191c] hover:bg-[#2b353b] text-[#deded8] border border-[#deded8]/15 rounded text-xs font-display font-semibold text-center transition-colors"
                    >
                      Specifications
                    </Link>
                    <a
                      href={primaryBuyLink(product).url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 bg-[#b8733e] hover:bg-[#5e1c20] text-white rounded text-xs font-display font-semibold text-center transition-colors flex items-center justify-center gap-1"
                    >
                      <span>Buy on {primaryBuyLink(product).marketplace}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}
