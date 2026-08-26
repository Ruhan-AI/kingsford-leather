import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Scissors, ShieldCheck, ArrowLeft, ExternalLink, Star, CheckCircle, Truck, RefreshCw, Sparkles, ChevronRight } from 'lucide-react'
import { PRODUCTS, Product, buyLinks } from '@/lib/products'
import { SITE } from '@/lib/site'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = PRODUCTS.find((p) => p.slug === slug)
  if (!product) return { title: 'Product Not Found | Kingsford Leather' }

  const canonicalUrl = `/products/${product.slug}`

  return {
    title: `${product.title} — Made-To-Measure`,
    description: `${product.blurb} Handcrafted genuine ${product.material} leather outerwear. Made-to-measure custom fit or standard sizing. Free tracked delivery.`,
    keywords: [
      product.title,
      `${product.material} leather jacket`,
      `${product.category} jacket`,
      `custom ${product.gender} leather outerwear`,
      'made to measure leather jacket',
      'Kingsford Leather',
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${product.title} — Handcrafted Leather Outerwear`,
      description: `${product.blurb} Bench-cut from authentic ${product.material}. Available in standard sizes & custom bespoke fit.`,
      url: `${SITE.url}/products/${product.slug}`,
      siteName: 'Kingsford Leather',
      images: [
        {
          url: product.image,
          width: 800,
          height: 1000,
          alt: `${product.title} Handcrafted Genuine ${product.material}`,
        },
        ...product.images.slice(1, 4).map((img, idx) => ({
          url: img,
          width: 800,
          height: 1000,
          alt: `${product.title} detail angle ${idx + 2}`,
        })),
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.title} | Kingsford Leather`,
      description: product.blurb,
      images: [product.image],
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

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4)

  const discountPercent = Math.round(
    ((product.listPrice - product.salePrice) / product.listPrice) * 100
  )

  const links = buyLinks(product)

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    image: product.images,
    description: product.description,
    sku: `KL-${product.id}`,
    mpn: product.id,
    brand: {
      '@type': 'Brand',
      name: 'Kingsford Leather',
      logo: `${SITE.url}/images/kingsford-crest.png`,
    },
    material: product.material,
    category: product.category,
    offers: {
      '@type': 'Offer',
      price: product.salePrice.toFixed(2),
      priceCurrency: 'CAD',
      priceValidUntil: '2027-12-31',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      url: `${SITE.url}/products/${product.slug}`,
      seller: {
        '@type': 'Organization',
        name: 'Kingsford Leather',
      },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: '0',
          currency: 'CAD',
        },
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: ['CA', 'US', 'GB', 'AU'],
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: {
            '@type': 'QuantitativeValue',
            minValue: 3,
            maxValue: 7,
            unitCode: 'd',
          },
          transitTime: {
            '@type': 'QuantitativeValue',
            minValue: 4,
            maxValue: 10,
            unitCode: 'd',
          },
        },
      },
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        applicableCountry: 'CA',
        returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
        merchantReturnDays: 30,
        returnMethod: 'https://schema.org/ReturnByMail',
        returnFees: 'https://schema.org/FreeReturn',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '2',
      bestRating: '5',
      worstRating: '1',
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
        name: product.gender === 'men' ? "Men's Collection" : "Women's Collection",
        item: `${SITE.url}/${product.gender}`,
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
    <div className="bg-[#14191c] text-[#deded8] min-h-screen py-8">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SEO Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-spec text-[#8b9298]">
          <Link href="/" className="hover:text-[#deded8] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-[#8b9298]/60" />
          <Link
            href={`/${product.gender}`}
            className="hover:text-[#deded8] transition-colors capitalize"
          >
            {product.gender}'s Collection
          </Link>
          <ChevronRight className="w-3 h-3 text-[#8b9298]/60" />
          <span className="text-[#d4ac5e] truncate max-w-[200px] sm:max-w-md">
            {product.title}
          </span>
        </nav>

        {/* Product Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Gallery Column */}
          <div className="lg:col-span-7 space-y-4">
            {/* Primary High-Res Shot */}
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#192025] border border-[#deded8]/15 shadow-2xl">
              <Image
                src={product.image}
                alt={product.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 bg-[#14191c]/80 backdrop-blur-md border border-[#deded8]/20 text-[#d4ac5e] text-xs font-spec uppercase rounded">
                  {product.material}
                </span>
                {discountPercent > 0 && (
                  <span className="px-3 py-1 bg-[#5e1c20] text-white text-xs font-spec font-bold uppercase rounded">
                    {discountPercent}% OFF LIST
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail Grid */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
                {product.images.map((imgUrl, i) => (
                  <div
                    key={i}
                    className="relative aspect-square rounded-lg overflow-hidden bg-[#192025] border border-[#deded8]/15 hover:border-[#d4ac5e] transition-all cursor-pointer group"
                  >
                    <Image
                      src={imgUrl}
                      alt={`${product.title} view ${i + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                      sizes="120px"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Purchase & Specification Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Header Info */}
            <div className="space-y-2 border-b border-[#deded8]/10 pb-6">
              <div className="flex items-center gap-2 text-xs font-spec text-[#d4ac5e]">
                <span className="uppercase tracking-widest">{product.category.replace('-', ' ')}</span>
                <span>•</span>
                <span className="text-[#8b9298] uppercase">{product.gender}</span>
              </div>
              <h1 className="font-brand font-bold text-2xl sm:text-3xl text-white leading-snug tracking-[0.01em]">
                {product.title}
              </h1>
              
              {/* Pricing */}
              <div className="flex items-baseline gap-3 pt-2 font-spec">
                <span className="text-3xl font-black text-white">
                  CA${product.salePrice.toFixed(2)}
                </span>
                {discountPercent > 0 && (
                  <>
                    <span className="text-base text-[#8b9298] line-through">
                      CA${product.listPrice.toFixed(2)}
                    </span>
                    <span className="text-xs text-emerald-400 font-semibold">
                      Save CA${(product.listPrice - product.salePrice).toFixed(2)}
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* The Size Fork (Standard vs Made-To-Measure) */}
            <div className="bg-[#192025] border border-[#deded8]/15 rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-sm text-white">Select Sizing Mode</span>
                <Link href="/#docket" className="text-xs font-spec text-[#d4ac5e] hover:underline flex items-center gap-1">
                  <Scissors className="w-3 h-3" />
                  <span>The Docket Guide</span>
                </Link>
              </div>

              {/* Standard Sizes */}
              <div>
                <span className="text-[11px] font-spec text-[#8b9298] uppercase block mb-2">
                  Off-The-Rack Sizing (Dispatches in 3–5 days)
                </span>
                <div className="grid grid-cols-5 gap-2 font-spec text-xs">
                  {['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'].map((sz) => (
                    <div
                      key={sz}
                      className="py-2 text-center bg-[#14191c] border border-[#deded8]/10 rounded hover:border-[#d4ac5e] hover:text-[#d4ac5e] transition-colors cursor-pointer text-[#deded8]"
                    >
                      {sz}
                    </div>
                  ))}
                </div>
              </div>

              {/* Made to Measure Option */}
              <div className="p-3 bg-[#14191c] border border-[#d4ac5e]/30 rounded-lg flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-display font-bold text-xs text-white flex items-center gap-1.5">
                    <Scissors className="w-3.5 h-3.5 text-[#d4ac5e]" />
                    <span>Made-To-Measure Available</span>
                  </div>
                  <div className="font-body text-[11px] text-[#8b9298]">
                    Send your exact chest & sleeve measurements with your order.
                  </div>
                </div>
                <Link
                  href="/#docket"
                  className="px-3 py-1.5 bg-[#d4ac5e] hover:bg-[#b8733e] text-[#14191c] hover:text-white font-spec text-[11px] font-bold rounded transition-colors"
                >
                  Fill Docket
                </Link>
              </div>
            </div>

            {/* Buy paths. Both marketplaces when the piece is listed on both. */}
            <div className="space-y-3">
              {links.map((link, i) => (
                <a
                  key={link.marketplace}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 px-6 font-display font-bold text-base rounded-xl transition-all flex items-center justify-center gap-2 group ${
                    i === 0
                      ? 'bg-[#b8733e] hover:bg-[#5e1c20] text-white shadow-xl shadow-[#b8733e]/20'
                      : 'bg-[#1f262b] hover:bg-[#2b353b] text-[#deded8] hover:text-white border border-[#deded8]/20'
                  }`}
                >
                  <span>Purchase on Official {link.marketplace} Shop</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              ))}

              <p className="text-[11px] font-spec text-center text-[#8b9298]">
                {links.length > 1
                  ? 'Listed on both shops — same garment, same workshop. Pick whichever you already buy from.'
                  : `Protected by the ${links[0].marketplace} buyer guarantee • Tracked worldwide shipping from workshop`}
              </p>
            </div>

            {/* Technical Specifications Table */}
            <div className="bg-[#192025] border border-[#deded8]/10 rounded-xl p-5 space-y-3 font-spec text-xs">
              <h3 className="font-display font-bold text-sm text-white pb-2 border-b border-[#deded8]/10">
                Technical Specifications
              </h3>
              <div className="flex justify-between py-1 border-b border-[#deded8]/5">
                <span className="text-[#8b9298]">MATERIAL / HIDE:</span>
                <span className="text-[#deded8] font-bold">{product.material}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#deded8]/5">
                <span className="text-[#8b9298]">SILHOUETTE / CUT:</span>
                <span className="text-[#deded8] uppercase">{product.category}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#deded8]/5">
                <span className="text-[#8b9298]">HARDWARE:</span>
                <span className="text-[#d4ac5e]">Solid Antiqued Brass / YKK Metal Zips</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#deded8]/5">
                <span className="text-[#8b9298]">ORIGIN & WORKSHOP:</span>
                <span className="text-[#deded8]">Direct Craft Facility, Sialkot</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#8b9298]">CUSTOMER MARKET:</span>
                <span className="text-[#deded8]">Canada / Global Fulfillment</span>
              </div>
            </div>

            {/* Garment Description */}
            <div className="space-y-2">
              <h3 className="font-display font-bold text-sm text-white">About This Garment</h3>
              <p className="font-body text-sm text-[#c5c3b9] leading-relaxed">
                {product.description}
              </p>
            </div>

          </div>

        </div>

        {/* Related Products Carousel */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-[#deded8]/10">
            <h2 className="font-display font-bold text-2xl text-white mb-6">
              More {product.category.replace('-', ' ')} Silhouettes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/products/${rel.slug}`}
                  className="bg-[#192025] border border-[#deded8]/10 rounded-xl overflow-hidden group hover:border-[#d4ac5e]/40 transition-all flex flex-col"
                >
                  <div className="relative aspect-[4/5] w-full bg-[#14191c]">
                    <Image
                      src={rel.image}
                      alt={rel.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="25vw"
                    />
                  </div>
                  <div className="p-4 space-y-1">
                    <h4 className="font-display font-bold text-xs text-[#deded8] line-clamp-1 group-hover:text-[#d4ac5e] transition-colors">
                      {rel.title}
                    </h4>
                    <div className="font-spec text-xs font-bold text-white">
                      CA${rel.salePrice.toFixed(2)}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
