'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ArrowUpRight } from 'lucide-react'
import { Crest } from '@/components/brand/Crest'
import { Wordmark } from '@/components/brand/Wordmark'
import { Drawer } from '@/components/ui/Drawer'
import { CATEGORIES } from '@/lib/products'
import { SITE } from '@/lib/site'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [categoriesOpen, setCategoriesOpen] = useState(false)
  const [guidesOpen, setGuidesOpen] = useState(false)

  return (
    <Drawer isOpen={isOpen} onClose={onClose} position="right">
      <div className="flex flex-col justify-between h-full space-y-6">
        <nav aria-label="Mobile Navigation" className="space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-[#ded7ce]">
            <Crest size={34} />
            <Wordmark size="sm" tone="onLight" />
          </div>

          <div className="space-y-4 font-serif text-xl border-b border-[#ded7ce] pb-6">
            <Link
              href="/shop"
              onClick={onClose}
              className="block text-[#1c1a17] hover:text-[#8b5a35] transition-colors"
            >
              Shop All Outerwear
            </Link>
            <Link
              href="/men"
              onClick={onClose}
              className="block text-[#1c1a17] hover:text-[#8b5a35] transition-colors"
            >
              Men&apos;s Collection
            </Link>
            <Link
              href="/women"
              onClick={onClose}
              className="block text-[#1c1a17] hover:text-[#8b5a35] transition-colors"
            >
              Women&apos;s Collection
            </Link>

            {/* Silhouettes dropdown */}
            <div>
              <button
                type="button"
                onClick={() => setCategoriesOpen((prev) => !prev)}
                className="flex items-center justify-between w-full text-left text-[#1c1a17] hover:text-[#8b5a35] transition-colors"
              >
                <span>Silhouettes</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#706a62] transition-transform duration-200 ${
                    categoriesOpen ? 'rotate-180 text-[#8b5a35]' : ''
                  }`}
                />
              </button>
              {categoriesOpen && (
                <div className="mt-3 pl-4 space-y-2.5 font-sans text-sm border-l-2 border-[#ded7ce]">
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/collections/${cat.slug}`}
                      onClick={onClose}
                      className="block text-[#706a62] hover:text-[#8b5a35] transition-colors py-1"
                    >
                      {cat.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/craftsmanship"
              onClick={onClose}
              className="block text-[#1c1a17] hover:text-[#8b5a35] transition-colors"
            >
              Craftsmanship
            </Link>

            {/* Guides dropdown */}
            <div>
              <button
                type="button"
                onClick={() => setGuidesOpen((prev) => !prev)}
                className="flex items-center justify-between w-full text-left text-[#1c1a17] hover:text-[#8b5a35] transition-colors"
              >
                <span>Guides & Care</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#706a62] transition-transform duration-200 ${
                    guidesOpen ? 'rotate-180 text-[#8b5a35]' : ''
                  }`}
                />
              </button>
              {guidesOpen && (
                <div className="mt-3 pl-4 space-y-2.5 font-sans text-sm border-l-2 border-[#ded7ce]">
                  <Link
                    href="/leather-guide"
                    onClick={onClose}
                    className="block text-[#706a62] hover:text-[#8b5a35] transition-colors py-1"
                  >
                    Leather Types Guide
                  </Link>
                  <Link
                    href="/size-guide"
                    onClick={onClose}
                    className="block text-[#706a62] hover:text-[#8b5a35] transition-colors py-1"
                  >
                    Size & Fit Guide
                  </Link>
                  <Link
                    href="/care-guide"
                    onClick={onClose}
                    className="block text-[#706a62] hover:text-[#8b5a35] transition-colors py-1"
                  >
                    Leather Care Guide
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/our-story"
              onClick={onClose}
              className="block text-[#1c1a17] hover:text-[#8b5a35] transition-colors"
            >
              Our Story
            </Link>
          </div>

          <div className="space-y-3 font-sans text-xs text-[#706a62]">
            <Link
              href="/shipping-returns"
              onClick={onClose}
              className="block py-1 hover:text-[#1c1a17] transition-colors"
            >
              Shipping & Marketplace Returns
            </Link>
            <Link
              href="/contact"
              onClick={onClose}
              className="block py-1 hover:text-[#1c1a17] transition-colors"
            >
              Contact Workshop
            </Link>
          </div>
        </nav>

        {/* Marketplace conversion actions */}
        <div className="pt-6 border-t border-[#ded7ce] space-y-3">
          <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#706a62] text-center">
            Official Marketplace Stores
          </span>
          <a
            href={SITE.etsyUrl}
            target="_blank"
            rel="noopener noreferrer sponsored nofollow"
            className="flex items-center justify-center gap-2 w-full py-3 bg-[#8b5a35] hover:bg-[#5d3923] text-white rounded-[4px] font-medium text-sm transition-colors focus-ring"
          >
            <span>Visit Etsy Store</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href={SITE.ebayUrl}
            target="_blank"
            rel="noopener noreferrer sponsored nofollow"
            className="flex items-center justify-center gap-2 w-full py-3 bg-white hover:bg-[#f8f6f2] text-[#1c1a17] border border-[#ded7ce] rounded-[4px] font-medium text-sm transition-colors focus-ring"
          >
            <span>Visit eBay Store</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </Drawer>
  )
}
