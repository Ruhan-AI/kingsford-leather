import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CATEGORIES, PRODUCTS } from '@/lib/products'

export function CategoryRail() {
  // Map representative image for each category
  const categoryAssets: Record<string, string> = {
    biker: '/images/catalogue/b827de01c441.jpg',
    'cafe-racer': '/images/catalogue/a765b524b418.jpg',
    bomber: '/images/catalogue/82b19dc4cf21.jpg',
    trucker: '/images/catalogue/8352644af515.jpg',
    coats: '/images/catalogue/531d9f3f660d.jpg',
    blazers: '/images/catalogue/03ca00ccfcc9.jpg',
    vests: '/images/catalogue/94841f8f9b99.jpg',
    shearling: '/images/catalogue/17947ba2c886.jpg',
    statement: '/images/catalogue/19e81bd4d6ad.jpg',
  }

  return (
    <section className="py-20 bg-night text-bone border-t border-bone/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <h2 className="font-brand font-bold text-3xl sm:text-4xl text-white tracking-[0.01em]">
              Shop By Cut &amp; Structure
            </h2>
          </div>

          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-xs font-display font-bold text-bone-warm hover:text-white transition-colors"
          >
            <span>All categories in catalogue</span>
            <ArrowRight className="w-4 h-4 text-brass" />
          </Link>
        </div>

        {/* Categories Rail Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => {
            const count = PRODUCTS.filter((p) => p.category === cat.slug).length
            const image = categoryAssets[cat.slug] || PRODUCTS[0].image
            return (
              <Link
                key={cat.slug}
                href={`/collections/${cat.slug}`}
                className="group relative aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden border border-bone/15 bg-charcoal flex flex-col justify-end p-4 sm:p-5 shadow-lg transition-all duration-300 hover:border-brass/50 hover:shadow-2xl"
              >
                <Image
                  src={image}
                  alt={cat.label}
                  fill
                  className="object-cover object-center brightness-[0.45] group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-transparent" />

                <div className="relative z-10 space-y-1">
                  <span className="font-spec text-[10px] text-brass uppercase tracking-wider block">
                    {count} {count === 1 ? 'Design' : 'Designs'}
                  </span>
                  <h3 className="font-brand font-bold text-base sm:text-lg text-white group-hover:text-brass transition-colors">
                    {cat.label}
                  </h3>
                </div>
              </Link>
            )
          })}
        </div>

      </div>
    </section>
  )
}
