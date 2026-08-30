/**
 * Generate responsive WebP variants for catalogue photography.
 *
 * Why this exists: `next.config.ts` sets `output: 'export'`, which forces
 * `images.unoptimized: true`. That switches off Next's resizing, format
 * negotiation and srcset entirely, so every device downloaded the original
 * 794x992 JPEG — about 6 MB across a 49-card catalogue page — to fill slots
 * rendered at 162px on a phone. That is why images appeared not to load.
 *
 * This pre-builds the sizes Next would otherwise have produced at request time.
 * `ResponsiveImage` then serves them through a plain srcset.
 *
 * Idempotent: existing, up-to-date variants are skipped. Run via
 *   npm run images:variants
 */
import sharp from 'sharp'
import { readdir, stat, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join, parse } from 'node:path'

const SOURCE_DIRS = ['public/images/catalogue', 'public/images/workshop']
const WIDTHS = [240, 480, 960]
const QUALITY = 72

let made = 0
let skipped = 0
let failed = 0

async function processFile(dir, file) {
  const { name, ext } = parse(file)
  if (!/\.(jpe?g|png)$/i.test(ext)) return
  // Never treat an already-generated variant as a source.
  if (/-\d+w$/.test(name)) return

  const source = join(dir, file)
  const sourceStat = await stat(source)

  for (const width of WIDTHS) {
    const target = join(dir, `${name}-${width}w.webp`)

    if (existsSync(target)) {
      const targetStat = await stat(target)
      if (targetStat.mtimeMs >= sourceStat.mtimeMs) {
        skipped++
        continue
      }
    }

    try {
      await sharp(source)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(target)
      made++
    } catch (error) {
      failed++
      console.error(`  failed ${target}: ${error.message}`)
    }
  }
}

for (const dir of SOURCE_DIRS) {
  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true })
    continue
  }
  const files = await readdir(dir)
  console.log(`${dir}: ${files.length} entries`)
  for (const file of files) await processFile(dir, file)
}

console.log(`\nvariants written: ${made}   up-to-date: ${skipped}   failed: ${failed}`)
