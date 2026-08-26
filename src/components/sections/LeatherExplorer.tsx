'use client'

import React, { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, SlidersHorizontal, Scissors, ExternalLink, ArrowRight, Sparkles, Filter } from 'lucide-react'
import { PRODUCTS, CATEGORIES, Category, Gender, Product, primaryBuyLink } from '@/lib/products'

export function LeatherExplorer() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedGender, setSelectedGender] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured')
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Category filter
      if (selectedCategory !== 'all' && p.category !== selectedCategory) return false
      // Gender filter
      if (selectedGender !== 'all' && p.gender !== selectedGender && p.gender !== 'unisex') return false
      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase()
        const matchTitle = p.title.toLowerCase().includes(query)
        const matchBlurb = p.blurb.toLowerCase().includes(query)
        const matchMat = p.material.toLowerCase().includes(query)
        if (!matchTitle && !matchBlurb && !matchMat) return false
      }
      return true
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.salePrice - b.salePrice
      if (sortBy === 'price-desc') return b.salePrice - a.salePrice
      return 0
    })
  }, [selectedCategory, selectedGender, searchQuery, sortBy])

  return (
    <section id="collection" className="py-20 bg-[#14191c] text-[#deded8] border-t border-[#deded8]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & Tagline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-spec uppercase tracking-widest text-[#d4ac5e] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Outerwear Archive ({PRODUCTS.length} Authentic SKUs)</span>
            </div>
            <h2 className="font-brand font-bold text-3xl sm:text-5xl text-[#deded8] tracking-[0.015em]">
              The Collection.
            </h2>
            <p className="font-body text-base text-[#8b9298] mt-2 max-w-xl">
              Every jacket is available in standard off-the-rack sizing (XS to 5XL) or individually cut to your bespoke Docket measurements.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-spec text-[#c5c3b9]">
            <span className="px-2.5 py-1 rounded bg-[#1f262b] border border-[#deded8]/10">
              Showing {filteredProducts.length} of {PRODUCTS.length} Styles
            </span>
          </div>
        </div>

        {/* Filters and Controls */}
        <div className="bg-[#192025] border border-[#deded8]/10 rounded-xl p-4 sm:p-6 mb-10 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Bar */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-[#8b9298] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by silhouette, hide, color (e.g. Suede, Cafe Racer, Shearling)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#14191c] border border-[#deded8]/15 rounded text-sm text-[#deded8] placeholder-[#8b9298]/60 focus:outline-none focus:border-[#d4ac5e]"
              />
            </div>

            {/* Gender Switcher */}
            <div className="md:col-span-3 flex items-center bg-[#14191c] p-1 rounded border border-[#deded8]/15">
              <button
                onClick={() => setSelectedGender('all')}
                className={`flex-1 py-1.5 text-xs font-spec rounded transition-all ${
                  selectedGender === 'all' ? 'bg-[#b8733e] text-white font-bold' : 'text-[#8b9298] hover:text-[#deded8]'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedGender('men')}
                className={`flex-1 py-1.5 text-xs font-spec rounded transition-all ${
                  selectedGender === 'men' ? 'bg-[#b8733e] text-white font-bold' : 'text-[#8b9298] hover:text-[#deded8]'
                }`}
              >
                Men's
              </button>
              <button
                onClick={() => setSelectedGender('women')}
                className={`flex-1 py-1.5 text-xs font-spec rounded transition-all ${
                  selectedGender === 'women' ? 'bg-[#b8733e] text-white font-bold' : 'text-[#8b9298] hover:text-[#deded8]'
                }`}
              >
                Women's
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="md:col-span-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full px-3.5 py-2.5 bg-[#14191c] border border-[#deded8]/15 rounded text-xs font-spec text-[#deded8] focus:outline-none focus:border-[#d4ac5e]"
              >
                <option value="featured">Sort: Featured Archive</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>

          </div>

          {/* Category Chips Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar border-t border-[#deded8]/10">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-full text-xs font-spec whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#d4ac5e] text-[#14191c] font-bold'
                  : 'bg-[#14191c] text-[#8b9298] hover:text-[#deded8] border border-[#deded8]/10'
              }`}
            >
              All Outerwear ({PRODUCTS.length})
            </button>
            {CATEGORIES.map((cat) => {
              const count = PRODUCTS.filter((p) => p.category === cat.slug).length
              return (
                <button
                  key={cat.slug}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-3 py-1.5 rounded-full text-xs font-spec whitespace-nowrap transition-all ${
                    selectedCategory === cat.slug
                      ? 'bg-[#d4ac5e] text-[#14191c] font-bold'
                      : 'bg-[#14191c] text-[#8b9298] hover:text-[#deded8] border border-[#deded8]/10'
                  }`}
                >
                  {cat.label} ({count})
                </button>
              )
            })}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center bg-[#192025] rounded-xl border border-[#deded8]/10">
            <Filter className="w-10 h-10 text-[#8b9298] mx-auto mb-3 opacity-40" />
            <h3 className="font-display font-bold text-xl text-[#deded8]">No jackets matched your filters</h3>
            <p className="font-body text-sm text-[#8b9298] mt-1">Try resetting the category or search keywords.</p>
            <button
              onClick={() => {
                setSelectedCategory('all')
                setSelectedGender('all')
                setSearchQuery('')
              }}
              className="mt-4 px-4 py-2 bg-[#b8733e] text-white rounded text-xs font-spec"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const isHovered = hoveredProduct === product.id
              const displayImage = isHovered && product.images.length > 1 ? product.images[1] : product.image
              const discountPercent = Math.round(((product.listPrice - product.salePrice) / product.listPrice) * 100)

              return (
                <div
                  key={product.id}
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                  className="bg-[#192025] border border-[#deded8]/10 rounded-xl overflow-hidden flex flex-col group hover:border-[#d4ac5e]/40 transition-all duration-300 shadow-md hover:shadow-xl"
                >
                  {/* Image Container with 4:5 ratio */}
                  <div className="relative aspect-[4/5] w-full bg-[#14191c] overflow-hidden">
                    <Image
                      src={displayImage}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-all duration-500 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14191c]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-1">
                      <span className="px-2 py-0.5 rounded bg-[#14191c]/80 backdrop-blur-sm text-[10px] font-spec uppercase text-[#c5c3b9] border border-[#deded8]/15">
                        {product.material || 'Genuine Hide'}
                      </span>
                      {discountPercent > 0 && (
                        <span className="px-2 py-0.5 rounded bg-[#5e1c20] text-white text-[10px] font-spec font-bold uppercase tracking-wider">
                          {discountPercent}% OFF
                        </span>
                      )}
                    </div>

                    {/* Made to Measure Prompt */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-[10px] font-spec text-[#d4ac5e] flex items-center gap-1 bg-[#14191c]/90 px-2 py-1 rounded backdrop-blur-sm">
                        <Scissors className="w-3 h-3" />
                        <span>Custom Fit Ready</span>
                      </span>
                      <span className="text-[10px] font-spec text-[#8b9298] bg-[#14191c]/90 px-2 py-1 rounded">
                        {product.gender.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <h3 className="font-display font-bold text-sm text-[#deded8] line-clamp-1 group-hover:text-[#d4ac5e] transition-colors">
                        {product.title}
                      </h3>
                      <p className="font-body text-xs text-[#8b9298] line-clamp-2 mt-1 leading-snug">
                        {product.blurb}
                      </p>
                    </div>

                    {/* Pricing */}
                    <div className="pt-2 border-t border-[#deded8]/10 flex items-baseline justify-between font-spec">
                      <div>
                        <span className="text-base font-bold text-white">
                          CA${product.salePrice.toFixed(2)}
                        </span>
                        {product.listPrice > product.salePrice && (
                          <span className="text-xs text-[#8b9298] line-through ml-2">
                            CA${product.listPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <Link
                        href={`/products/${product.slug}`}
                        className="w-full py-2 px-2.5 bg-[#14191c] hover:bg-[#2b353b] text-[#deded8] hover:text-white border border-[#deded8]/15 rounded text-xs font-display font-semibold text-center transition-colors flex items-center justify-center gap-1"
                      >
                        <span>Specifications</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>

                      <a
                        href={primaryBuyLink(product).url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 px-2.5 bg-[#b8733e] hover:bg-[#5e1c20] text-white rounded text-xs font-display font-semibold text-center transition-colors flex items-center justify-center gap-1"
                      >
                        <span>Buy on {primaryBuyLink(product).marketplace}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

      </div>
    </section>
  )
}
