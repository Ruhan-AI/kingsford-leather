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
    <section className="bg-white py-10 sm:py-14 border-b border-[#ded7ce]">
      <Container size="wide">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8">
          <div>
            <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#8b5a35] mb-1">
              Curated Outerwear
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1c1a17] font-normal tracking-tight">
              The Kingsford Edit
            </h2>
          </div>
          <Link
            href="/shop"
            className="mt-2 sm:mt-0 text-xs sm:text-sm font-medium text-[#8b5a35] hover:text-[#5d3923] inline-flex items-center gap-1.5 transition-colors focus-ring"
          >
            <span>View All 49 Pieces</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {featured.map((product) => {
            const hasSecondary = product.images.length > 1
            const hoverImage = hasSecondary ? product.images[1] : null

            return (
              <div
                key={product.id}
                className="group flex flex-col bg-white rounded-[4px] border border-[#ded7ce] overflow-hidden hover:border-[#8b5a35]/60 hover:shadow-xs transition-all duration-300"
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
                      alt={`${product.title} alternate angle`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-top opacity-0 group-hover:opacity-100 group-hover:scale-103 transition-all duration-500"
                    />
                  )}

                  {/* Top-right subtle badge */}
                  <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-[2px] border border-[#ded7ce] text-[10px] uppercase font-semibold text-[#8b5a35]">
                    {product.category.replace('-', ' ')}
                  </div>
                </Link>

                {/* Details */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <span className="text-[11px] uppercase tracking-wider text-[#706a62] font-semibold block">
                      {product.gender} · {product.material}
                    </span>
                    <Link
                      href={`/products/${product.slug}`}
                      className="block text-sm sm:text-base font-serif font-medium text-[#1c1a17] hover:text-[#8b5a35] transition-colors leading-tight line-clamp-1"
                    >
                      {product.title}
                    </Link>
                  </div>

                  {/* Pricing & Marketplace Buttons */}
                  {/*
                    Price plus two marketplace buttons overflows a half-width
                    card on a small phone, and the card clips rather than
                    scrolls — so the buttons vanished. Wrapping lets the row
                    drop to a second line instead.
                  */}
                  <div className="mt-3.5 pt-3 border-t border-[#ded7ce] flex flex-wrap items-center justify-between gap-x-2 gap-y-2">
                    <div className="min-w-0">
                      <span className="text-base font-semibold text-[#1c1a17]">
                        CA${product.salePrice}
                      </span>
                      {product.listPrice > product.salePrice && (
                        <span className="text-xs text-[#a7a39b] line-through ml-2">
                          CA${product.listPrice}
                        </span>
                      )}
                    </div>

                    <div className="flex shrink-0 items-center gap-1.5">
                      {product.etsyUrl && (
                        <a
                          href={product.etsyUrl}
                          target="_blank"
                          rel="noopener noreferrer sponsored nofollow"
                          className="px-2 py-1 bg-[#f8f6f2] hover:bg-[#8b5a35] text-[#8b5a35] hover:text-white rounded-[2px] border border-[#ded7ce] text-[11px] font-semibold transition-colors flex items-center gap-0.5 focus-ring"
                          title="Purchase on Etsy"
                        >
                          <span>Etsy</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      )}
                      {product.ebayUrl && (
                        <a
                          href={product.ebayUrl}
                          target="_blank"
                          rel="noopener noreferrer sponsored nofollow"
                          className="px-2 py-1 bg-[#f8f6f2] hover:bg-[#1c1a17] text-[#1c1a17] hover:text-white rounded-[2px] border border-[#ded7ce] text-[11px] font-semibold transition-colors flex items-center gap-0.5 focus-ring"
                          title="Purchase on eBay"
                        >
                          <span>eBay</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      )}
                    </div>
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
