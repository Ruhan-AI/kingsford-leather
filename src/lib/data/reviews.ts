export type Review = {
  id: string
  author: string
  location: string
  rating: number
  date: string
  verified: boolean
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
