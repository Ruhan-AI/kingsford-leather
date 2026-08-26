import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // Product photography is served from the marketplace CDNs — the same images
    // that back the live listings, so the site can never drift from what is for
    // sale. Etsy for the Etsy catalogue, eBay for the eBay-only pieces.
    remotePatterns: [
      { protocol: 'https', hostname: 'i.etsystatic.com' },
      { protocol: 'https', hostname: 'i.ebayimg.com' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'DENY' },
        ],
      },
    ]
  },
}

export default nextConfig
