import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { clsx } from 'clsx'

interface ExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
  showIcon?: boolean
  className?: string
}

export function ExternalLink({
  href,
  children,
  showIcon = true,
  className = '',
  ...props
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored nofollow"
      className={clsx(
        'inline-flex items-center gap-1 hover:text-[#8b5a35] transition-colors focus-ring',
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {showIcon && (
        <ArrowUpRight className="w-3.5 h-3.5 shrink-0 opacity-75" aria-hidden="true" />
      )}
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  )
}
