'use client'

import React from 'react'
import Link from 'next/link'
import { X, Search, ExternalLink, ChevronRight } from 'lucide-react'
import { Crest } from '@/components/brand/Crest'
import { SITE } from '@/lib/site'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  onOpenSearch: () => void
}

export function MobileMenu({ isOpen, onClose, onOpenSearch }: MobileMenuProps) {

  if (!isOpen) return null


  const handleOpenSearch = () => {
    onClose()
    onOpenSearch()
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 lg:hidden flex justify-end animate-in fade-in duration-200"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-night/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Menu Drawer */}
      <div className="relative z-10 w-full max-w-sm bg-night border-l border-bone/15 shadow-2xl h-full flex flex-col justify-between overflow-y-auto">
        {/* Top bar */}
        <div className="p-5 border-b border-bone/10 flex items-center justify-between">
          <Link href="/" onClick={onClose} className="flex items-center gap-2.5 group">
            <Crest size={32} />
            <span className="font-spec text-xs text-brass tracking-widest uppercase group-hover:text-white transition-colors">
              Kingsford Leather
            </span>
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-bone-warm hover:text-white bg-charcoal border border-bone/10 cursor-pointer"
            aria-label="Close navigation"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Links */}
        <div className="p-5 space-y-4 flex-1">
          {/* Quick Search */}
          <button
            type="button"
            onClick={handleOpenSearch}
            className="w-full py-3 px-4 rounded-xl bg-charcoal border border-bone/15 text-left text-xs font-display text-muted hover:text-white flex items-center justify-between group cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <Search className="w-4 h-4 text-brass" />
              <span>Search jackets, cuts, hides...</span>
            </span>
            <span className="font-spec text-[10px] px-1.5 py-0.5 rounded bg-night border border-bone/10">
              Find
            </span>
          </button>

          {/* Navigation Links */}
          <nav className="space-y-1 pt-2 font-display text-sm font-medium">
            <Link
              href="/shop"
              onClick={onClose}
              className="flex items-center justify-between py-3 px-3 rounded-lg text-bone hover:bg-charcoal transition-colors"
            >
              <span>All Outerwear (Shop)</span>
              <ChevronRight className="w-4 h-4 text-muted" />
            </Link>
            <Link
              href="/men"
              onClick={onClose}
              className="flex items-center justify-between py-3 px-3 rounded-lg text-bone hover:bg-charcoal transition-colors"
            >
              <span>Men's Collection</span>
              <ChevronRight className="w-4 h-4 text-muted" />
            </Link>
            <Link
              href="/women"
              onClick={onClose}
              className="flex items-center justify-between py-3 px-3 rounded-lg text-bone hover:bg-charcoal transition-colors"
            >
              <span>Women's Collection</span>
              <ChevronRight className="w-4 h-4 text-muted" />
            </Link>
            <Link
              href="/craftsmanship"
              onClick={onClose}
              className="flex items-center justify-between py-3 px-3 rounded-lg text-bone hover:bg-charcoal transition-colors"
            >
              <span>Craftsmanship &amp; Workshop</span>
              <ChevronRight className="w-4 h-4 text-muted" />
            </Link>
            <Link
              href="/size-guide"
              onClick={onClose}
              className="flex items-center justify-between py-3 px-3 rounded-lg text-bone hover:bg-charcoal transition-colors"
            >
              <span>Size &amp; Measurement Guide</span>
              <ChevronRight className="w-4 h-4 text-muted" />
            </Link>
          </nav>
        </div>

        {/* Marketplace Outbound Links */}
        <div className="p-5 border-t border-bone/10 bg-night/95 space-y-2.5">
          <span className="text-[10px] font-spec uppercase text-muted tracking-widest block text-center">
            Official Marketplace Channels
          </span>
          <a
            href={SITE.etsyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 bg-saddle hover:bg-oxblood text-white font-display font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>Visit Official Etsy Store</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href={SITE.ebayUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 bg-charcoal hover:bg-smoke text-bone border border-bone/15 font-display font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>Visit eBay Shop</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  )
}
