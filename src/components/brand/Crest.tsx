import React from 'react'

/**
 * Kingsford Leather Official Crowned 'K' Crest Emblem
 * Pure vector SVG with brilliant gold-on-dark metallic luminescence.
 * Zero background artifacts, crisp at all resolutions.
 */
export function Crest({
  size = 46,
  tone = 'plain',
  className = '',
  title = 'Kingsford Leather Crest',
}: {
  size?: number
  tone?: 'parchment' | 'plain'
  className?: string
  title?: string
}) {
  const gid = `kl-crest-gold-${tone}`
  const sid = `kl-crest-shield-${tone}`
  const kid = `kl-crest-k-${tone}`
  const glowId = `kl-crest-glow-${tone}`

  return (
    <svg
      viewBox="0 0 160 176"
      width={size}
      height={(size * 176) / 160}
      className={`select-none shrink-0 ${className}`}
      role="img"
      aria-label={title}
      style={{ overflow: 'visible' }}
    >
      <defs>
        {/* Bright Multi-Stop Gold & Bronze Gradients */}
        <linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2B2" />
          <stop offset="25%" stopColor="#F5CA65" />
          <stop offset="60%" stopColor="#C4882E" />
          <stop offset="100%" stopColor="#875314" />
        </linearGradient>

        <linearGradient id={sid} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFEAA7" />
          <stop offset="40%" stopColor="#DEAA44" />
          <stop offset="100%" stopColor="#8F5417" />
        </linearGradient>

        <linearGradient id={kid} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF6CC" />
          <stop offset="30%" stopColor="#ECC061" />
          <stop offset="70%" stopColor="#B37829" />
          <stop offset="100%" stopColor="#6E3E0C" />
        </linearGradient>

        {/* Ambient Gold Glow Filter for Dark Mode */}
        <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1" stdDeviation="2.5" floodColor="#ECC061" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* 1. TOP CROWN (5 Peaks) */}
      <g filter={`url(#${glowId})`}>
        <path
          d="M 44 42 
             C 41 34, 35 28, 31 16 
             C 39 24, 49 28, 57 29 
             C 63 19, 72 8, 80 2 
             C 88 8, 97 19, 103 29 
             C 111 28, 121 24, 129 16 
             C 125 28, 119 34, 116 42 
             Z"
          fill={`url(#${gid})`}
        />
        {/* Crown Arch Base */}
        <path
          d="M 40 42 Q 80 47 120 42 L 118 46 Q 80 50 42 46 Z"
          fill="#5C360B"
        />
        <path
          d="M 42 45 Q 80 49 118 45 L 117 47 Q 80 51 43 47 Z"
          fill={`url(#${gid})`}
        />
      </g>

      {/* 2. OUTER SHIELD BRACKETS & CHEVRONS */}
      <g filter={`url(#${glowId})`}>
        {/* Top Chevron Point */}
        <polygon
          points="80,38 132,54 122,57 80,44 38,57 28,54"
          fill={`url(#${sid})`}
        />

        {/* Left Wing Bracket */}
        <path
          d="M 28 60 L 28 128 C 28 142, 14 130, 14 118 L 14 68 C 14 56, 28 54, 28 60 Z"
          fill={`url(#${sid})`}
        />
        <path
          d="M 25 66 L 25 122 C 25 128, 18 120, 18 114 L 18 72 C 18 66, 25 62, 25 66 Z"
          fill="#1C1814"
        />

        {/* Right Wing Bracket */}
        <path
          d="M 132 60 L 132 128 C 132 142, 146 130, 146 118 L 146 68 C 146 56, 132 54, 132 60 Z"
          fill={`url(#${sid})`}
        />
        <path
          d="M 135 66 L 135 122 C 135 128, 142 120, 142 114 L 142 72 C 142 66, 135 62, 135 66 Z"
          fill="#1C1814"
        />

        {/* Bottom Chevron Point */}
        <polygon
          points="80,172 124,154 116,151 80,165 44,151 36,154"
          fill={`url(#${sid})`}
        />
        <polygon
          points="80,175 106,164 102,162 80,170 58,162 54,164"
          fill="#1C1814"
        />
      </g>

      {/* 3. CENTRAL STYLIZED 'K' */}
      <g filter={`url(#${glowId})`}>
        {/* Left Pillar Outer Gold Contour */}
        <path
          d="M 22 58 L 70 58 L 70 70 L 62 70 L 62 136 L 70 136 L 70 148 L 22 148 L 22 136 L 30 136 L 30 70 L 22 70 Z"
          fill={`url(#${kid})`}
        />
        {/* Left Pillar Charcoal/Black Core */}
        <path
          d="M 26 62 L 66 62 L 66 67 L 57 67 L 57 139 L 66 139 L 66 144 L 26 144 L 26 139 L 35 139 L 35 67 L 26 67 Z"
          fill="#141210"
        />
        {/* Left Pillar Gold Spine Accent */}
        <rect x="44" y="70" width="3" height="66" fill={`url(#${gid})`} />

        {/* Upper Right Diagonal Arm - Gold Frame */}
        <path
          d="M 54 106 L 112 56 L 140 56 L 140 66 L 130 66 C 118 76, 100 92, 82 106 Z"
          fill={`url(#${kid})`}
        />
        {/* Upper Right Diagonal Arm - Core */}
        <path
          d="M 58 105 L 110 59 L 134 59 L 128 66 C 116 76, 98 92, 84 105 Z"
          fill="#141210"
        />

        {/* Lower Right Diagonal Leg - Gold Frame */}
        <path
          d="M 70 94 L 120 136 L 112 136 L 112 148 L 144 148 L 144 136 L 134 136 L 90 94 Z"
          fill={`url(#${kid})`}
        />
        {/* Lower Right Diagonal Leg - Core */}
        <path
          d="M 75 96 L 116 138 L 108 138 L 108 144 L 138 144 L 130 138 L 94 96 Z"
          fill="#141210"
        />

        {/* Diagonal Inner Gold Bevel Highlights */}
        <path
          d="M 70 102 L 106 70 L 102 66 L 65 98 Z"
          fill="#FFEAA7"
        />
        <path
          d="M 70 102 L 120 144 L 115 147 L 65 105 Z"
          fill="#D49E3E"
        />
      </g>
    </svg>
  )
}
