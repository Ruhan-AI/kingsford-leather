import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export function FeaturedCollectionStory() {
  return (
    <section className="bg-white py-16 sm:py-24 border-b border-[#ded7ce]">
      <Container size="wide">
        <div className="relative rounded-[4px] overflow-hidden border border-[#ded7ce] bg-[#efe9e1]">
          {/* Main Background Editorial Image */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full min-h-[360px]">
            <Image
              src="/images/catalogue/bb5f20eb9776.jpg"
              alt="Kingsford Leather artisan trench coat and outerwear tailoring"
              fill
              sizes="(max-width: 1440px) 100vw, 1440px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
          </div>

          {/* Overlapping White Editorial Story Card */}
          <div className="relative sm:absolute sm:bottom-8 sm:left-8 bg-white p-6 sm:p-8 rounded-[4px] border border-[#ded7ce] shadow-lg max-w-md m-4 sm:m-0">
            <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#8b5a35] mb-2">
              Featured Edition
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#1c1a17] font-normal leading-tight mb-3">
              The Heritage Duster & Trench
            </h3>
            <p className="text-xs sm:text-sm text-[#706a62] leading-relaxed mb-6 font-sans">
              Cut from heavyweight full-grain cowhides with authentic double-breasted closures, storm flaps, and durable satin lining for timeless winter warmth.
            </p>
            <Button href="/collections/coats" variant="primary" size="md">
              <span>Shop the Collection</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
