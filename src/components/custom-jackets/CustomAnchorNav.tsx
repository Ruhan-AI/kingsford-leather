'use client'

import React, { useState, useEffect } from 'react'
import { Container } from '@/components/ui/Container'

const ANCHOR_LINKS = [
  { id: 'custom-request-section', label: 'Request Form' },
  { id: 'starting-silhouettes', label: 'Starting Silhouettes' },
  { id: 'customization-matrix', label: 'Customization' },
  { id: 'fit-pathways', label: 'Fit Pathways' },
  { id: 'custom-process', label: 'How It Works' },
  { id: 'custom-faq', label: 'FAQ' },
]

export function CustomAnchorNav() {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: '-100px 0px -60% 0px' }
    )

    ANCHOR_LINKS.forEach((link) => {
      const el = document.getElementById(link.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 90
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <nav
      aria-label="Custom page section navigation"
      className="hidden md:block sticky top-[57px] z-30 bg-white/95 backdrop-blur-md border-b border-[#ded7ce] py-2.5 transition-all"
    >
      <Container size="default">
        <div className="flex items-center justify-between text-xs font-medium">
          <div className="flex items-center gap-6 overflow-x-auto no-scrollbar py-1">
            {ANCHOR_LINKS.map((link) => {
              const isActive = activeSection === link.id
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollTo(link.id)}
                  className={`transition-colors whitespace-nowrap py-1 focus-ring rounded-[2px] ${
                    isActive
                      ? 'text-[#8b5a35] font-semibold border-b-2 border-[#8b5a35] -mb-[2px]'
                      : 'text-[#706a62] hover:text-[#1c1a17]'
                  }`}
                >
                  {link.label}
                </button>
              )
            })}
          </div>

          <button
            type="button"
            onClick={() => scrollTo('custom-request-section')}
            className="shrink-0 px-3.5 py-1.5 bg-[#8b5a35] hover:bg-[#5d3923] text-white text-xs font-semibold rounded-[4px] transition-colors focus-ring"
          >
            Start Your Brief
          </button>
        </div>
      </Container>
    </nav>
  )
}
