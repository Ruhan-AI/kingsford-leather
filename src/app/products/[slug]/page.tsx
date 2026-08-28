import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { ProductGallery } from '@/components/product/ProductGallery'
import { ProductSummary } from '@/components/product/ProductSummary'
import { ProductCard } from '@/components/catalog/ProductCard'
import { MobileMarketplaceBar } from '@/components/product/MobileMarketplaceBar'
import { PRODUCTS, CATEGORIES } from '@/lib/products'
import { SITE, absoluteUrl } from '@/lib/site'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = PRODUCTS.find((p) => p.slug === slug)
  if (!product) return {}

  const title = `${product.title} | Kingsford Leather`
  const description = `${product.blurb} Handcrafted in ${product.material}. Available in standard sizes and bespoke made-to-measure measurements on Etsy and eBay.`

  return {
    title,
    description,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE.url}/products/${product.slug}`,
      siteName: 'Kingsford Leather',
      images: [
        {
          url: product.image,
          width: 800,
          height: 1000,
          alt: product.title,
        },
      ],
      type: 'website',
    },
  }
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }))
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params
  const product = PRODUCTS.find((p) => p.slug === slug)

  if (!product) {
    notFound()
  }

  const categoryObj = CATEGORIES.find((c) => c.slug === product.category)
  const categoryLabel = categoryObj ? categoryObj.label : product.category

  // Related products from same category or gender
  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.gender === product.gender)
  ).slice(0, 4)

  const productImages = product.images?.length ? product.images : [product.image]

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    image: productImages.map(absoluteUrl),
    description: product.description,
    sku: product.id,
    material: product.material,
    category: product.category,
    brand: {
      '@type': 'Brand',
      name: 'Kingsford Leather',
    },
    offers: {
      '@type': 'Offer',
      url: `${SITE.url}/products/${product.slug}`,
      priceCurrency: 'CAD',
      price: product.salePrice.toString(),
      itemCondition: 'https://schema.org/NewCondition',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Kingsford Leather',
      },
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
        name: 'Shop',
        item: `${SITE.url}/shop`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: categoryLabel,
        item: `${SITE.url}/collections/${product.category}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: product.title,
        item: `${SITE.url}/products/${product.slug}`,
      },
    ],
  }

  return (
    <div className="bg-white py-5 sm:py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Container size="wide">
        {/* Breadcrumb Navigation */}
        <div className="mb-4">
          <Breadcrumbs
            items={[
              { label: 'Shop', href: '/shop' },
              { label: categoryLabel, href: `/collections/${product.category}` },
              { label: product.title },
            ]}
          />
        </div>

        {/* 2-Column Product Showcase (58% / 42% split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start pb-10 border-b border-[#ded7ce]">
          {/* Left Column: Gallery (7 cols on lg / ~58%) */}
          <div className="lg:col-span-7 lg:sticky lg:top-24">
            <ProductGallery
              title={product.title}
              images={productImages}
            />
          </div>

          {/* Right Column: Product Summary & Marketplace Conversion (5 cols on lg / ~42%) */}
          <div className="lg:col-span-5">
            <ProductSummary product={product} />
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="pt-10 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8b5a35] block">
                  Complementary Cuts
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#1c1a17] font-normal mt-1">
                  You May Also Admire
                </h2>
              </div>
              <Link
                href={`/collections/${product.category}`}
                className="text-xs font-semibold text-[#8b5a35] hover:text-[#5d3923] underline"
              >
                More in {categoryLabel} →
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </Container>

      {/* Sticky Mobile Marketplace Outbound Bar */}
      <MobileMarketplaceBar product={product} />
    </div>
  )
}
