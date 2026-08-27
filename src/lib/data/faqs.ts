export interface FAQItem {
  q: string
  a: string
}

export const FAQS: readonly FAQItem[] = [
  {
    q: 'How does custom Made-To-Measure ordering work on Etsy or eBay?',
    a: 'Simply select your desired jacket style on our website and click through to its exact Etsy or eBay listing. When placing your order, paste your measurements (chest, shoulders, sleeve, back length, waist) into the Etsy personalization box or send them as an eBay message right after checkout. Our master pattern cutter verifies proportions before cutting.',
  },
  {
    q: 'What materials and hides are used in the collection?',
    a: 'Each listing clearly specifies its exact material. We work with full-grain cowhide (1.2mm–1.3mm), sheepskin (0.9mm–1.0mm), natural suede, and authentic shearling fleece. Special statement costume and performance pieces (such as the military officer jacket) are tailored from structured fabric as stated on their product specifications.',
  },
  {
    q: 'How long does production and shipping take to Canada & worldwide?',
    a: 'Off-the-rack standard sizes typically dispatch within 3–5 business days. Custom Made-To-Measure pieces require approximately 10–14 days for pattern cutting, tailoring, and hardware assembly. All orders are dispatched via express tracked courier with tracking numbers provided immediately.',
  },
  {
    q: 'What is your return & remake policy?',
    a: 'We stand behind our workshop craftsmanship. If an off-the-rack jacket has any defect or sizing issue, you can exchange or return it within 30 days under marketplace buyer protection. For Made-to-Measure pieces, if there is any workshop error against your submitted measurements, we will alter or remake it free of charge.',
  },
  {
    q: 'Why are your prices CA$140–$450 while designer retail charges $800+?',
    a: 'Most fashion brands outsource manufacturing to independent facilities, mark it up 300–400%, and spend heavily on retail storefronts and advertising. We own our dedicated cutting and stitching benches in Sialkot and sell direct to buyers through trusted marketplaces.',
  },
] as const
