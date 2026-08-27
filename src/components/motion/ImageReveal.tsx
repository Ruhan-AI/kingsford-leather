'use client'

import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

interface ImageRevealProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function ImageReveal({
  children,
  delay = 0,
  duration = 0.8,
  className = '',
}: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return
      }

      if (!containerRef.current) return

      gsap.fromTo(
        containerRef.current,
        { opacity: 0, scale: 1.03 },
        {
          opacity: 1,
          scale: 1,
          duration,
          delay,
          ease: 'power2.out',
        }
      )
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      {children}
    </div>
  )
}
