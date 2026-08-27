import React, { Suspense } from 'react'
import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { CatalogueShell } from '@/components/catalog/CatalogueShell'
import { PRODUCTS } from '@/lib/products'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Shop All 49 Pieces | Handcrafted Leather Outerwear',
  description:
    'Explore the complete Kingsford Leather catalogue of 49 verified biker, cafe racer, bomber, suede, shearling, and tailored coats. Custom sizing available on all made-to-order listings on Etsy and eBay.',
  alternates: {
    canonical: '/shop',
  },
}

export default function ShopPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Kingsford Leather Catalogue',
    numberOfItems: PRODUCTS.length,
    itemListElement: PRODUCTS.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: product.title,
      url: `${SITE.url}/products/${product.slug}`,
      image: `${SITE.url}${product.image}`,
    })),
  }

  return (
    <div className="bg-white py-8 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Container size="wide">
        {/* Header & Breadcrumbs */}
        <div className="mb-8">
          <Breadcrumbs items={[{ label: 'Shop All Pieces' }]} className="mb-4" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1c1a17] font-normal tracking-tight">
            The Complete Outerwear Catalogue
          </h1>
          <p className="text-sm sm:text-base text-[#706a62] mt-2 max-w-2xl font-sans">
            Every piece is cut and stitched to order from hand-selected cowhides, sheepskins, and genuine suedes. Browse our complete 49-piece collection below.
          </p>
        </div>

        {/* Dynamic Catalogue Shell wrapped in Suspense */}
        <Suspense
          fallback={
            <div className="py-20 text-center text-[#706a62] font-serif">
              Loading catalogue pieces...
            </div>
          }
        >
          <CatalogueShell initialProducts={PRODUCTS} />
        </Suspense>

        {/* Post-Grid Editorial & SEO Information */}
        <div className="mt-16 pt-12 border-t border-[#ded7ce] max-w-3xl">
          <h2 className="text-2xl font-serif text-[#1c1a17] mb-3 font-medium">
            About Our Made-to-Order Leather Outerwear
          </h2>
          <p className="text-sm text-[#706a62] leading-relaxed mb-4 font-sans">
            At Kingsford Leather, we do not operate high-volume automated warehouse stock. Every garment is crafted individually by our experienced tailors once your order is confirmed on our official Etsy or eBay stores. This made-to-order model allows us to offer standard sizing (XS to 3XL) as well as bespoke made-to-measure tailoring without retail markups.
          </p>
          <p className="text-sm text-[#706a62] leading-relaxed font-sans">
            Whether you are looking for an asymmetrical cowhide motorcycle jacket, a minimalist cafe racer, a winter shearling aviator, or a tailored full-length leather duster, each piece features premium YKK brass hardware, reinforced stitching, and durable interior linings built for years of wear.
          </p>
        </div>
      </Container>
    </div>
  )
}
