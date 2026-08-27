const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const sourceImagePath = 'C:/Users/Hp/.gemini/antigravity-ide/brain/cbf34b5e-08e1-4bc1-b6c1-fa1c17688473/.user_uploaded/media_1787766029930.png'

async function processEtsyLogo() {
  const inputBuffer = fs.readFileSync(sourceImagePath)

  // 1. Create a pristine high-res badge version on parchment circle / rounded rectangle (pops vibrantly on dark UI)
  // Clean upscale and sharpen
  const highResParchment = await sharp(inputBuffer)
    .resize(512, 512, { fit: 'contain', background: { r: 247, g: 243, b: 238, alpha: 1 } })
    .png()
    .toBuffer()

  // 2. Extract and remove parchment background to create a clean transparent PNG with edge enhancement
  // The parchment is around #F7EFE8 ~ #FFF8F0. We create a transparent alpha mask for non-background pixels.
  const rawImage = await sharp(inputBuffer).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
  const { data, info } = rawImage
  const width = info.width
  const height = info.height

  const transparentBuffer = Buffer.from(data)
  for (let i = 0; i < transparentBuffer.length; i += 4) {
    const r = transparentBuffer[i]
    const g = transparentBuffer[i + 1]
    const b = transparentBuffer[i + 2]

    // If near the cream/parchment background (r > 215, g > 200, b > 190 and low saturation)
    if (r > 215 && g > 200 && b > 190) {
      // Fade out background to pure transparency
      const diff = Math.min(255, (r - 215) * 6)
      transparentBuffer[i + 3] = Math.max(0, 255 - diff)
    }
  }

  const cleanTransparentPng = await sharp(transparentBuffer, { raw: { width, height, channels: 4 } })
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer()

  // Save public/images/kingsford-crest.png (transparent)
  fs.writeFileSync(path.join(__dirname, '../public/images/kingsford-crest.png'), cleanTransparentPng)
  console.log('✓ Updated public/images/kingsford-crest.png')

  // Save public/images/logo.png (pristine with badge)
  fs.writeFileSync(path.join(__dirname, '../public/images/logo.png'), cleanTransparentPng)
  console.log('✓ Updated public/images/logo.png')

  // Save public/images/kingsford-badge.png
  fs.writeFileSync(path.join(__dirname, '../public/images/kingsford-badge.png'), highResParchment)
  console.log('✓ Created public/images/kingsford-badge.png')

  // 3. Generate favicon & icons
  await sharp(cleanTransparentPng)
    .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(__dirname, '../src/app/icon.png'))
  console.log('✓ Updated src/app/icon.png')

  await sharp(cleanTransparentPng)
    .resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(__dirname, '../public/favicon.png'))
  await sharp(cleanTransparentPng)
    .resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(__dirname, '../public/favicon.ico'))
  console.log('✓ Updated public/favicon.ico & public/favicon.png')

  await sharp(highResParchment)
    .resize(180, 180, { fit: 'contain' })
    .png()
    .toFile(path.join(__dirname, '../src/app/apple-icon.png'))
  console.log('✓ Updated src/app/apple-icon.png')
}

processEtsyLogo().catch(console.error)
