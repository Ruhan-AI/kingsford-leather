'use client'

import React from 'react'
import { Mail, Clock, ShieldCheck, Sparkles } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { CustomRequestForm } from './CustomRequestForm'
import { SITE } from '@/lib/site'
import { FitProfile } from '@/lib/custom-requests/schema'

interface CustomRequestSectionProps {
  prefillGarmentType?: string
  prefillFitProfile?: FitProfile
  prefillBaseProductSlug?: string
}

export function CustomRequestSection({
  prefillGarmentType,
  prefillFitProfile,
  prefillBaseProductSlug,
}: CustomRequestSectionProps) {
  return (
    <section id="custom-request-section" className="bg-[#f8f6f2] py-12 sm:py-16 border-b border-[#ded7ce]">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Editorial Guidance & Direct Contact (approx 36%) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#8b5a35]">
                <Sparkles className="w-3.5 h-3.5 text-[#8b5a35]" />
                Direct Workshop Consultation
              </span>
              <h2
                id="custom-request-heading"
                tabIndex={-1}
                className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1c1a17] font-normal tracking-tight focus:outline-none"
              >
                Tell Us What You Want to Build
              </h2>
              <p className="text-sm sm:text-base text-[#706a62] leading-relaxed font-sans">
                Whether you need minor measurement tweaks on a classic cafe racer or a completely bespoke outerwear piece, our pattern team reviews each detail before cutting hides.
              </p>
            </div>

            {/* Benefit Highlights */}
            <div className="space-y-4 pt-4 border-t border-[#ded7ce] text-xs">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-[4px] bg-white border border-[#ded7ce] text-[#8b5a35] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-[#1c1a17] block">Fast Turnaround Feedback</span>
                  <p className="text-[#706a62]">We evaluate hide weights, feasibility, and measurements within 12–24 hours.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-[4px] bg-white border border-[#ded7ce] text-[#8b5a35] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-[#1c1a17] block">Zero Risk Enquiry</span>
                  <p className="text-[#706a62]">No payment details are asked on this site. Final purchases happen through verified Etsy or eBay listings.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-[4px] bg-white border border-[#ded7ce] text-[#8b5a35] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-[#1c1a17] block">Alternative Direct Contact</span>
                  <p className="text-[#706a62]">
                    Prefer sending an email with attachments? Reach us at{' '}
                    <a href={`mailto:${SITE.email}`} className="text-[#8b5a35] font-semibold underline">
                      {SITE.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive White Form Card (approx 64%) */}
          <div className="lg:col-span-8">
            <CustomRequestForm
              prefillGarmentType={prefillGarmentType}
              prefillFitProfile={prefillFitProfile}
              prefillBaseProductSlug={prefillBaseProductSlug}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
