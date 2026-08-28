import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export function FeaturedCollectionStory() {
  return (
    <section className="bg-white py-10 sm:py-14 border-b border-[#ded7ce]">
      <Container size="wide">
        <div className="relative bg-[#1c1a17] text-[#efe9e1] rounded-[4px] overflow-hidden border border-[#2c2925] p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-3.5">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c9a378] block">
                Featured Silhouette Edit
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-white tracking-tight">
                The Heritage Suede Bomber Series
              </h2>
              <p className="text-xs sm:text-sm text-[#a7a39b] leading-relaxed max-w-xl font-sans">
                Cut from heavy velvety split suedes and paired with genuine detachable shearling collars and antiqued heavy brass zippers. An essential balance of warmth, texture, and relaxed structure.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <Button href="/collections/bomber" variant="primary" size="md">
                  <span>Explore Bombers</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full rounded-[2px] overflow-hidden border border-[#3f3b35]">
                <Image
                  src="/images/catalogue/3da6124d3698.jpg"
                  alt="Men's Tan Suede Bomber Jacket with Shearling Collar"
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
