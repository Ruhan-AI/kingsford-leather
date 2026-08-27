'use client'

import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

interface RevealProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  y?: number
  className?: string
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  y = 20,
  className = '',
}: RevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // Respect prefers-reduced-motion
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return
      }

      if (!containerRef.current) return

      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: 'power2.out',
        }
      )
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}
