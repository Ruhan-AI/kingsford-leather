import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Manrope, Cinzel } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { AnnouncementBar } from '@/components/layout/AnnouncementBar'
import { SITE, SHOP_STATS } from '@/lib/site'

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-brand',
  weight: ['400', '500', '600', '700', '900'],
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Kingsford Leather | Handcrafted Leather Outerwear & Made-To-Measure Jackets',
    template: '%s | Kingsford Leather',
  },
  description:
    'Direct-from-maker genuine cowhide, sheepskin, and suede leather jackets. Biker, cafe racer, bomber, and western cuts in standard or bespoke made-to-measure sizing.',
  keywords: [
    'handmade leather jackets',
    'custom leather jacket canada',
    'made to measure leather outerwear',
    'mens biker jacket cowhide',
    'vintage cafe racer jacket',
    'tan suede bomber jacket',
    'shearling aviator coat',
    'western leather trucker jacket',
    'womens leather jacket bespoke',
    'direct from maker leather outerwear',
  ],
  authors: [{ name: 'Kingsford Leather Workshop' }],
  creator: 'Kingsford Leather',
  publisher: 'Kingsford Leather',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-CA': '/',
      'en-US': '/us',
      'en-GB': '/uk',
    },
  },
  openGraph: {
    title: 'Kingsford Leather | Handcrafted Leather Outerwear & Made-To-Measure Jackets',
    description:
      'Direct-from-maker genuine leather and suede jackets. Biker, cafe racer, bomber & shearling outerwear crafted to your measurements.',
    url: SITE.url,
    siteName: 'Kingsford Leather',
    images: [
      {
        url: '/images/og-card.png',
        width: 1200,
        height: 630,
        alt: 'Kingsford Leather — crowned K crest',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kingsford Leather | Handcrafted Leather Outerwear',
    description:
      'Direct-from-maker genuine leather jackets, cafe racers, and bombers in standard or made-to-measure sizing.',
    images: ['/images/og-card.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' },
      { url: '/images/kingsford-crest.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ClothingStore',
    name: 'Kingsford Leather',
    url: SITE.url,
    logo: `${SITE.url}/images/kingsford-crest.png`,
    image: `${SITE.url}/images/kingsford-crest.png`,
    description: SITE.description,
    priceRange: '$$',
    currenciesAccepted: 'CAD, USD, GBP, EUR',
    paymentAccepted: 'Credit Card, PayPal, Apple Pay',
    areaServed: ['CA', 'US', 'GB', 'AU', 'Worldwide'],
    sameAs: [
      SITE.etsyUrl,
      SITE.ebayUrl,
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SHOP_STATS.rating.toString(),
      reviewCount: SHOP_STATS.reviewCount.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    knowsAbout: [
      'Handcrafted Leather Jackets',
      'Made-To-Measure Outerwear',
      'Full Grain Cowhide',
      'Suede Bombers',
      'Cafe Racer Motorcycle Jackets',
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Kingsford Leather',
    url: SITE.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE.url}/shop?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} ${cinzel.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className="min-h-screen bg-white text-[#2c2925] font-body antialiased flex flex-col justify-between selection:bg-[#8b5a35] selection:text-white"
        suppressHydrationWarning
      >
        <AnnouncementBar />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
