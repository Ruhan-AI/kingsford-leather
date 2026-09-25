import React from 'react'
import { ArrowUpRight, ShieldCheck } from 'lucide-react'
import { Product } from '@/lib/products'

interface MarketplaceActionsProps {
  product: Product
  className?: string
}

export function MarketplaceActions({
  product,
  className = '',
}: MarketplaceActionsProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      {/* Primary Etsy Button (if present) */}
      {product.etsyUrl && (
        <a
          href={product.etsyUrl}
          target="_blank"
          rel="noopener noreferrer sponsored nofollow"
          className="flex items-center justify-between px-5 w-full py-4 bg-[#8b5a35] hover:bg-[#5d3923] text-white rounded-[4px] font-medium text-base transition-all duration-200 shadow-xs focus-ring"
        >
          <span>Purchase on Etsy</span>
          <span className="flex items-center gap-1.5 font-semibold text-sm sm:text-base">
            CA${(product.etsyPrice ?? product.salePrice).toFixed(2)}
            <ArrowUpRight className="w-4 h-4" />
          </span>
          <span className="sr-only">(opens Etsy listing in new window)</span>
        </a>
      )}

      {/* Secondary eBay Button (if present) */}
      {product.ebayUrl && (
        <a
          href={product.ebayUrl}
          target="_blank"
          rel="noopener noreferrer sponsored nofollow"
          className="flex items-center justify-between px-5 w-full py-3.5 bg-white hover:bg-[#f8f6f2] text-[#1c1a17] border border-[#ded7ce] hover:border-[#1c1a17] rounded-[4px] font-medium text-sm transition-all duration-200 focus-ring"
        >
          <span>Purchase on eBay</span>
          <span className="flex items-center gap-1.5 font-semibold text-[#8b5a35]">
            CA${(product.ebayPrice ?? product.salePrice).toFixed(2)}
            <ArrowUpRight className="w-4 h-4" />
          </span>
          <span className="sr-only">(opens eBay listing in new window)</span>
        </a>
      )}

      <div className="flex items-center justify-center gap-1.5 text-xs text-[#706a62] pt-1">
        <ShieldCheck className="w-3.5 h-3.5 text-[#8b5a35]" />
        <span>Transactions & buyer protection fulfilled securely by Etsy / eBay</span>
      </div>
    </div>
  )
}
