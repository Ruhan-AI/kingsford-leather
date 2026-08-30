'use client'

import React, { useState, useEffect, useRef } from 'react'
import { ResponsiveImage } from '@/components/ui/ResponsiveImage'
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react'

interface ProductGalleryProps {
  title: string
  images: readonly string[]
}

export function ProductGallery({ title, images }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const touchStartXRef = useRef<number>(0)

  const activeImage = images[selectedIndex] || images[0]

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))
  }

  const handleNext = () => {
    setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))
  }

  // Fullscreen keyboard navigation & escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isFullscreen) return
      if (e.key === 'Escape') setIsFullscreen(false)
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isFullscreen])

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartXRef.current - touchEndX
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext()
      else handlePrev()
    }
  }

  return (
    <div className="space-y-4">
      {/* Primary Display Image */}
      <div
        className="relative aspect-[4/5] w-full rounded-[4px] overflow-hidden bg-[#f8f6f2] border border-[#ded7ce] group"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <ResponsiveImage
          src={activeImage}
          alt={`${title} - view ${selectedIndex + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="object-cover object-top transition-opacity duration-300"
        />

        {/* Fullscreen Trigger */}
        <button
          type="button"
          onClick={() => setIsFullscreen(true)}
          aria-label="View fullscreen image"
          className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-xs text-[#1c1a17] hover:text-[#8b5a35] hover:bg-white rounded-[4px] border border-[#ded7ce] shadow-xs transition-all opacity-80 group-hover:opacity-100 focus-ring"
        >
          <Maximize2 className="w-4 h-4" />
        </button>

        {/* Mobile Navigation Arrows (Visible if multiple images) */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-xs text-[#1c1a17] hover:bg-white border border-[#ded7ce] shadow-xs sm:hidden focus-ring"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-xs text-[#1c1a17] hover:bg-white border border-[#ded7ce] shadow-xs sm:hidden focus-ring"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails Row */}
      {images.length > 1 && (
        <div
          role="region"
          aria-label="Product Image Thumbnails"
          className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin"
        >
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedIndex(idx)}
              aria-label={`View image ${idx + 1} of ${images.length}`}
              aria-current={selectedIndex === idx ? 'true' : 'false'}
              className={`relative w-16 h-20 sm:w-20 sm:h-24 shrink-0 rounded-[2px] overflow-hidden border-2 transition-all focus-ring ${
                selectedIndex === idx
                  ? 'border-[#8b5a35] shadow-xs'
                  : 'border-[#ded7ce] opacity-70 hover:opacity-100 hover:border-[#706a62]'
              }`}
            >
              <ResponsiveImage
                src={img}
                alt={`${title} thumbnail ${idx + 1}`}
                fill
                sizes="80px"
                className="object-cover object-top"
              />
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {isFullscreen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Fullscreen Gallery"
          className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-8"
        >
          <div className="flex items-center justify-between text-white pb-4">
            <span className="text-xs font-sans text-[#a7a39b]">
              {title} — Image {selectedIndex + 1} of {images.length}
            </span>
            <button
              type="button"
              onClick={() => setIsFullscreen(false)}
              aria-label="Close fullscreen gallery"
              className="p-2 text-white hover:text-[#c9a378] transition-colors focus-ring"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="relative flex-1 w-full flex items-center justify-center">
            <div className="relative w-full h-full max-w-4xl max-h-[85vh]">
              <ResponsiveImage
                src={activeImage}
                alt={title}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous image"
                  className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-ring"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next image"
                  className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-ring"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          <div className="text-center text-xs text-[#a7a39b] pt-4">
            Use Left / Right arrow keys to navigate · Escape to close
          </div>
        </div>
      )}
    </div>
  )
}
