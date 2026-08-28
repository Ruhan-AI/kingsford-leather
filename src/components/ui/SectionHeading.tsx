import React from 'react'
import { clsx } from 'clsx'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center' | 'right'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        'max-w-2xl mb-5 sm:mb-7',
        {
          'mx-auto text-center': align === 'center',
          'text-left': align === 'left',
          'ml-auto text-right': align === 'right',
        },
        className
      )}
    >
      {eyebrow && (
        <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#8b5a35] mb-1.5">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal font-serif text-[#1c1a17] tracking-tight leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="mt-2 text-xs sm:text-sm text-[#706a62] leading-relaxed font-sans">
          {description}
        </p>
      )}
    </div>
  )
}
