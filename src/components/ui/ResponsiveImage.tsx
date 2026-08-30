import React from 'react'
import { clsx } from 'clsx'

const VARIANT_WIDTHS = [240, 480, 960] as const

interface ResponsiveImageProps {
  /** Original asset path under public/, ending in .jpg or .png. */
  src: string
  alt: string
  /** Layout hint for the browser's srcset pick. Always pass a real value. */
  sizes: string
  className?: string
  /** Fills a `relative` parent, mirroring how `next/image` fill was used here. */
  fill?: boolean
  /** Above-the-fold images only — skips lazy loading. */
  priority?: boolean
  width?: number
  height?: number
}

/**
 * Serves the pre-built WebP variants from `scripts/generate-image-variants.mjs`.
 *
 * `next/image` cannot help here: `output: 'export'` forces
 * `images.unoptimized: true`, which strips resizing and srcset, so it emitted a
 * bare `<img>` pointing at the full-size original. A phone was pulling ~65 KB
 * per thumbnail (roughly 6 MB for a catalogue page) to paint a 162px box.
 *
 * The original file stays as `src`, so anything without generated variants —
 * or any browser that cannot take WebP — still renders.
 */
export function ResponsiveImage({
  src,
  alt,
  sizes,
  className,
  fill = false,
  priority = false,
  width,
  height,
}: ResponsiveImageProps) {
  const base = src.replace(/\.(jpe?g|png)$/i, '')
  const hasVariants = base !== src

  const srcSet = hasVariants
    ? VARIANT_WIDTHS.map((w) => `${base}-${w}w.webp ${w}w`).join(', ')
    : undefined

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : undefined}
      className={clsx(fill && 'absolute inset-0 h-full w-full', className)}
    />
  )
}
