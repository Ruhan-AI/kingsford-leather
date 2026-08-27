import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PRODUCTS } from '@/lib/products'

export function FeaturedEdit() {
  // Select 4 signature products
  const featured = PRODUCTS.slice(0, 4)

  return (
    <section className="bg-white py-16 sm:py-24 border-b border-[#ded7ce]">
      <Container size="wide">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12">
          <div>
            <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#8b5a35] mb-2">
              Curated Outerwear
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1c1a17] font-normal tracking-tight">
              The Kingsford Edit
            </h2>
          </div>
          <Link
            href="/shop"
            className="mt-3 sm:mt-0 text-sm font-medium text-[#8b5a35] hover:text-[#5d3923] inline-flex items-center gap-1.5 transition-colors focus-ring"
          >
            <span>View All 49 Pieces</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featured.map((product) => {
            const hasSecondary = product.images.length > 1
            const hoverImage = hasSecondary ? product.images[1] : null

            return (
              <div
                key={product.id}
                className="group flex flex-col bg-white rounded-[4px] border border-[#ded7ce] overflow-hidden hover:border-[#8b5a35]/60 hover:shadow-md transition-all duration-300"
              >
                {/* Image Frame with 4:5 ratio */}
                <Link
                  href={`/products/${product.slug}`}
                  className="relative aspect-[4/5] w-full bg-[#f8f6f2] overflow-hidden block focus-ring"
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className={`object-cover object-top transition-all duration-500 ${
                      hoverImage ? 'group-hover:opacity-0' : 'group-hover:scale-103'
                    }`}
                  />
                  {hoverImage && (
                    <Image
                      src={hoverImage}
                      alt={`${product.title} alternate view`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-top opacity-0 group-hover:opacity-100 group-hover:scale-103 transition-all duration-500 absolute inset-0"
                    />
                  )}

                  {product.listPrice > product.salePrice && (
                    <span className="absolute top-3 left-3 bg-[#8b5a35] text-white text-[11px] font-semibold px-2 py-0.5 rounded-[2px]">
                      Special Price
                    </span>
                  )}
                </Link>

                {/* Details */}
                <div className="p-4 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#706a62] uppercase tracking-wider mb-1">
                      <span className="font-semibold text-[#8b5a35]">{product.category}</span>
                      <span>{product.gender}</span>
                    </div>

                    <h3 className="font-serif text-base sm:text-lg font-medium text-[#1c1a17] group-hover:text-[#8b5a35] transition-colors line-clamp-2">
                      <Link href={`/products/${product.slug}`} className="focus-ring">
                        {product.title}
                      </Link>
                    </h3>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#ded7ce] flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-base font-semibold text-[#1c1a17]">
                        CA${product.salePrice}
                      </span>
                      {product.listPrice > product.salePrice && (
                        <span className="text-xs text-[#a7a39b] line-through">
                          CA${product.listPrice}
                        </span>
                      )}
                    </div>

                    <Link
                      href={`/products/${product.slug}`}
                      className="text-xs font-medium text-[#8b5a35] hover:underline inline-flex items-center gap-0.5"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
