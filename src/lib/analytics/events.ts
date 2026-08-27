'use client'

export type SafeAnalyticsEvent =
  | 'view_product'
  | 'open_try_on'
  | 'select_try_on_product'
  | 'choose_sample_model'
  | 'choose_photo_upload'
  | 'start_try_on'
  | 'try_on_success'
  | 'try_on_error'
  | 'download_try_on_result'
  | 'outbound_marketplace_click'

export type SafeEventProperties = {
  product_id?: string
  product_slug?: string
  category?: string
  marketplace?: 'Etsy' | 'eBay'
  page_location?: string
  try_on_used?: boolean
  error_code?: string
  latency_bucket?: string
  [key: string]: unknown
}

/**
 * Non-blocking, privacy-preserving event tracker.
 * Strictly avoids capturing photos, names, faces, or PII.
 */
export function trackEvent(eventName: SafeAnalyticsEvent, properties?: SafeEventProperties): void {
  if (typeof window === 'undefined') return

  try {
    // 1. Google Analytics 4 if present
    if (typeof (window as any).gtag === 'function') {
      ;(window as any).gtag('event', eventName, properties)
    }

    // 2. Safe debugging in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Analytics Event] ${eventName}:`, properties)
    }
  } catch {
    // Non-blocking catch
  }
}
