import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Scissors, ShieldCheck } from 'lucide-react'

export function WorkshopStory() {
  return (
    <section className="py-20 bg-night text-bone border-t border-bone/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-charcoal border border-bone/15 rounded-3xl sm:rounded-[32px] p-8 sm:p-14 lg:p-16 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Workshop Story Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <h2 className="font-brand font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-[0.01em]">
                From The Workshop Bench Straight To You
              </h2>
              <p className="font-body text-base sm:text-lg text-bone-warm leading-relaxed">
                We are not a dropshipper and we do not source from anonymous mass factories. Every Kingsford jacket is patterned, cut, stitched, and hardware-fitted in our dedicated workshop facility in Sialkot—one of the world's most renowned centers for master leatherwork.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-display text-xs text-bone-warm">
              <div className="p-4 rounded-2xl bg-smoke/60 border border-bone/10 space-y-1">
                <Scissors className="w-4 h-4 text-brass" />
                <h4 className="font-bold text-white text-sm">Individually Cut Hides</h4>
                <p className="text-muted leading-relaxed font-body">
                  No cookie-cutter stamping. Each panel is aligned to hide grain direction.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-smoke/60 border border-bone/10 space-y-1">
                <ShieldCheck className="w-4 h-4 text-saddle" />
                <h4 className="font-bold text-white text-sm">Solid Antiqued Hardware</h4>
                <p className="text-muted leading-relaxed font-body">
                  Heavy YKK metal zippers and solid brass snaps that never seize up.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/craftsmanship"
                className="py-3.5 px-7 bg-smoke hover:bg-night text-white border border-brass/40 hover:border-brass rounded-xl font-display font-bold text-xs inline-flex items-center gap-2 transition-all group"
              >
                <span>Read Full Craftsmanship Process</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-brass" />
              </Link>
            </div>
          </div>

          {/* Right Column: Workshop Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden border border-bone/20 shadow-2xl bg-night">
              <Image
                src="/images/catalogue/a765b524b418.jpg"
                alt="Kingsford Leather Workshop"
                fill
                className="object-cover brightness-75"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-transparent to-transparent flex flex-col justify-end p-6">
                <div className="font-spec text-xs text-brass uppercase tracking-wider">
                  Authentic Bench Craft
                </div>
                <div className="font-brand font-bold text-lg text-white">
                  Hand-buffed patinas &amp; precision double-stitching
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
