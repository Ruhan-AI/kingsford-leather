import type { Metadata, Viewport } from 'next'
import { Archivo, Newsreader, Martian_Mono, Cinzel } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SITE, SHOP_STATS } from '@/lib/site'

/**
 * The brand face. The Kingsford Leather wordmark is set in Trajan-style Roman
 * inscriptional capitals — spurred G, splayed R leg, fine bracketed serifs.
 * Cinzel is the closest match available as a web font, and it is what the
 * wordmark, the crest monogram and every section heading are set in, so the
 * lockup and the page speak with one voice.
 */
const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-brand',
  weight: ['400', '500', '600', '700', '900'],
  display: 'swap',
})

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  style: ['normal', 'italic'],
})

const martianMono = Martian_Mono({
  subsets: ['latin'],
  variable: '--font-spec',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#14191c',
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
  // The favicon and apple touch icon come from src/app/icon.png and
  // src/app/apple-icon.png by file convention — both generated from the crest.
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
      target: `${SITE.url}/#collection?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${archivo.variable} ${newsreader.variable} ${martianMono.variable}`}
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
      <body className="min-h-screen bg-[#14191c] text-[#deded8] font-body antialiased flex flex-col justify-between selection:bg-[#b8733e] selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

