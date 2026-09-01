/**
 * Kingsford Leather - Custom Jackets Content & Capability Model
 *
 * Single source of truth for the /custom-jackets page copy, options,
 * process steps, and feature gates.
 */

export interface CustomServiceCapabilities {
  singlePiece: boolean
  multiplePieces: boolean
  madeToMeasure: boolean
  leatherSelection: boolean
  hardwareSelection: boolean
  liningSelection: boolean
  logoBranding: boolean
  embroidery: boolean
  patches: boolean
  customLabels: boolean
}

export interface SilhouetteOption {
  id: string
  name: string
  tagline: string
  description: string
  image: string
  categorySlug: string
  sampleProductSlug: string
}

export interface CustomizationFeature {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  badge?: string
}

export interface FitPathway {
  id: 'men' | 'women' | 'custom'
  title: string
  subtitle: string
  description: string
  bullets: string[]
  ctaText: string
  fitProfileValue: 'men' | 'women' | 'unisex' | 'not-sure'
}

export interface ProcessStep {
  step: number
  title: string
  summary: string
  detail: string
  badge?: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export interface CustomPageContent {
  hero: {
    eyebrow: string
    title: string
    body: string
    primaryCta: string
    secondaryCta: string
    trustNote: string
    primaryImage: string
    detailImage: string
  }
  capabilities: CustomServiceCapabilities
  silhouettes: SilhouetteOption[]
  customizationMatrix: CustomizationFeature[]
  fitPathways: FitPathway[]
  processSteps: ProcessStep[]
  faq: FAQItem[]
  quantityBands: Array<{ value: string; label: string }>
  budgetBands: Array<{ value: string; label: string }>
  garmentTypes: Array<{ value: string; label: string }>
  requestTypes: Array<{ value: string; label: string; description: string }>
}

export const CUSTOM_JACKETS_CONTENT: CustomPageContent = {
  hero: {
    eyebrow: 'CUSTOM JACKETS BY KINGSFORD',
    title: 'A jacket shaped around your idea.',
    body: 'Start with a Kingsford silhouette or tell us what you would like to change. Share the style, fit, and details you have in mind, and our master pattern cutters will review your brief directly.',
    primaryCta: 'Start Your Custom Request',
    secondaryCta: 'Explore Custom Options',
    trustNote: 'No payment is collected on this website · Checked out securely on Etsy or eBay',
    primaryImage: '/images/workshop/dress-form-mens.jpg',
    detailImage: '/images/hero-workshop.jpg',
  },

  capabilities: {
    singlePiece: true,
    multiplePieces: true,
    madeToMeasure: true,
    leatherSelection: true,
    hardwareSelection: true,
    liningSelection: true,
    // Gated off until verified operational capacity
    logoBranding: false,
    embroidery: false,
    patches: false,
    customLabels: false,
  },

  silhouettes: [
    {
      id: 'biker',
      name: 'Biker & Moto',
      tagline: 'Asymmetrical zippers, notch lapels, structured cowhide',
      description: 'Iconic cross-zip designs built from durable 1.2mm cowhide with action back pleats.',
      image: '/images/catalogue/005a87fd27e2.jpg',
      categorySlug: 'biker',
      sampleProductSlug: 'mens-black-cafe-racer-racing-stripes',
    },
    {
      id: 'cafe-racer',
      name: 'Cafe Racer',
      tagline: 'Band collars, clean front lines, streamlined silhouette',
      description: 'Minimalist motoring profiles tailored in supple sheepskin or distressed cowhide.',
      image: '/images/catalogue/190ee50dd3f6.jpg',
      categorySlug: 'cafe-racer',
      sampleProductSlug: 'mens-black-cafe-racer-racing-stripes',
    },
    {
      id: 'bomber',
      name: 'Bomber & Aviator',
      tagline: 'Ribbed trims, storm flaps, optional shearling collars',
      description: 'Flight-heritage silhouettes crafted in velvety goat suede or heritage lambskin.',
      image: '/images/catalogue/3da6124d3698.jpg',
      categorySlug: 'bomber',
      sampleProductSlug: 'mens-tan-suede-bomber-shearling-collar',
    },
    {
      id: 'trucker',
      name: 'Western & Trucker',
      tagline: 'Pointed yokes, shank buttons, dual chest flap pockets',
      description: 'Rugged americana trucker cuts tailored from rich snuff suede or oiled pull-up leather.',
      image: '/images/catalogue/8352644af515.jpg',
      categorySlug: 'trucker',
      sampleProductSlug: 'brown-suede-trucker-western',
    },
    {
      id: 'shearling-coats',
      name: 'Shearling & Overcoats',
      tagline: 'Natural fleece lining, extended lengths, winter warmth',
      description: 'Heavyweight winter pieces featuring genuine merino shearling fleece or tailored wool blends.',
      image: '/images/catalogue/52d61d065d88.jpg',
      categorySlug: 'shearling',
      sampleProductSlug: 'mens-tan-suede-bomber-shearling-collar',
    },
    {
      id: 'vests-tailoring',
      name: 'Vests & Layering',
      tagline: 'Sleeveless mobility, club collars, concealed carry pockets',
      description: 'Utility and moto vests engineered for layering over hoodies or under heavier coats.',
      image: '/images/catalogue/879077e67fe6.jpg',
      categorySlug: 'coats',
      sampleProductSlug: 'navy-military-officer-jacket-gold-buttons',
    },
  ],

  customizationMatrix: [
    {
      id: 'silhouette-length',
      title: 'Silhouette & Length',
      subtitle: 'Proportions Tailored to You',
      description: 'Adjust body length, sleeve taper, shoulder width, or collar height to complement your frame or motorcycle riding position.',
      image: '/images/workshop/dress-form-mens.jpg',
      badge: 'Pattern Adaptation',
    },
    {
      id: 'premium-hides',
      title: 'Leather & Suede Selection',
      subtitle: 'Full-Grain Hides & Tannages',
      description: 'Choose between rugged 1.2–1.3mm full-grain cowhide, buttery lightweight sheepskin, or velvety natural goat suede.',
      image: '/images/workshop/dress-form-womens.jpg',
      badge: 'Material Grade',
    },
    {
      id: 'color-finish',
      title: 'Color & Hand-Finish',
      subtitle: 'Classic, Earthy, & Vintage Patinas',
      description: 'From deep drum-dyed black and dark chocolate to distressed vintage pull-up washes and tobacco suede shades.',
      image: '/images/catalogue/82b19dc4cf21.jpg',
      badge: 'Artisanal Dye',
    },
    {
      id: 'linings-interior',
      title: 'Linings & Thermal Options',
      subtitle: 'Custom Comfort & Weight',
      description: 'Select breathable viscose satin for year-round wear, quilted thermal cotton for cold climates, or authentic shearling wool.',
      image: '/images/catalogue/47670c62c3a1.jpg',
      badge: 'Interior Comfort',
    },
    {
      id: 'hardware-closures',
      title: 'Hardware & Pocketing',
      subtitle: 'Zippers, Pulls, & Snaps',
      description: 'Specify antique brass, gunmetal, polished silver, or matte black heavy-duty zippers, plus internal pocket placements.',
      image: '/images/catalogue/a765b524b418.jpg',
      badge: 'Solid Hardware',
    },
    {
      id: 'measurements-fit',
      title: 'Made-To-Measure Fit',
      subtitle: 'Bench-Cut from Your Dimensions',
      description: 'Submit your exact chest, waist, sleeve, and shoulder measurements for a bespoke pattern cut from scratch.',
      image: '/images/hero-workshop.jpg',
      badge: 'Precision Sizing',
    },
  ],

  fitPathways: [
    {
      id: 'men',
      title: "Men's Tailoring",
      subtitle: 'Structured Athletic & Classic Cuts',
      description: 'Engineered with broader shoulders, proportional chest taper, and sleeve lengths configured for casual or motorcycle wear.',
      bullets: [
        'Standard sizes XS through 4XL available',
        'Optional dropped back hem for riding comfort',
        'Custom bicep and wrist circumference options',
      ],
      ctaText: "Select Men's Profile",
      fitProfileValue: 'men',
    },
    {
      id: 'women',
      title: "Women's Tailoring",
      subtitle: 'Feminine Contours & Cropped Silhouettes',
      description: 'Balanced for waist articulation, bust clearance, and proportional hip drape without restrictive stiffness.',
      bullets: [
        'Standard sizes 2XS through 2XL available',
        'Custom cropped or extended body length',
        'Tailored shoulder line and tapered wrist cuffs',
      ],
      ctaText: "Select Women's Profile",
      fitProfileValue: 'women',
    },
    {
      id: 'custom',
      title: 'Bespoke Measurements',
      subtitle: 'Your Measurements, Dedicated Pattern',
      description: 'Ideal for taller frames, broader chests, or specific layering preferences. Our pattern master crafts an individual blueprint.',
      bullets: [
        'Guaranteed proportion check before cutting',
        'Chest, shoulder, sleeve, back length, waist support',
        'Free pattern alteration if errors occur against specs',
      ],
      ctaText: 'Select Bespoke Fit',
      fitProfileValue: 'unisex',
    },
  ],

  processSteps: [
    {
      step: 1,
      title: 'Submit Your Project Brief',
      summary: 'Share the silhouette, hide, color, and fit requirements you have in mind.',
      detail: 'Fill out our structured enquiry form below. You can base your design on an existing Kingsford piece or describe custom modifications.',
    },
    {
      step: 2,
      title: 'Direct Workshop Review',
      summary: 'Our pattern masters review feasibility, hide availability, and sizing.',
      detail: 'Within 12–24 hours, we reply via email to clarify details, suggest optimal hide weights, and confirm pattern adjustments.',
    },
    {
      step: 3,
      title: 'Scope & Quote Confirmation',
      summary: 'Agree on specifications, final price, and production timeline.',
      detail: 'Once you are satisfied with the design and sizing blueprint, we prepare an exact custom order quote with no hidden charges.',
    },
    {
      step: 4,
      title: 'Secure Marketplace Checkout',
      summary: 'Complete your purchase through a verified private Etsy or eBay listing.',
      detail: 'We generate an official listing on Etsy or eBay so you enjoy full buyer protection, flexible payment methods, and transparent order tracking.',
    },
    {
      step: 5,
      title: 'Bench Crafting & Stitching',
      summary: 'Your hide is hand-selected, pattern cut, and stitched by master craftsmen.',
      detail: 'Crafted in our dedicated workshop in Sialkot using traditional bench tools, reinforced seams, and premium grade hardware.',
    },
    {
      step: 6,
      title: 'Inspection & Express Delivery',
      summary: 'Multi-point quality inspection followed by tracked express courier dispatch.',
      detail: 'Your finished jacket is measured against your submitted specifications, carefully packaged in garment bags, and shipped with tracking.',
    },
  ],

  faq: [
    {
      id: 'customization-scope',
      question: 'What details can I customize on a Kingsford jacket?',
      answer: 'You can request modifications to garment silhouette, hide type (cowhide, sheepskin, or goat suede), leather color/finish, lining fabric, hardware finish (brass, gunmetal, silver), pocket layout, and dimensional measurements (sleeve length, chest, waist, back length).',
    },
    {
      id: 'starting-from-catalogue',
      question: 'Can I begin with an existing Kingsford jacket design?',
      answer: 'Yes, absolutely. Most custom clients choose an existing piece from our collection (such as our Suede Bomber or Cafe Racer) and request specific modifications like a different hide color, custom sleeve length, or alternative collar style.',
    },
    {
      id: 'reference-images',
      question: 'How do I share reference photos or sketches?',
      answer: 'To keep our initial submission form simple and secure, we do not require file uploads here. Once we receive your brief, we will respond by email where you can easily reply with reference images, mood boards, or fit photos.',
    },
    {
      id: 'measuring-guidance',
      question: 'How are measurements taken and verified?',
      answer: 'You can either consult our Size Guide for standardized sizing (XS–4XL) or follow our 5-point measurement tutorial (Chest, Shoulders, Sleeve, Back Length, Waist). Our master pattern cutter cross-checks all submitted measurements for proportional balance before cutting leather.',
    },
    {
      id: 'payment-safety',
      question: 'Where and when do I pay for my custom jacket?',
      answer: 'No payment is taken on this website. After we review and confirm your custom brief, we provide an exact private checkout listing through our verified Etsy shop (KingsfordLeatherCA) or eBay storefront (kingsfordleather), giving you full buyer protection, secure payment options, and official tracking.',
    },
    {
      id: 'production-timeline',
      question: 'How long does a custom made-to-order jacket take?',
      answer: 'Pattern cutting, individual tailoring, hardware installation, and inspection typically require 10 to 14 business days. Tracked express courier shipping takes an additional 4 to 7 business days depending on your destination (Canada, USA, UK, Europe, Australia).',
    },
    {
      id: 'returns-guarantee',
      question: 'What is your guarantee on custom tailored orders?',
      answer: 'We stand 100% behind our workshop craftsmanship. If there is any manufacturing defect or deviation from your agreed custom measurements, we will adjust or remake the garment free of charge. Full details are confirmed on your marketplace listing prior to purchase.',
    },
  ],

  quantityBands: [
    { value: '1', label: '1 Piece (Individual Custom)' },
    { value: '2-5', label: '2–5 Pieces (Small Group / Couple)' },
    { value: '6-20', label: '6–20 Pieces (Club / Team / Event)' },
    { value: '20+', label: '20+ Pieces (Commercial Inquiry)' },
  ],

  budgetBands: [
    { value: 'under-200', label: 'Under CA$200' },
    { value: '200-350', label: 'CA$200 – CA$350 (Standard Custom Range)' },
    { value: '350-500', label: 'CA$350 – CA$500 (Heavy Hide / Shearling)' },
    { value: '500-plus', label: 'CA$500+ (Complex Bespoke / Multi-piece)' },
    { value: 'flexible', label: 'Flexible / Quote Required' },
  ],

  garmentTypes: [
    { value: 'biker', label: 'Biker & Motorcycle Jacket' },
    { value: 'cafe-racer', label: 'Cafe Racer Jacket' },
    { value: 'bomber', label: 'Bomber / Aviator Flight Jacket' },
    { value: 'trucker', label: 'Western / Trucker Jacket' },
    { value: 'shearling-coat', label: 'Shearling Coat / Trench' },
    { value: 'vest', label: 'Leather Vest' },
    { value: 'blazer', label: 'Leather Blazer / Car Coat' },
    { value: 'other', label: 'Other / Unique Concept' },
  ],

  requestTypes: [
    {
      value: 'individual',
      label: 'Personal Jacket',
      description: 'A tailored piece crafted for your wardrobe, fit, and style.',
    },
    {
      value: 'gift',
      label: 'Special Gift',
      description: 'Crafted for someone special with custom sizing guidance.',
    },
    {
      value: 'team-brand',
      label: 'Team, Club, or Brand',
      description: 'Multiple matching pieces for a crew, club, or company.',
    },
    {
      value: 'not-sure',
      label: 'Exploring Concepts',
      description: 'Need advice on leather, cut, and feasibility first.',
    },
  ],
}
