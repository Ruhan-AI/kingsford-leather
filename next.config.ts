import type { NextConfig } from 'next'

/**
 * ── Known environment hazard ──────────────────────────────────────────────
 * This project sits inside a OneDrive-synced folder. OneDrive treats `.next`
 * as ordinary user data and uploads, dehydrates and restores files while Next
 * is still writing them. The symptom is a build directory whose parts come
 * from different builds — `webpack-runtime.js` minutes newer than the chunks
 * its manifest indexes — and then at runtime:
 *
 *     Cannot find module './331.js'
 *
 * or a build that dies on ENOENT for a manifest it just wrote.
 *
 * If that happens: delete `.next` entirely and rebuild. Do not try to repair
 * it in place — the failure is a mixed build, not a missing file.
 *
 * Two workarounds were tried and do NOT work here, so save the time:
 *   - `distDir` outside the project: generated route types can no longer
 *     resolve `next/dist/...`, because node_modules is not reachable from
 *     their new location.
 *   - `.next` as a junction to a folder outside OneDrive: Node resolves the
 *     junction to its real path and then cannot find node_modules from there
 *     ("Cannot find module 'react/jsx-runtime'").
 *
 * The durable fix is to move the project out of OneDrive, or pause syncing
 * while building.
 */
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
  // The try-on route reads its base plate and garment references off disk at
  // request time. Nothing imports them, so tracing has to be told they ship.
  outputFileTracingIncludes: {
    '/api/try-on': ['./public/images/try-on/**'],
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
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false
    }
    return config
  },
}

export default nextConfig
