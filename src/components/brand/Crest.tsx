import React from 'react'

/**
 * The Kingsford Leather crest — crowned K on a shield.
 *
 * Drawn as vector paths rather than set as type, so it renders identically in
 * the header at 44px, in the footer at 56px and in the generated favicon and
 * social card (see scripts that write public/images/kingsford-crest.png).
 *
 * `tone`:
 *   'parchment' — the full mark on its cream ground, as it appears on stock.
 *   'plain'     — crest only, transparent ground, for placing on the dark UI.
 */
export function Crest({
  size = 48,
  tone = 'plain',
  className = '',
  title = 'Kingsford Leather crest',
}: {
  size?: number
  tone?: 'parchment' | 'plain'
  className?: string
  title?: string
}) {
  // Gradient ids must be unique per tone so two crests on one page don't clash.
  const gid = `kl-gold-${tone}`
  const eid = `kl-gold-edge-${tone}`

  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={title}
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e6bb70" />
          <stop offset="45%" stopColor="#c08a3e" />
          <stop offset="100%" stopColor="#8a5f24" />
        </linearGradient>
        <linearGradient id={eid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e6bb70" />
          <stop offset="100%" stopColor="#a2712e" />
        </linearGradient>
      </defs>

      {tone === 'parchment' && <rect width="120" height="120" rx="16" fill="#f7ece6" />}

      {/* crown */}
      <g fill={`url(#${gid})`}>
        <path d="M33 33 L29 12 L44 24 L60 7 L76 24 L91 12 L87 33 Z" />
        <rect x="31" y="33" width="58" height="6" rx="2" />
      </g>
      <g fill="#e6bb70">
        <circle cx="29" cy="10" r="3.6" />
        <circle cx="60" cy="5" r="4.2" />
        <circle cx="91" cy="10" r="3.6" />
      </g>

      {/* shield */}
      <path
        d="M24 43 H96 V74 C96 92 80 104 60 112 C40 104 24 92 24 74 Z"
        fill="#12100f"
        stroke={`url(#${eid})`}
        strokeWidth="3"
      />

      {/* K monogram */}
      <g fill={`url(#${gid})`}>
        <rect x="40" y="53" width="10" height="44" />
        <rect x="34" y="53" width="22" height="5" />
        <rect x="34" y="92" width="22" height="5" />
        <path d="M50 74 L70 53 L80 53 L57 79 Z" />
        <rect x="66" y="53" width="16" height="5" />
        <path d="M55 71 L79 92 L67 92 L48 75 Z" />
        <rect x="65" y="92" width="17" height="5" />
      </g>
    </svg>
  )
}
