import React from 'react'
import { Crest } from './Crest'

/**
 * The Kingsford Leather wordmark.
 *
 * KINGSFORD set in the brand face (Cinzel — Trajan-style Roman capitals), with
 * LEATHER letterspaced beneath it in antique gold, flanked by rules. This is
 * the lockup exactly as it appears on the shop's stock and on the watermark
 * carried by every product photograph, so the site and the listings match.
 *
 * It is live text rather than an image: it stays crisp at any size, reflows on
 * small screens, and is readable by search engines and screen readers.
 */

const SIZES = {
  sm: { word: 'text-lg sm:text-xl', sub: 'text-[8px] sm:text-[9px]', gap: 'gap-1.5', rule: 'w-4 sm:w-5' },
  md: { word: 'text-2xl', sub: 'text-[10px]', gap: 'gap-2', rule: 'w-6' },
  lg: { word: 'text-3xl sm:text-4xl', sub: 'text-[11px] sm:text-xs', gap: 'gap-2.5', rule: 'w-8 sm:w-10' },
} as const

export function Wordmark({
  size = 'md',
  tone = 'onDark',
  className = '',
}: {
  size?: keyof typeof SIZES
  tone?: 'onDark' | 'onLight'
  className?: string
}) {
  const s = SIZES[size]
  const wordColor = tone === 'onDark' ? 'text-[#deded8]' : 'text-[#12100f]'

  return (
    <span className={`inline-flex flex-col items-center leading-none ${className}`}>
      <span
        className={`font-brand font-bold tracking-[0.06em] ${s.word} ${wordColor}`}
      >
        KINGSFORD
      </span>
      <span className={`flex items-center ${s.gap} mt-1`}>
        <span className={`h-px ${s.rule} bg-[#c08a3e]`} aria-hidden="true" />
        <span className={`font-brand tracking-[0.42em] indent-[0.42em] ${s.sub} text-[#c08a3e]`}>
          LEATHER
        </span>
        <span className={`h-px ${s.rule} bg-[#c08a3e]`} aria-hidden="true" />
      </span>
    </span>
  )
}

/**
 * Crest + wordmark side by side — the primary lockup, used in the header and
 * the footer. `href` is left to the caller so this stays a pure presentational
 * component.
 */
export function BrandLockup({
  crestSize = 46,
  size = 'md',
  tone = 'onDark',
  className = '',
}: {
  crestSize?: number
  size?: keyof typeof SIZES
  tone?: 'onDark' | 'onLight'
  className?: string
}) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Crest size={crestSize} className="shrink-0" />
      <Wordmark size={size} tone={tone} />
    </span>
  )
}
