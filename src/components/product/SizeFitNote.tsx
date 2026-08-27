import React from 'react'
import Link from 'next/link'
import { Ruler, CheckCircle2 } from 'lucide-react'

interface SizeFitNoteProps {
  gender: string
}

export function SizeFitNote({ gender }: SizeFitNoteProps) {
  return (
    <div className="bg-[#f8f6f2] border border-[#ded7ce] rounded-[4px] p-4 space-y-2.5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#8b5a35] flex items-center gap-1.5">
          <Ruler className="w-3.5 h-3.5" />
          <span>Sizing & Tailoring Advice</span>
        </span>
        <Link
          href="/size-guide"
          className="text-xs font-semibold text-[#8b5a35] hover:text-[#5d3923] underline"
        >
          View Size Chart →
        </Link>
      </div>

      <p className="text-xs text-[#706a62] leading-relaxed font-sans">
        This piece is available in standard {gender} sizes (XS to 3XL) or bespoke made-to-measure. 
      </p>

      <div className="flex items-start gap-2 pt-1 text-[11px] text-[#2c2925]">
        <CheckCircle2 className="w-3.5 h-3.5 text-[#8b5a35] shrink-0 mt-0.5" />
        <span>
          <strong>How to specify your size:</strong> Select your standard size or enter your body measurements into the personalization box during checkout on the marketplace listing.
        </span>
      </div>
    </div>
  )
}
