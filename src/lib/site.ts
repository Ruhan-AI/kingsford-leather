import { PRODUCTS } from './products'

/**
 * Brand facts.
 *
 * Every number here was read off the live shops on 26 Aug 2026 — Etsy for the
 * ratings, eBay for the feedback score. Nothing is rounded up, padded or
 * implied. Both shops are young — 3 Etsy sales, 2 Etsy reviews, 8 eBay
 * feedbacks — and the site says so, because a made-up number is the one thing
 * that would make the rest of it untrustworthy.
 */
export const SITE = {
  name: 'Kingsford Leather',
  tagline: 'Handmade leather outerwear, made to order',
  description:
    'Direct-from-maker handmade leather jackets, coats and vests — biker, cafe racer, bomber, western, shearling. Made to order in standard or custom made-to-measure sizes.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kingsfordleather.com',
  market: 'Canada',
  etsyShop: 'KingsfordLeatherCA',
  etsyUrl: 'https://www.etsy.com/ca/shop/KingsfordLeatherCA',
  etsyReviewsUrl: 'https://www.etsy.com/ca/shop/KingsfordLeatherCA#reviews',
  etsyPoliciesUrl: 'https://www.etsy.com/ca/shop/KingsfordLeatherCA#policies',
  ebayUrl: 'https://www.ebay.com/usr/kingsfordleather',
  logoUrl: '/images/kingsford-crest.png',
} as const

/** Verified shop stats. Update these only from the live shops. */
export const SHOP_STATS = {
  /** Unique garments across both shops, after de-duplicating the overlap. */
  listings: PRODUCTS.length,
  /** Pieces carrying an Etsy listing. */
  onEtsy: PRODUCTS.filter((p) => p.etsyUrl).length,
  /** Pieces carrying an eBay listing. */
  onEbay: PRODUCTS.filter((p) => p.ebayUrl).length,
  sales: 3,
  rating: 5.0,
  reviewCount: 2,
  ebayFeedbackCount: 8,
  ebayPositivePercent: 100,
  onEtsySince: 'June 2026',
} as const

/**
 * Claims. Each one is visible on the Etsy listings themselves, which is the
 * only reason it is repeated here.
 */
export const PROMISES: ReadonlyArray<{ label: string; detail: string }> = [
  {
    label: 'Free delivery on Etsy',
    detail: 'Every Etsy listing ships free. eBay listings carry a flat tracked shipping fee.',
  },
  {
    label: 'Made to order',
    detail: 'Nothing is cut before you order it, so nothing sits in a warehouse.',
  },
  {
    label: 'Standard or custom size',
    detail: 'Most pieces can be made to your own measurements at the same price.',
  },
  {
    label: 'Bought through Etsy or eBay',
    detail:
      'Payment, buyer protection and tracking are handled by the marketplace you order from.',
  },
]
