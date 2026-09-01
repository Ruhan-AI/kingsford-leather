import React from 'react'
import type { Metadata } from 'next'
import { CustomJacketsView } from '@/components/custom-jackets/CustomJacketsView'
import { SITE, absoluteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Custom Leather Jackets & Made-to-Measure Outerwear | Kingsford Leather',
  description:
    'Start a custom jacket request with Kingsford Leather. Choose a silhouette, share your fit, hide, and detail preferences, and continue through our verified Etsy or eBay route with full buyer protection.',
  alternates: {
    canonical: '/custom-jackets',
  },
  openGraph: {
    title: 'Custom Leather Jackets | Kingsford Leather',
    description:
      'Direct-from-maker bespoke leather outerwear. Biker, cafe racer, bomber, and shearling jackets customized to your specifications.',
    url: `${SITE.url}/custom-jackets`,
    siteName: SITE.name,
    images: [
      {
        url: absoluteUrl('/images/workshop/dress-form-mens.jpg'),
        width: 1200,
        height: 630,
        alt: 'Kingsford Leather Custom Jackets tailoring bench',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Leather Jackets | Kingsford Leather',
    description:
      'Handcrafted genuine leather and suede outerwear tailored to your specifications. Purchased securely on Etsy and eBay.',
    images: [absoluteUrl('/images/workshop/dress-form-mens.jpg')],
  },
}

export default function CustomJacketsPage() {
  const breadcrumbsSchema = {
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
        name: 'Custom Jackets',
        item: `${SITE.url}/custom-jackets`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <React.Suspense fallback={<div className="min-h-screen bg-white" />}>
        <CustomJacketsView />
      </React.Suspense>
    </>
  )
}
