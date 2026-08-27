import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Product } from '@/lib/products'

interface ProductCardProps {
  product: Product
  priority?: boolean
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const hasSecondary = product.images.length > 1
  const hoverImage = hasSecondary ? product.images[1] : null

  return (
    <div className="group flex flex-col bg-white rounded-[4px] border border-[#ded7ce] overflow-hidden hover:border-[#8b5a35]/60 hover:shadow-md transition-all duration-300">
      {/* 4:5 Aspect Ratio Image Frame */}
      <Link
        href={`/products/${product.slug}`}
        className="relative aspect-[4/5] w-full bg-[#f8f6f2] overflow-hidden block focus-ring"
      >
        <Image
          src={product.image}
          alt={product.title}
          fill
          priority={priority}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className={`object-cover object-top transition-all duration-500 ${
            hoverImage ? 'group-hover:opacity-0' : 'group-hover:scale-103'
          }`}
        />
        {hoverImage && (
          <Image
            src={hoverImage}
            alt={`${product.title} alternate view`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover object-top opacity-0 group-hover:opacity-100 group-hover:scale-103 transition-all duration-500 absolute inset-0"
          />
        )}

        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
          {product.listPrice > product.salePrice && (
            <span className="bg-[#8b5a35] text-white text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-[2px]">
              Special Price
            </span>
          )}
        </div>

        {/* Available Marketplaces badge */}
        <div className="absolute bottom-2.5 right-2.5 bg-white/90 backdrop-blur-xs text-[10px] font-medium text-[#706a62] px-2 py-0.5 rounded-[2px] border border-[#ded7ce]">
          {product.etsyUrl && product.ebayUrl
            ? 'Etsy & eBay'
            : product.etsyUrl
            ? 'Etsy'
            : 'eBay'}
        </div>
      </Link>

      {/* Product Information */}
      <div className="p-3.5 sm:p-4 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center justify-between text-[11px] text-[#706a62] uppercase tracking-wider mb-1">
            <span className="font-semibold text-[#8b5a35]">{product.category}</span>
            <span>{product.gender}</span>
          </div>

          <h3 className="font-serif text-sm sm:text-base font-medium text-[#1c1a17] group-hover:text-[#8b5a35] transition-colors line-clamp-2 leading-snug">
            <Link href={`/products/${product.slug}`} className="focus-ring">
              {product.title}
            </Link>
          </h3>

          <p className="text-xs text-[#706a62] mt-1 line-clamp-1 font-sans">
            {product.material}
          </p>
        </div>

        <div className="mt-3 pt-3 border-t border-[#ded7ce] flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-sm sm:text-base font-semibold text-[#1c1a17]">
              CA${product.salePrice}
            </span>
            {product.listPrice > product.salePrice && (
              <span className="text-xs text-[#a7a39b] line-through">
                CA${product.listPrice}
              </span>
            )}
          </div>

          <Link
            href={`/products/${product.slug}`}
            className="text-xs font-medium text-[#8b5a35] hover:underline inline-flex items-center gap-0.5"
          >
            <span className="hidden sm:inline">Details</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  )
}
