'use client'

import React, { useState, useEffect, useRef, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Search, X, ArrowRight } from 'lucide-react'
import { PRODUCTS } from '@/lib/products'

interface SearchOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setTimeout(() => inputRef.current?.focus(), 50)
    } else {
      document.body.style.overflow = ''
      setQuery('')
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return PRODUCTS.filter((p) => {
      return (
        p.title.toLowerCase().includes(q) ||
        p.marketplaceTitle.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.material.toLowerCase().includes(q) ||
        p.blurb.toLowerCase().includes(q)
      )
    }).slice(0, 6)
  }, [query])

  const totalMatches = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return 0
    return PRODUCTS.filter((p) => {
      return (
        p.title.toLowerCase().includes(q) ||
        p.marketplaceTitle.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.material.toLowerCase().includes(q) ||
        p.blurb.toLowerCase().includes(q)
      )
    }).length
  }, [query])

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return
    onClose()
    router.push(`/shop?q=${encodeURIComponent(query.trim())}`)
  }

  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search Catalogue"
      className="fixed inset-0 z-50 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Search Sheet */}
      <div className="relative bg-white border-b border-[#ded7ce] shadow-2xl w-full z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex items-center justify-between pb-4 border-b border-[#ded7ce]">
            <form onSubmit={handleSearchSubmit} className="flex-1 flex items-center gap-3">
              <Search className="w-5 h-5 text-[#8b5a35] shrink-0" aria-hidden="true" />
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by silhouette, leather, color, style..."
                className="w-full text-base sm:text-xl font-serif text-[#1c1a17] placeholder:text-[#a7a39b] bg-transparent border-none outline-none focus:ring-0"
              />
            </form>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close search"
              className="p-2 rounded text-[#706a62] hover:text-[#1c1a17] hover:bg-[#f8f6f2] transition-colors focus-ring"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Results Area */}
          <div className="pt-6">
            {query.trim() === '' ? (
              <div>
                <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#706a62] mb-3">
                  Popular Searches
                </span>
                <div className="flex flex-wrap gap-2">
                  {['Suede Bomber', 'Cafe Racer', 'Biker Jacket', 'Shearling', 'Trucker', 'Western'].map((term) => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => setQuery(term)}
                      className="text-xs bg-[#f8f6f2] hover:bg-[#efe9e1] text-[#2c2925] border border-[#ded7ce] px-3 py-1.5 rounded-[4px] transition-colors focus-ring"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            ) : results.length > 0 ? (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#706a62]">
                    Products ({totalMatches})
                  </span>
                  {totalMatches > 6 && (
                    <button
                      type="button"
                      onClick={handleSearchSubmit}
                      className="text-xs text-[#8b5a35] hover:text-[#5d3923] font-medium inline-flex items-center gap-1 focus-ring"
                    >
                      <span>View all {totalMatches} results</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {results.map((product) => (
                    <Link
                      key={product.id}
                      href={`/products/${product.slug}`}
                      onClick={onClose}
                      className="group flex gap-3 p-2.5 rounded-[4px] border border-[#ded7ce] hover:border-[#8b5a35] hover:bg-[#f8f6f2] transition-all duration-150 focus-ring"
                    >
                      <div className="relative w-16 h-20 shrink-0 bg-[#efe9e1] rounded-[2px] overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          sizes="64px"
                          className="object-cover object-top"
                        />
                      </div>
                      <div className="flex flex-col justify-center min-w-0">
                        <span className="text-[11px] uppercase tracking-wider text-[#8b5a35] font-semibold truncate">
                          {product.category}
                        </span>
                        <h4 className="text-sm font-serif font-medium text-[#1c1a17] group-hover:text-[#8b5a35] line-clamp-1 transition-colors">
                          {product.title}
                        </h4>
                        <div className="flex items-baseline gap-2 mt-1">
                          <span className="text-xs font-semibold text-[#1c1a17]">
                            CA${product.salePrice}
                          </span>
                          {product.listPrice > product.salePrice && (
                            <span className="text-[11px] text-[#a7a39b] line-through">
                              CA${product.listPrice}
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-base font-serif text-[#1c1a17]">
                  No matching leather pieces found for &ldquo;{query}&rdquo;
                </p>
                <p className="text-xs text-[#706a62] mt-1 font-sans">
                  Try searching for a cut like &ldquo;Biker&rdquo;, &ldquo;Bomber&rdquo;, or material &ldquo;Suede&rdquo;.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    onClose()
                    router.push('/shop')
                  }}
                  className="mt-4 text-xs font-medium text-[#8b5a35] hover:text-[#5d3923] underline"
                >
                  Browse all 49 products →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
