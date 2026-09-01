import React from 'react'
import { FileText, Ruler, MessageSquareCheck, ShieldCheck } from 'lucide-react'
import { Container } from '@/components/ui/Container'

const TRUST_POINTS = [
  {
    icon: FileText,
    title: 'Structured Brief',
    description: 'Share your exact cut, hide preference, and design notes in one clear submission.',
  },
  {
    icon: Ruler,
    title: 'Pattern-Master Fit',
    description: 'Every submitted measurement is verified for proportional balance before leather is cut.',
  },
  {
    icon: MessageSquareCheck,
    title: 'Direct Workshop Review',
    description: 'Direct communication with our crafting bench in Sialkot with replies in 12–24 hours.',
  },
  {
    icon: ShieldCheck,
    title: 'Marketplace Protection',
    description: 'No on-site payments. Final orders check out securely on Etsy or eBay with buyer protection.',
  },
]

export function VerifiedTrustStrip() {
  return (
    <section className="bg-white py-8 sm:py-10 border-b border-[#ded7ce]">
      <Container size="default">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TRUST_POINTS.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-[4px] bg-[#f8f6f2] text-[#8b5a35] border border-[#ded7ce] flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-4 h-4" strokeWidth={1.75} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif font-medium text-sm text-[#1c1a17]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#706a62] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
