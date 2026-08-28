import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'

export function GenderEditorial() {
  return (
    <section className="bg-white py-10 sm:py-14 border-b border-[#ded7ce]">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Men's Collection */}
          <Link
            href="/men"
            className="group relative block bg-[#f8f6f2] border border-[#ded7ce] rounded-[4px] overflow-hidden focus-ring"
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden bg-[#efe9e1]">
              <Image
                src="/images/catalogue/10cede6cb19e.jpg"
                alt="Men's handcrafted leather collection"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            </div>

            <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white flex items-end justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c9a378] block mb-1">
                  Outerwear &amp; Tailoring
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-normal text-white">
                  Men&apos;s Collection
                </h3>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider bg-white/20 backdrop-blur-xs px-3 py-1.5 rounded-[2px] group-hover:bg-[#8b5a35] transition-colors">
                <span>Explore</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </Link>

          {/* Women's Collection */}
          <Link
            href="/women"
            className="group relative block bg-[#f8f6f2] border border-[#ded7ce] rounded-[4px] overflow-hidden focus-ring"
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden bg-[#efe9e1]">
              <Image
                src="/images/catalogue/3641d0a3eb94.jpg"
                alt="Women's handcrafted leather collection"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            </div>

            <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white flex items-end justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c9a378] block mb-1">
                  Tailored Outerwear
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-normal text-white">
                  Women&apos;s Collection
                </h3>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider bg-white/20 backdrop-blur-xs px-3 py-1.5 rounded-[2px] group-hover:bg-[#8b5a35] transition-colors">
                <span>Explore</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </Link>
        </div>
      </Container>
    </section>
  )
}
