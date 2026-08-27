/**
 * The catalogue.
 *
 * Every field here was read from a live marketplace listing — titles, prices,
 * descriptions and photography all come from the real listings, and `etsyUrl` /
 * `ebayUrl` point at the listings the item is actually sold from. Nothing on
 * this site is invented, and nothing is for sale here: the site is a window
 * onto the shops, and every buy path ends on Etsy or eBay.
 *
 * ── The two shops ─────────────────────────────────────────────────────────
 * Etsy (KingsfordLeatherCA) carried 36 listings and eBay (kingsfordleather)
 * carried 41 on 26 Aug 2026. They overlap heavily: 28 of the eBay listings are
 * the same garment as an Etsy listing, matched by comparing the listing
 * photography itself rather than the titles, which are too generic to trust.
 * Those 28 are one product here carrying both URLs, so a buyer can pick their
 * marketplace. The other 13 are eBay-only and appear once. 49 pieces in all.
 *
 * A piece must carry at least one marketplace URL — `buyLinks()` is what the
 * UI renders, and it lists Etsy first when a piece is on both.
 *
 * ── Prices ────────────────────────────────────────────────────────────────
 * All prices are CAD, read from the listing as shown to a Canadian buyer.
 * Etsy runs a discount, so those pieces carry a real `listPrice` above
 * `salePrice`. The eBay-only pieces are not discounted, so their `listPrice`
 * equals `salePrice` and no saving is advertised. Never widen that gap by
 * hand: an invented "was" price is the one thing that would make the rest of
 * the catalogue untrustworthy.
 *
 * ── The `renamed` flag ────────────────────────────────────────────────────
 * Eleven listings are titled on their marketplace after protected properties
 * or real people (Michael Jackson, Jaafar Jackson, Mad Max, Punisher, Captain
 * America, Fallout, Resident Evil, Akira, Terminator 2, Arrow/Arsenal, Black
 * Label Society). A marketplace absorbs some of that exposure through its own
 * takedown process; an owned domain does not — it becomes a direct target, and
 * it puts payment processing at risk.
 *
 * Those eleven carry `renamed: true`. On this site they are titled and
 * described by the garment; the marketplace URLs are untouched, so the listing
 * they open is exactly the same one, with its original title still doing the
 * search work there. Nothing is lost commercially.
 *
 * To mirror the marketplace titles verbatim instead, set SHOW_ORIGINAL_TITLES
 * to true. Read the note above before you do.
 */

export const SHOW_ORIGINAL_TITLES = false

export type Category =
  | 'biker'
  | 'cafe-racer'
  | 'bomber'
  | 'trucker'
  | 'coats'
  | 'vests'
  | 'blazers'
  | 'shearling'
  | 'statement'

export type Gender = 'men' | 'women' | 'unisex'

export type Marketplace = 'Etsy' | 'eBay'

export type Product = {
  id: string
  slug: string
  /** Title shown on this site. */
  title: string
  /** The live marketplace title. Rendered only when SHOW_ORIGINAL_TITLES is on. */
  marketplaceTitle: string
  /** The Etsy listing, when the piece is on Etsy. */
  etsyUrl?: string
  /** The eBay listing, when the piece is on eBay. At least one must be set. */
  ebayUrl?: string
  salePrice: number
  /** Equals salePrice when the listing is not discounted. */
  listPrice: number
  image: string
  images: readonly string[]
  blurb: string
  description: string
  category: Category
  gender: Gender
  material: string
  renamed?: true
}

export type BuyLink = { marketplace: Marketplace; url: string }

/**
 * Where a piece can actually be bought. Etsy first when it is on both — it is
 * the shop carrying the review history, and the one the rest of the site
 * points at.
 */
export function buyLinks(product: Product): BuyLink[] {
  const links: BuyLink[] = []
  if (product.etsyUrl) links.push({ marketplace: 'Etsy', url: product.etsyUrl })
  if (product.ebayUrl) links.push({ marketplace: 'eBay', url: product.ebayUrl })
  return links
}

/** The buy path a single button should take. Never undefined for a real product. */
export function primaryBuyLink(product: Product): BuyLink {
  return buyLinks(product)[0]
}

export const CATEGORIES: ReadonlyArray<{ slug: Category; label: string }> = [
  { slug: 'biker', label: 'Biker & moto' },
  { slug: 'cafe-racer', label: 'Cafe racer' },
  { slug: 'bomber', label: 'Bomber & aviator' },
  { slug: 'trucker', label: 'Trucker & western' },
  { slug: 'coats', label: 'Coats & trench' },
  { slug: 'blazers', label: 'Blazers & peacoats' },
  { slug: 'vests', label: 'Vests' },
  { slug: 'shearling', label: 'Shearling & fur' },
  { slug: 'statement', label: 'Statement pieces' },
]

const P = (p: Product) => p

