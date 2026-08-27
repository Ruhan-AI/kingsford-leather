'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { clsx } from 'clsx'

export interface AccordionItem {
  id: string
  title: string
  content: React.ReactNode
  defaultOpen?: boolean
}

interface AccordionProps {
  items: AccordionItem[]
  allowMultiple?: boolean
  className?: string
}

export function Accordion({
  items,
  allowMultiple = false,
  className = '',
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(() => {
    return items.filter((item) => item.defaultOpen).map((item) => item.id)
  })

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      )
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]))
    }
  }

  return (
    <div className={clsx('divide-y divide-[#ded7ce] border-y border-[#ded7ce]', className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id)
        return (
          <div key={item.id} className="py-4">
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
              className="flex w-full items-center justify-between text-left font-medium text-[#1c1a17] hover:text-[#8b5a35] transition-colors focus-ring"
            >
              <span className="text-base sm:text-lg font-serif">{item.title}</span>
              <ChevronDown
                className={clsx(
                  'w-4 h-4 text-[#706a62] transition-transform duration-200 shrink-0 ml-4',
                  { 'rotate-180 text-[#8b5a35]': isOpen }
                )}
                aria-hidden="true"
              />
            </button>
            {isOpen && (
              <div
                id={`accordion-content-${item.id}`}
                className="mt-3.5 text-sm text-[#706a62] leading-relaxed font-sans pr-6"
              >
                {item.content}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
