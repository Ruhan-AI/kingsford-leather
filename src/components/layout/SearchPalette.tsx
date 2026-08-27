'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, X, ChevronRight } from 'lucide-react'
import { PRODUCTS, Product } from '@/lib/products'

interface SearchPaletteProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchPalette({ isOpen, onClose }: SearchPaletteProps) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50)
    } else {
      setQuery('')
    }
  }, [isOpen])

  // Keyboard shortcut listener (Cmd+K / Ctrl+K or Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        if (isOpen) onClose()
        else {
          // Open handled by parent if needed
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const filtered = query.trim()
    ? PRODUCTS.filter((p) => {
        const q = query.toLowerCase()
        return (
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.material.toLowerCase().includes(q) ||
          p.gender.toLowerCase().includes(q) ||
          p.blurb.toLowerCase().includes(q)
        )
      }).slice(0, 8)
    : []

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-palette-title"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 animate-in fade-in duration-200"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-night/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Palette Container */}
      <div className="relative z-10 w-full max-w-2xl bg-charcoal border border-bone/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Input Bar */}
        <div className="p-4 border-b border-bone/10 flex items-center gap-3 bg-smoke/40">
          <Search className="w-5 h-5 text-brass shrink-0" />
          <input
            ref={inputRef}
            type="text"
            id="search-palette-title"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search biker jackets, suede bombers, cafe racers, shearling..."
            className="w-full bg-transparent text-bone placeholder:text-muted font-display text-base focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 rounded text-muted hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="px-2 py-1 rounded bg-night text-[11px] font-spec text-muted border border-bone/10 hover:text-white cursor-pointer"
          >
            ESC
          </button>
        </div>

        {/* Results / Suggestions */}
        <div className="p-4 max-h-96 overflow-y-auto space-y-2">
          {query.trim() === '' ? (
            <div className="space-y-4 py-2">
              <div className="text-xs font-spec text-muted uppercase tracking-wider">
                Popular Searches
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'Tan Suede Bomber',
                  'Cafe Racer',
                  'Cowhide Biker',
                  'Western Trucker',
                  'Shearling Aviator',
                  'Women’s Suede Blazer',
                  'Officer Jacket',
                ].map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 rounded-full bg-night hover:bg-smoke border border-bone/10 text-xs font-display text-bone-warm hover:text-white transition-colors cursor-pointer"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : filtered.length > 0 ? (
            <div className="space-y-2">
              <div className="text-xs font-spec text-muted uppercase tracking-wider pb-1">
                Matching Outerwear ({filtered.length})
              </div>
              {filtered.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  onClick={onClose}
                  className="flex items-center gap-3.5 p-2.5 rounded-xl hover:bg-smoke/60 border border-transparent hover:border-bone/10 transition-all group"
                >
                  <div className="relative w-12 h-14 rounded-lg overflow-hidden bg-night shrink-0 border border-bone/10">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                      sizes="48px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display font-bold text-sm text-white truncate group-hover:text-brass transition-colors">
                      {product.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs font-spec text-muted mt-0.5">
                      <span className="capitalize">{product.category}</span>
                      <span>•</span>
                      <span>{product.material}</span>
                      <span>•</span>
                      <span className="text-bone-warm font-bold">
                        CA${product.salePrice.toFixed(2)}
                      </span>
                    </div>
                  </div>


                  <ChevronRight className="w-4 h-4 text-muted group-hover:text-brass group-hover:translate-x-0.5 transition-all shrink-0" />
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-8 text-center space-y-2">
              <p className="text-sm font-display text-muted">
                No outerwear matched "<span className="text-white font-bold">{query}</span>"
              </p>
              <Link
                href="/shop"
                onClick={onClose}
                className="inline-block text-xs font-spec text-brass hover:underline"
              >
                Browse full catalogue in Shop →
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
