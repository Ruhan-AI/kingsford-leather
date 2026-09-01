'use client'

import React, { useState, useEffect } from 'react'
import { ArrowDown } from 'lucide-react'
import { trackEvent } from '@/lib/analytics/events'

export function MobileCustomCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroBtn = document.getElementById('hero-start-request-btn')
      const formSection = document.getElementById('custom-request-section')

      if (!heroBtn || !formSection) return

      const heroRect = heroBtn.getBoundingClientRect()
      const formRect = formSection.getBoundingClientRect()

      // Show if hero button has scrolled above the viewport
      const heroPast = heroRect.bottom < 0

      // Hide if form is actively visible in viewport
      const formInView =
        formRect.top < window.innerHeight && formRect.bottom > 80

      setVisible(heroPast && !formInView)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  const handleClick = () => {
    trackEvent('custom_primary_cta_click', { source: 'sticky' })
    const formEl = document.getElementById('custom-request-heading') || document.getElementById('custom-request-form')
    formEl?.scrollIntoView({ behavior: 'smooth' })
    formEl?.focus()
  }

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 p-3 bg-white/95 backdrop-blur-md border-t border-[#ded7ce] md:hidden transition-transform duration-300 pb-[calc(12px+env(safe-area-inset-bottom))] shadow-lg">
      <button
        type="button"
        onClick={handleClick}
        className="w-full py-3 px-4 bg-[#8b5a35] hover:bg-[#5d3923] text-white text-xs font-semibold rounded-[4px] transition-colors flex items-center justify-center gap-2 shadow-xs focus-ring"
      >
        <span>Start Custom Request</span>
        <ArrowDown className="w-3.5 h-3.5" />
      </button>
    </div>
  )
}
