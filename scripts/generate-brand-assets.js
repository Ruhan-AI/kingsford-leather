const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const svgString = `
<svg viewBox="0 0 160 176" width="512" height="563" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="kl-crest-gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFF2B2" />
      <stop offset="25%" stop-color="#F5CA65" />
      <stop offset="60%" stop-color="#C4882E" />
      <stop offset="100%" stop-color="#875314" />
    </linearGradient>

    <linearGradient id="kl-crest-shield" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFEAA7" />
      <stop offset="40%" stop-color="#DEAA44" />
      <stop offset="100%" stop-color="#8F5417" />
    </linearGradient>

    <linearGradient id="kl-crest-k" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFF6CC" />
      <stop offset="30%" stop-color="#ECC061" />
      <stop offset="70%" stop-color="#B37829" />
      <stop offset="100%" stop-color="#6E3E0C" />
    </linearGradient>
  </defs>

  <!-- 1. TOP CROWN (5 Peaks) -->
  <g>
    <path
      d="M 44 42 
         C 41 34, 35 28, 31 16 
         C 39 24, 49 28, 57 29 
         C 63 19, 72 8, 80 2 
         C 88 8, 97 19, 103 29 
         C 111 28, 121 24, 129 16 
         C 125 28, 119 34, 116 42 
         Z"
      fill="url(#kl-crest-gold)"
    />
    <path
      d="M 40 42 Q 80 47 120 42 L 118 46 Q 80 50 42 46 Z"
      fill="#5C360B"
    />
    <path
      d="M 42 45 Q 80 49 118 45 L 117 47 Q 80 51 43 47 Z"
      fill="url(#kl-crest-gold)"
    />
  </g>

  <!-- 2. OUTER SHIELD BRACKETS & CHEVRONS -->
  <g>
    <polygon
      points="80,38 132,54 122,57 80,44 38,57 28,54"
      fill="url(#kl-crest-shield)"
    />

    <path
      d="M 28 60 L 28 128 C 28 142, 14 130, 14 118 L 14 68 C 14 56, 28 54, 28 60 Z"
      fill="url(#kl-crest-shield)"
    />
    <path
      d="M 25 66 L 25 122 C 25 128, 18 120, 18 114 L 18 72 C 18 66, 25 62, 25 66 Z"
      fill="#1C1814"
    />

    <path
      d="M 132 60 L 132 128 C 132 142, 146 130, 146 118 L 146 68 C 146 56, 132 54, 132 60 Z"
      fill="url(#kl-crest-shield)"
    />
    <path
      d="M 135 66 L 135 122 C 135 128, 142 120, 142 114 L 142 72 C 142 66, 135 62, 135 66 Z"
      fill="#1C1814"
    />

    <polygon
      points="80,172 124,154 116,151 80,165 44,151 36,154"
      fill="url(#kl-crest-shield)"
    />
    <polygon
      points="80,175 106,164 102,162 80,170 58,162 54,164"
      fill="#1C1814"
    />
  </g>

  <!-- 3. CENTRAL STYLIZED 'K' -->
  <g>
    <path
      d="M 22 58 L 70 58 L 70 70 L 62 70 L 62 136 L 70 136 L 70 148 L 22 148 L 22 136 L 30 136 L 30 70 L 22 70 Z"
      fill="url(#kl-crest-k)"
    />
    <path
      d="M 26 62 L 66 62 L 66 67 L 57 67 L 57 139 L 66 139 L 66 144 L 26 144 L 26 139 L 35 139 L 35 67 L 26 67 Z"
      fill="#141210"
    />
    <rect x="44" y="70" width="3" height="66" fill="url(#kl-crest-gold)" />

    <path
      d="M 54 106 L 112 56 L 140 56 L 140 66 L 130 66 C 118 76, 100 92, 82 106 Z"
      fill="url(#kl-crest-k)"
    />
    <path
      d="M 58 105 L 110 59 L 134 59 L 128 66 C 116 76, 98 92, 84 105 Z"
      fill="#141210"
    />

    <path
      d="M 70 94 L 120 136 L 112 136 L 112 148 L 144 148 L 144 136 L 134 136 L 90 94 Z"
      fill="url(#kl-crest-k)"
    />
    <path
      d="M 75 96 L 116 138 L 108 138 L 108 144 L 138 144 L 130 138 L 94 96 Z"
      fill="#141210"
    />

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
`

async function generateAssets() {
  const svgBuffer = Buffer.from(svgString)

  // 1. Transparent PNG
  await sharp(svgBuffer)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(__dirname, '../public/images/kingsford-crest.png'))
  console.log('✓ Created transparent public/images/kingsford-crest.png')

  fs.copyFileSync(
    path.join(__dirname, '../public/images/kingsford-crest.png'),
    path.join(__dirname, '../public/images/logo.png')
  )

  // 2. Favicons
  await sharp(svgBuffer)
    .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(__dirname, '../src/app/icon.png'))

  await sharp(svgBuffer)
    .resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(__dirname, '../public/favicon.ico'))

  await sharp(svgBuffer)
    .resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(__dirname, '../public/favicon.png'))

  console.log('✓ Created clean favicons')
}

generateAssets().catch(console.error)
