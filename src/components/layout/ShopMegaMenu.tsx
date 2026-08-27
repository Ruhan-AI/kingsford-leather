import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { CATEGORIES } from '@/lib/products'

interface ShopMegaMenuProps {
  onClose?: () => void
}

export function ShopMegaMenu({ onClose }: ShopMegaMenuProps) {
  return (
    <div
      role="region"
      aria-label="Shop Menu"
      className="absolute top-full left-0 w-full bg-white border-b border-[#ded7ce] shadow-xl py-8 px-6 transition-all duration-200 z-40"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
        {/* Column 1: Core Collections */}
        <div className="col-span-3 border-r border-[#ded7ce] pr-6">
          <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#8b5a35] mb-4">
            Collections
          </span>
          <ul className="space-y-3 font-serif text-lg">
            <li>
              <Link
                href="/shop"
                onClick={onClose}
                className="text-[#1c1a17] hover:text-[#8b5a35] flex items-center justify-between transition-colors focus-ring"
              >
                <span>View All 49 Pieces</span>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </Link>
            </li>
            <li>
              <Link
                href="/men"
                onClick={onClose}
                className="text-[#1c1a17] hover:text-[#8b5a35] flex items-center justify-between transition-colors focus-ring"
              >
                <span>Men&apos;s Collection</span>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </Link>
            </li>
            <li>
              <Link
                href="/women"
                onClick={onClose}
                className="text-[#1c1a17] hover:text-[#8b5a35] flex items-center justify-between transition-colors focus-ring"
              >
                <span>Women&apos;s Collection</span>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </Link>
            </li>
          </ul>

          <div className="mt-8 pt-6 border-t border-[#ded7ce]">
            <Link
              href="/size-guide"
              onClick={onClose}
              className="text-xs text-[#706a62] hover:text-[#8b5a35] block transition-colors"
            >
              Need help with measurements? <span className="font-semibold underline">Size Guide →</span>
            </Link>
          </div>
        </div>

        {/* Column 2: Silhouettes */}
        <div className="col-span-5 border-r border-[#ded7ce] pr-6">
          <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#8b5a35] mb-4">
            Silhouettes & Cuts
          </span>
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/collections/${cat.slug}`}
                onClick={onClose}
                className="text-[#2c2925] hover:text-[#8b5a35] transition-colors py-1 focus-ring"
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 3: Featured Story */}
        <div className="col-span-4 pl-2">
          <Link
            href="/collections/shearling"
            onClick={onClose}
            className="group block relative bg-[#f8f6f2] rounded-[4px] overflow-hidden border border-[#ded7ce] p-4 focus-ring"
          >
            <div className="relative aspect-[4/3] w-full mb-3 overflow-hidden rounded-[2px] bg-[#efe9e1]">
              <Image
                src="/images/catalogue/3da6124d3698.jpg"
                alt="Men's Tan Suede Bomber with Shearling Collar"
                fill
                sizes="(max-width: 1024px) 100vw, 380px"
                className="object-cover object-top group-hover:scale-103 transition-transform duration-500"
              />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8b5a35]">
              Featured Silhouette
            </span>
            <h4 className="text-base font-serif text-[#1c1a17] font-medium mt-1 group-hover:text-[#8b5a35] transition-colors">
              Shearling & Aviator Collection
            </h4>
            <p className="text-xs text-[#706a62] mt-1 line-clamp-2 font-sans">
              Hand-finished genuine sheepskin collars and premium suede outerwear built for cold climates.
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
