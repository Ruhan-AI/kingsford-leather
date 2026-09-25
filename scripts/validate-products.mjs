import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

const productsFilePath = path.join(rootDir, 'src', 'lib', 'products.ts')
const productsContent = fs.readFileSync(productsFilePath, 'utf8')

// Parse PRODUCTS array using a safe dynamic extraction or regex parsing
// Since products.ts is TypeScript, let's read and validate the definitions
console.log('🔍 Validating Kingsford Leather Product Catalogue...')

const productBlockMatches = productsContent.matchAll(/P\((\{[\s\S]*?\n\s*\})\)/g)
const products = []

for (const match of productBlockMatches) {
  try {
    // Evaluates the product JS object safely
    const fn = new Function(`return ${match[1]}`)
    const prod = fn()
    products.push(prod)
  } catch (err) {
    console.error('❌ Failed to parse product block:', err)
  }
}

console.log(`📊 Found ${products.length} products in catalogue.`)

if (products.length !== 52) {
  console.error(`❌ Expected exactly 52 products, but found ${products.length}!`)
  process.exit(1)
}

const seenIds = new Set()
const seenSlugs = new Set()
const seenEtsyUrls = new Set()
const seenEbayUrls = new Set()
const seenPrimaryImages = new Set()
let errors = 0

products.forEach((p, idx) => {
  const index = idx + 1

  if (!p.id || seenIds.has(p.id)) {
    console.error(`[${index}] Duplicate or missing ID: ${p.id}`)
    errors++
  }
  seenIds.add(p.id)

  if (!p.slug || seenSlugs.has(p.slug)) {
    console.error(`[${index}] Duplicate or missing slug: ${p.slug}`)
    errors++
  }
  seenSlugs.add(p.slug)

  if (!p.title) {
    console.error(`[${index}] Missing title for ${p.slug}`)
    errors++
  }

  if (typeof p.salePrice !== 'number' || p.salePrice <= 0) {
    console.error(`[${index}] Invalid salePrice for ${p.slug}: ${p.salePrice}`)
    errors++
  }

  if (typeof p.listPrice !== 'number' || p.listPrice <= 0) {
    console.error(`[${index}] Invalid listPrice for ${p.slug}: ${p.listPrice}`)
    errors++
  }

  if (!p.etsyUrl && !p.ebayUrl) {
    console.error(`[${index}] Product has no marketplace URL: ${p.slug}`)
    errors++
  }

  if (p.etsyUrl) {
    if (!p.etsyUrl.startsWith('https://www.etsy.com/')) {
      console.error(`[${index}] Invalid Etsy URL for ${p.slug}: ${p.etsyUrl}`)
      errors++
    }
    if (seenEtsyUrls.has(p.etsyUrl)) {
      console.error(`[${index}] Duplicate Etsy URL: ${p.etsyUrl} in product ${p.slug}`)
      errors++
    }
    seenEtsyUrls.add(p.etsyUrl)
  }

  if (p.ebayUrl) {
    if (!p.ebayUrl.startsWith('https://www.ebay.com/')) {
      console.error(`[${index}] Invalid eBay URL for ${p.slug}: ${p.ebayUrl}`)
      errors++
    }
    if (seenEbayUrls.has(p.ebayUrl)) {
      console.error(`[${index}] Duplicate eBay URL: ${p.ebayUrl} in product ${p.slug}`)
      errors++
    }
    seenEbayUrls.add(p.ebayUrl)
  }

  if (!p.image) {
    console.error(`[${index}] Missing primary image for ${p.slug}`)
    errors++
  } else {
    if (seenPrimaryImages.has(p.image)) {
      console.error(`[${index}] Duplicate primary image: ${p.image} in product ${p.slug}`)
      errors++
    }
    seenPrimaryImages.add(p.image)
    const localImgPath = path.join(rootDir, 'public', p.image.replace(/^\//, ''))
    if (!fs.existsSync(localImgPath)) {
      console.error(`[${index}] Image not found on disk: ${p.image} (${localImgPath})`)
      errors++
    }
  }

  if (!Array.isArray(p.images) || p.images.length === 0) {
    console.error(`[${index}] Missing images array for ${p.slug}`)
    errors++
  }
})

if (errors > 0) {
  console.error(`❌ Validation failed with ${errors} error(s)!`)
  process.exit(1)
} else {
  console.log('✅ All 52 products successfully validated! IDs, slugs, prices, images, and marketplace URLs verified.')
}
