import React from 'react'
import Link from 'next/link'
import { ArrowRight, BookOpen, Ruler, Sparkles } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

const GUIDES = [
  {
    icon: BookOpen,
    title: 'Leather & Hide Guide',
    description:
      'Learn about 1.2mm cowhide, sheepskin drape, pull-up patinas, and authentic shearling pelts.',
    href: '/leather-guide',
  },
  {
    icon: Ruler,
    title: 'Size & Measuring Guide',
    description:
      'How to accurately measure chest, shoulders, and sleeve length at home for standard or custom orders.',
    href: '/size-guide',
  },
  {
    icon: Sparkles,
    title: 'Care & Maintenance',
    description:
      'Essential guidelines for conditioning, water protection, and long-term leather preservation.',
    href: '/care-guide',
  },
]

export function GuideCards() {
  return (
    <section className="bg-[#f8f6f2] py-10 sm:py-14 border-b border-[#ded7ce]">
      <Container size="wide">
        <SectionHeading
          eyebrow="Craftsmanship & Guidance"
          title="Leather Education & Sizing"
          description="Everything you need to select the right leather hide, ensure an exact fit, and maintain your jacket for years to come."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {GUIDES.map((guide) => (
            <Link
              key={guide.title}
              href={guide.href}
              className="group bg-white border border-[#ded7ce] rounded-[4px] p-5 sm:p-6 flex flex-col justify-between hover:border-[#8b5a35]/60 hover:shadow-xs transition-all duration-200 focus-ring"
            >
              <div className="space-y-2.5">
                <div className="w-8 h-8 rounded-[2px] bg-[#f8f6f2] text-[#8b5a35] flex items-center justify-center border border-[#ded7ce]">
                  <guide.icon className="w-4 h-4" />
                </div>
                <h3 className="font-serif font-medium text-base sm:text-lg text-[#1c1a17] group-hover:text-[#8b5a35] transition-colors">
                  {guide.title}
                </h3>
                <p className="text-xs text-[#706a62] leading-relaxed font-sans">
                  {guide.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#ded7ce]/70 flex items-center gap-1 text-xs font-semibold text-[#8b5a35] group-hover:translate-x-0.5 transition-transform">
                <span>Read Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
