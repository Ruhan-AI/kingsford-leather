import React from 'react'
import { Crest } from './Crest'

/**
 * The Kingsford Leather wordmark.
 *
 * KINGSFORD set in the brand face (Cinzel — Trajan-style Roman capitals), with
 * LEATHER letterspaced beneath it in antique gold/leather tone, flanked by rules.
 * This is the lockup exactly as it appears on the brand's master insignia and
 * watermarks across all product listings.
 */

const SIZES = {
  sm: { word: 'text-lg sm:text-xl', sub: 'text-[8px] sm:text-[9px]', gap: 'gap-1.5', rule: 'w-4 sm:w-5' },
  md: { word: 'text-2xl', sub: 'text-[10px]', gap: 'gap-2', rule: 'w-6' },
  lg: { word: 'text-3xl sm:text-4xl', sub: 'text-[11px] sm:text-xs', gap: 'gap-2.5', rule: 'w-8 sm:w-10' },
} as const

export function Wordmark({
  size = 'md',
  tone = 'onLight',
  className = '',
}: {
  size?: keyof typeof SIZES
  tone?: 'onDark' | 'onLight'
  className?: string
}) {
  const s = SIZES[size]
  const wordColor = tone === 'onDark' ? 'text-[#deded8]' : 'text-[#1c1a17]'
  const goldColor = tone === 'onDark' ? 'text-[#c08a3e]' : 'text-[#8b5a35]'
  const ruleBg = tone === 'onDark' ? 'bg-[#c08a3e]' : 'bg-[#8b5a35]'

  return (
    <span className={`inline-flex flex-col items-center leading-none select-none ${className}`}>
      <span
        style={{ fontFamily: 'var(--font-brand, "Cinzel", Georgia, serif)' }}
        className={`font-bold tracking-[0.08em] ${s.word} ${wordColor}`}
      >
        KINGSFORD
      </span>
      <span className={`flex items-center ${s.gap} mt-1`}>
        <span className={`h-px ${s.rule} ${ruleBg}`} aria-hidden="true" />
        <span
          style={{ fontFamily: 'var(--font-brand, "Cinzel", Georgia, serif)' }}
          className={`tracking-[0.42em] indent-[0.42em] font-semibold ${s.sub} ${goldColor}`}
        >
          LEATHER
        </span>
        <span className={`h-px ${s.rule} ${ruleBg}`} aria-hidden="true" />
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
  crestSize = 42,
  size = 'sm',
  tone = 'onLight',
  className = '',
}: {
  crestSize?: number
  size?: keyof typeof SIZES
  tone?: 'onDark' | 'onLight'
  className?: string
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <Crest size={crestSize} className="shrink-0 transition-transform duration-200 group-hover:scale-105" />
      <Wordmark size={size} tone={tone} />
    </span>
  )
}
