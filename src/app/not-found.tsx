import React from 'react'
import Link from 'next/link'
import { Crest } from '@/components/brand/Crest'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20 space-y-6">
      <Crest size={64} />
      <div className="space-y-2">
        <h1 className="font-brand font-bold text-3xl sm:text-4xl text-white">
          Piece Not Found
        </h1>
        <p className="font-body text-sm text-bone-warm max-w-md mx-auto">
          The requested archive item or collection page could not be located.
        </p>
      </div>
      <Link
        href="/"
        className="py-3 px-6 bg-saddle hover:bg-oxblood text-white font-display font-bold text-sm rounded-xl transition-colors"
      >
        Return to Home Archive
      </Link>
    </div>
  )
}
