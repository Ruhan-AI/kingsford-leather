'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Search, Menu, ChevronDown, ArrowUpRight } from 'lucide-react'
import { clsx } from 'clsx'
import { Crest } from '@/components/brand/Crest'
import { Wordmark } from '@/components/brand/Wordmark'
import { ShopMegaMenu } from './ShopMegaMenu'
import { MobileNav } from './MobileNav'
import { SearchOverlay } from './SearchOverlay'
import { SITE } from '@/lib/site'

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [shopMenuOpen, setShopMenuOpen] = useState(false)
  const [guidesMenuOpen, setGuidesMenuOpen] = useState(false)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const headerRef = useRef<HTMLElement>(null)
  const shopTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const guidesTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleShopEnter = () => {
    if (shopTimeoutRef.current) clearTimeout(shopTimeoutRef.current)
    setShopMenuOpen(true)
    setGuidesMenuOpen(false)
  }

  const handleShopLeave = () => {
    shopTimeoutRef.current = setTimeout(() => {
      setShopMenuOpen(false)
    }, 150)
  }

  const handleGuidesEnter = () => {
    if (guidesTimeoutRef.current) clearTimeout(guidesTimeoutRef.current)
    setGuidesMenuOpen(true)
    setShopMenuOpen(false)
  }

  const handleGuidesLeave = () => {
    guidesTimeoutRef.current = setTimeout(() => {
      setGuidesMenuOpen(false)
    }, 150)
  }

  return (
    <>
      <header
        ref={headerRef}
        className={clsx(
          'sticky top-0 z-40 bg-white transition-all duration-200',
          {
            'shadow-xs border-b border-[#ded7ce] py-2': isScrolled,
            'border-b border-[#ded7ce]/60 py-3 sm:py-3.5': !isScrolled,
          }
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center gap-2.5 sm:gap-3 group select-none hover:opacity-90 transition-opacity focus-ring"
              aria-label="Kingsford Leather Home"
            >
              <Crest
                size={isScrolled ? 34 : 40}
                className="shrink-0 transition-transform duration-200 group-hover:scale-105"
              />
              <Wordmark size="sm" tone="onLight" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-8">
            {/* Shop with Mega Menu */}
            <div
              className="relative py-2"
              onMouseEnter={handleShopEnter}
              onMouseLeave={handleShopLeave}
            >
              <Link
                href="/shop"
                className="text-sm font-medium text-[#2c2925] hover:text-[#8b5a35] inline-flex items-center gap-1 transition-colors focus-ring"
              >
                <span>Shop</span>
                <ChevronDown
                  className={clsx('w-3.5 h-3.5 transition-transform duration-150', {
                    'rotate-180 text-[#8b5a35]': shopMenuOpen,
                  })}
                />
              </Link>
              {shopMenuOpen && <ShopMegaMenu onClose={() => setShopMenuOpen(false)} />}
            </div>

            <Link
              href="/men"
              className="text-sm font-medium text-[#2c2925] hover:text-[#8b5a35] transition-colors focus-ring"
            >
              Men
            </Link>

            <Link
              href="/women"
              className="text-sm font-medium text-[#2c2925] hover:text-[#8b5a35] transition-colors focus-ring"
            >
              Women
            </Link>

            <Link
              href="/craftsmanship"
              className="text-sm font-medium text-[#2c2925] hover:text-[#8b5a35] transition-colors focus-ring"
            >
              Craftsmanship
            </Link>

            {/* Guides Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={handleGuidesEnter}
              onMouseLeave={handleGuidesLeave}
            >
              <button
                type="button"
                className="text-sm font-medium text-[#2c2925] hover:text-[#8b5a35] inline-flex items-center gap-1 transition-colors focus-ring"
              >
                <span>Guides</span>
                <ChevronDown
                  className={clsx('w-3.5 h-3.5 transition-transform duration-150', {
                    'rotate-180 text-[#8b5a35]': guidesMenuOpen,
                  })}
                />
              </button>

              {guidesMenuOpen && (
                <div
                  role="region"
                  aria-label="Guides Menu"
                  className="absolute top-full left-0 w-64 bg-white border border-[#ded7ce] shadow-lg rounded-[4px] py-2 z-40"
                >
                  <Link
                    href="/leather-guide"
                    onClick={() => setGuidesMenuOpen(false)}
                    className="block px-4 py-2.5 text-sm text-[#2c2925] hover:bg-[#f8f6f2] hover:text-[#8b5a35] transition-colors"
                  >
                    Leather Types Guide
                  </Link>
                  <Link
                    href="/size-guide"
                    onClick={() => setGuidesMenuOpen(false)}
                    className="block px-4 py-2.5 text-sm text-[#2c2925] hover:bg-[#f8f6f2] hover:text-[#8b5a35] transition-colors"
                  >
                    Size & Fit Guide
                  </Link>
                  <Link
                    href="/care-guide"
                    onClick={() => setGuidesMenuOpen(false)}
                    className="block px-4 py-2.5 text-sm text-[#2c2925] hover:bg-[#f8f6f2] hover:text-[#8b5a35] transition-colors"
                  >
                    Leather Care Guide
                  </Link>
                  <Link
                    href="/our-story"
                    onClick={() => setGuidesMenuOpen(false)}
                    className="block px-4 py-2.5 text-sm text-[#2c2925] hover:bg-[#f8f6f2] hover:text-[#8b5a35] transition-colors border-t border-[#ded7ce] mt-1"
                  >
                    Our Story
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-3">
            {/* Search Trigger */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
              className="p-2 text-[#2c2925] hover:text-[#8b5a35] hover:bg-[#f8f6f2] rounded transition-colors focus-ring"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Marketplace Outbound Links (Desktop) */}
            <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-[#ded7ce]">
              <a
                href={SITE.etsyUrl}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 bg-[#f8f6f2] hover:bg-[#efe9e1] text-[#8b5a35] border border-[#ded7ce] rounded-[4px] transition-colors focus-ring"
              >
                <span>Etsy</span>
                <ArrowUpRight className="w-3 h-3" />
                <span className="sr-only">(opens Etsy store in new tab)</span>
              </a>

              <a
                href={SITE.ebayUrl}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 bg-[#f8f6f2] hover:bg-[#efe9e1] text-[#2c2925] border border-[#ded7ce] rounded-[4px] transition-colors focus-ring"
              >
                <span>eBay</span>
                <ArrowUpRight className="w-3 h-3" />
                <span className="sr-only">(opens eBay store in new tab)</span>
              </a>
            </div>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setMobileNavOpen(true)}
              aria-label="Open mobile menu"
              className="lg:hidden p-2 text-[#1c1a17] hover:text-[#8b5a35] hover:bg-[#f8f6f2] rounded transition-colors focus-ring"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Global Overlays */}
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </>
  )
}
