'use client'

export type AnalyticsEventName =
  | 'view_home'
  | 'view_collection'
  | 'view_product'
  | 'search_open'
  | 'search_submit'
  | 'filter_apply'
  | 'filter_clear'
  | 'select_product'
  | 'marketplace_click'
  | 'size_guide_open'
  | 'guide_view'
  | 'faq_expand'

export type MarketplaceClickProps = {
  marketplace: 'etsy' | 'ebay'
  productId?: string
  productSlug?: string
  source: 'header' | 'footer' | 'product' | 'collection' | 'home' | 'shipping'
  destinationType: 'product' | 'store'
}

export type EventProperties = {
  productId?: string
  productSlug?: string
  category?: string
  query?: string
  filterKey?: string
  filterValue?: string
  guideSlug?: string
  [key: string]: unknown
}

/**
 * Non-blocking, privacy-preserving event tracker.
 * Strictly avoids capturing PII or personal data.
 */
export function trackEvent(
  eventName: AnalyticsEventName,
  properties?: EventProperties | MarketplaceClickProps
): void {
  if (typeof window === 'undefined') return

  try {
    // 1. Google Analytics 4 if present
    if (typeof (window as any).gtag === 'function') {
      ;(window as any).gtag('event', eventName, properties)
    }

    // 2. Safe console logging in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Analytics: ${eventName}]`, properties)
    }
  } catch {
    // Non-blocking
  }
}
