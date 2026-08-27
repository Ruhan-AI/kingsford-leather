/**
 * Buyer reviews.
 *
 * ── Read this before adding an entry ──────────────────────────────────────
 * The site renders each of these under a "Verified on Etsy / eBay" badge, in a
 * section headed "Verified Buyer Field Reports". Publishing a testimonial that
 * badge cannot support is false advertising — Canada's Competition Act treats
 * fabricated reviews as a reviewable practice with real penalties, and the
 * project brief bans invented reviews outright.
 *
 * So the badge has to be earned by evidence, not by a boolean anyone can type.
 * A review only renders when `reviewUrl` points at the live marketplace page
 * that review appears on. `verified: true` alone does nothing.
 *
 * The five entries below arrived without any such link, and the counts do not
 * support them: the Etsy shop shows 2 reviews and four entries here claim Etsy,
 * while eBay's 8 figure is a feedback score, not written reviews with titles.
 * They are kept, unrendered, so nothing is lost — add `reviewUrl` to any you
 * can point at on the live shop and it returns to the page immediately.
 */
export type Review = {
  id: string
  author: string
  location: string
  rating: number
  date: string
  verified: boolean
  /** Live marketplace URL this review appears on. Required to render. */
  reviewUrl?: string
  title: string
  content: string
  productName: string
  customFit: boolean
  source: 'Etsy' | 'eBay'
}

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Mark T.',
    location: 'Calgary, AB',
    rating: 5,
    date: 'August 2026',
    verified: true,
    title: 'Fits like a second skin — custom pocket layout done perfectly',
    content:
      'The jacket fits like a second skin. Quality of stitching and the custom measurements were spot on. Asked for a specific inside pocket layout not in the original listing and they accommodated without hesitation. Truly bespoke work.',
    productName: 'Tan Suede Bomber Jacket',
    customFit: true,
    source: 'Etsy',
  },
  {
    id: 'rev-2',
    author: 'David R.',
    location: 'Vancouver, BC',
    rating: 5,
    date: 'July 2026',
    verified: true,
    title: 'Incredible leather weight and brass hardware',
    content:
      'Incredible craftsmanship for this price point. Genuine full-grain hide, solid brass YKK zippers, and clean edge stitching. You can tell this comes straight from a real workshop bench, not a mass factory line.',
    productName: 'Distressed Brown Cafe Racer',
    customFit: true,
    source: 'Etsy',
  },
  {
    id: 'rev-3',
    author: 'James K.',
    location: 'Toronto, ON',
    rating: 5,
    date: 'July 2026',
    verified: true,
    title: 'Solved my broad-shoulder sizing headache',
    content:
      'Standard off-the-rack jackets never fit my chest and sleeve length properly. Used the Kingsford Docket measurement guide and sent my 12 numbers. Arrived in 3 weeks, fits like it was made on me because it was.',
    productName: 'Heavyweight Biker Double-Rider',
    customFit: true,
    source: 'eBay',
  },
  {
    id: 'rev-4',
    author: 'Elena M.',
    location: 'Ottawa, ON',
    rating: 5,
    date: 'August 2026',
    verified: true,
    title: 'The distressed patina is gorgeous',
    content:
      'Fast tracked delivery to Ontario. The distressed finish on the brown leather is authentic and looks even richer in person. The shearling collar is cozy for Canadian late autumn.',
    productName: 'Brown Suede Trucker Jacket',
    customFit: false,
    source: 'Etsy',
  },
  {
    id: 'rev-5',
    author: 'Robert H.',
    location: 'Montreal, QC',
    rating: 5,
    date: 'June 2026',
    verified: true,
    title: 'Direct communication with the maker',
    content:
      'What impressed me most was the communication. Sahil double-checked my sleeve length measurement before cutting the leather to make sure I gave the right wrist-to-shoulder angle. Outstanding dedication.',
    productName: 'Classic Black Moto Jacket',
    customFit: true,
    source: 'Etsy',
  },
]

/**
 * The only list the UI may render. A review reaches the page by carrying a
 * `reviewUrl` that a visitor could click to check it — nothing else counts.
 */
export const PUBLISHABLE_REVIEWS: readonly Review[] = REVIEWS.filter((r) => Boolean(r.reviewUrl))
