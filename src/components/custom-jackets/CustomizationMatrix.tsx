import React from 'react'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { CUSTOM_JACKETS_CONTENT } from '@/content/custom-jackets'

export function CustomizationMatrix() {
  const { customizationMatrix } = CUSTOM_JACKETS_CONTENT

  return (
    <section id="customization-matrix" className="bg-[#f8f6f2] py-12 sm:py-16 border-b border-[#ded7ce]">
      <Container size="default">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#8b5a35] mb-1">
            Artisanal Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1c1a17] font-normal tracking-tight">
            What Can Be Customized
          </h2>
          <p className="text-sm sm:text-base text-[#706a62] mt-2 font-sans">
            Every garment is made to order from full hides. We tailor individual elements rather than assembling pre-cut modular panels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customizationMatrix.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[4px] border border-[#ded7ce] overflow-hidden flex flex-col justify-between hover:border-[#8b5a35]/60 hover:shadow-xs transition-all duration-300"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#efe9e1]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 hover:scale-103"
                />
                {item.badge && (
                  <div className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-xs px-2.5 py-0.5 rounded-[2px] border border-[#ded7ce] text-[10px] uppercase font-semibold text-[#8b5a35]">
                    {item.badge}
                  </div>
                )}
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8b5a35] block">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif font-medium text-lg text-[#1c1a17] mt-1">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-[#706a62] leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
