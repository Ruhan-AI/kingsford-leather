'use client'

import React, { useState } from 'react'
import { Scissors, Check, Copy, Ruler, Sparkles, FileText, ArrowRight, ShieldCheck } from 'lucide-react'

export function TheDocket() {
  const [chest, setChest] = useState('42')
  const [shoulders, setShoulders] = useState('18.5')
  const [sleeve, setSleeve] = useState('26')
  const [backLength, setBackLength] = useState('26.5')
  const [waist, setWaist] = useState('36')
  const [bicep, setBicep] = useState('15')
  const [customerName, setCustomerName] = useState('')
  const [copied, setCopied] = useState(false)
  const [activeMeasurement, setActiveMeasurement] = useState<string | null>(null)

  const docketCode = `KL-DOC-${Math.abs((parseInt(chest || '0') * 97) + (parseInt(sleeve || '0') * 31)).toString(16).toUpperCase()}`

  const copyDocket = () => {
    const text = `--- KINGSFORD LEATHER CUSTOM DOCKET [${docketCode}] ---
Customer: ${customerName || 'Custom Request'}
1. Chest (Around fullest point): ${chest}"
2. Shoulder (Seam to seam): ${shoulders}"
3. Sleeve Length (Shoulder to wrist): ${sleeve}"
4. Back Center Length: ${backLength}"
5. Waist / Hem: ${waist}"
6. Bicep Circumference: ${bicep}"
Cut: Individual Bench Cut
Marketplace: Etsy / KingsfordLeatherCA
--------------------------------------------------------`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  return (
    <section id="docket" className="py-20 bg-[#101417] text-[#deded8] relative overflow-hidden border-t border-[#deded8]/10">
      {/* Docket background grid */}
      <div className="absolute inset-0 bg-grid-docket opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#b8733e]/10 border border-[#b8733e]/30 text-[#d4ac5e] text-xs font-spec uppercase tracking-widest">
            <Scissors className="w-3.5 h-3.5" />
            <span>The Signature Signature Element</span>
          </div>
          <h2 className="font-brand font-bold text-3xl sm:text-5xl text-[#deded8] tracking-[0.015em]">
            The Tailor's Docket.
          </h2>
          <p className="font-body text-base sm:text-lg text-[#8b9298] leading-relaxed">
            Standard off-the-rack sizing forces compromises on broad shoulders, longer arms, or athletic builds. Enter your body numbers below — our workshop cuts leather to your ticket.
          </p>
        </div>

        {/* Interactive Docket Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Measurement Inputs */}
          <div className="lg:col-span-6 bg-[#192025] border border-[#deded8]/15 rounded-xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-[#deded8]/10 pb-4">
              <div className="flex items-center gap-2 text-[#d4ac5e]">
                <Ruler className="w-5 h-5" />
                <h3 className="font-display font-bold text-lg text-white">Enter Your Measurements (Inches)</h3>
              </div>
              <span className="text-xs font-spec text-[#8b9298]">Precision Cut: ±0.25"</span>
            </div>

            <div className="space-y-4 font-display">
              {/* Optional Name */}
              <div>
                <label className="block text-xs font-spec uppercase tracking-wider text-[#c5c3b9] mb-1">
                  Customer Name / Alias (Optional)
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="e.g. David R. (Calgary)"
                  className="w-full px-3.5 py-2.5 bg-[#14191c] border border-[#deded8]/15 rounded text-sm text-[#deded8] placeholder-[#8b9298]/50 focus:outline-none focus:border-[#d4ac5e]"
                />
              </div>

              {/* Sliders / Inputs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Chest */}
                <div
                  onMouseEnter={() => setActiveMeasurement('chest')}
                  onMouseLeave={() => setActiveMeasurement(null)}
                  className={`p-3 rounded-lg border transition-all ${
                    activeMeasurement === 'chest' ? 'border-[#d4ac5e] bg-[#1f262b]' : 'border-[#deded8]/10 bg-[#14191c]'
                  }`}
                >
                  <div className="flex justify-between items-center text-xs font-spec mb-1.5">
                    <span className="text-[#c5c3b9]">1. CHEST (Circumference)</span>
                    <span className="text-[#d4ac5e] font-bold">{chest}"</span>
                  </div>
                  <input
                    type="range"
                    min="34"
                    max="58"
                    step="0.5"
                    value={chest}
                    onChange={(e) => setChest(e.target.value)}
                    className="w-full accent-[#b8733e] cursor-pointer"
                  />
                  <span className="text-[10px] text-[#8b9298] block mt-0.5">Tape under armpits around fullest chest</span>
                </div>

                {/* Shoulders */}
                <div
                  onMouseEnter={() => setActiveMeasurement('shoulders')}
                  onMouseLeave={() => setActiveMeasurement(null)}
                  className={`p-3 rounded-lg border transition-all ${
                    activeMeasurement === 'shoulders' ? 'border-[#d4ac5e] bg-[#1f262b]' : 'border-[#deded8]/10 bg-[#14191c]'
                  }`}
                >
                  <div className="flex justify-between items-center text-xs font-spec mb-1.5">
                    <span className="text-[#c5c3b9]">2. SHOULDERS (Across Back)</span>
                    <span className="text-[#d4ac5e] font-bold">{shoulders}"</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="24"
                    step="0.5"
                    value={shoulders}
                    onChange={(e) => setShoulders(e.target.value)}
                    className="w-full accent-[#b8733e] cursor-pointer"
                  />
                  <span className="text-[10px] text-[#8b9298] block mt-0.5">Shoulder bone tip to shoulder bone tip</span>
                </div>

                {/* Sleeve */}
                <div
                  onMouseEnter={() => setActiveMeasurement('sleeve')}
                  onMouseLeave={() => setActiveMeasurement(null)}
                  className={`p-3 rounded-lg border transition-all ${
                    activeMeasurement === 'sleeve' ? 'border-[#d4ac5e] bg-[#1f262b]' : 'border-[#deded8]/10 bg-[#14191c]'
                  }`}
                >
                  <div className="flex justify-between items-center text-xs font-spec mb-1.5">
                    <span className="text-[#c5c3b9]">3. SLEEVE (Shoulder to Wrist)</span>
                    <span className="text-[#d4ac5e] font-bold">{sleeve}"</span>
                  </div>
                  <input
                    type="range"
                    min="22"
                    max="31"
                    step="0.5"
                    value={sleeve}
                    onChange={(e) => setSleeve(e.target.value)}
                    className="w-full accent-[#b8733e] cursor-pointer"
                  />
                  <span className="text-[10px] text-[#8b9298] block mt-0.5">Top shoulder seam down to wrist bone</span>
                </div>

                {/* Back Length */}
                <div
                  onMouseEnter={() => setActiveMeasurement('backLength')}
                  onMouseLeave={() => setActiveMeasurement(null)}
                  className={`p-3 rounded-lg border transition-all ${
                    activeMeasurement === 'backLength' ? 'border-[#d4ac5e] bg-[#1f262b]' : 'border-[#deded8]/10 bg-[#14191c]'
                  }`}
                >
                  <div className="flex justify-between items-center text-xs font-spec mb-1.5">
                    <span className="text-[#c5c3b9]">4. BACK LENGTH</span>
                    <span className="text-[#d4ac5e] font-bold">{backLength}"</span>
                  </div>
                  <input
                    type="range"
                    min="23"
                    max="34"
                    step="0.5"
                    value={backLength}
                    onChange={(e) => setBackLength(e.target.value)}
                    className="w-full accent-[#b8733e] cursor-pointer"
                  />
                  <span className="text-[10px] text-[#8b9298] block mt-0.5">Base of collar seam to bottom jacket hem</span>
                </div>

                {/* Waist */}
                <div
                  onMouseEnter={() => setActiveMeasurement('waist')}
                  onMouseLeave={() => setActiveMeasurement(null)}
                  className={`p-3 rounded-lg border transition-all ${
                    activeMeasurement === 'waist' ? 'border-[#d4ac5e] bg-[#1f262b]' : 'border-[#deded8]/10 bg-[#14191c]'
                  }`}
                >
                  <div className="flex justify-between items-center text-xs font-spec mb-1.5">
                    <span className="text-[#c5c3b9]">5. WAIST / HEM</span>
                    <span className="text-[#d4ac5e] font-bold">{waist}"</span>
                  </div>
                  <input
                    type="range"
                    min="28"
                    max="56"
                    step="0.5"
                    value={waist}
                    onChange={(e) => setWaist(e.target.value)}
                    className="w-full accent-[#b8733e] cursor-pointer"
                  />
                  <span className="text-[10px] text-[#8b9298] block mt-0.5">Around belly button or bottom beltline</span>
                </div>

                {/* Bicep */}
                <div
                  onMouseEnter={() => setActiveMeasurement('bicep')}
                  onMouseLeave={() => setActiveMeasurement(null)}
                  className={`p-3 rounded-lg border transition-all ${
                    activeMeasurement === 'bicep' ? 'border-[#d4ac5e] bg-[#1f262b]' : 'border-[#deded8]/10 bg-[#14191c]'
                  }`}
                >
                  <div className="flex justify-between items-center text-xs font-spec mb-1.5">
                    <span className="text-[#c5c3b9]">6. BICEP (Upper Arm)</span>
                    <span className="text-[#d4ac5e] font-bold">{bicep}"</span>
                  </div>
                  <input
                    type="range"
                    min="11"
                    max="22"
                    step="0.5"
                    value={bicep}
                    onChange={(e) => setBicep(e.target.value)}
                    className="w-full accent-[#b8733e] cursor-pointer"
                  />
                  <span className="text-[10px] text-[#8b9298] block mt-0.5">Flexed arm around the fullest upper bicep</span>
                </div>

              </div>
            </div>

            {/* Instruction Tip */}
            <div className="p-3.5 rounded bg-[#14191c] border border-[#d4ac5e]/20 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#d4ac5e] shrink-0 mt-0.5" />
              <p className="font-body text-xs text-[#c5c3b9] leading-relaxed">
                <strong className="text-white">How it works:</strong> Click "Copy Docket Specs" below and paste it into the "Order Note / Personalization" box during Etsy checkout. Our master tailor will review and confirm your measurements before cutting.
              </p>
            </div>
          </div>

          {/* Right: The Live Tailor's Docket Ticket */}
          <div className="lg:col-span-6 bg-[#14191c] border-2 border-[#d4ac5e]/40 rounded-xl p-6 sm:p-8 shadow-2xl relative">
            {/* Stamped Brass Header */}
            <div className="border-b-2 border-dashed border-[#deded8]/20 pb-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-spec font-black text-sm tracking-widest text-[#d4ac5e] uppercase">
                    KINGSFORD LEATHER BENCH DOCKET
                  </span>
                  <div className="font-spec text-[11px] text-[#8b9298]">
                    Job ID: <span className="text-white font-bold">{docketCode}</span> • Made-To-Measure Spec
                  </div>
                </div>
                <div className="px-2.5 py-1 bg-[#5e1c20] text-white text-[10px] font-spec font-bold uppercase tracking-widest rounded">
                  WORKSHOP ORDER
                </div>
              </div>
            </div>

            {/* Technical Flat Diagram Callout Visualization */}
            <div className="relative bg-[#192025] rounded-lg p-6 border border-[#deded8]/10 mb-6 flex flex-col items-center">
              <div className="text-[11px] font-spec text-[#8b9298] uppercase tracking-wider mb-2">
                Technical Silhouette & Live Callouts
              </div>

              {/* Interactive SVG Jacket Flat */}
              <div className="w-full max-w-[320px] aspect-[4/3] relative flex items-center justify-center">
                <svg viewBox="0 0 200 160" className="w-full h-full stroke-[#deded8] fill-none stroke-[1.5]">
                  {/* Jacket Body Outline */}
                  <path
                    d="M 65 30 L 40 45 L 20 110 L 45 115 L 55 75 L 55 140 L 145 140 L 145 75 L 155 115 L 180 110 L 160 45 L 135 30 L 115 42 L 85 42 Z"
                    className="stroke-[#c5c3b9]"
                  />
                  {/* Collar Lapels */}
                  <path d="M 85 42 L 100 70 L 115 42" className="stroke-[#d4ac5e]" />
                  <path d="M 100 70 L 100 140" strokeDasharray="3,3" className="stroke-[#8b9298]" />

                  {/* Shoulders Indicator */}
                  <line
                    x1="40"
                    y1="42"
                    x2="160"
                    y2="42"
                    className={`transition-all ${
                      activeMeasurement === 'shoulders' ? 'stroke-[#d4ac5e] stroke-[2.5]' : 'stroke-[#b8733e] stroke-[1.5]'
                    }`}
                  />

                  {/* Chest Indicator */}
                  <line
                    x1="55"
                    y1="85"
                    x2="145"
                    y2="85"
                    className={`transition-all ${
                      activeMeasurement === 'chest' ? 'stroke-[#d4ac5e] stroke-[2.5]' : 'stroke-[#b8733e] stroke-[1.5]'
                    }`}
                  />

                  {/* Sleeve Indicator */}
                  <line
                    x1="38"
                    y1="45"
                    x2="20"
                    y2="110"
                    className={`transition-all ${
                      activeMeasurement === 'sleeve' ? 'stroke-[#d4ac5e] stroke-[2.5]' : 'stroke-[#b8733e] stroke-[1.5]'
                    }`}
                  />

                  {/* Back Length Indicator */}
                  <line
                    x1="105"
                    y1="42"
                    x2="105"
                    y2="140"
                    className={`transition-all ${
                      activeMeasurement === 'backLength' ? 'stroke-[#d4ac5e] stroke-[2.5]' : 'stroke-[#b8733e] stroke-[1.5]'
                    }`}
                  />

                  {/* Waist Indicator */}
                  <line
                    x1="55"
                    y1="138"
                    x2="145"
                    y2="138"
                    className={`transition-all ${
                      activeMeasurement === 'waist' ? 'stroke-[#d4ac5e] stroke-[2.5]' : 'stroke-[#b8733e] stroke-[1.5]'
                    }`}
                  />
                </svg>
              </div>

              {/* Active Callout Tag */}
              <div className="font-spec text-xs text-[#d4ac5e] mt-2">
                {activeMeasurement ? `Highlighting: ${activeMeasurement.toUpperCase()}` : 'Hover inputs on left to inspect points'}
              </div>
            </div>

            {/* Spec Table */}
            <div className="font-spec text-xs space-y-2 border-t border-b border-[#deded8]/10 py-4 mb-6">
              <div className="flex justify-between">
                <span className="text-[#8b9298]">CLIENT / PATTERN REF:</span>
                <span className="text-white font-medium">{customerName || 'Custom Measurement Order'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8b9298]">CHEST MEASUREMENT:</span>
                <span className="text-[#d4ac5e] font-bold">{chest} INCHES</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8b9298]">SHOULDER WIDTH:</span>
                <span className="text-[#d4ac5e] font-bold">{shoulders} INCHES</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8b9298]">SLEEVE LENGTH:</span>
                <span className="text-[#d4ac5e] font-bold">{sleeve} INCHES</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8b9298]">BACK CENTER LENGTH:</span>
                <span className="text-[#d4ac5e] font-bold">{backLength} INCHES</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8b9298]">WAIST / HEM CIRCUMFERENCE:</span>
                <span className="text-[#d4ac5e] font-bold">{waist} INCHES</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8b9298]">BICEP CIRCUMFERENCE:</span>
                <span className="text-[#d4ac5e] font-bold">{bicep} INCHES</span>
              </div>
              <div className="flex justify-between pt-1 text-[11px] text-[#8b9298]">
                <span>LEATHER GRADE:</span>
                <span>100% Full-Grain / Top Genuine Hide</span>
              </div>
            </div>

            {/* Copy Button & Actions */}
            <div className="space-y-3">
              <button
                onClick={copyDocket}
                className={`w-full py-3.5 px-4 rounded font-display font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                  copied
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#d4ac5e] hover:bg-[#b8733e] text-[#14191c] hover:text-white'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Docket Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Docket Specs for Order</span>
                  </>
                )}
              </button>

              <a
                href="#collection"
                className="w-full py-2.5 px-4 bg-[#1f262b] hover:bg-[#2b353b] text-[#deded8] text-xs font-spec rounded flex items-center justify-center gap-2 transition-colors"
              >
                <span>Select a Jacket from Collection to Pair</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#d4ac5e]" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
