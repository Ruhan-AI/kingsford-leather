import React from 'react'
import { clsx } from 'clsx'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  size?: 'default' | 'narrow' | 'wide' | 'full'
  className?: string
}

export function Container({
  children,
  size = 'default',
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={clsx(
        'w-full mx-auto px-4 sm:px-6 lg:px-8',
        {
          'max-w-7xl': size === 'default', // 1280px / 1440px viewport optimal
          'max-w-3xl': size === 'narrow',  // 760px reading width
          'max-w-[1440px]': size === 'wide',
          'max-w-none px-0': size === 'full',
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
