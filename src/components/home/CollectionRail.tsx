import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'

const RAIL_ITEMS = [
  { label: 'Men', href: '/men', image: '/images/catalogue/10cede6cb19e.jpg' },
  { label: 'Women', href: '/women', image: '/images/catalogue/3641d0a3eb94.jpg' },
  { label: 'Biker & Moto', href: '/collections/biker', image: '/images/catalogue/005a87fd27e2.jpg' },
  { label: 'Cafe Racer', href: '/collections/cafe-racer', image: '/images/catalogue/190ee50dd3f6.jpg' },
  { label: 'Bomber & Aviator', href: '/collections/bomber', image: '/images/catalogue/3da6124d3698.jpg' },
  { label: 'Shearling & Fur', href: '/collections/shearling', image: '/images/catalogue/52d61d065d88.jpg' },
  { label: 'Coats & Trench', href: '/collections/coats', image: '/images/catalogue/879077e67fe6.jpg' },
  { label: 'View All (49)', href: '/shop', image: '/images/catalogue/bb5f20eb9776.jpg' },
]

export function CollectionRail() {
  return (
    <section className="bg-[#f8f6f2] py-8 sm:py-10 border-b border-[#ded7ce]">
      <Container size="wide">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8b5a35]">
            Explore by Cut & Gender
          </span>
          <Link
            href="/shop"
            className="text-xs font-medium text-[#706a62] hover:text-[#1c1a17] transition-colors"
          >
            All 49 Pieces →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {RAIL_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col items-center p-2.5 bg-white hover:bg-[#efe9e1] border border-[#ded7ce] rounded-[4px] transition-all duration-200 focus-ring text-center"
            >
              <div className="relative w-14 h-18 sm:w-16 sm:h-20 mb-2 rounded-[2px] overflow-hidden bg-[#efe9e1]">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  sizes="64px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-xs font-serif font-medium text-[#1c1a17] group-hover:text-[#8b5a35] transition-colors leading-tight">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
