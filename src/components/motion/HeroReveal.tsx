'use client'

import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, prefersReducedMotion } from './gsap'

interface HeroRevealProps {
  children: React.ReactNode
  className?: string
}

export function HeroReveal({ children, className }: HeroRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion() || !containerRef.current) return

      const elements = containerRef.current.querySelectorAll('[data-hero-elem]')
      if (!elements.length) return

      gsap.fromTo(
        elements,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
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
