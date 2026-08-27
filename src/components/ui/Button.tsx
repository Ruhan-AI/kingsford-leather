import React from 'react'
import Link from 'next/link'
import { clsx } from 'clsx'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  external?: boolean
  children: React.ReactNode
  className?: string
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  external,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus-ring cursor-pointer select-none rounded-[4px] text-center'

  const variants = {
    primary:
      'bg-[#8b5a35] text-white hover:bg-[#5d3923] active:bg-[#4a2d1b]',
    secondary:
      'bg-white text-[#1c1a17] border border-[#ded7ce] hover:bg-[#f8f6f2] hover:border-[#1c1a17]',
    dark:
      'bg-[#1c1a17] text-white hover:bg-[#2c2925] active:bg-[#11100e]',
    outline:
      'bg-transparent text-[#2c2925] border border-[#ded7ce] hover:border-[#8b5a35] hover:text-[#8b5a35]',
    ghost:
      'bg-transparent text-[#2c2925] hover:bg-[#f8f6f2] hover:text-[#8b5a35]',
  }

  const sizes = {
    sm: 'text-xs px-3 py-1.5 h-8 gap-1.5',
    md: 'text-sm px-4 py-2.5 h-11 gap-2',
    lg: 'text-base px-6 py-3.5 h-13 gap-2.5',
  }

  const classes = clsx(baseStyles, variants[variant], sizes[size], className)

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer sponsored nofollow"
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
