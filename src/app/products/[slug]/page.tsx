import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { PRODUCTS, Product, primaryBuyLink } from '@/lib/products'
import { SITE, absoluteUrl } from '@/lib/site'
import { ProductGallery } from '@/components/product/ProductGallery'
import { ProductInfo } from '@/components/product/ProductInfo'
import { ProductCard } from '@/components/product/ProductCard'
import { StickyMobileCTA } from './StickyMobileCTA'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = PRODUCTS.find((p) => p.slug === slug)
  if (!product) return {}

  const title = `${product.title}`
  // Not "genuine ${material}" — the catalogue includes fabric and Kodra pieces,
  // and the word turns an accurate spec into a claim those SKUs cannot carry.
  const description = `${product.blurb} Handcrafted in ${product.material}. Available in standard sizes and custom bespoke measurements.`

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

  // Related products from the same category or gender
  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.gender === product.gender)
  ).slice(0, 4)

  const productImages = product.images?.length ? product.images : [product.image]
  const primaryLink = primaryBuyLink(product)

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    image: productImages.map(absoluteUrl),
    // The full description, not the one-line blurb. `blurb` is card copy; the
    // catalogue carries a much richer per-SKU description that was not
    // reaching structured data at all.
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
      // No priceValidUntil: the previous fixed date was invented, and once it
      // passes Google treats the offer as expired. Marketplace pricing has no
      // published end date, so the correct move is to omit the field.
      itemCondition: 'https://schema.org/NewCondition',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Kingsford Leather',
      },
    },
    // No aggregateRating here on purpose. This block previously attached the
    // shop's 2 reviews to every one of the 49 products, so each page claimed a
    // 5.0 rating it does not individually have. A Product rating has to be that
    // product's own; the shop-level rating stays on Organization in layout.tsx.
    // Add it back per-SKU only when a product accumulates its own reviews.
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
        name: product.title,
        item: `${SITE.url}/products/${product.slug}`,
      },
    ],
  }

  return (
    <div className="bg-night text-bone min-h-screen py-8 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-spec text-muted overflow-x-auto">
          <Link href="/" className="hover:text-bone transition-colors shrink-0">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-muted/60 shrink-0" />
          <Link href="/shop" className="hover:text-bone transition-colors shrink-0">
            Shop
          </Link>
          <ChevronRight className="w-3 h-3 text-muted/60 shrink-0" />
          <Link
            href={`/collections/${product.category}`}
            className="hover:text-bone transition-colors capitalize shrink-0"
          >
            {product.category.replace('-', ' ')}
          </Link>
          <ChevronRight className="w-3 h-3 text-muted/60 shrink-0" />
          <span className="text-brass truncate">{product.title}</span>
        </nav>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Gallery */}
          <div className="lg:col-span-7 lg:sticky lg:top-24">
            <ProductGallery
              title={product.title}
              images={productImages}
            />
          </div>

          {/* Right Column: Info & Actions */}
          <div className="lg:col-span-5">
            <ProductInfo product={product} />
          </div>
        </div>

        {/* Related Products Carousel / Grid */}
        {relatedProducts.length > 0 && (
          <div className="pt-16 border-t border-bone/10 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-spec uppercase tracking-widest text-brass block">
                  Complementary Cuts
                </span>
                <h2 className="font-brand font-bold text-2xl text-white mt-1">
                  You May Also Admire
                </h2>
              </div>
              <Link
                href={`/collections/${product.category}`}
                className="text-xs font-display font-bold text-bone-warm hover:text-white transition-colors"
              >
                More in {product.category} →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Sticky Mobile Marketplace Outbound Bar */}
      <StickyMobileCTA product={product} primaryLink={primaryLink} />
    </div>
  )
}
