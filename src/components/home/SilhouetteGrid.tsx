import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'

const SILHOUETTES = [
  {
    title: 'Biker & Moto',
    description: 'Asymmetric zips, waist belts, lapel snaps, and heavy cowhide protection.',
    href: '/collections/biker',
    image: '/images/catalogue/005a87fd27e2.jpg',
    count: '8 Pieces',
  },
  {
    title: 'Cafe Racer',
    description: 'Clean banded collars, minimalist zip fronts, and streamlined racing lines.',
    href: '/collections/cafe-racer',
    image: '/images/catalogue/190ee50dd3f6.jpg',
    count: '7 Pieces',
  },
  {
    title: 'Bomber & Aviator',
    description: 'Rib-knit collars or genuine shearling details in soft sheepskin and suede.',
    href: '/collections/bomber',
    image: '/images/catalogue/3da6124d3698.jpg',
    count: '9 Pieces',
  },
  {
    title: 'Trucker & Western',
    description: 'Pointed chest flaps, welt pockets, and durable suede or waxed cowhide.',
    href: '/collections/trucker',
    image: '/images/catalogue/02ec96e6be69.jpg',
    count: '6 Pieces',
  },
  {
    title: 'Shearling & Toscana',
    description: 'Warm natural wool linings and dramatic fur collars for severe cold weather.',
    href: '/collections/shearling',
    image: '/images/catalogue/52d61d065d88.jpg',
    count: '5 Pieces',
  },
  {
    title: 'Coats & Trench',
    description: 'Full-length dusters, double-breasted peacoats, and tailored leather trenches.',
    href: '/collections/coats',
    image: '/images/catalogue/879077e67fe6.jpg',
    count: '8 Pieces',
  },
]

export function SilhouetteGrid() {
  return (
    <section className="bg-white py-16 sm:py-24 border-b border-[#ded7ce]">
      <Container size="wide">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12">
          <div>
            <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#8b5a35] mb-2">
              Explore Silhouettes
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1c1a17] font-normal tracking-tight">
              Iconic Leather Cuts
            </h2>
          </div>
          <Link
            href="/shop"
            className="mt-3 sm:mt-0 text-sm font-medium text-[#8b5a35] hover:text-[#5d3923] inline-flex items-center gap-1.5 transition-colors focus-ring"
          >
            <span>Browse All Silhouettes</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SILHOUETTES.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group block bg-[#f8f6f2] border border-[#ded7ce] rounded-[4px] overflow-hidden hover:border-[#8b5a35] transition-all duration-300 focus-ring"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#efe9e1]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-103 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-[11px] font-semibold text-[#1c1a17] px-2 py-0.5 rounded-[2px] border border-[#ded7ce]">
                  {item.count}
                </span>
              </div>

              <div className="p-5 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif font-medium text-[#1c1a17] group-hover:text-[#8b5a35] transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#706a62] leading-relaxed font-sans line-clamp-2">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#ded7ce] flex items-center justify-between text-xs font-semibold text-[#8b5a35]">
                  <span>Explore Cut</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
