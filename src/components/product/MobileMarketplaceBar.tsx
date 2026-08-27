'use client'

import React, { useState, useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Product, primaryBuyLink } from '@/lib/products'

interface MobileMarketplaceBarProps {
  product: Product
}

export function MobileMarketplaceBar({ product }: MobileMarketplaceBarProps) {
  const [isVisible, setIsVisible] = useState(false)
  const primaryLink = primaryBuyLink(product)

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero section (>450px)
      setIsVisible(window.scrollY > 450)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <aside
      aria-label="Quick purchase actions"
      className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-[#ded7ce] p-3.5 z-40 lg:hidden shadow-lg"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="min-w-0 flex-1">
          <span className="text-[11px] text-[#706a62] block truncate">
            {product.title}
          </span>
          <span className="text-sm font-semibold text-[#1c1a17]">
            CA${product.salePrice}
          </span>
        </div>

        <a
          href={primaryLink.url}
          target="_blank"
          rel="noopener noreferrer sponsored nofollow"
          className="flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#8b5a35] hover:bg-[#5d3923] text-white rounded-[4px] font-medium text-xs shrink-0 transition-colors focus-ring"
        >
          <span>Purchase on {primaryLink.marketplace}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
          <span className="sr-only">(opens {primaryLink.marketplace} in new window)</span>
        </a>
      </div>
    </aside>
  )
}
