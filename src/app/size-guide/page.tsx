import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Scissors, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Size & Measuring Guide',
  description:
    'Complete size charts (XS to 5XL) and instructions for custom made-to-measure leather jacket ordering on Etsy & eBay.',
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
    { size: '4XL', chestIn: '50–52"', chestCm: '127–132 cm', shoulders: '22.2"', sleeve: '28.5"', length: '28.5"' },
    { size: '5XL', chestIn: '52–54"', chestCm: '132–137 cm', shoulders: '23.0"', sleeve: '29.0"', length: '29.0"' },
  ]

  const measurementSteps = [
    {
      step: '1. Chest Circumference',
      desc: 'Wrap a flexible measuring tape around the fullest part of your chest, keeping the tape level under your armpits and across your shoulder blades. Breathe normally.',
    },
    {
      step: '2. Shoulder Width',
      desc: 'Measure horizontally across the upper back from the tip of one shoulder bone across the spine to the tip of the other shoulder bone.',
    },
    {
      step: '3. Sleeve Length',
      desc: 'Place tape at the outer point of the shoulder bone and measure down along the arm to just below the wrist bone with your arm slightly bent.',
    },
    {
      step: '4. Back Length (Torso)',
      desc: 'Measure vertically from the base of the back of the neck (cervical vertebra) straight down to where you want the jacket hem to sit (usually mid-pant belt line).',
    },
    {
      step: '5. Stomach / Waist',
      desc: 'Measure around the widest point of your stomach/waist area while standing naturally.',
    },
  ]

  return (
    <div className="bg-night text-bone min-h-screen py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-spec text-muted">
          <Link href="/" className="hover:text-bone transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-muted/60" />
          <span className="text-brass">Size &amp; Measuring Guide</span>
        </nav>

        {/* Hero Header */}
        <div className="space-y-4 max-w-3xl">
          <h1 className="font-brand font-bold text-3xl sm:text-5xl text-white tracking-[0.015em] leading-tight">
            How To Get Your Perfect Fit
          </h1>
          <p className="font-body text-base sm:text-xl text-bone-warm leading-relaxed">
            All Kingsford jackets can be ordered in standard off-the-rack sizing (XS to 5XL) or tailored specifically to your custom measurements at no additional charge.
          </p>
        </div>

        {/* Standard Sizing Table */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-brand font-bold text-2xl text-white">
              Standard Size Chart (Inches &amp; Centimeters)
            </h2>
            <span className="text-xs font-spec text-brass uppercase">Jackets Sizing</span>
          </div>

          <div className="bg-charcoal border border-bone/15 rounded-2xl overflow-hidden shadow-xl overflow-x-auto">
            <table className="w-full text-left text-xs font-spec divide-y divide-bone/10 min-w-[600px]">
              <thead className="bg-smoke/60 text-brass uppercase tracking-wider font-bold">
                <tr>
                  <th className="py-3.5 px-4">Size</th>
                  <th className="py-3.5 px-4">Chest (Inches)</th>
                  <th className="py-3.5 px-4">Chest (CM)</th>
                  <th className="py-3.5 px-4">Shoulder Width</th>
                  <th className="py-3.5 px-4">Sleeve Length</th>
                  <th className="py-3.5 px-4">Back Length</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-bone/10 text-bone-warm">
                {sizeChart.map((row) => (
                  <tr key={row.size} className="hover:bg-smoke/30 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white text-sm">{row.size}</td>
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
        <div className="bg-charcoal border border-bone/10 rounded-2xl p-8 space-y-6">
          <div className="flex items-center gap-3">
            <Scissors className="w-7 h-7 text-brass shrink-0" />
            <div>
              <h2 className="font-brand font-bold text-2xl text-white">
                How To Measure Yourself at Home
              </h2>
              <p className="text-xs font-body text-muted">
                Use a soft cloth tape measure while wearing a light t-shirt.
              </p>
            </div>
          </div>

          <div className="space-y-4 pt-2">
            {measurementSteps.map((step) => (
              <div key={step.step} className="p-4 rounded-xl bg-smoke/40 border border-bone/10 space-y-1">
                <h4 className="font-display font-bold text-sm text-white">{step.step}</h4>
                <p className="font-body text-xs text-bone-warm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Made To Measure Submission Instructions */}
        <div className="bg-charcoal/80 border border-brass/30 rounded-3xl p-8 sm:p-10 space-y-4 shadow-2xl">
          <div className="flex items-center gap-2 text-xs font-spec uppercase text-brass tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>How to Submit Made-To-Measure Numbers</span>
          </div>

          <h3 className="font-brand font-bold text-2xl text-white">
            Ordering Custom Fit on Etsy or eBay
          </h3>

          <p className="font-body text-sm text-bone-warm leading-relaxed">
            1. Browse to your chosen jacket and click <strong>Order on Etsy</strong> or <strong>Order on eBay</strong>.<br />
            2. On Etsy, type your 5 measurements (Chest, Shoulders, Sleeve, Back Length, Waist) directly into the <em>Add your personalization</em> field.<br />
            3. On eBay, select Custom Size or message us your numbers immediately after checkout.<br />
            4. Our master cutter verifies your numbers before cutting the leather.
          </p>

          <div className="pt-2">
            <Link
              href="/shop"
              className="py-3.5 px-8 rounded-xl bg-saddle hover:bg-oxblood text-white font-display font-bold text-xs inline-block transition-colors shadow-md"
            >
              Browse Outerwear Collection
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
