import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

const SILHOUETTES = [
  {
    title: 'Double Rider Biker',
    description: 'Asymmetric zips, coin pockets, and heavy full-grain cowhide.',
    image: '/images/catalogue/005a87fd27e2.jpg',
    href: '/collections/biker',
    count: 10,
  },
  {
    title: 'Cafe Racer',
    description: 'Clean banded mandarin collar, streamlined chest zips, and tailored body.',
    image: '/images/catalogue/190ee50dd3f6.jpg',
    href: '/collections/cafe-racer',
    count: 8,
  },
  {
    title: 'Suede Bomber & Aviator',
    description: 'Ribbed hems, plush shearling collars, and velvety split suede.',
    image: '/images/catalogue/3da6124d3698.jpg',
    href: '/collections/bomber',
    count: 8,
  },
  {
    title: 'Shearling Pelts',
    description: 'Heavy winter warmth, natural sheep wool insulation, and rugged leather face.',
    image: '/images/catalogue/52d61d065d88.jpg',
    href: '/collections/shearling',
    count: 5,
  },
  {
    title: 'Western Truckers',
    description: 'Pointed collar, snap flap chest pockets, and supple cowhide or suede.',
    // Was cff0fe6d7560.jpg, which is not in public/images/catalogue — the tile
    // rendered a broken-image icon. This is the brown suede trucker from the
    // catalogue, which is the piece this tile links to.
    image: '/images/catalogue/8352644af515.jpg',
    href: '/collections/trucker',
    count: 6,
  },
  {
    title: 'Coats & Long Blazers',
    description: 'Tailored silhouettes, trench coats, and 3/4 length storm outerwear.',
    image: '/images/catalogue/879077e67fe6.jpg',
    href: '/collections/coats',
    count: 5,
  },
]

export function SilhouetteGrid() {
  return (
    <section className="bg-white py-10 sm:py-14 border-b border-[#ded7ce]">
      <Container size="wide">
        <SectionHeading
          eyebrow="Archetypes & Cuts"
          title="Iconic Outerwear Silhouettes"
          description="Explore our core archetypes, each engineered around specific leather weights, drape characteristics, and timeless details."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SILHOUETTES.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group bg-[#f8f6f2] hover:bg-[#efe9e1] border border-[#ded7ce] rounded-[4px] p-3.5 sm:p-4 flex gap-3.5 transition-all duration-200 focus-ring"
            >
              <div className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-[2px] overflow-hidden bg-white shrink-0 border border-[#ded7ce]">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="100px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm sm:text-base font-serif font-medium text-[#1c1a17] group-hover:text-[#8b5a35] transition-colors leading-tight">
                      {s.title}
                    </h3>
                    <span className="text-[10px] text-[#8b5a35] font-semibold">
                      {s.count} pieces
                    </span>
                  </div>
                  <p className="text-xs text-[#706a62] leading-relaxed mt-1 font-sans line-clamp-2">
                    {s.description}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-semibold text-[#8b5a35] uppercase tracking-wider group-hover:translate-x-0.5 transition-transform pt-1">
                  <span>View Cut</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