export const PRODUCTS: readonly Product[] = [
  P({
    id: '4522631878',
    slug: 'mens-tan-suede-bomber-shearling-collar',
    title: 'Tan suede bomber jacket, shearling collar',
    marketplaceTitle:
      'Men’s Tan Suede Leather Bomber Jacket, Shearling Collar Aviator Jacket, Brown Winter Flight Jacket Gift for Him',
    etsyUrl: 'https://www.etsy.com/ca/listing/4522631878/mens-tan-suede-leather-bomber-jacket',
    ebayUrl: 'https://www.ebay.com/itm/158008678385',
    salePrice: 193.04,
    listPrice: 296.99,
    image: '/images/catalogue/82b19dc4cf21.jpg',
    images: [
      '/images/catalogue/82b19dc4cf21.jpg',
      '/images/catalogue/9761688739ff.jpg',
      '/images/catalogue/5ad3f2437600.jpg',
      '/images/catalogue/1b8d866dc017.jpg',
      '/images/catalogue/51c876cee639.jpg',
    ],
    blurb: 'Classic bomber shape with the vintage pull of an aviator flight jacket.',
    description:
      'A tan suede bomber with a warm shearling-style collar, ribbed cuffs and classic aviator attitude. The tan-brown suede finish, soft cream collar, front zip, ribbed waist hem, chest zip pocket and side pockets make it a strong winter piece. The soft suede texture gives it a rich vintage look while the collar keeps it warm; it pairs with jeans, boots, sweaters and smart-casual outfits.',
    category: 'bomber',
    gender: 'men',
    material: 'Suede',
  }),
  P({
    id: '4523543894',
    slug: 'brown-suede-trucker-western',
    title: 'Brown suede trucker jacket, western cut',
    marketplaceTitle: 'Brown Suede Trucker Jacket, Western Style Leather Coat, Vintage Cowgirl Outerwear',
    etsyUrl: 'https://www.etsy.com/ca/listing/4523543894/brown-suede-trucker-jacket-western-style',
    ebayUrl: 'https://www.ebay.com/itm/158008655937',
    salePrice: 194.99,
    listPrice: 299.99,
    image: '/images/catalogue/8352644af515.jpg',
    images: [
      '/images/catalogue/8352644af515.jpg',
      '/images/catalogue/47670c62c3a1.jpg',
      '/images/catalogue/8c1de3f3c00d.jpg',
      '/images/catalogue/eeaeefb62d72.jpg',
      '/images/catalogue/f53f6af00f9e.jpg',
    ],
    blurb: 'Classic trucker styling with a modern feminine fit.',
    description:
      'Made from genuine suede leather, this jacket combines classic trucker styling with a modern feminine fit. A structured shirt collar, button front, chest flap pockets and a rich vintage brown finish give it western charm without losing everyday wearability. The soft suede develops character over time. Lightweight but durable, it layers well through autumn and winter.',
    category: 'trucker',
    gender: 'women',
    material: 'Suede',
  }),
  P({
    id: '4523196868',
    slug: 'mens-black-cafe-racer-racing-stripes',
    title: 'Black cafe racer, racing stripes',
    marketplaceTitle:
      'Men’s Black Leather Cafe Racer Jacket, Distressed Motorcycle Biker Coat with Racing Stripes',
    etsyUrl: 'https://www.etsy.com/ca/listing/4523196868/mens-black-leather-cafe-racer-jacket',
    ebayUrl: 'https://www.ebay.com/itm/158009764745',
    salePrice: 194.99,
    listPrice: 299.99,
    image: '/images/catalogue/a765b524b418.jpg',
    images: [
      '/images/catalogue/a765b524b418.jpg',
      '/images/catalogue/916637a5c495.jpg',
      '/images/catalogue/4076b4c67c31.jpg',
      '/images/catalogue/bbf861273887.jpg',
      '/images/catalogue/8296004e57bc.jpg',
    ],
    blurb: 'Distressed black leather with red and cream racing stripes.',
    description:
      'A cafe racer built for riders and anyone after a bold vintage motorcycle look. Made with a distressed black leather finish, it carries red and cream racing stripes, zip pockets, ribbed sleeve panels and a clean band collar. The distressing means no two come out looking quite the same.',
    category: 'cafe-racer',
    gender: 'men',
    material: 'Genuine leather',
  }),
  P({
    id: '4522622190',
    slug: 'navy-military-officer-jacket-gold-buttons',
    title: 'Navy military officer jacket, gold buttons',
    marketplaceTitle:
      'Jaafar Jackson Michael Blue Military Jacket, MJ Navy Gold Button Officer Coat, Pop Star Stage Costume Blazer Gift',
    etsyUrl: 'https://www.etsy.com/ca/listing/4522622190/jaafar-jackson-michael-blue-military',
    ebayUrl: 'https://www.ebay.com/itm/158012214272',
    salePrice: 162.49,
    listPrice: 249.99,
    image: '/images/catalogue/94841f8f9b99.jpg',
    images: [
      '/images/catalogue/94841f8f9b99.jpg',
      '/images/catalogue/1fb4dd2b72f7.jpg',
      '/images/catalogue/4085fa6b0902.jpg',
      '/images/catalogue/13e3fcb91318.jpg',
      '/images/catalogue/7c79fce6f4dc.jpg',
    ],
    blurb: 'Structured officer silhouette in navy, with red contrast and gold-tone buttons.',
    description:
      'A structured military officer jacket in navy, with bold red contrast detailing, gold-tone decorative buttons and a high collar. Long sleeves, detailed shoulder and front accents, and a tailored statement fit — built for stage, performance and occasion wear. Custom sizing and bespoke modifications are available on request.',
    category: 'statement',
    gender: 'men',
    material: 'Fabric',
    renamed: true,
  }),
  P({
    id: '4542429218',
    slug: 'womens-brown-suede-blazer-oversized',
    title: 'Brown suede blazer, oversized',
    marketplaceTitle:
      'Women’s Brown Genuine Suede Leather Blazer, Oversized Vintage Style Jacket, Custom Made Coat',
    etsyUrl: 'https://www.etsy.com/ca/listing/4542429218/womens-brown-genuine-suede-leather',
    salePrice: 194.99,
    listPrice: 299.99,
    image: '/images/catalogue/03ca00ccfcc9.jpg',
    images: [
      '/images/catalogue/03ca00ccfcc9.jpg',
      '/images/catalogue/b2e755ae5fd7.jpg',
      '/images/catalogue/1753ae4ab191.jpg',
      '/images/catalogue/3b4ed46ade31.jpg',
      '/images/catalogue/dee9949fad4a.jpg',
    ],
    blurb: 'Relaxed longline tailoring in soft chocolate-brown suede.',
    description:
      'Genuine suede leather with a soft, velvety surface in a rich chocolate brown. A notched lapel collar, three-button front and flap pockets make it work for casual, smart-casual and professional wear alike. The slightly oversized fit layers easily over shirts, knitwear and dresses through autumn, winter and transitional spring.',
    category: 'blazers',
    gender: 'women',
    material: 'Suede',
  }),
  P({
    id: '4542406721',
    slug: 'womens-brown-suede-coat-faux-fur',
    title: 'Brown suede coat, black faux fur',
    marketplaceTitle:
      "Women's Brown Suede Genuine Leather Coat with Black Faux Fur, Custom Made Shearling Style Jacket",
    etsyUrl: 'https://www.etsy.com/ca/listing/4542406721/womens-brown-suede-genuine-leather-coat',
    salePrice: 181.99,
    listPrice: 279.99,
    image: '/images/catalogue/531d9f3f660d.jpg',
    images: [
      '/images/catalogue/531d9f3f660d.jpg',
      '/images/catalogue/db7c049c5c2b.jpg',
      '/images/catalogue/9555fcbb15c2.jpg',
      '/images/catalogue/365134e74c34.jpg',
      '/images/catalogue/a5de76994571.jpg',
    ],
    blurb: 'Dark-brown suede with soft black faux fur at collar, cuffs and hem.',
    description:
      'A dark-brown suede leather coat trimmed with soft black faux fur along the wide collar, lapels, front opening, cuffs, hem and interior. Tailored panel construction creates a flattering silhouette; the mid-length cut gives coverage without bulk. Finished with a three-button closure and two angled side pockets. The fur is faux — that is stated plainly, not implied.',
    category: 'coats',
    gender: 'women',
    material: 'Suede, faux fur',
  }),
  P({
    id: '4537933665',
    slug: 'mens-brown-leather-bomber-removable-hood',
    title: 'Brown leather bomber, removable hood',
    marketplaceTitle:
      'Men’s Brown Leather Bomber Jacket with Removable Hoodie, Multi-Pocket Military Style, Custom Fit',
    etsyUrl: 'https://www.etsy.com/ca/listing/4537933665/mens-brown-leather-bomber-jacket-with',
    ebayUrl: 'https://www.ebay.com/itm/158092514473',
    salePrice: 194.99,
    listPrice: 299.99,
    image: '/images/catalogue/320bef87b02b.jpg',
    images: [
      '/images/catalogue/320bef87b02b.jpg',
      '/images/catalogue/6fdc134755bb.jpg',
      '/images/catalogue/2f3d78d95fee.jpg',
      '/images/catalogue/52d61d065d88.jpg',
      '/images/catalogue/886827725a1b.jpg',
    ],
    blurb: 'Two jackets in one — the hood detaches.',
    description:
      'A genuine leather bomber with a removable fabric hood, multi-pocket utility detailing and military-inspired shoulder epaulettes. Rib-knit stand collar beneath the hood, full metal zip, chest flap pocket, two diagonal chest zip pockets, two lower hand pockets, rib-knit cuffs and waistband, antique metal-tone hardware. The detachable hood means it wears two distinct ways.',
    category: 'bomber',
    gender: 'men',
    material: 'Genuine leather',
  }),
  P({
    id: '4537928180',
    slug: 'womens-black-leather-biker-lace-up',
    title: 'Black leather biker, lace-up corset panel',
    marketplaceTitle:
      'Women’s Black Genuine Leather Biker Jacket with Lace-Up Corset Detail, Custom Made',
    etsyUrl: 'https://www.etsy.com/ca/listing/4537928180/womens-black-genuine-leather-biker',
    ebayUrl: 'https://www.ebay.com/itm/158106012497',
    salePrice: 194.99,
    listPrice: 299.99,
    image: '/images/catalogue/b827de01c441.jpg',
    images: [
      '/images/catalogue/b827de01c441.jpg',
      '/images/catalogue/1f40e5f94b42.jpg',
      '/images/catalogue/706721f9b101.jpg',
      '/images/catalogue/c30de89c53f8.jpg',
      '/images/catalogue/0a8c8caea920.jpg',
    ],
    blurb: 'Double-rider structure with a corset-inspired lace-up panel.',
    description:
      'The iconic double-rider silhouette with a distinctive corset-inspired lace-up panel. An asymmetric zip, wide lapel collar, silver-tone hardware and a fitted cut keep the moto look intact, while the eyelet lacing and stacked waist buckles add gothic and alternative character. Handmade to order, in standard sizes or cut to your own measurements.',
    category: 'biker',
    gender: 'women',
    material: 'Genuine leather',
  }),
  P({
    id: '4537900343',
    slug: 'womens-cognac-leather-bomber-aviator',
    title: 'Cognac leather bomber, aviator cut',
    marketplaceTitle:
      'Women’s Cognac Brown Genuine Leather Bomber Jacket, Military Aviator Style, Custom Made',
    etsyUrl: 'https://www.etsy.com/ca/listing/4537900343/womens-cognac-brown-genuine-leather',
    salePrice: 194.99,
    listPrice: 299.99,
    image: '/images/catalogue/505dea7e0f0e.jpg',
    images: [
      '/images/catalogue/505dea7e0f0e.jpg',
      '/images/catalogue/920b50eedc42.jpg',
      '/images/catalogue/b29873c727ce.jpg',
      '/images/catalogue/2c6ddd5c4032.jpg',
      '/images/catalogue/a10a26edc94c.jpg',
    ],
    blurb: 'Fitted aviator shape in warm cognac brown.',
    description:
      'A fitted aviator silhouette with shoulder epaulettes, practical pockets and rib-knit finishing. The warm cognac brown sits easily against black denim, blue jeans, dresses, trousers and boots, which makes it one of the more versatile pieces in the range. Made to order.',
    category: 'bomber',
    gender: 'women',
    material: 'Genuine leather',
  }),
  P({
    id: '4537893505',
    slug: 'womens-black-leather-puffer-coat',
    title: 'Black leather puffer coat, fur-trim hood',
    marketplaceTitle:
      'Women’s Black Leather Puffer Coat, Fur-Trim Hooded Quilted Winter Parka, Custom Made Long Jacket',
    etsyUrl: 'https://www.etsy.com/ca/listing/4537893505/womens-black-leather-puffer-coat-fur',
    ebayUrl: 'https://www.ebay.com/itm/158102730379',
    salePrice: 194.99,
    listPrice: 299.99,
    image: '/images/catalogue/ff7f0e2b6701.jpg',
    images: [
      '/images/catalogue/ff7f0e2b6701.jpg',
      '/images/catalogue/c05b3d6c423d.jpg',
      '/images/catalogue/36ff2f820818.jpg',
      '/images/catalogue/97f21e60dbf8.jpg',
      '/images/catalogue/927ee5c02e63.jpg',
    ],
    blurb: 'A quilted longline puffer, in leather rather than nylon.',
    description:
      'A quilted longline puffer with padded construction and a generously trimmed hood — a considered alternative to an ordinary winter puffer. The black finish styles easily with jeans, trousers and boots, and the shaped panel construction keeps the silhouette flattering while still allowing winter layers underneath.',
    category: 'coats',
    gender: 'women',
    material: 'Genuine leather',
  }),
  P({
    id: '4531801671',
    slug: 'mens-brown-suede-a1-bomber',
    title: 'Brown suede A1 bomber, button front',
    marketplaceTitle: "Men's Suede Jacket, Brown A1 Bomber, Button Front Flight Style",
    etsyUrl: 'https://www.etsy.com/ca/listing/4531801671/mens-suede-jacket-brown-suede-bomber',
    salePrice: 194.99,
    listPrice: 299.99,
    image: '/images/catalogue/17947ba2c886.jpg',
    images: [
      '/images/catalogue/17947ba2c886.jpg',
      '/images/catalogue/f51de973bb8a.jpg',
      '/images/catalogue/a5697ab2dbe2.jpg',
      '/images/catalogue/934faab14ef4.jpg',
      '/images/catalogue/d692b9a3c738.jpg',
    ],
    blurb: 'The A1 flight jacket, in rich brown suede.',
    description:
      'A timeless suede jacket built on the classic A1 bomber pattern: traditional button-front closure, ribbed cuffs and hem, and functional front pockets. Vintage flight-jacket character with an easy everyday fit. Custom sizing and bespoke modifications available on request.',
    category: 'bomber',
    gender: 'men',
    material: 'Suede',
  }),
  P({
    id: '4530731266',
    slug: 'red-leather-moto-jacket-quilted-shoulders',
    title: 'Red leather moto jacket, quilted shoulders',
    marketplaceTitle:
      'Red Capsule Genuine Leather Jacket, Anime Motorcycle Cosplay Coat, Cyberpunk Biker Streetwear',
    etsyUrl: 'https://www.etsy.com/ca/listing/4530731266/red-capsule-genuine-leather-jacket-anime',
    salePrice: 188.49,
    listPrice: 289.99,
    image: '/images/catalogue/19e81bd4d6ad.jpg',
    images: [
      '/images/catalogue/19e81bd4d6ad.jpg',
      '/images/catalogue/aaad3c46695d.jpg',
      '/images/catalogue/dded0e02754d.jpg',
      '/images/catalogue/8079c1a2e798.jpg',
      '/images/catalogue/030ddcf4ea29.jpg',
    ],
    blurb: 'A bright red body with darker quilted shoulder panels and a graphic back.',
    description:
      'A red leather motorcycle jacket with darker quilted shoulder panels, a high stand collar with adjustable throat strap, four front clasp details, front flap pockets and an elasticated waist. The back carries a bold graphic print. Built for streetwear, conventions and themed events as much as for riding.',
    category: 'statement',
    gender: 'unisex',
    material: 'Genuine leather',
    renamed: true,
  }),
  P({
    id: '4526497329',
    slug: 'black-biker-jacket-layered-shoulder-pads',
    title: 'Black biker jacket, layered shoulder pads',
    marketplaceTitle:
      'Mad Max Fury Road Black Leather Biker Jacket, Max Rockatansky Shoulder Pad Cosplay Coat',
    etsyUrl: 'https://www.etsy.com/ca/listing/4526497329/mad-max-fury-road-black-leather-biker',
    ebayUrl: 'https://www.ebay.com/itm/158023956765',
    salePrice: 181.99,
    listPrice: 279.99,
    image: '/images/catalogue/9c59c6702e27.jpg',
    images: [
      '/images/catalogue/9c59c6702e27.jpg',
      '/images/catalogue/a5d332450871.jpg',
      '/images/catalogue/e22340447f7e.jpg',
      '/images/catalogue/134fc202b98f.jpg',
      '/images/catalogue/3c120a998b90.jpg',
    ],
    blurb: 'Asymmetric zip, wide lapels and a distinctive layered shoulder detail.',
    description:
      'A black leather biker jacket with a bold asymmetric front zip, wide biker lapels, zippered cuffs, vertical zip pockets and a distinctive layered shoulder pad detail. A rugged, weathered silhouette built for conventions, festivals and biker-inspired styling.',
    category: 'statement',
    gender: 'men',
    material: 'Genuine leather',
    renamed: true,
  }),
  P({
    id: '4524803848',
    slug: 'mens-brown-suede-buckle-closure-jacket',
    title: 'Brown suede jacket, ornate buckle closure',
    marketplaceTitle: "Men's Brown Suede Sci-Fi Warrior Jacket, Military Buckle Closure Cosplay Coat",
    etsyUrl: 'https://www.etsy.com/ca/listing/4524803848/mens-brown-suede-sci-fi-warrior-jacket',
    ebayUrl: 'https://www.ebay.com/itm/158023904415',
    salePrice: 194.99,
    listPrice: 299.99,
    image: '/images/catalogue/625eb77b16b5.jpg',
    images: [
      '/images/catalogue/625eb77b16b5.jpg',
      '/images/catalogue/e89514883faf.jpg',
      '/images/catalogue/d6be4df1144e.jpg',
      '/images/catalogue/c08f02369fd2.jpg',
      '/images/catalogue/b214a73e9cb1.jpg',
    ],
    blurb: 'Tall stand collar, contrast shoulder panels, metal clasp closures.',
    description:
      'A brown suede jacket with a tall stand collar, dark brown shoulder panels, ornate metal clasp closures and a structured military-inspired silhouette. The rich suede body gives it a rugged premium finish while the contrasting shoulder overlays and decorative hardware make it a genuine statement piece.',
    category: 'statement',
    gender: 'men',
    material: 'Suede',
  }),
  P({
    id: '4524792736',
    slug: 'mens-tan-suede-trucker-jacket',
    title: 'Tan suede trucker jacket',
    marketplaceTitle:
      "Men's Tan Suede Trucker Jacket, Vintage Brown Western Button Front Leather Coat, Custom Fit",
    etsyUrl: 'https://www.etsy.com/ca/listing/4524792736/mens-tan-suede-trucker-jacket-vintage',
    ebayUrl: 'https://www.ebay.com/itm/158023568180',
    salePrice: 181.99,
    listPrice: 279.99,
    image: '/images/catalogue/0b059639db56.jpg',
    images: [
      '/images/catalogue/0b059639db56.jpg',
      '/images/catalogue/3982d4f07bc7.jpg',
      '/images/catalogue/2ac2257f8bf5.jpg',
      '/images/catalogue/856f4f934790.jpg',
      '/images/catalogue/e25024716be3.jpg',
    ],
    blurb: 'Vintage workwear lines in a warm tan-brown suede.',
    description:
      'A button-front trucker with a structured shirt collar, chest flap pockets, hand pockets, snap cuffs and adjustable waist tabs. The warm tan-brown suede pairs with denim, boots, plain tees and flannel. A clean, classic cut that works for weekends, travel and everyday wear.',
    category: 'trucker',
    gender: 'men',
    material: 'Suede',
  }),
  P({
    id: '4524775655',
    slug: 'mens-black-leather-biker-vest-lace-up',
    title: 'Black leather biker vest, lace-up sides',
    marketplaceTitle:
      "Men's Black Genuine Leather Biker Vest, Lace-Up Side Motorcycle Waistcoat, Custom Fit",
    etsyUrl: 'https://www.etsy.com/ca/listing/4524775655/mens-black-genuine-leather-biker-vest',
    ebayUrl: 'https://www.ebay.com/itm/158023447071',
    salePrice: 142.99,
    listPrice: 219.99,
    image: '/images/catalogue/ce1bc36028c7.jpg',
    images: [
      '/images/catalogue/ce1bc36028c7.jpg',
      '/images/catalogue/24a4034e103e.jpg',
      '/images/catalogue/5cb2e7b6e6b2.jpg',
      '/images/catalogue/8e7e65c95062.jpg',
      '/images/catalogue/389e7fb54b72.jpg',
    ],
    blurb: 'Clean waistcoat silhouette with adjustable side lacing.',
    description:
      'A black leather biker vest with a clean motorcycle waistcoat silhouette, side lace-up adjustment, chest flap pockets and a sharp band collar. All-black keeps it versatile; the lacing lets you adjust the fit. Wears over a tee, hoodie, long-sleeve or denim layer.',
    category: 'vests',
    gender: 'men',
    material: 'Genuine leather',
  }),
  P({
    id: '4524755040',
    slug: 'mens-black-biker-red-stripes',
    title: 'Black biker jacket, red quilted shoulders',
    marketplaceTitle:
      "Men's Black Real Leather Biker Jacket, Red Stripe Quilted Moto Motorcycle Jacket, Custom Fit",
    etsyUrl: 'https://www.etsy.com/ca/listing/4524755040/mens-black-real-leather-biker-jacket-red',
    ebayUrl: 'https://www.ebay.com/itm/158023339831',
    salePrice: 162.49,
    listPrice: 249.99,
    image: '/images/catalogue/66784ab29e0c.jpg',
    images: [
      '/images/catalogue/66784ab29e0c.jpg',
      '/images/catalogue/29b29edafc1f.jpg',
      '/images/catalogue/45fab7c41db4.jpg',
      '/images/catalogue/de45f536225a.jpg',
      '/images/catalogue/9731c36ef2bd.jpg',
    ],
    blurb: 'Double-rider moto with red padded shoulders and twin sleeve stripes.',
    description:
      'A black leather biker with red shoulder panels, red sleeve stripes, quilted arms and a classic asymmetrical double-rider silhouette. The asymmetric zip front, wide lapels, multiple zip pockets, side waist buckles and zippered cuffs keep it recognisably moto without tipping into costume.',
    category: 'biker',
    gender: 'men',
    material: 'Genuine leather',
  }),
  P({
    id: '4524744142',
    slug: 'mens-brown-suede-brando-biker',
    title: 'Brown suede biker, belted Brando cut',
    marketplaceTitle: "Men's Brown Suede Biker Jacket, Belted Brando Style Moto Leather Coat",
    etsyUrl: 'https://www.etsy.com/ca/listing/4524744142/mens-brown-suede-biker-jacket-belted',
    ebayUrl: 'https://www.ebay.com/itm/158021513973',
    salePrice: 181.99,
    listPrice: 279.99,
    image: '/images/catalogue/85ae09dade80.jpg',
    images: [
      '/images/catalogue/85ae09dade80.jpg',
      '/images/catalogue/5a735e4da8ea.jpg',
      '/images/catalogue/1e18f07400f1.jpg',
      '/images/catalogue/b30cef8db9cd.jpg',
      '/images/catalogue/705626670d3a.jpg',
    ],
    blurb: 'The double-rider, softened into cognac suede.',
    description:
      'A classic Brando-style double rider in warm cognac brown suede. Asymmetrical front zip, wide lapels, shoulder epaulets, belted waist and silver-tone hardware. Pairs with black denim, boots, casual shirts and layered autumn or winter outfits.',
    category: 'biker',
    gender: 'men',
    material: 'Suede',
  }),
  P({
    id: '4524726631',
    slug: 'womens-black-biker-eagle-back',
    title: 'Black biker jacket, lace-up sleeves',
    marketplaceTitle:
      "Women's Black Leather Biker Jacket, Lace-Up Belted Gothic Moto Coat, Eagle Back Design, Custom Fit",
    etsyUrl: 'https://www.etsy.com/ca/listing/4524726631/womens-black-leather-biker-jacket-lace',
    ebayUrl: 'https://www.ebay.com/itm/158038923894',
    salePrice: 181.99,
    listPrice: 279.99,
    image: '/images/catalogue/43b2d2cfe9ee.jpg',
    images: [
      '/images/catalogue/43b2d2cfe9ee.jpg',
      '/images/catalogue/02ec96e6be69.jpg',
      '/images/catalogue/d4b322291572.jpg',
      '/images/catalogue/bb5f20eb9776.jpg',
      '/images/catalogue/d6381dc23561.jpg',
    ],
    blurb: 'Asymmetric moto with lace-up shoulders and a graphic back.',
    description:
      'An asymmetric moto silhouette with a fitted waist belt, lace-up sleeves, side lacing and distressed brown contrast trim. Structured lapel collar, asymmetrical zip, multiple zip pockets, lace-up shoulder panels and cuffs, and a striking eagle back design with motorcycle lettering.',
    category: 'biker',
    gender: 'women',
    material: 'Genuine leather',
  }),
  P({
    id: '4524202078',
    slug: 'mens-black-cafe-racer-brown-piping',
    title: 'Black cafe racer, brown piping',
    marketplaceTitle: 'Men’s Black Leather Cafe Racer Jacket with Brown Piping, Custom Biker Coat',
    etsyUrl: 'https://www.etsy.com/ca/listing/4524202078/mens-black-leather-cafe-racer-jacket',
    ebayUrl: 'https://www.ebay.com/itm/158023265176',
    salePrice: 162.49,
    listPrice: 249.99,
    image: '/images/catalogue/9b51378de8a0.jpg',
    images: [
      '/images/catalogue/9b51378de8a0.jpg',
      '/images/catalogue/a685c838af0f.jpg',
      '/images/catalogue/c5aceedba407.jpg',
      '/images/catalogue/01f381628d31.jpg',
      '/images/catalogue/0ab550807b24.jpg',
    ],
    blurb: 'The quietest jacket in the range — black, with brown piping.',
    description:
      'Black leather with rich brown contrast piping along the shoulders and sleeves, and antique-tone zip hardware. Stand collar, centre-front zip, chest zip pockets, vertical waist pockets and zippered cuffs. Practical biker detailing kept deliberately clean.',
    category: 'cafe-racer',
    gender: 'men',
    material: 'Genuine leather',
  }),
  P({
    id: '4523778624',
    slug: 'black-skull-tactical-vest-kodra',
    title: 'Black skull tactical vest, Kodra',
    marketplaceTitle: 'Punisher Vest Men, Black Skull Tactical Cosplay Vest, Kodra Costume Armor Style Vest',
    etsyUrl: 'https://www.etsy.com/ca/listing/4523778624/punisher-vest-men-black-skull-tactical',
    ebayUrl: 'https://www.ebay.com/itm/158015187806',
    salePrice: 142.99,
    listPrice: 219.99,
    image: '/images/catalogue/d9af7287c592.jpg',
    images: [
      '/images/catalogue/d9af7287c592.jpg',
      '/images/catalogue/b443b93fed3e.jpg',
      '/images/catalogue/7f02bb34ab01.jpg',
      '/images/catalogue/fb2fab6ba2fb.jpg',
      '/images/catalogue/17519eb8321a.jpg',
    ],
    blurb: 'Durable Kodra fabric with a skull chest pattern and armour-style straps.',
    description:
      'Made from durable Kodra fabric with a striking skull chest pattern, adjustable shoulder straps, side buckle details and a strong armour-style appearance. Built for conventions, themed events and photo shoots. The adjustable straps make it easy to style over a fitted shirt or hoodie.',
    category: 'vests',
    gender: 'men',
    material: 'Kodra fabric',
    renamed: true,
  }),
  P({
    id: '4523763727',
    slug: 'blue-gold-leather-utility-jacket',
    title: 'Blue and gold leather utility jacket',
    marketplaceTitle:
      'Lucy Vault 33 Leather Jacket, Fallout Cosplay Costume, Blue Gold Vault Dweller Jacket Men',
    etsyUrl: 'https://www.etsy.com/ca/listing/4523763727/lucy-vault-33-leather-jacket-fallout',
    ebayUrl: 'https://www.ebay.com/itm/158012550748',
    salePrice: 194.99,
    listPrice: 299.99,
    image: '/images/catalogue/63d42e7c443c.jpg',
    images: [
      '/images/catalogue/63d42e7c443c.jpg',
      '/images/catalogue/967992bf939c.jpg',
      '/images/catalogue/a333f080676e.jpg',
      '/images/catalogue/03b22ac0623e.jpg',
      '/images/catalogue/432c65de6a9d.jpg',
    ],
    blurb: 'Blue body, gold front trim, numbered back patch.',
    description:
      'A blue leather jacket with gold front trim, a high stand collar, ribbed black front panels, ribbed shoulder and sleeve detailing, a front zip closure and a large numbered patch on the back. A bold, graphic piece built on a biker-style fit.',
    category: 'statement',
    gender: 'men',
    material: 'Genuine leather',
    renamed: true,
  }),
  P({
    id: '4523674880',
    slug: 'womens-toscana-sheepskin-gilet-olive',
    title: 'Toscana sheepskin gilet, olive green',
    marketplaceTitle:
      'Womens Toscana Sheepskin Leather Waistcoat, Olive Green Fur Gilet, Shearling Vest, Sleeveless Winter Coat, Luxury Fur Vest',
    etsyUrl: 'https://www.etsy.com/ca/listing/4523674880/womens-toscana-sheepskin-leather',
    ebayUrl: 'https://www.ebay.com/itm/158038580763',
    salePrice: 292.5,
    listPrice: 450,
    image: '/images/catalogue/a6fd8bcaf4ba.jpg',
    images: [
      '/images/catalogue/a6fd8bcaf4ba.jpg',
      '/images/catalogue/9b9629af79e0.jpg',
      '/images/catalogue/2b1bd41b4bfa.jpg',
      '/images/catalogue/8eabf572ef91.jpg',
      '/images/catalogue/3641d0a3eb94.jpg',
    ],
    blurb: 'The warmest thing in the shop, and the heaviest.',
    description:
      'Premium olive green suede leather finished with soft Toscana shearling trim. The longline silhouette is flattering while the Toscana collar and trim carry real warmth through the coldest months. Layers over sweaters, dresses and turtlenecks and moves easily from day to evening.',
    category: 'shearling',
    gender: 'women',
    material: 'Sheepskin, Toscana shearling',
  }),
  P({
    id: '4523629749',
    slug: 'womens-gothic-victorian-tailcoat-green',
    title: 'Gothic Victorian tailcoat, green',
    marketplaceTitle:
      'Womens Gothic Leather Coat, Victorian Edwardian Jacket, Green Steampunk Tailcoat, Double Breasted Leather Trench Coat, Witchy Winter Coat',
    etsyUrl: 'https://www.etsy.com/ca/listing/4523629749/womens-gothic-leather-coat-victorian',
    ebayUrl: 'https://www.ebay.com/itm/158038478901',
    salePrice: 195,
    listPrice: 300,
    image: '/images/catalogue/c573893a73cd.jpg',
    images: [
      '/images/catalogue/c573893a73cd.jpg',
      '/images/catalogue/2f9763edcbd6.jpg',
      '/images/catalogue/836f996bd932.jpg',
      '/images/catalogue/74abfa6b1ab1.jpg',
      '/images/catalogue/e4ace454fcca.jpg',
    ],
    blurb: 'Fitted, double-breasted, with a high-low tailcoat hem.',
    description:
      'A fitted silhouette with a double-breasted button front, oversized lapel collar and a high-low tailcoat hem — Victorian tailoring with a darker edge. Structured enough for everyday alternative wear, dramatic enough for events and festivals.',
    category: 'coats',
    gender: 'women',
    material: 'Genuine leather',
  }),
  P({
    id: '4523499105',
    slug: 'womens-red-blue-leather-biker-vest',
    title: 'Red and blue leather biker vest',
    marketplaceTitle:
      'Womens Captain America Leather Vest, Red Blue Motorcycle Vest, American Flag Biker Vest, Cosplay Leather Waistcoat',
    etsyUrl: 'https://www.etsy.com/ca/listing/4523499105/womens-captain-america-leather-vest-red',
    ebayUrl: 'https://www.ebay.com/itm/158038652570',
    salePrice: 162.49,
    listPrice: 249.99,
    image: '/images/catalogue/99ce3c7dc2c0.jpg',
    images: [
      '/images/catalogue/99ce3c7dc2c0.jpg',
      '/images/catalogue/f64e87c096b1.jpg',
      '/images/catalogue/5f7aba0bb2d4.jpg',
      '/images/catalogue/1d6e9c1e69ef.jpg',
      '/images/catalogue/b53d17bbd2b9.jpg',
    ],
    blurb: 'Biker styling in red, blue and white, with a star detail.',
    description:
      'A sleeveless motorcycle vest in genuine leather, combining classic biker styling with red, blue and white panelling and a star detail. Cut for a flattering feminine fit and built to hold up to real wear — made for rallies, conventions and events.',
    category: 'vests',
    gender: 'women',
    material: 'Genuine leather',
    renamed: true,
  }),
  P({
    id: '4523414520',
    slug: 'womens-brown-lambskin-trench-coat',
    title: 'Brown lambskin trench coat',
    marketplaceTitle:
      "Women's Brown Lambskin Leather Trench Coat | Genuine Leather Long Coat | Classic Winter Overcoat | Custom Size",
    etsyUrl: 'https://www.etsy.com/ca/listing/4523414520/womens-brown-lambskin-leather-trench',
    ebayUrl: 'https://www.ebay.com/itm/158038753536',
    salePrice: 195,
    listPrice: 300,
    image: '/images/catalogue/8b6e868b410c.jpg',
    images: [
      '/images/catalogue/8b6e868b410c.jpg',
      '/images/catalogue/0b34ac8080ea.jpg',
      '/images/catalogue/33682941fc1b.jpg',
      '/images/catalogue/a4c0aea37256.jpg',
      '/images/catalogue/c02cda61fb5c.jpg',
    ],
    blurb: 'Lambskin — softer and lighter than cowhide, and it drapes.',
    description:
      'Cut from genuine lambskin for a soft hand and a fluid drape, with a tailored silhouette, classic button front, lined interior and practical side pockets. Long enough to read as an overcoat, light enough to wear all day. Available in custom sizes.',
    category: 'coats',
    gender: 'women',
    material: 'Lambskin',
  }),
  P({
    id: '4523193265',
    slug: 'mens-distressed-black-cafe-racer',
    title: 'Distressed black cafe racer',
    marketplaceTitle: 'Men’s Distressed Leather Biker Jacket, Black Cafe Racer Moto Jacket',
    etsyUrl: 'https://www.etsy.com/ca/listing/4523193265/mens-distressed-leather-biker-jacket',
    ebayUrl: 'https://www.ebay.com/itm/158008683621',
    salePrice: 188.49,
    listPrice: 289.99,
    image: '/images/catalogue/6a3c5a2ba561.jpg',
    images: [
      '/images/catalogue/6a3c5a2ba561.jpg',
      '/images/catalogue/445e1c36fe30.jpg',
      '/images/catalogue/8e798656ff30.jpg',
      '/images/catalogue/4493e3239580.jpg',
      '/images/catalogue/72314798e1c3.jpg',
    ],
    blurb: 'A worn-in finish, quilted shoulders and a slim moto fit.',
    description:
      'A rugged worn leather finish with quilted padded shoulder panels, front zip closure, snap-tab collar and zipper cuffs. Unlike heavily decorated biker jackets this one keeps the design simple — a sleek, slim cafe racer that gets better with wear.',
    category: 'cafe-racer',
    gender: 'men',
    material: 'Genuine leather',
  }),
  P({
    id: '4522627856',
    slug: 'mens-black-hooded-leather-bomber',
    title: 'Black hooded leather bomber',
    marketplaceTitle:
      'Men’s Black Leather Hooded Bomber Jacket, Genuine Leather Motorcycle Hoodie Jacket, Removable Hood Winter Biker Coat Gift',
    etsyUrl: 'https://www.etsy.com/ca/listing/4522627856/mens-black-leather-hooded-bomber-jacket',
    salePrice: 175.49,
    listPrice: 269.99,
    image: '/images/catalogue/6f8f6206abbf.jpg',
    images: [
      '/images/catalogue/6f8f6206abbf.jpg',
      '/images/catalogue/8c8a83bdbd61.jpg',
      '/images/catalogue/3dcea14991e3.jpg',
      '/images/catalogue/b99bd0d1396d.jpg',
      '/images/catalogue/a787550138af.jpg',
    ],
    blurb: 'Bomber shape, biker attitude, hoodie comfort.',
    description:
      'A black leather hooded bomber that borrows the clean shape of a bomber, the attitude of a motorcycle jacket and the ease of a hoodie. Front zip closure, multiple pockets, ribbed cuffs and a grey hooded insert. Built for winter layering and everyday wear.',
    category: 'bomber',
    gender: 'men',
    material: 'Genuine leather',
  }),
  P({
    id: '4522608587',
    slug: 'red-black-leather-stage-jacket',
    title: 'Red and black leather stage jacket',
    marketplaceTitle:
      'Michael Jackson Thriller Jacket, Red Black Leather Jacket for Men, MJ 80s Pop Star Costume, Faux or Genuine Leather Gift',
    etsyUrl: 'https://www.etsy.com/ca/listing/4522608587/michael-jackson-thriller-jacket-red',
    salePrice: 157.94,
    listPrice: 242.99,
    image: '/images/catalogue/83b1d6059109.jpg',
    images: [
      '/images/catalogue/83b1d6059109.jpg',
      '/images/catalogue/b40edd6031e0.jpg',
      '/images/catalogue/4839e2f7e837.jpg',
      '/images/catalogue/5358e38568fd.jpg',
      '/images/catalogue/cceea7fffbf7.jpg',
    ],
    blurb: 'Red body, black V panels, quilted shoulders. Faux or genuine leather.',
    description:
      'A red and black stage jacket with black V-shaped front panels, black sleeve stripes, a high stand collar, snap-button front and quilted shoulder detailing. Available in both faux leather and genuine leather, with custom sizing and custom colour options — the material you choose is stated on the order, never blurred.',
    category: 'statement',
    gender: 'men',
    material: 'Faux or genuine leather',
    renamed: true,
  }),
  P({
    id: '4522602663',
    slug: 'mens-brown-distressed-leather-duster',
    title: 'Brown distressed leather duster',
    marketplaceTitle:
      'Men’s Brown Genuine Leather Distressed Trench Coat, Real Leather Long Duster Coat, Vintage Gothic Leather Overcoat, Winter Coat Gift for Him',
    etsyUrl: 'https://www.etsy.com/ca/listing/4522602663/mens-brown-genuine-leather-distressed',
    ebayUrl: 'https://www.ebay.com/itm/158012143727',
    salePrice: 263.24,
    listPrice: 404.99,
    image: '/images/catalogue/9b3043221a2e.jpg',
    images: [
      '/images/catalogue/9b3043221a2e.jpg',
      '/images/catalogue/d2369c67dad2.jpg',
      '/images/catalogue/d88a16ecaafa.jpg',
      '/images/catalogue/e3280a40b5e5.jpg',
      '/images/catalogue/2877d12a53d3.jpg',
    ],
    blurb: 'Full-length, distressed, and cut to be noticed.',
    description:
      'A long leather coat with a rugged distressed brown finish, sharp lapel collar, button-front closure, cuff strap details and a dramatic duster silhouette. Made for men who want more than a basic jacket — the length gives it real presence.',
    category: 'coats',
    gender: 'men',
    material: 'Genuine leather',
  }),
  P({
    id: '4522524026',
    slug: 'mens-olive-suede-peacoat',
    title: 'Olive suede peacoat, double breasted',
    marketplaceTitle:
      'Mens Olive Green Suede Peacoat Double Breasted Jacket Handmade Leather Coat Tailored Fit Smart Casual Outerwear',
    etsyUrl: 'https://www.etsy.com/ca/listing/4522524026/mens-olive-green-suede-peacoat-double',
    ebayUrl: 'https://www.ebay.com/itm/158009872145',
    salePrice: 193.04,
    listPrice: 296.99,
    image: '/images/catalogue/5b7678486a34.jpg',
    images: [
      '/images/catalogue/5b7678486a34.jpg',
      '/images/catalogue/d06bb5dbed58.jpg',
      '/images/catalogue/426751ef28de.jpg',
      '/images/catalogue/75e47c76018e.jpg',
      '/images/catalogue/e3f5d756e38d.jpg',
    ],
    blurb: 'Classic tailoring in an unusual colour.',
    description:
      'A double-breasted peacoat with a structured lapel collar and a rich olive suede finish — classic tailoring in a colour you do not see often. Handcrafted from premium suede for comfort, durability and a refined silhouette. Works with jeans, chinos or dress trousers.',
    category: 'blazers',
    gender: 'men',
    material: 'Suede',
  }),
  P({
    id: '4522499953',
    slug: 'mens-black-leather-peacoat-fur-collar',
    title: 'Black leather peacoat, fur collar',
    marketplaceTitle:
      'Resident Evil Requiem Inspired Leather Coat for Men, Leon Kennedy Style Black Leather Peacoat, Custom Made Gothic Jacket',
    etsyUrl: 'https://www.etsy.com/ca/listing/4522499953/resident-evil-requiem-inspired-leather',
    ebayUrl: 'https://www.ebay.com/itm/158011896623',
    salePrice: 201.82,
    listPrice: 310.49,
    image: '/images/catalogue/f6395ca29927.jpg',
    images: [
      '/images/catalogue/f6395ca29927.jpg',
      '/images/catalogue/8476a6716f7c.jpg',
      '/images/catalogue/0c13c470b48e.jpg',
      '/images/catalogue/1da3f59c9a0b.jpg',
      '/images/catalogue/45a22dde724a.jpg',
    ],
    blurb: 'Double-breasted, fur collar, buckle cuffs.',
    description:
      'A handcrafted leather peacoat with a double-breasted front, soft fur collar, adjustable buckle cuffs and a tailored silhouette. Made from premium leather and finished with close attention to detail — comfortable and durable enough for everyday wear.',
    category: 'coats',
    gender: 'men',
    material: 'Genuine leather',
    renamed: true,
  }),
  P({
    id: '4522454990',
    slug: 'mens-dark-fantasy-leather-jacket',
    title: 'Dark fantasy jacket, layered shoulders',
    marketplaceTitle:
      'Mens Dark Fantasy Leather Jacket, Gothic Warrior Armor Jacket, Handmade Black Leather Coat, Bespoke Custom Made Jacket',
    etsyUrl: 'https://www.etsy.com/ca/listing/4522454990/mens-dark-fantasy-leather-jacket-gothic',
    ebayUrl: 'https://www.ebay.com/itm/158010217885',
    salePrice: 193.04,
    listPrice: 296.99,
    image: '/images/catalogue/32a0c4da47a1.jpg',
    images: [
      '/images/catalogue/32a0c4da47a1.jpg',
      '/images/catalogue/db08fe1b838d.jpg',
      '/images/catalogue/3dcec9000caa.jpg',
      '/images/catalogue/be39ea0adf5b.jpg',
      '/images/catalogue/864080168927.jpg',
    ],
    blurb: 'Layered shoulder detailing and a high neck collar.',
    description:
      'For those who want something other than an ordinary leather jacket: distinctive layered shoulder detailing, a structured silhouette and a high-neck collar. Handcrafted from premium leather and built to stand out while staying comfortable enough to actually wear. Bespoke and custom made to order.',
    category: 'statement',
    gender: 'men',
    material: 'Genuine leather',
  }),
  P({
    id: '4520574740',
    slug: 'mens-black-leather-duster-western',
    title: 'Black leather duster, western drover',
    marketplaceTitle:
      "Men's Black Leather Duster Coat, Western Cowboy Trench Coat, Long Leather Overcoat, Vintage Drover Coat, Custom Made Ranch Outerwear",
    etsyUrl: 'https://www.etsy.com/ca/listing/4520574740/mens-black-leather-duster-coat-western',
    ebayUrl: 'https://www.ebay.com/itm/158010322947',
    salePrice: 262.37,
    listPrice: 403.65,
    image: '/images/catalogue/95fed0f51ef9.jpg',
    images: [
      '/images/catalogue/95fed0f51ef9.jpg',
      '/images/catalogue/803c52983519.jpg',
      '/images/catalogue/8508e77f7b33.jpg',
      '/images/catalogue/f5c9adcadc43.jpg',
      '/images/catalogue/38facbcd234a.jpg',
    ],
    blurb: 'Full-length drover coat, built on traditional western lines.',
    description:
      'A handcrafted duster built on classic drover lines: full-length silhouette, comfortable inner lining, durable construction and a vintage-inspired distressed appearance. Made from genuine leather, for ranch work, western events or simply because nothing else has this shape.',
    category: 'coats',
    gender: 'men',
    material: 'Genuine leather',
  }),
  P({
    id: '4520996623',
    slug: 'mens-vintage-brown-leather-field-coat',
    title: 'Vintage brown field coat, removable bib',
    marketplaceTitle:
      'Vintage Brown Leather Field Coat Men | Removable Inner Bib Jacket | Distressed Leather Car Coat | Winter Leather Jacket | Custom Made',
    etsyUrl: 'https://www.etsy.com/ca/listing/4520996623/vintage-brown-leather-field-coat-men',
    salePrice: 193.04,
    listPrice: 296.99,
    image: '/images/catalogue/d4d5716e64f6.jpg',
    images: [
      '/images/catalogue/d4d5716e64f6.jpg',
      '/images/catalogue/bde03d237d08.jpg',
      '/images/catalogue/f52934cc6420.jpg',
      '/images/catalogue/bbb4c846e012.jpg',
      '/images/catalogue/e39ff3de72e5.jpg',
    ],
    blurb: 'The inner bib comes out, so it works across seasons.',
    description:
      'Made from genuine leather with a rich distressed brown finish that picks up more character over time. A removable inner bib adds warmth and lets the coat work across seasons. Structured stand collar, utility pockets and refined tailoring balance function against shape.',
    category: 'coats',
    gender: 'men',
    material: 'Genuine leather',
  }),
  P({
    id: '4521057284',
    slug: 'mens-black-cowhide-motorcycle-vest',
    title: 'Black cowhide motorcycle vest',
    marketplaceTitle:
      'Mens Black Leather Motorcycle Vest, Custom Biker Club Vest, Handmade Cowhide Leather Riding Vest, Bespoke Motorcycle Waistcoat',
    etsyUrl: 'https://www.etsy.com/ca/listing/4521057284/mens-black-leather-motorcycle-vest',
    ebayUrl: 'https://www.ebay.com/itm/158010174984',
    salePrice: 166.72,
    listPrice: 256.49,
    image: '/images/catalogue/b2fd3c533ce1.jpg',
    images: [
      '/images/catalogue/b2fd3c533ce1.jpg',
      '/images/catalogue/d1ac98b5cf69.jpg',
      '/images/catalogue/859f3e105094.jpg',
      '/images/catalogue/cac4f42b6017.jpg',
      '/images/catalogue/36d66295e83c.jpg',
    ],
    blurb: 'Cowhide — heavier than lambskin, and it lasts.',
    description:
      'A club vest in heavy cowhide: sleek band collar, heavy-duty front zip, adjustable lace-up sides, functional pockets and embroidered biker patches. Cowhide is the heaviest hide in the range, which is exactly why riders ask for it.',
    category: 'vests',
    gender: 'men',
    material: 'Cowhide',
  }),

  // ── eBay-only ───────────────────────────────────────────────────────────
  // The 13 pieces listed on eBay (kingsfordleather) that have no Etsy twin.
  // Matched against the Etsy catalogue by listing photography, not by title.
  // Prices are the CAD price eBay shows a Canadian buyer, undiscounted.

  P({
    id: '158086415405',
    slug: 'mens-burgundy-leather-biker-asymmetric',
    title: 'Burgundy leather biker, asymmetric zip',
    marketplaceTitle:
      'Men\'s Burgundy Genuine Leather Biker Jacket Asymmetric Zip Slim Fit Custom Made',
    ebayUrl: 'https://www.ebay.com/itm/158086415405',
    salePrice: 199.99,
    listPrice: 199.99,
    image: '/images/catalogue/d1bebb3c4d5a.jpg',
    images: [
      '/images/catalogue/d1bebb3c4d5a.jpg',
      '/images/catalogue/1e66dedd2363.jpg',
      '/images/catalogue/c4a302abcc6e.jpg',
      '/images/catalogue/a15108c9b9b0.jpg',
      '/images/catalogue/3a493e9deade.jpg',
    ],
    blurb: 'A double rider in oxblood rather than the usual black.',
    description:
      'A slim-fit asymmetric biker cut from genuine leather in a deep burgundy that reads almost oxblood in low light. The off-centre zip, quilted shoulder and elbow panels, snap-down lapels and zipped waist pockets are all standard double-rider language — the colour is what makes it. Polyester lined, with lace-up side adjusters to bring the waist in. Standard sizing or cut to your own measurements at the same price.',
    category: 'biker',
    gender: 'men',
    material: 'Genuine leather',
  }),
  P({
    id: '158009798434',
    slug: 'mens-tan-suede-zip-front-jacket',
    title: 'Tan suede jacket, zip front',
    marketplaceTitle:
      'Men\'s Tan Suede Leather Zip Front Shirt Collar Casual Jacket',
    ebayUrl: 'https://www.ebay.com/itm/158009798434',
    salePrice: 179.99,
    listPrice: 179.99,
    image: '/images/catalogue/6697d82d451d.jpg',
    images: [
      '/images/catalogue/6697d82d451d.jpg',
      '/images/catalogue/82e49694118a.jpg',
      '/images/catalogue/c47a87c90f08.jpg',
      '/images/catalogue/fe347a59c3e5.jpg',
      '/images/catalogue/d070e98bf317.jpg',
    ],
    blurb: 'The plainest thing in the shop, and the easiest to wear.',
    description:
      'Soft tan suede, a straight shirt collar, a full-length zip and four pockets — there is nothing else going on, which is the point. It sits somewhere between a trucker and a blouson: no ribbing, no belt, no hardware to speak of. Lightweight enough for spring and autumn, and it layers under a coat in winter without bulk. The nap deepens with wear.',
    category: 'trucker',
    gender: 'men',
    material: 'Suede',
  }),
  P({
    id: '158083287237',
    slug: 'mens-brown-cowhide-biker-distressed',
    title: 'Brown cowhide biker, distressed and belted',
    marketplaceTitle:
      'Men\'s Brown Cowhide Leather Motorcycle Biker Jacket Custom Made Distressed',
    ebayUrl: 'https://www.ebay.com/itm/158083287237',
    salePrice: 169.99,
    listPrice: 169.99,
    image: '/images/catalogue/b7dc50931953.jpg',
    images: [
      '/images/catalogue/b7dc50931953.jpg',
      '/images/catalogue/6d6fc71efc79.jpg',
      '/images/catalogue/baf58c231d7e.jpg',
      '/images/catalogue/882180675a22.jpg',
      '/images/catalogue/b3db8dd17578.jpg',
    ],
    blurb: 'Heavy cowhide, distressed by hand, with a buckled waist belt.',
    description:
      'Cut from cowhide and distressed before assembly, so the brown sits unevenly across the panels and no two come out the same. Quilted shoulder and forearm panels, a full-length zip, four zipped pockets and a buckled waist belt. This is the heaviest of the brown bikers — it holds its shape rather than draping, and it breaks in over a season rather than a week.',
    category: 'biker',
    gender: 'men',
    material: 'Cowhide',
  }),
  P({
    id: '158008691040',
    slug: 'mens-black-cafe-racer-gold-stripe',
    title: 'Black cafe racer, gold sleeve stripe',
    marketplaceTitle:
      'Men Black Leather Cafe Racer Jacket Gold Stripe Biker Motorcycle Coat',
    ebayUrl: 'https://www.ebay.com/itm/158008691040',
    salePrice: 169.99,
    listPrice: 169.99,
    image: '/images/catalogue/a79e438d77de.jpg',
    images: [
      '/images/catalogue/a79e438d77de.jpg',
      '/images/catalogue/f0bbec86e988.jpg',
      '/images/catalogue/b6a9aa0af399.jpg',
      '/images/catalogue/56b7212f9a41.jpg',
      '/images/catalogue/a8025c758d59.jpg',
    ],
    blurb: 'Minimal black cafe racer, broken by a single gold band on one sleeve.',
    description:
      'A clean cafe racer in black leather with a band collar, straight front zip and zipped chest and hand pockets. The only decoration is a pair of gold stripes banding one forearm — the sort of detail that reads as a racing number rather than a logo. Slim through the body and short in the hem, so it sits above the belt. Lined in polyester.',
    category: 'cafe-racer',
    gender: 'men',
    material: 'Genuine leather',
  }),
  P({
    id: '158083596331',
    slug: 'mens-black-cowhide-blazer',
    title: 'Black cowhide blazer, two button',
    marketplaceTitle:
      'Men\'s Black Genuine Cowhide Leather Blazer 2 Button Sport Coat Custom Made',
    ebayUrl: 'https://www.ebay.com/itm/158083596331',
    salePrice: 199.99,
    listPrice: 199.99,
    image: '/images/catalogue/e5724927eb3d.jpg',
    images: [
      '/images/catalogue/e5724927eb3d.jpg',
      '/images/catalogue/97037cc38ea9.jpg',
      '/images/catalogue/056cf1793a1f.jpg',
      '/images/catalogue/e5edc81c83ab.jpg',
      '/images/catalogue/af091f71ed8c.jpg',
    ],
    blurb: 'Tailoring cut in cowhide instead of cloth.',
    description:
      'A two-button sport coat in black cowhide, with a notch lapel, flap hip pockets, a welt chest pocket and inner pockets — the pattern of a wool blazer, made up in leather. It is the piece that works over a shirt for dinner and over a knit at the weekend. Fully lined, mid-length, and cut regular rather than slim so it layers.',
    category: 'blazers',
    gender: 'men',
    material: 'Cowhide',
  }),
  P({
    id: '158085638345',
    slug: 'mens-brown-belted-motorcycle-coat',
    title: 'Brown belted motorcycle coat, vintage cut',
    marketplaceTitle:
      'Men\'s Brown Genuine Leather Biker Coat Vintage Belted Motorcycle Custom Made',
    ebayUrl: 'https://www.ebay.com/itm/158085638345',
    salePrice: 199.99,
    listPrice: 199.99,
    image: '/images/catalogue/190ee50dd3f6.jpg',
    images: [
      '/images/catalogue/190ee50dd3f6.jpg',
      '/images/catalogue/879077e67fe6.jpg',
      '/images/catalogue/ed5d1efa4fde.jpg',
      '/images/catalogue/005a87fd27e2.jpg',
      '/images/catalogue/f0ecd51e3172.jpg',
    ],
    blurb: 'A long-bodied riding coat in warm tan, closed with a waist belt.',
    description:
      'Longer than a biker and closer to a riding coat: mid-length, double-breasted, with a wide notch lapel and a buckled belt that pulls the waist in. The tan leather is polished rather than distressed, so it catches light along the shoulders and belt. Lined and zip-pocketed, with enough length to cover the seat of a bike.',
    category: 'coats',
    gender: 'men',
    material: 'Genuine leather',
  }),
  P({
    id: '158086323172',
    slug: 'mens-brown-leather-blazer',
    title: 'Brown leather blazer, two button',
    marketplaceTitle:
      'Men\'s Brown Genuine Leather Blazer Jacket 2 Button Sport Coat Custom Made',
    ebayUrl: 'https://www.ebay.com/itm/158086323172',
    salePrice: 199.99,
    listPrice: 199.99,
    image: '/images/catalogue/a85508de491e.jpg',
    images: [
      '/images/catalogue/a85508de491e.jpg',
      '/images/catalogue/d978a5be6c91.jpg',
      '/images/catalogue/8f394f98d853.jpg',
      '/images/catalogue/fa0e0f30acd1.jpg',
      '/images/catalogue/b3c820a61040.jpg',
    ],
    blurb: 'The same sport-coat pattern as the black, in a softer brown.',
    description:
      'A two-button leather sport coat in mid brown, with a notch lapel, flap hip pockets and inner pockets. Satin lined, which makes it easier to pull on over knitwear than the cowhide version. Brown reads warmer and less formal than black here — this is a jacket for an office that does not insist on suits, and for everywhere after it.',
    category: 'blazers',
    gender: 'men',
    material: 'Genuine leather',
  }),
  P({
    id: '158089903864',
    slug: 'burgundy-hooded-leather-jacket-lace-up',
    title: 'Burgundy hooded leather jacket, laced sleeves',
    marketplaceTitle:
      'Men\'s Arrow Arsenal Burgundy Genuine Leather Hooded Jacket Lace Up Custom Made',
    ebayUrl: 'https://www.ebay.com/itm/158089903864',
    salePrice: 199.99,
    listPrice: 199.99,
    image: '/images/catalogue/f9c928977272.jpg',
    images: [
      '/images/catalogue/f9c928977272.jpg',
      '/images/catalogue/cb257ff27dac.jpg',
      '/images/catalogue/4b88be097fab.jpg',
      '/images/catalogue/bdeadb9c5273.jpg',
      '/images/catalogue/3da6124d3698.jpg',
    ],
    blurb: 'Deep burgundy, drawstring hood, leather lacing down both sleeves.',
    description:
      'A hooded leather jacket in deep burgundy, with grommeted lacing running the length of both sleeves and down the sides, a drawstring hood and a full-length zip. Satin lined. It is built as a costume piece and wears as a statement jacket — the lacing and the colour do all the work, and nothing about it is subtle.',
    category: 'statement',
    gender: 'men',
    material: 'Genuine leather',
    renamed: true,
  }),
  P({
    id: '158086527255',
    slug: 'mens-black-belted-double-rider',
    title: 'Black belted double rider',
    marketplaceTitle:
      'Men\'s Terminator 2 Black Genuine Leather Belted Biker Jacket Custom Made',
    ebayUrl: 'https://www.ebay.com/itm/158086527255',
    salePrice: 199.99,
    listPrice: 199.99,
    image: '/images/catalogue/1b517b979e6f.jpg',
    images: [
      '/images/catalogue/1b517b979e6f.jpg',
      '/images/catalogue/989f3ea0823f.jpg',
      '/images/catalogue/a209f64c152b.jpg',
      '/images/catalogue/e6f70a987a09.jpg',
      '/images/catalogue/1c739d9052f8.jpg',
    ],
    blurb: 'The archetype: wide lapels, off-centre zip, buckled belt.',
    description:
      'A black double rider with everything the shape is known for — broad snap-down lapels, an asymmetric zip, zipped chest and hand pockets, buckled sleeve cuffs and a belted waist. Viscose lined, cut short so the belt sits on the hip. This is the plainest and most classical of the black bikers in the collection; nothing on it is decorative.',
    category: 'biker',
    gender: 'men',
    material: 'Genuine leather',
    renamed: true,
  }),
  P({
    id: '158009772503',
    slug: 'mens-black-cowhide-biker-belted',
    title: 'Black cowhide biker, belted',
    marketplaceTitle:
      'Men\'s Black Genuine Cowhide Leather Motorcycle Biker Jacket Custom Made',
    ebayUrl: 'https://www.ebay.com/itm/158009772503',
    salePrice: 199.99,
    listPrice: 199.99,
    image: '/images/catalogue/ba2f7c20be35.jpg',
    images: [
      '/images/catalogue/ba2f7c20be35.jpg',
      '/images/catalogue/c94a3b700f77.jpg',
      '/images/catalogue/493e760a7995.jpg',
      '/images/catalogue/e816826b745d.jpg',
      '/images/catalogue/b3b15959dfd8.jpg',
    ],
    blurb: 'Full-weight black cowhide, buckled at the waist and cuffs.',
    description:
      'Cut from full-weight cowhide, which is what separates this from the lighter black bikers: it is stiff out of the box and takes a season to move with you. Asymmetric zip, notched lapels, four zipped pockets, buckled cuffs and a waist belt. Lined in polyester. If you want one jacket that will outlast the rest of the wardrobe, this is it.',
    category: 'biker',
    gender: 'men',
    material: 'Cowhide',
  }),
  P({
    id: '158009789159',
    slug: 'mens-black-jacket-removable-shearling-collar',
    title: 'Black leather jacket, removable shearling collar',
    marketplaceTitle:
      'Men\'s Black Genuine Leather Jacket Removable Sheepskin Collar Custom Made',
    ebayUrl: 'https://www.ebay.com/itm/158009789159',
    salePrice: 180.85,
    listPrice: 180.85,
    image: '/images/catalogue/20db94a43406.jpg',
    images: [
      '/images/catalogue/20db94a43406.jpg',
      '/images/catalogue/da9b6a0ff595.jpg',
      '/images/catalogue/469a7cabc883.jpg',
      '/images/catalogue/4229112ee297.jpg',
      '/images/catalogue/21f2fe469645.jpg',
    ],
    blurb: 'Two jackets in one — the cream shearling collar snaps off.',
    description:
      'A short black leather jacket with flap chest pockets and a snap-and-zip front, and a cream sheepskin collar that unsnaps completely. With the collar on it is a winter flight jacket; with it off it is a plain black blouson that works year round. Lined and pocketed throughout. The collar is real sheepskin, not a faux pile.',
    category: 'bomber',
    gender: 'men',
    material: 'Genuine leather',
  }),
  P({
    id: '158021569504',
    slug: 'mens-distressed-brown-flight-jacket',
    title: 'Distressed brown flight jacket, shearling collar',
    marketplaceTitle:
      'Men Brown Suede Leather Bomber Jacket Shearling Collar Aviator Coat',
    ebayUrl: 'https://www.ebay.com/itm/158021569504',
    salePrice: 179.99,
    listPrice: 179.99,
    image: '/images/catalogue/822367be6cb6.jpg',
    images: [
      '/images/catalogue/822367be6cb6.jpg',
      '/images/catalogue/10cede6cb19e.jpg',
      '/images/catalogue/cbccf2d68aa6.jpg',
      '/images/catalogue/473ffa233ccf.jpg',
      '/images/catalogue/c02cfbd5251b.jpg',
    ],
    blurb: 'The heavier, darker cousin of the tan suede bomber.',
    description:
      'A flight jacket in distressed brown leather with a deep shearling collar, knitted cuffs and hem, and a full-length zip. It shares a name with the tan suede bomber on the shop but not a hide: this one is polished leather rubbed back at the seams and shoulders, so it reads darker, heavier and more worn-in from the first day. Front slash pockets, polyester lined.',
    category: 'bomber',
    gender: 'men',
    material: 'Genuine leather',
  }),
  P({
    id: '158021641843',
    slug: 'mens-black-cowhide-patch-vest',
    title: 'Black cowhide patch vest, laced sides',
    marketplaceTitle:
      'Men\'s Black Label Society BLS Cowhide Leather Biker Vest Skull Patches Lace-Up',
    ebayUrl: 'https://www.ebay.com/itm/158021641843',
    salePrice: 159.99,
    listPrice: 159.99,
    image: '/images/catalogue/d1ff194b9104.jpg',
    images: [
      '/images/catalogue/d1ff194b9104.jpg',
      '/images/catalogue/e181f61071cb.jpg',
      '/images/catalogue/0850e710d031.jpg',
      '/images/catalogue/68bf169ba150.jpg',
      '/images/catalogue/af9bda876961.jpg',
    ],
    blurb: 'A club vest already loaded with patches, laced at both sides.',
    description:
      'A cowhide club vest with a band collar, snap front and leather lacing down both side seams for adjustment. It comes patched rather than blank — chest, back and hem carry sewn-on patches, so it wears as a finished cut rather than something to build up over time. Polyester lined, mid-length, and cut to sit over a jacket as well as under one.',
    category: 'vests',
    gender: 'men',
    material: 'Cowhide',
    renamed: true,
  }),
]

/* ── Derived helpers ──────────────────────────────────────────────────── */

export function displayTitle(product: Product): string {
  return SHOW_ORIGINAL_TITLES ? product.marketplaceTitle : product.title
}

export function discountPercent(product: Product): number {
  return Math.round((1 - product.salePrice / product.listPrice) * 100)
}

export function formatPrice(value: number): string {
  return `CA$${value.toFixed(2)}`
}

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug)
}

export function categoryLabel(slug: Category): string {
  return CATEGORIES.find((c) => c.slug === slug)?.label ?? slug
}

export function productsIn(category: Category): readonly Product[] {
  return PRODUCTS.filter((p) => p.category === category)
}

export function relatedTo(product: Product, limit = 4): readonly Product[] {
  const sameCategory = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id,
  )
  const fallback = PRODUCTS.filter(
    (p) => p.category !== product.category && p.gender === product.gender,
  )
  return [...sameCategory, ...fallback].slice(0, limit)
}

/** Price band across the whole catalogue, for the shop filters. */
export const PRICE_RANGE = {
  min: Math.min(...PRODUCTS.map((p) => p.salePrice)),
  max: Math.max(...PRODUCTS.map((p) => p.salePrice)),
}
