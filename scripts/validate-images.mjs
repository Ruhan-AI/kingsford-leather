/**
 * Fail the build if a component references an image that is not on disk.
 *
 * A missing file is invisible until someone loads the page: `next/image` and
 * plain <img> both just render a broken icon. `SilhouetteGrid` shipped a
 * "Western Truckers" tile pointing at a JPEG that never existed, and nothing in
 * typecheck, lint or `next build` noticed.
 *
 * Run via `npm run images:validate` (wired into `npm run build`).
 */
import { readdirSync, statSync, readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const SRC = 'src'
const PUBLIC = 'public'
const PATTERN = /['"`](\/images\/[^'"`]+?\.(?:jpe?g|png|webp|svg|avif))['"`]/g

const refs = new Map()

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      walk(full)
      continue
    }
    if (!/\.(tsx?|json)$/.test(entry)) continue
    const source = readFileSync(full, 'utf8')
    for (const match of source.matchAll(PATTERN)) {
      const ref = match[1]
      if (!refs.has(ref)) refs.set(ref, new Set())
      refs.get(ref).add(full)
    }
  }
}

walk(SRC)

const missing = []
for (const [ref, files] of refs) {
  if (!existsSync(join(PUBLIC, ref))) missing.push({ ref, files: [...files] })
}

console.log(`image references: ${refs.size}   missing: ${missing.length}`)

if (missing.length > 0) {
  console.error('\nMissing image files:')
  for (const { ref, files } of missing) {
    console.error(`  ${ref}`)
    console.error(`    referenced by: ${files.join(', ')}`)
  }
  process.exit(1)
}
