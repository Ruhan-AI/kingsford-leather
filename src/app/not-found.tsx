import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="bg-white py-20 sm:py-32">
      <Container size="narrow" className="text-center space-y-6">
        <div className="relative w-12 h-12 mx-auto">
          <Image
            src="/images/kingsford-crest.png"
            alt="Kingsford Crest"
            fill
            className="object-contain"
          />
        </div>

        <div className="space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8b5a35] block">
            404 Error · Page Not Found
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1c1a17] font-normal tracking-tight">
            Piece Not Found
          </h1>
          <p className="text-sm sm:text-base text-[#706a62] max-w-md mx-auto font-sans leading-relaxed">
            The requested leather piece, category, or guide page could not be located in our catalogue.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <Button href="/shop" variant="primary" size="md">
            <span>Explore All 49 Pieces</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button href="/men" variant="secondary" size="md">
            <span>Men&apos;s Collection</span>
          </Button>
          <Button href="/women" variant="secondary" size="md">
            <span>Women&apos;s Collection</span>
          </Button>
        </div>
      </Container>
    </div>
  )
}
