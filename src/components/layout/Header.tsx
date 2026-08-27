'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, ExternalLink, Menu, X, ArrowRight } from 'lucide-react'
import { Crest } from '@/components/brand/Crest'
import { Wordmark } from '@/components/brand/Wordmark'
import { MobileMenu } from './MobileMenu'
import { SITE } from '@/lib/site'
import { PRODUCTS } from '@/lib/products'

/**
 * Animated Integrated Navbar with Inline Search
 *
 * When the search trigger is clicked:
 * - Nav links & action icons fade out smoothly.
 * - The brand logo slides to the side.
 * - An inline search input seamlessly expands inside the navbar with instant live typing.
 * - Live results & quick categories appear directly underneath the navbar.
 */
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchActive, setSearchActive] = useState(false)
  const [query, setQuery] = useState('')
  const searchInputRef = useRef<HTMLInputElement>(null)
  const headerRef = useRef<HTMLElement>(null)

  // Focus input when search becomes active
  useEffect(() => {
    if (searchActive) {
      setTimeout(() => searchInputRef.current?.focus(), 80)
    } else {
      setQuery('')
    }
  }, [searchActive])

  // Global hotkeys (Cmd+K / Ctrl+K and Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchActive((prev) => !prev)
      }
      if (e.key === 'Escape' && searchActive) {
        setSearchActive(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [searchActive])

  // Close when clicking outside header container
  useEffect(() => {
    if (!searchActive) return
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setSearchActive(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [searchActive])

  // Lock body scroll when search is active to prevent background scrolling
  useEffect(() => {
    if (searchActive) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [searchActive])

  const filteredProducts = query.trim()
    ? PRODUCTS.filter((p) => {
        const q = query.toLowerCase()
        return (
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.material.toLowerCase().includes(q) ||
          p.gender.toLowerCase().includes(q) ||
          p.blurb.toLowerCase().includes(q)
        )
      }).slice(0, 6)
    : []

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-3 z-40 w-full px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-all duration-300"
      >
        {/* Floating Rounded Bar */}
        <div className="relative glass-panel rounded-2xl sm:rounded-3xl border border-bone/15 px-4 sm:px-6 py-3 shadow-2xl backdrop-blur-xl bg-charcoal/95 overflow-hidden transition-all duration-300">
          
          {/* DEFAULT NAVBAR CONTENT (Fades out when search is active) */}
          <div
            className={`flex items-center justify-between gap-4 transition-all duration-300 ease-out ${
              searchActive
                ? 'opacity-0 pointer-events-none -translate-y-2 absolute inset-0 px-4 sm:px-6 py-3'
                : 'opacity-100 translate-y-0 relative'
            }`}
          >
            {/* Left Navigation (Desktop) */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs font-display font-semibold tracking-wide text-bone-warm">
              <Link href="/shop" className="hover:text-white transition-colors">
                Shop
              </Link>
              <Link href="/men" className="hover:text-white transition-colors">
                Men
              </Link>
              <Link href="/women" className="hover:text-white transition-colors">
                Women
              </Link>
              <Link href="/craftsmanship" className="hover:text-white transition-colors">
                Craftsmanship
              </Link>
            </nav>

            {/* Center Brand Monogram / Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 sm:gap-3 group select-none"
              aria-label="Kingsford Leather Home"
            >
              <Crest
                size={42}
                className="shrink-0 transition-transform duration-300 group-hover:scale-105"
              />
              <Wordmark size="sm" />
            </Link>

            {/* Right Action Items (Desktop) */}
            <div className="hidden lg:flex items-center gap-2.5 xl:gap-3">
              {/* Search Trigger */}
              <button
                type="button"
                onClick={() => setSearchActive(true)}
                className="p-2 rounded-xl text-bone-warm hover:text-white hover:bg-smoke border border-bone/10 transition-all cursor-pointer flex items-center gap-1.5 text-xs font-display"
                aria-label="Search collection"
              >
                <Search className="w-4 h-4 text-brass" />
                <span className="hidden xl:inline text-muted font-spec text-[11px]">Search</span>
              </button>

              {/* Direct Marketplace Links */}
              <a
                href={SITE.etsyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 bg-smoke hover:bg-night text-bone hover:text-white border border-bone/15 rounded-xl text-xs font-spec tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Etsy</span>
                <ExternalLink className="w-3 h-3 text-brass" />
              </a>

              <a
                href={SITE.ebayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 bg-smoke hover:bg-night text-bone hover:text-white border border-bone/15 rounded-xl text-xs font-spec tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>eBay</span>
                <ExternalLink className="w-3 h-3 text-brass" />
              </a>
            </div>

            {/* Mobile Right Icons (Search + Hamburger) */}
            <div className="lg:hidden flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setSearchActive(true)}
                className="p-2 rounded-xl text-bone-warm hover:text-white hover:bg-smoke cursor-pointer"
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-brass" />
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-xl text-bone-warm hover:text-white hover:bg-smoke cursor-pointer"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* ACTIVE INLINE SEARCH NAVBAR (Logo slides to side & search box smoothly expands) */}
          <div
            className={`flex items-center gap-3 sm:gap-4 transition-all duration-300 ease-out ${
              searchActive
                ? 'opacity-100 translate-y-0 relative'
                : 'opacity-0 pointer-events-none translate-y-2 absolute inset-0 px-4 sm:px-6 py-3'
            }`}
          >
            {/* Full Brand Logo positioned smoothly on the left */}
            <Link
              href="/"
              onClick={() => setSearchActive(false)}
              className="flex items-center gap-2.5 sm:gap-3 shrink-0 group select-none"
              aria-label="Kingsford Leather Home"
            >
              <Crest
                size={40}
                className="shrink-0 transition-transform duration-300 group-hover:scale-105"
              />
              <Wordmark size="sm" />
            </Link>

            {/* Inline Expanding Search Box */}
            <div className="flex-1 flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-night/85 border border-bone/20 focus-within:border-brass/70 focus-within:bg-night transition-all">
              <Search className="w-4 h-4 text-brass shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search biker jackets, suede bombers, cafe racers, shearling..."
                className="w-full bg-transparent text-bone placeholder:text-muted font-display text-xs sm:text-sm focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setSearchActive(false)}
                className="p-1 rounded-md text-muted hover:text-white hover:bg-smoke/80 transition-colors cursor-pointer shrink-0 flex items-center gap-1"
                aria-label="Close search"
                title="Close search (Esc)"
              >
                <X className="w-4 h-4" />
                <span className="hidden md:inline font-spec text-[10px] text-muted border border-bone/15 px-1 rounded">
                  ESC
                </span>
              </button>
            </div>

            {/* Right Action Items: Etsy & eBay Marketplace Links */}
            <div className="hidden sm:flex items-center gap-2 sm:gap-2.5 shrink-0">
              <a
                href={SITE.etsyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 bg-smoke hover:bg-night text-bone hover:text-white border border-bone/15 rounded-xl text-xs font-spec tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Etsy</span>
                <ExternalLink className="w-3 h-3 text-brass" />
              </a>

              <a
                href={SITE.ebayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 bg-smoke hover:bg-night text-bone hover:text-white border border-bone/15 rounded-xl text-xs font-spec tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>eBay</span>
                <ExternalLink className="w-3 h-3 text-brass" />
              </a>
            </div>
          </div>

        </div>

        {/* INLINE LIVE RESULTS / SUGGESTIONS FLOATING DROPDOWN */}
        {searchActive && (
          <div className="mt-2 w-full glass-panel rounded-2xl border border-bone/20 shadow-2xl backdrop-blur-2xl bg-charcoal/95 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
            {/* Quick Suggestions when query is empty */}
            {!query.trim() && (
              <div className="p-4 sm:p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-spec text-[11px] uppercase tracking-wider text-muted">
                    Popular Categories
                  </span>
                  <span className="font-spec text-[11px] text-muted">
                    {PRODUCTS.length} Total Handcrafted Pieces
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'All Outerwear', href: '/shop' },
                    { label: 'Biker & Moto', href: '/collections/biker' },
                    { label: 'Suede Bomber', href: '/collections/bomber' },
                    { label: 'Cafe Racer', href: '/collections/cafe-racer' },
                    { label: 'Shearling', href: '/collections/shearling' },
                    { label: 'Men Outerwear', href: '/men' },
                    { label: 'Women Outerwear', href: '/women' },
                  ].map((chip) => (
                    <Link
                      key={chip.label}
                      href={chip.href}
                      onClick={() => setSearchActive(false)}
                      className="px-3 py-1.5 rounded-lg bg-smoke hover:bg-night border border-bone/10 hover:border-brass/50 text-bone-warm hover:text-white text-xs font-display transition-colors"
                    >
                      {chip.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Results List */}
            {query.trim() && filteredProducts.length > 0 && (
              <div className="p-3 sm:p-4 space-y-1.5 max-h-[60vh] overflow-y-auto">
                <div className="px-2 py-1 text-xs font-spec text-muted">
                  Matching jackets ({filteredProducts.length})
                </div>
                {filteredProducts.map((p) => (
                  <Link
                    key={p.id}
                    href={`/product/${p.slug}`}
                    onClick={() => setSearchActive(false)}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-smoke/70 border border-transparent hover:border-bone/10 transition-all group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="relative w-11 h-11 rounded-lg overflow-hidden bg-night shrink-0 border border-bone/10">
                        <Image
                          src={p.images[0] || '/images/hero-workshop.jpg'}
                          alt={p.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-brand font-semibold text-xs sm:text-sm text-bone group-hover:text-white truncate">
                          {p.title}
                        </h4>
                        <p className="font-spec text-[11px] text-muted truncate">
                          {p.material} • {p.gender}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 ml-3">
                      <div className="text-right">
                        <div className="font-spec text-xs font-bold text-bone">
                          CA${p.salePrice.toFixed(2)}
                        </div>
                        <div className="font-spec text-[10px] text-brass uppercase">
                          {p.category}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted group-hover:text-brass group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </Link>
                ))}

                <div className="pt-2 border-t border-bone/10 px-2 flex items-center justify-between">
                  <Link
                    href={`/shop?q=${encodeURIComponent(query)}`}
                    onClick={() => setSearchActive(false)}
                    className="text-xs font-display font-medium text-brass hover:underline flex items-center gap-1"
                  >
                    <span>View all results for &ldquo;{query}&rdquo;</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}

            {/* No Results */}
            {query.trim() && filteredProducts.length === 0 && (
              <div className="p-8 text-center space-y-2">
                <p className="font-brand text-sm text-bone">
                  No jackets found matching &ldquo;{query}&rdquo;
                </p>
                <p className="font-body text-xs text-muted">
                  Try searching for keywords like &ldquo;bomber&rdquo;, &ldquo;suede&rdquo;, &ldquo;biker&rdquo;, or &ldquo;racer&rdquo;.
                </p>
              </div>
            )}
          </div>
        )}
      </header>

      {/* Backdrop overlay when search is active */}
      {searchActive && (
        <div
          className="fixed inset-0 z-30 bg-night/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setSearchActive(false)}
        />
      )}

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenSearch={() => {
          setMobileMenuOpen(false)
          setSearchActive(true)
        }}
      />
    </>
  )
}
