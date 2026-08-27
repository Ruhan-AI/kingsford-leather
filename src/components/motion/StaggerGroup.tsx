'use client'

import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

interface StaggerGroupProps {
  children: React.ReactNode
  stagger?: number
  duration?: number
  y?: number
  className?: string
}

export function StaggerGroup({
  children,
  stagger = 0.08,
  duration = 0.5,
  y = 20,
  className = '',
}: StaggerGroupProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return
      }

      if (!containerRef.current) return
      const items = containerRef.current.children

      gsap.fromTo(
        items,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
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
