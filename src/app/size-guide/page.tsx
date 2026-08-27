import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Scissors, ShieldCheck, CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Size & Measuring Guide | Kingsford Leather',
  description:
    'Complete size charts (XS to 3XL) and instructions for custom made-to-measure leather jacket ordering on Etsy & eBay.',
  alternates: {
    canonical: '/size-guide',
  },
}

export default function SizeGuidePage() {
  const sizeChart = [
    { size: 'XS', chestIn: '36–38"', chestCm: '91–96 cm', shoulders: '17.5"', sleeve: '25.0"', length: '25.0"' },
    { size: 'S', chestIn: '38–40"', chestCm: '96–101 cm', shoulders: '18.0"', sleeve: '25.5"', length: '25.5"' },
    { size: 'M', chestIn: '40–42"', chestCm: '101–106 cm', shoulders: '18.5"', sleeve: '26.0"', length: '26.0"' },
    { size: 'L', chestIn: '42–44"', chestCm: '106–111 cm', shoulders: '19.2"', sleeve: '26.5"', length: '26.5"' },
    { size: 'XL', chestIn: '44–46"', chestCm: '111–116 cm', shoulders: '20.0"', sleeve: '27.0"', length: '27.0"' },
    { size: '2XL', chestIn: '46–48"', chestCm: '116–122 cm', shoulders: '20.8"', sleeve: '27.5"', length: '27.5"' },
    { size: '3XL', chestIn: '48–50"', chestCm: '122–127 cm', shoulders: '21.5"', sleeve: '28.0"', length: '28.0"' },
  ]

  const measurementSteps = [
    {
      step: '1. Chest Circumference',
      desc: 'Wrap a flexible cloth tape measure around the fullest part of your chest, keeping the tape level under your armpits and across your shoulder blades. Breathe normally.',
    },
    {
      step: '2. Shoulder Width',
      desc: 'Measure horizontally across the upper back from the tip of one shoulder bone across the base of the neck to the tip of the other shoulder bone.',
    },
    {
      step: '3. Sleeve Length',
      desc: 'Place tape at the outer point of the shoulder bone and measure down along the outer arm to just below the wrist bone with your arm relaxed and slightly bent.',
    },
    {
      step: '4. Back Length (Torso)',
      desc: 'Measure vertically from the base of the collar seam at the back of the neck straight down to where you want the jacket hem to sit (typically mid-belt line).',
    },
    {
      step: '5. Waist / Stomach',
      desc: 'Measure around the widest point of your natural waist / stomach area while standing in your normal posture.',
    },
  ]

  return (
    <div className="bg-white py-8 sm:py-16">
      <Container size="narrow">
        {/* Breadcrumb */}
        <Breadcrumbs items={[{ label: 'Size & Fit Guide' }]} className="mb-6" />

        {/* Header */}
        <div className="space-y-4 mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8b5a35] block">
            Fit & Measurement Guidance
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1c1a17] font-normal tracking-tight leading-[1.15]">
            How To Choose Your Perfect Fit
          </h1>
          <p className="text-base sm:text-lg text-[#706a62] leading-relaxed font-sans">
            Every Kingsford piece is available in standard sizes (XS to 3XL) or crafted specifically to your bespoke body numbers.
          </p>
        </div>

        {/* Size Chart Table */}
        <div className="space-y-4 mb-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-serif font-medium text-[#1c1a17]">
              Standard Outerwear Sizing Chart
            </h2>
            <span className="text-xs font-semibold text-[#8b5a35] uppercase tracking-wider">
              Inches &amp; CM
            </span>
          </div>

          <div className="bg-white border border-[#ded7ce] rounded-[4px] overflow-hidden overflow-x-auto shadow-xs">
            <table className="w-full text-left text-xs divide-y divide-[#ded7ce] min-w-[600px] font-sans">
              <thead className="bg-[#f8f6f2] text-[#8b5a35] uppercase tracking-wider font-semibold">
                <tr>
                  <th className="py-3.5 px-4 font-serif text-sm">Size</th>
                  <th className="py-3.5 px-4">Chest (Inches)</th>
                  <th className="py-3.5 px-4">Chest (CM)</th>
                  <th className="py-3.5 px-4">Shoulder</th>
                  <th className="py-3.5 px-4">Sleeve</th>
                  <th className="py-3.5 px-4">Back Length</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ded7ce] text-[#2c2925]">
                {sizeChart.map((row) => (
                  <tr key={row.size} className="hover:bg-[#f8f6f2] transition-colors">
                    <td className="py-3.5 px-4 font-serif font-semibold text-sm text-[#1c1a17]">
                      {row.size}
                    </td>
                    <td className="py-3.5 px-4">{row.chestIn}</td>
                    <td className="py-3.5 px-4">{row.chestCm}</td>
                    <td className="py-3.5 px-4">{row.shoulders}</td>
                    <td className="py-3.5 px-4">{row.sleeve}</td>
                    <td className="py-3.5 px-4">{row.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* How To Measure Guide */}
        <div className="bg-[#f8f6f2] border border-[#ded7ce] rounded-[4px] p-6 sm:p-8 space-y-6 mb-12">
          <div className="flex items-center gap-3">
            <Scissors className="w-6 h-6 text-[#8b5a35] shrink-0" />
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-medium text-[#1c1a17]">
                How To Measure at Home
              </h2>
              <p className="text-xs text-[#706a62] font-sans">
                Use a flexible cloth tape measure while wearing a light t-shirt.
              </p>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            {measurementSteps.map((step) => (
              <div key={step.step} className="p-4 rounded-[4px] bg-white border border-[#ded7ce] space-y-1">
                <h4 className="font-serif font-medium text-sm text-[#1c1a17]">
                  {step.step}
                </h4>
                <p className="text-xs text-[#706a62] leading-relaxed font-sans">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Sizing Order Instructions */}
        <div className="bg-[#efe9e1] border border-[#ded7ce] rounded-[4px] p-6 sm:p-8 space-y-4 mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase text-[#8b5a35] tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>How to Submit Made-To-Measure Orders</span>
          </div>

          <h3 className="text-xl font-serif font-medium text-[#1c1a17]">
            Personalization on Etsy and eBay
          </h3>

          <p className="text-xs sm:text-sm text-[#706a62] leading-relaxed font-sans">
            To order a custom fit, click through to the item&apos;s verified listing. On Etsy, paste your 5 measurements directly into the &ldquo;Add your personalization&rdquo; field before clicking Buy. On eBay, send your measurements via seller message right after checkout. Our pattern master reviews your numbers before cutting.
          </p>
        </div>

        {/* Outro */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#ded7ce]">
          <Link
            href="/care-guide"
            className="text-xs font-semibold text-[#8b5a35] hover:underline"
          >
            ← Proceed to Leather Care Guide
          </Link>
          <Button href="/shop" variant="primary" size="md">
            <span>Shop All 49 Pieces</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </Container>
    </div>
  )
}
