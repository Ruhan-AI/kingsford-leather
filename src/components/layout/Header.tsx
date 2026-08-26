'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Scissors, ExternalLink, Menu, X } from 'lucide-react'
import { Crest } from '@/components/brand/Crest'
import { Wordmark } from '@/components/brand/Wordmark'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#14191c]/90 border-b border-[#deded8]/10 transition-colors">
      {/* Announcement bar */}
      <div className="bg-[#5e1c20] text-[#deded8] px-4 py-1.5 text-xs font-spec tracking-widest text-center flex items-center justify-center gap-3 overflow-hidden border-b border-[#deded8]/10">
        <span className="inline-flex items-center gap-1.5 text-[#d4ac5e]">
          <Scissors className="w-3 h-3" />
          <span>MADE-TO-MEASURE WORKSHOP</span>
        </span>
        <span className="hidden sm:inline text-[#deded8]/40">•</span>
        <span className="hidden sm:inline">GENUINE LEATHER & SUEDE OUTERWEAR</span>
        <span className="hidden md:inline text-[#deded8]/40">•</span>
        <span className="hidden md:inline">FREE SHIPPING ON EVERY ETSY LISTING</span>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Identity */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="flex items-center gap-3 sm:gap-3.5 group"
              aria-label="Kingsford Leather — home"
            >
              <Crest
                size={46}
                className="shrink-0 transition-transform duration-300 group-hover:scale-105"
              />
              <span className="flex flex-col">
                <Wordmark size="sm" />
                <span className="font-spec text-[9px] sm:text-[10px] tracking-[0.2em] text-[#8b9298] uppercase mt-1.5 text-center">
                  Direct From The Maker
                </span>
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-display font-medium text-[#c5c3b9]">
              <Link href="/#collection" className="hover:text-[#deded8] transition-colors py-2">
                All Outerwear
              </Link>
              <Link href="/men" className="hover:text-[#deded8] transition-colors py-2">
                Men's Collection
              </Link>
              <Link href="/women" className="hover:text-[#deded8] transition-colors py-2">
                Women's Collection
              </Link>
              <Link href="/#docket" className="hover:text-[#d4ac5e] text-[#d4ac5e] flex items-center gap-1.5 py-2">
                <Scissors className="w-3.5 h-3.5" />
                <span>The Docket (Custom Fit)</span>
              </Link>
              <Link href="/#craftsmanship" className="hover:text-[#deded8] transition-colors py-2">
                Workshop & Hides
              </Link>
              <Link href="/#reviews" className="hover:text-[#deded8] transition-colors py-2">
                Reviews
              </Link>
            </nav>
          </div>

          {/* Right Action Items */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://www.etsy.com/ca/shop/KingsfordLeatherCA"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs font-spec tracking-wider text-[#deded8] hover:text-white bg-[#1f262b] hover:bg-[#2b353b] border border-[#deded8]/15 rounded flex items-center gap-1.5 transition-all"
            >
              <span>Etsy Shop</span>
              <ExternalLink className="w-3 h-3 text-[#b8733e]" />
            </a>

            <Link
              href="/#docket"
              className="px-4 py-2 text-xs font-display font-semibold tracking-wide bg-[#b8733e] hover:bg-[#5e1c20] text-white rounded transition-colors flex items-center gap-1.5 shadow-lg shadow-[#b8733e]/10"
            >
              <Scissors className="w-3.5 h-3.5 text-[#deded8]" />
              <span>Custom Measurement</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-[#deded8] hover:bg-[#1f262b] focus:outline-none focus:ring-2 focus:ring-[#d4ac5e]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#14191c] border-b border-[#deded8]/10 px-4 pt-2 pb-6 space-y-3 font-display">
          <Link
            href="/#collection"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded text-base font-medium text-[#deded8] hover:bg-[#1f262b]"
          >
            All Outerwear
          </Link>
          <Link
            href="/men"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded text-base font-medium text-[#deded8] hover:bg-[#1f262b]"
          >
            Men's Collection
          </Link>
          <Link
            href="/women"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded text-base font-medium text-[#deded8] hover:bg-[#1f262b]"
          >
            Women's Collection
          </Link>
          <Link
            href="/#docket"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded text-base font-medium text-[#d4ac5e] hover:bg-[#1f262b] flex items-center gap-2"
          >
            <Scissors className="w-4 h-4" />
            The Docket (Custom Sizing)
          </Link>
          <Link
            href="/#craftsmanship"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded text-base font-medium text-[#deded8] hover:bg-[#1f262b]"
          >
            Workshop & Hides
          </Link>
          <Link
            href="/#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded text-base font-medium text-[#deded8] hover:bg-[#1f262b]"
          >
            Buyer Reviews
          </Link>
          <div className="pt-4 border-t border-[#deded8]/10 flex flex-col gap-2">
            <a
              href="https://www.etsy.com/ca/shop/KingsfordLeatherCA"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center px-4 py-2.5 bg-[#1f262b] text-[#deded8] rounded text-sm font-spec flex items-center justify-center gap-2"
            >
              <span>Visit Official Etsy Store</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#b8733e]" />
            </a>
            <Link
              href="/#docket"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-4 py-2.5 bg-[#b8733e] text-white rounded text-sm font-display font-semibold"
            >
              Start Custom Sizing
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
