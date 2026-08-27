import React from 'react'
import Link from 'next/link'
import { ArrowRight, BookOpen, Ruler, Sparkles } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

const GUIDES = [
  {
    icon: BookOpen,
    tag: 'Material Education',
    title: 'Understanding Leather Types',
    description:
      'Learn the distinctions between full-grain cowhide, supple sheepskin, velvety suede, and natural shearling wool.',
    href: '/leather-guide',
  },
  {
    icon: Ruler,
    tag: 'Measurement Guidance',
    title: 'How to Measure for a Jacket',
    description:
      'Step-by-step instructions for measuring chest, shoulders, sleeve length, and torso to ensure a precise standard or custom fit.',
    href: '/size-guide',
  },
  {
    icon: Sparkles,
    tag: 'Longevity & Maintenance',
    title: 'Caring for Leather Outerwear',
    description:
      'Proper conditioning, storage, water resistance, and stain treatment to ensure your jacket develops a rich lifetime patina.',
    href: '/care-guide',
  },
]

export function GuideCards() {
  return (
    <section className="bg-[#f8f6f2] py-16 sm:py-24 border-b border-[#ded7ce]">
      <Container size="wide">
        <SectionHeading
          eyebrow="Leather Education"
          title="Essential Guides & Knowledge"
          description="We believe an informed buyer makes the best leather decisions. Explore our guides on materials, sizing, and preservation."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {GUIDES.map((guide, idx) => (
            <Link
              key={idx}
              href={guide.href}
              className="group bg-white p-7 rounded-[4px] border border-[#ded7ce] hover:border-[#8b5a35] transition-all duration-200 flex flex-col justify-between focus-ring shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8b5a35]">
                    {guide.tag}
                  </span>
                  <guide.icon className="w-5 h-5 text-[#706a62] group-hover:text-[#8b5a35] transition-colors" />
                </div>
                <h3 className="text-xl font-serif font-medium text-[#1c1a17] group-hover:text-[#8b5a35] transition-colors mb-3">
                  {guide.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#706a62] leading-relaxed font-sans">
                  {guide.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#ded7ce] flex items-center justify-between text-xs font-semibold text-[#8b5a35]">
                <span>Read Full Guide</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
