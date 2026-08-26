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
    image: 'https://i.etsystatic.com/66400165/r/il/e19a0a/8382014017/il_794xN.8382014017_1nbe.jpg',
    images: [
      'https://i.etsystatic.com/66400165/r/il/e19a0a/8382014017/il_794xN.8382014017_1nbe.jpg',
      'https://i.etsystatic.com/66400165/r/il/ad0ffb/8382014007/il_794xN.8382014007_ec3f.jpg',
      'https://i.etsystatic.com/66400165/r/il/5ac1e2/8382014009/il_794xN.8382014009_szh6.jpg',
      'https://i.etsystatic.com/66400165/r/il/cfa285/8334129330/il_794xN.8334129330_8wyw.jpg',
      'https://i.etsystatic.com/66400165/r/il/62e2bc/8382014011/il_794xN.8382014011_3f9q.jpg',
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
    image: 'https://i.etsystatic.com/66400165/r/il/ea44b0/8334055596/il_794xN.8334055596_f85b.jpg',
    images: [
      'https://i.etsystatic.com/66400165/r/il/ea44b0/8334055596/il_794xN.8334055596_f85b.jpg',
      'https://i.etsystatic.com/66400165/r/il/e9a74f/8334055602/il_794xN.8334055602_n4om.jpg',
      'https://i.etsystatic.com/66400165/r/il/a02d28/8381940287/il_794xN.8381940287_tody.jpg',
      'https://i.etsystatic.com/66400165/r/il/26551a/8381940293/il_794xN.8381940293_2gsf.jpg',
      'https://i.etsystatic.com/66400165/r/il/8f02e2/8334055600/il_794xN.8334055600_oudn.jpg',
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
    image: 'https://i.etsystatic.com/66400165/r/il/32f781/8334105956/il_794xN.8334105956_rumq.jpg',
    images: [
      'https://i.etsystatic.com/66400165/r/il/32f781/8334105956/il_794xN.8334105956_rumq.jpg',
      'https://i.etsystatic.com/66400165/r/il/bb7bbb/8381990455/il_794xN.8381990455_febl.jpg',
      'https://i.etsystatic.com/66400165/r/il/91c885/8334105944/il_794xN.8334105944_9lun.jpg',
      'https://i.etsystatic.com/66400165/r/il/fd9d64/8381990457/il_794xN.8381990457_knom.jpg',
      'https://i.etsystatic.com/66400165/r/il/2fcc03/8334105948/il_794xN.8334105948_kf17.jpg',
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
    image: 'https://i.etsystatic.com/66400165/r/il/36b68d/8381122941/il_794xN.8381122941_iisl.jpg',
    images: [
      'https://i.etsystatic.com/66400165/r/il/36b68d/8381122941/il_794xN.8381122941_iisl.jpg',
      'https://i.etsystatic.com/66400165/r/il/1cd87f/8189445999/il_794xN.8189445999_33hq.jpg',
      'https://i.etsystatic.com/66400165/r/il/39e494/8381122929/il_794xN.8381122929_cnix.jpg',
      'https://i.etsystatic.com/66400165/r/il/1f64da/8381122933/il_794xN.8381122933_s8dj.jpg',
      'https://i.etsystatic.com/66400165/r/il/d123ef/8381122931/il_794xN.8381122931_m79h.jpg',
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
    image: 'https://i.etsystatic.com/66400165/r/il/e98f2e/8346974782/il_794xN.8346974782_c7w1.jpg',
    images: [
      'https://i.etsystatic.com/66400165/r/il/e98f2e/8346974782/il_794xN.8346974782_c7w1.jpg',
      'https://i.etsystatic.com/66400165/r/il/4156da/8346974786/il_794xN.8346974786_ij64.jpg',
      'https://i.etsystatic.com/66400165/r/il/5478e8/8394861731/il_794xN.8394861731_6fcr.jpg',
      'https://i.etsystatic.com/66400165/r/il/9541cd/8394861775/il_794xN.8394861775_t09r.jpg',
      'https://i.etsystatic.com/66400165/r/il/eec3f9/8394861797/il_794xN.8394861797_r1qu.jpg',
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
    image: 'https://i.etsystatic.com/66400165/r/il/e062a4/8422463263/il_794xN.8422463263_g4sc.jpg',
    images: [
      'https://i.etsystatic.com/66400165/r/il/e062a4/8422463263/il_794xN.8422463263_g4sc.jpg',
      'https://i.etsystatic.com/66400165/r/il/ab8e9d/8374588776/il_794xN.8374588776_859r.jpg',
      'https://i.etsystatic.com/66400165/r/il/893044/8422463267/il_794xN.8422463267_b6v4.jpg',
      'https://i.etsystatic.com/66400165/r/il/6dc977/8422463259/il_794xN.8422463259_jrjp.jpg',
      'https://i.etsystatic.com/66400165/r/il/fb9fac/8422463255/il_794xN.8422463255_dfjw.jpg',
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
    image: 'https://i.etsystatic.com/66400165/r/il/27c361/8333465402/il_794xN.8333465402_rz8x.jpg',
    images: [
      'https://i.etsystatic.com/66400165/r/il/27c361/8333465402/il_794xN.8333465402_rz8x.jpg',
      'https://i.etsystatic.com/66400165/r/il/0cee68/8381352265/il_794xN.8381352265_a22k.jpg',
      'https://i.etsystatic.com/66400165/r/il/35d20d/8333465432/il_794xN.8333465432_tno2.jpg',
      'https://i.etsystatic.com/66400165/r/il/28758e/8381352267/il_794xN.8381352267_l6pk.jpg',
      'https://i.etsystatic.com/66400165/r/il/14d366/8381352269/il_794xN.8381352269_1n4q.jpg',
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
    image: 'https://i.etsystatic.com/66400165/r/il/2e8ee1/8347855750/il_794xN.8347855750_ddib.jpg',
    images: [
      'https://i.etsystatic.com/66400165/r/il/2e8ee1/8347855750/il_794xN.8347855750_ddib.jpg',
      'https://i.etsystatic.com/66400165/r/il/462d93/8347855744/il_794xN.8347855744_k360.jpg',
      'https://i.etsystatic.com/66400165/r/il/82ca48/8395744333/il_794xN.8395744333_dfds.jpg',
      'https://i.etsystatic.com/66400165/r/il/cbe8f2/8347855746/il_794xN.8347855746_je62.jpg',
      'https://i.etsystatic.com/66400165/r/il/5269a3/8395744327/il_794xN.8395744327_bi62.jpg',
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
    image: 'https://i.etsystatic.com/66400165/r/il/bcf86f/8372540628/il_794xN.8372540628_94dd.jpg',
    images: [
      'https://i.etsystatic.com/66400165/r/il/bcf86f/8372540628/il_794xN.8372540628_94dd.jpg',
      'https://i.etsystatic.com/66400165/r/il/6fbafb/8420414549/il_794xN.8420414549_2nc9.jpg',
      'https://i.etsystatic.com/66400165/r/il/00d223/8372535160/il_794xN.8372535160_2zg4.jpg',
      'https://i.etsystatic.com/66400165/r/il/d1459a/8420414547/il_794xN.8420414547_e8ie.jpg',
      'https://i.etsystatic.com/66400165/r/il/2f3186/8420414551/il_794xN.8420414551_ayvx.jpg',
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
    image: 'https://i.etsystatic.com/66400165/r/il/63c355/8396309729/il_794xN.8396309729_8g43.jpg',
    images: [
      'https://i.etsystatic.com/66400165/r/il/63c355/8396309729/il_794xN.8396309729_8g43.jpg',
      'https://i.etsystatic.com/66400165/r/il/70ffb4/8348422972/il_794xN.8348422972_7urk.jpg',
      'https://i.etsystatic.com/66400165/r/il/0398a0/8348422970/il_794xN.8348422970_h8q4.jpg',
      'https://i.etsystatic.com/66400165/r/il/25be78/8396309725/il_794xN.8396309725_7xud.jpg',
      'https://i.etsystatic.com/66400165/r/il/9316a5/8396309727/il_794xN.8396309727_ey2b.jpg',
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
    image: 'https://i.etsystatic.com/66400165/r/il/bf504c/8399508461/il_794xN.8399508461_gcm3.jpg',
    images: [
      'https://i.etsystatic.com/66400165/r/il/bf504c/8399508461/il_794xN.8399508461_gcm3.jpg',
      'https://i.etsystatic.com/66400165/r/il/6fe8b0/8351622748/il_794xN.8351622748_sw50.jpg',
      'https://i.etsystatic.com/66400165/r/il/c66cbd/8399508421/il_794xN.8399508421_9303.jpg',
      'https://i.etsystatic.com/66400165/r/il/3b75ab/8399508437/il_794xN.8399508437_caq7.jpg',
      'https://i.etsystatic.com/66400165/r/il/f365ba/8351622720/il_794xN.8351622720_jy7e.jpg',
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
    image: 'https://i.etsystatic.com/66400165/r/il/89517e/8374579270/il_794xN.8374579270_q2n8.jpg',
    images: [
      'https://i.etsystatic.com/66400165/r/il/89517e/8374579270/il_794xN.8374579270_q2n8.jpg',
      'https://i.etsystatic.com/66400165/r/il/77990a/8422454021/il_794xN.8422454021_kv7e.jpg',
      'https://i.etsystatic.com/66400165/r/il/179609/8374579264/il_794xN.8374579264_5nqf.jpg',
      'https://i.etsystatic.com/66400165/r/il/984970/8422454055/il_794xN.8422454055_9kmx.jpg',
      'https://i.etsystatic.com/66400165/r/il/a939dd/8422454023/il_794xN.8422454023_g7xk.jpg',
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
    image: 'https://i.etsystatic.com/66400165/r/il/352532/8395293937/il_794xN.8395293937_bztv.jpg',
    images: [
      'https://i.etsystatic.com/66400165/r/il/352532/8395293937/il_794xN.8395293937_bztv.jpg',
      'https://i.etsystatic.com/66400165/r/il/5a9297/8395293915/il_794xN.8395293915_fklq.jpg',
      'https://i.etsystatic.com/66400165/r/il/5c5223/8395293923/il_794xN.8395293923_rfd0.jpg',
      'https://i.etsystatic.com/66400165/r/il/e24221/8395293891/il_794xN.8395293891_ibkq.jpg',
      'https://i.etsystatic.com/66400165/r/il/868e96/8347407704/il_794xN.8347407704_bjup.jpg',
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
    image: 'https://i.etsystatic.com/66400165/r/il/44158b/8333619632/il_794xN.8333619632_hezv.jpg',
    images: [
      'https://i.etsystatic.com/66400165/r/il/44158b/8333619632/il_794xN.8333619632_hezv.jpg',
      'https://i.etsystatic.com/66400165/r/il/965760/8333619682/il_794xN.8333619682_hvfs.jpg',
      'https://i.etsystatic.com/66400165/r/il/03c4fe/8333619636/il_794xN.8333619636_34ff.jpg',
      'https://i.etsystatic.com/66400165/r/il/7ab87a/8381505531/il_794xN.8381505531_43o0.jpg',
      'https://i.etsystatic.com/66400165/r/il/b48d4b/8333685666/il_794xN.8333685666_tp4y.jpg',
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
    image: 'https://i.etsystatic.com/66400165/r/il/62876d/8381648839/il_794xN.8381648839_gua1.jpg',
    images: [
      'https://i.etsystatic.com/66400165/r/il/62876d/8381648839/il_794xN.8381648839_gua1.jpg',
      'https://i.etsystatic.com/66400165/r/il/487d07/8333763766/il_794xN.8333763766_dgiu.jpg',
      'https://i.etsystatic.com/66400165/r/il/66021e/8381648831/il_794xN.8381648831_4kzj.jpg',
      'https://i.etsystatic.com/66400165/r/il/a63476/8381648837/il_794xN.8381648837_2idd.jpg',
      'https://i.etsystatic.com/66400165/r/il/582283/8381648835/il_794xN.8381648835_6v8h.jpg',
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
    image: 'https://i.etsystatic.com/66400165/r/il/302bc8/8381713235/il_794xN.8381713235_h7fh.jpg',
    images: [
      'https://i.etsystatic.com/66400165/r/il/302bc8/8381713235/il_794xN.8381713235_h7fh.jpg',
      'https://i.etsystatic.com/66400165/r/il/b09a2a/8333828986/il_794xN.8333828986_tcg7.jpg',
      'https://i.etsystatic.com/66400165/r/il/73b67d/8333828980/il_794xN.8333828980_1bmy.jpg',
      'https://i.etsystatic.com/66400165/r/il/6c7622/8333828982/il_794xN.8333828982_1hvv.jpg',
      'https://i.etsystatic.com/66400165/r/il/347fa9/8333828984/il_794xN.8333828984_hqoc.jpg',
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
    image: 'https://i.etsystatic.com/66400165/r/il/859427/8381727561/il_794xN.8381727561_hvaa.jpg',
    images: [
      'https://i.etsystatic.com/66400165/r/il/859427/8381727561/il_794xN.8381727561_hvaa.jpg',
      'https://i.etsystatic.com/66400165/r/il/e43c25/8333843528/il_794xN.8333843528_ctug.jpg',
      'https://i.etsystatic.com/66400165/r/il/ba2664/8333843530/il_794xN.8333843530_ndqw.jpg',
      'https://i.etsystatic.com/66400165/r/il/d1668c/8333843628/il_794xN.8333843628_9p5o.jpg',
      'https://i.etsystatic.com/66400165/r/il/82e8e3/8381727555/il_794xN.8381727555_l28f.jpg',
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
    image: 'https://i.etsystatic.com/66400165/r/il/68317f/8381749965/il_794xN.8381749965_kupc.jpg',
    images: [
      'https://i.etsystatic.com/66400165/r/il/68317f/8381749965/il_794xN.8381749965_kupc.jpg',
      'https://i.etsystatic.com/66400165/r/il/379636/8333865802/il_794xN.8333865802_1a45.jpg',
      'https://i.etsystatic.com/66400165/r/il/e8a923/8381749959/il_794xN.8381749959_890v.jpg',
      'https://i.etsystatic.com/66400165/r/il/e98616/8381749963/il_794xN.8381749963_nqv6.jpg',
      'https://i.etsystatic.com/66400165/r/il/87e26c/8333865804/il_794xN.8333865804_kbs8.jpg',
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
    image: 'https://i.etsystatic.com/66400165/r/il/281f5a/8381410879/il_794xN.8381410879_3xev.jpg',
    images: [
      'https://i.etsystatic.com/66400165/r/il/281f5a/8381410879/il_794xN.8381410879_3xev.jpg',
      'https://i.etsystatic.com/66400165/r/il/ccf98d/8333564108/il_794xN.8333564108_susp.jpg',
      'https://i.etsystatic.com/66400165/r/il/297357/8333524552/il_794xN.8333524552_lq59.jpg',
      'https://i.etsystatic.com/66400165/r/il/0807e1/8381410885/il_794xN.8381410885_e1ul.jpg',
      'https://i.etsystatic.com/66400165/r/il/d0c519/8381410881/il_794xN.8381410881_q6q8.jpg',
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
    image: 'https://i.etsystatic.com/66400165/r/il/a5d7fa/8374552844/il_794xN.8374552844_tbvs.jpg',
    images: [
      'https://i.etsystatic.com/66400165/r/il/a5d7fa/8374552844/il_794xN.8374552844_tbvs.jpg',
      'https://i.etsystatic.com/66400165/r/il/6cf33e/8422427767/il_794xN.8422427767_l8cd.jpg',
      'https://i.etsystatic.com/66400165/r/il/d95b5f/8422427729/il_794xN.8422427729_7r7b.jpg',
      'https://i.etsystatic.com/66400165/r/il/1654d9/8422427733/il_794xN.8422427733_fppv.jpg',
      'https://i.etsystatic.com/66400165/r/il/1ece42/8374552834/il_794xN.8374552834_bck0.jpg',
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
    image: 'https://i.etsystatic.com/66400165/r/il/61bff0/8351661196/il_794xN.8351661196_3o2l.jpg',
    images: [
      'https://i.etsystatic.com/66400165/r/il/61bff0/8351661196/il_794xN.8351661196_3o2l.jpg',
      'https://i.etsystatic.com/66400165/r/il/d4e204/8351661184/il_794xN.8351661184_2eu6.jpg',
      'https://i.etsystatic.com/66400165/r/il/3b1c87/8351661188/il_794xN.8351661188_ioao.jpg',
      'https://i.etsystatic.com/66400165/r/il/976052/8399546489/il_794xN.8399546489_sbao.jpg',
      'https://i.etsystatic.com/66400165/r/il/6cb81f/8399546493/il_794xN.8399546493_oxcc.jpg',
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
    image: 'https://i.etsystatic.com/66400165/r/il/c4ecff/8348339292/il_794xN.8348339292_ykkv.jpg',
    images: [
      'https://i.etsystatic.com/66400165/r/il/c4ecff/8348339292/il_794xN.8348339292_ykkv.jpg',
      'https://i.etsystatic.com/66400165/r/il/1cecd0/8396225895/il_794xN.8396225895_4hnt.jpg',
      'https://i.etsystatic.com/66400165/r/il/65c6e9/8348339288/il_794xN.8348339288_pj2a.jpg',
      'https://i.etsystatic.com/66400165/r/il/bf47fb/8396225901/il_794xN.8396225901_5ue3.jpg',
      'https://i.etsystatic.com/66400165/r/il/3ee087/8396225897/il_794xN.8396225897_2uf3.jpg',
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
    image: 'https://i.etsystatic.com/66400165/r/il/2dbff5/8333963794/il_794xN.8333963794_6248.jpg',
    images: [
      'https://i.etsystatic.com/66400165/r/il/2dbff5/8333963794/il_794xN.8333963794_6248.jpg',
      'https://i.etsystatic.com/66400165/r/il/538915/8381848113/il_794xN.8381848113_a0am.jpg',
      'https://i.etsystatic.com/66400165/r/il/842abf/8381848109/il_794xN.8381848109_jr0o.jpg',
      'https://i.etsystatic.com/66400165/r/il/cc7098/8333963796/il_794xN.8333963796_j9x8.jpg',
      'https://i.etsystatic.com/66400165/r/il/5939d9/8381848111/il_794xN.8381848111_rdm6.jpg',
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
    image: 'https://i.etsystatic.com/66400165/r/il/5fba63/8334028052/il_794xN.8334028052_m543.jpg',
    images: [
      'https://i.etsystatic.com/66400165/r/il/5fba63/8334028052/il_794xN.8334028052_m543.jpg',
      'https://i.etsystatic.com/66400165/r/il/8153fd/8334028044/il_794xN.8334028044_k1w6.jpg',
      'https://i.etsystatic.com/66400165/r/il/c169b2/8381912569/il_794xN.8381912569_hara.jpg',
      'https://i.etsystatic.com/66400165/r/il/0ba9ba/8381912571/il_794xN.8381912571_2sxe.jpg',
      'https://i.etsystatic.com/66400165/r/il/acdec9/8334028050/il_794xN.8334028050_jqex.jpg',
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
    image: 'https://i.etsystatic.com/66400165/r/il/34e7cd/8399819137/il_794xN.8399819137_2fnr.jpg',
    images: [
      'https://i.etsystatic.com/66400165/r/il/34e7cd/8399819137/il_794xN.8399819137_2fnr.jpg',
      'https://i.etsystatic.com/66400165/r/il/246ebe/8399819133/il_794xN.8399819133_737c.jpg',
      'https://i.etsystatic.com/66400165/r/il/4e6ede/8351934672/il_794xN.8351934672_47lj.jpg',
      'https://i.etsystatic.com/66400165/r/il/62f230/8399819135/il_794xN.8399819135_okob.jpg',
      'https://i.etsystatic.com/66400165/r/il/ba07ab/8351934678/il_794xN.8351934678_3gbm.jpg',
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
    image: 'https://i.etsystatic.com/66400165/r/il/67af51/8394809003/il_794xN.8394809003_mz47.jpg',
    images: [
      'https://i.etsystatic.com/66400165/r/il/67af51/8394809003/il_794xN.8394809003_mz47.jpg',
      'https://i.etsystatic.com/66400165/r/il/ef0b4c/8346921840/il_794xN.8346921840_ekhp.jpg',
      'https://i.etsystatic.com/66400165/r/il/7c9ba4/8394809019/il_794xN.8394809019_67jk.jpg',
      'https://i.etsystatic.com/66400165/r/il/ef0cc4/8394809013/il_794xN.8394809013_6trr.jpg',
      'https://i.etsystatic.com/66400165/r/il/caf003/8394809091/il_794xN.8394809091_73tg.jpg',
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
    image: 'https://i.etsystatic.com/66400165/r/il/2da15e/8334076702/il_794xN.8334076702_fy83.jpg',
    images: [
      'https://i.etsystatic.com/66400165/r/il/2da15e/8334076702/il_794xN.8334076702_fy83.jpg',
      'https://i.etsystatic.com/66400165/r/il/c2bf94/8334076700/il_794xN.8334076700_rtx4.jpg',
      'https://i.etsystatic.com/66400165/r/il/75f4f1/8334076686/il_794xN.8334076686_l7g8.jpg',
      'https://i.etsystatic.com/66400165/r/il/147360/8334076692/il_794xN.8334076692_4vgm.jpg',
      'https://i.etsystatic.com/66400165/r/il/76c5e2/8334076696/il_794xN.8334076696_s2n4.jpg',
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
    image: 'https://i.etsystatic.com/66400165/r/il/0adee7/8347895906/il_794xN.8347895906_q9xr.jpg',
    images: [
      'https://i.etsystatic.com/66400165/r/il/0adee7/8347895906/il_794xN.8347895906_q9xr.jpg',
      'https://i.etsystatic.com/66400165/r/il/7973ef/8347895904/il_794xN.8347895904_c4rx.jpg',
      'https://i.etsystatic.com/66400165/r/il/189d49/8395784437/il_794xN.8395784437_pj6r.jpg',
      'https://i.etsystatic.com/66400165/r/il/f82b31/8395784439/il_794xN.8395784439_22do.jpg',
      'https://i.etsystatic.com/66400165/r/il/8ff7ff/8395784441/il_794xN.8395784441_g58f.jpg',
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
    image: 'https://i.etsystatic.com/66400165/r/il/8d53e0/8374639158/il_794xN.8374639158_3c2n.jpg',
    images: [
      'https://i.etsystatic.com/66400165/r/il/8d53e0/8374639158/il_794xN.8374639158_3c2n.jpg',
      'https://i.etsystatic.com/66400165/r/il/6071ea/8374639164/il_794xN.8374639164_5aqz.jpg',
      'https://i.etsystatic.com/66400165/r/il/9ea836/8422513651/il_794xN.8422513651_ijt3.jpg',
      'https://i.etsystatic.com/66400165/r/il/913c20/8422513663/il_794xN.8422513663_c40x.jpg',
      'https://i.etsystatic.com/66400165/r/il/b609df/8422513669/il_794xN.8422513669_2dsx.jpg',
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
    image: 'https://i.etsystatic.com/66400165/r/il/723945/8382078019/il_794xN.8382078019_rwy5.jpg',
    images: [
      'https://i.etsystatic.com/66400165/r/il/723945/8382078019/il_794xN.8382078019_rwy5.jpg',
      'https://i.etsystatic.com/66400165/r/il/dc61c3/8382078017/il_794xN.8382078017_mnq2.jpg',
      'https://i.etsystatic.com/66400165/r/il/edc365/8334194026/il_794xN.8334194026_gzol.jpg',
      'https://i.etsystatic.com/66400165/r/il/68e65d/8382078021/il_794xN.8382078021_9ysw.jpg',
      'https://i.etsystatic.com/66400165/r/il/4bea24/8334194030/il_794xN.8334194030_dyfm.jpg',
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
    image: 'https://i.etsystatic.com/66400165/r/il/d21c78/8382383279/il_794xN.8382383279_iko2.jpg',
    images: [
      'https://i.etsystatic.com/66400165/r/il/d21c78/8382383279/il_794xN.8382383279_iko2.jpg',
      'https://i.etsystatic.com/66400165/r/il/37f21a/8382383275/il_794xN.8382383275_d6fb.jpg',
      'https://i.etsystatic.com/66400165/r/il/8ef17b/8382383273/il_794xN.8382383273_g8aw.jpg',
      'https://i.etsystatic.com/66400165/r/il/50e404/8382383271/il_794xN.8382383271_5qsu.jpg',
      'https://i.etsystatic.com/66400165/r/il/8796c4/8382383277/il_794xN.8382383277_tvk4.jpg',
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
    image: 'https://i.etsystatic.com/66400165/r/il/01a5df/8382542931/il_794xN.8382542931_bm73.jpg',
    images: [
      'https://i.etsystatic.com/66400165/r/il/01a5df/8382542931/il_794xN.8382542931_bm73.jpg',
      'https://i.etsystatic.com/66400165/r/il/f70953/8382542927/il_794xN.8382542927_tdvu.jpg',
      'https://i.etsystatic.com/66400165/r/il/69aa4d/8334658034/il_794xN.8334658034_kvqi.jpg',
      'https://i.etsystatic.com/66400165/r/il/907c45/8382542925/il_794xN.8382542925_rx6i.jpg',
      'https://i.etsystatic.com/66400165/r/il/907183/8334658042/il_794xN.8334658042_6mns.jpg',
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
    image: 'https://i.etsystatic.com/66400165/r/il/3ca29f/8420216629/il_794xN.8420216629_7qu4.jpg',
    images: [
      'https://i.etsystatic.com/66400165/r/il/3ca29f/8420216629/il_794xN.8420216629_7qu4.jpg',
      'https://i.etsystatic.com/66400165/r/il/5485af/8420216627/il_794xN.8420216627_h4mk.jpg',
      'https://i.etsystatic.com/66400165/r/il/930b31/8372337620/il_794xN.8372337620_2o8o.jpg',
      'https://i.etsystatic.com/66400165/r/il/89a3da/8420216623/il_794xN.8420216623_6d4r.jpg',
      'https://i.etsystatic.com/66400165/r/il/b3cdfa/8372337616/il_794xN.8372337616_9scv.jpg',
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
    image: 'https://i.etsystatic.com/66400165/r/il/cabb22/8382600529/il_794xN.8382600529_lpw5.jpg',
    images: [
      'https://i.etsystatic.com/66400165/r/il/cabb22/8382600529/il_794xN.8382600529_lpw5.jpg',
      'https://i.etsystatic.com/66400165/r/il/14af49/8334715430/il_794xN.8334715430_gfe2.jpg',
      'https://i.etsystatic.com/66400165/r/il/7adfa4/8334715422/il_794xN.8334715422_8l83.jpg',
      'https://i.etsystatic.com/66400165/r/il/837884/8382600527/il_794xN.8382600527_nwm9.jpg',
      'https://i.etsystatic.com/66400165/r/il/b24747/8334715426/il_794xN.8334715426_1iev.jpg',
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
    image: 'https://i.etsystatic.com/66400165/r/il/3a5d2c/8374623612/il_794xN.8374623612_f7d2.jpg',
    images: [
      'https://i.etsystatic.com/66400165/r/il/3a5d2c/8374623612/il_794xN.8374623612_f7d2.jpg',
      'https://i.etsystatic.com/66400165/r/il/5c9653/8374623618/il_794xN.8374623618_smon.jpg',
      'https://i.etsystatic.com/66400165/r/il/b39979/8422498145/il_794xN.8422498145_1drh.jpg',
      'https://i.etsystatic.com/66400165/r/il/2ff47a/8374623610/il_794xN.8374623610_imoo.jpg',
      'https://i.etsystatic.com/66400165/r/il/8194f1/8422498139/il_794xN.8422498139_cdkk.jpg',
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
    image: 'https://i.etsystatic.com/66400165/r/il/400c87/8334224236/il_794xN.8334224236_1vrz.jpg',
    images: [
      'https://i.etsystatic.com/66400165/r/il/400c87/8334224236/il_794xN.8334224236_1vrz.jpg',
      'https://i.etsystatic.com/66400165/r/il/0bb9c3/8382108529/il_794xN.8382108529_abyu.jpg',
      'https://i.etsystatic.com/66400165/r/il/59e6d9/8334224228/il_794xN.8334224228_jxdn.jpg',
      'https://i.etsystatic.com/66400165/r/il/837f06/8334224232/il_794xN.8334224232_n7ov.jpg',
      'https://i.etsystatic.com/66400165/r/il/a27a01/8334224234/il_794xN.8334224234_oaij.jpg',
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
    image: 'https://i.ebayimg.com/images/g/dKEAAeSwrsFqZ-hZ/s-l1600.jpg',
    images: [
      'https://i.ebayimg.com/images/g/dKEAAeSwrsFqZ-hZ/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/YjMAAeSwpwZqZ-g0/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/4jUAAeSwgxZqZ-hE/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/zXgAAeSwOk1qZ-hk/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/yLsAAeSwstBqZ-hT/s-l1600.jpg',
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
    image: 'https://i.ebayimg.com/images/g/fcYAAeSweXxqbUo5/s-l1600.jpg',
    images: [
      'https://i.ebayimg.com/images/g/fcYAAeSweXxqbUo5/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/dZwAAeSw3QtqbUo3/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/p3YAAeSwYwRqbUo7/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/pfQAAeSwQtRqbUo3/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/q2AAAeSw0ttqbUo7/s-l1600.jpg',
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
    image: 'https://i.ebayimg.com/images/g/Vj4AAeSwMwFqfP0P/s-l1600.jpg',
    images: [
      'https://i.ebayimg.com/images/g/Vj4AAeSwMwFqfP0P/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/fmUAAeSwwSNqfP0P/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/UFYAAeSw8vxqfP0O/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/B~MAAeSwv-JqfP0P/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/0tQAAeSwDzRqfP0P/s-l1600.jpg',
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
    image: 'https://i.ebayimg.com/images/g/b6EAAeSwfRBqbQqq/s-l1600.jpg',
    images: [
      'https://i.ebayimg.com/images/g/b6EAAeSwfRBqbQqq/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/HjMAAeSwRRNqbQq0/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/qX4AAeSw3QtqbQqx/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/gssAAeSw2AdqbQqs/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/5tAAAeSwdhFqbQqu/s-l1600.jpg',
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
    image: 'https://i.ebayimg.com/images/g/ulAAAeSw8KNqbU2P/s-l1600.jpg',
    images: [
      'https://i.ebayimg.com/images/g/ulAAAeSw8KNqbU2P/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/M90AAeSwms5qbU2M/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/614AAeSwAbdqbU2O/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/yt0AAeSwknFqbU2O/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/v0wAAeSwww5qbU2N/s-l1600.jpg',
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
    image: 'https://i.ebayimg.com/images/g/bvgAAeSwO2lqdfIW/s-l1600.jpg',
    images: [
      'https://i.ebayimg.com/images/g/bvgAAeSwO2lqdfIW/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/YhkAAeSwgYVqdfIW/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/oA8AAeSwAfJqdfIT/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/aN4AAeSw64ZqdfIW/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/cgwAAeSw7-lqdfIW/s-l1600.jpg',
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
    image: 'https://i.ebayimg.com/images/g/1L8AAeSwBEtqY-PO/s-l1600.jpg',
    images: [
      'https://i.ebayimg.com/images/g/1L8AAeSwBEtqY-PO/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/VroAAeSw-4NqY-PX/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/UbYAAeSwxUxqY-Pi/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/-BYAAeSwRydqY-PK/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/hWcAAeSw3CxqY-O4/s-l1600.jpg',
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
    image: 'https://i.ebayimg.com/images/g/12kAAeSwYlFqbQj-/s-l1600.jpg',
    images: [
      'https://i.ebayimg.com/images/g/12kAAeSwYlFqbQj-/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/AdsAAeSwErFqbQj5/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/m9sAAeSwZlJqbQj-/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/ZlgAAeSwRTtqbQjy/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/boMAAeSwIX5qbQjs/s-l1600.jpg',
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
    image: 'https://i.ebayimg.com/images/g/haQAAeSwKzZqZApZ/s-l1600.jpg',
    images: [
      'https://i.ebayimg.com/images/g/haQAAeSwKzZqZApZ/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/7GkAAeSwMndqZApa/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/dioAAeSwEbBqZAos/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/k3MAAeSwkB5qZApY/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/B7AAAeSwx7pqZApa/s-l1600.jpg',
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
    image: 'https://i.ebayimg.com/images/g/dMsAAeSwtPhqbUmb/s-l1600.jpg',
    images: [
      'https://i.ebayimg.com/images/g/dMsAAeSwtPhqbUmb/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/mu4AAeSwgblqbUmd/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/cfgAAeSwOKhqbUmb/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/iAAAAeSw24RqbUmc/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/C78AAeSwOzFqbUme/s-l1600.jpg',
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
    image: 'https://i.ebayimg.com/images/g/h44AAeSwbEhqdNog/s-l1600.jpg',
    images: [
      'https://i.ebayimg.com/images/g/h44AAeSwbEhqdNog/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/QzAAAeSw~8JqdNoe/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/nQYAAeSwhKZqdNod/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/eTkAAeSwYTBqdNoc/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/Ku0AAeSwJoxqdNoc/s-l1600.jpg',
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
    image: 'https://i.ebayimg.com/images/g/ni8AAeSwsHRqZABe/s-l1600.jpg',
    images: [
      'https://i.ebayimg.com/images/g/ni8AAeSwsHRqZABe/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/tU8AAeSwUIlqZABG/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/OQsAAeSwpwZqZABD/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/XX8AAeSwdhFqZABg/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/6YkAAeSw2AdqZABL/s-l1600.jpg',
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
    image: 'https://i.ebayimg.com/images/g/NKoAAeSw7OJqdNUt/s-l1600.jpg',
    images: [
      'https://i.ebayimg.com/images/g/NKoAAeSw7OJqdNUt/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/OCcAAeSwvFVqdNTX/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/ZxkAAeSwls1qdNTd/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/KvEAAeSw9~xqdNTX/s-l1600.jpg',
      'https://i.ebayimg.com/images/g/R~4AAeSwJHdqdNTX/s-l1600.jpg',
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
