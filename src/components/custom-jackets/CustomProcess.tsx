import React from 'react'
import { Container } from '@/components/ui/Container'
import { CUSTOM_JACKETS_CONTENT } from '@/content/custom-jackets'

export function CustomProcess() {
  const { processSteps } = CUSTOM_JACKETS_CONTENT

  return (
    <section id="custom-process" className="bg-[#f8f6f2] py-12 sm:py-16 border-b border-[#ded7ce]">
      <Container size="default">
        <div className="max-w-2xl mb-10">
          <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#8b5a35] mb-1">
            Transparent Workflow
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1c1a17] font-normal tracking-tight">
            How the Custom Process Works
          </h2>
          <p className="text-sm sm:text-base text-[#706a62] mt-2 font-sans">
            From your first sketch or sizing note to final courier tracking, every stage is verified directly with our workshop team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-[4px] border border-[#ded7ce] p-6 flex flex-col justify-between space-y-4 hover:border-[#8b5a35]/60 hover:shadow-xs transition-all duration-300"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-[#f8f6f2] text-[#8b5a35] border border-[#ded7ce] font-serif font-bold text-sm flex items-center justify-center">
                    {step.step}
                  </span>
                  <span className="text-[10px] uppercase font-semibold text-[#706a62] tracking-wider">
                    Stage {step.step} of 6
                  </span>
                </div>

                <h3 className="font-serif font-medium text-lg text-[#1c1a17]">
                  {step.title}
                </h3>

                <p className="text-xs font-semibold text-[#8b5a35]">
                  {step.summary}
                </p>

                <p className="text-xs text-[#706a62] leading-relaxed pt-1">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
