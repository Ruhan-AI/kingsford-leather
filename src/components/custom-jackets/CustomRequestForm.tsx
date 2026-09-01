'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  RefreshCw,
  Mail,
  HelpCircle,
} from 'lucide-react'
import {
  CustomJacketRequestSchema,
  CustomJacketRequestInput,
  CustomRequestType,
  FitProfile,
} from '@/lib/custom-requests/schema'
import { CUSTOM_JACKETS_CONTENT } from '@/content/custom-jackets'
import { PRODUCTS } from '@/lib/products'
import { SITE } from '@/lib/site'
import { trackEvent } from '@/lib/analytics/events'

const COUNTRIES = [
  'Canada',
  'United States',
  'United Kingdom',
  'Australia',
  'Germany',
  'France',
  'Italy',
  'Netherlands',
  'Sweden',
  'Norway',
  'Denmark',
  'Switzerland',
  'Ireland',
  'New Zealand',
  'Japan',
  'United Arab Emirates',
  'Saudi Arabia',
  'Singapore',
  'Other / Worldwide',
]

const CUSTOMIZATION_OPTIONS = [
  { id: 'measurements', label: 'Bespoke Measurements / Made-to-Measure' },
  { id: 'hide-type', label: 'Specific Hide (Cowhide, Sheepskin, Suede)' },
  { id: 'color-patina', label: 'Custom Color / Distressed Patina' },
  { id: 'lining', label: 'Custom Lining (Satin, Quilted, Shearling)' },
  { id: 'hardware', label: 'Hardware Finish (Brass, Gunmetal, Silver)' },
  { id: 'length-proportions', label: 'Body or Sleeve Length Adjustment' },
]

interface CustomRequestFormProps {
  prefillGarmentType?: string
  prefillFitProfile?: FitProfile
  prefillBaseProductSlug?: string
}

export function CustomRequestForm({
  prefillGarmentType,
  prefillFitProfile,
  prefillBaseProductSlug,
}: CustomRequestFormProps) {
  const { quantityBands, budgetBands, garmentTypes, requestTypes } =
    CUSTOM_JACKETS_CONTENT

  // Form fields state
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [country, setCountry] = useState('Canada')
  const [requestType, setRequestType] = useState<CustomRequestType>('individual')
  const [quantityBand, setQuantityBand] = useState('1')
  const [garmentType, setGarmentType] = useState('biker')
  const [fitProfile, setFitProfile] = useState<FitProfile>('men')
  const [baseProductSlug, setBaseProductSlug] = useState('')
  const [customizationInterests, setCustomizationInterests] = useState<string[]>([])
  const [budgetBand, setBudgetBand] = useState('200-350')
  const [targetDate, setTargetDate] = useState('')
  const [projectDetails, setProjectDetails] = useState('')
  const [consent, setConsent] = useState(false)
  const [website, setWebsite] = useState('') // Honeypot

  // Interaction states
  const [hasStarted, setHasStarted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [serverError, setServerError] = useState<string | null>(null)
  const [submittedRequestId, setSubmittedRequestId] = useState<string | null>(null)

  const errorSummaryRef = useRef<HTMLDivElement>(null)

  // Apply prefill props when triggered by style grid or fit pathways
  useEffect(() => {
    if (prefillGarmentType) {
      setGarmentType(prefillGarmentType)
    }
  }, [prefillGarmentType])

  useEffect(() => {
    if (prefillFitProfile) {
      setFitProfile(prefillFitProfile)
    }
  }, [prefillFitProfile])

  useEffect(() => {
    if (prefillBaseProductSlug) {
      setBaseProductSlug(prefillBaseProductSlug)
    }
  }, [prefillBaseProductSlug])

  const handleFocusField = () => {
    if (!hasStarted) {
      setHasStarted(true)
      trackEvent('custom_form_start')
    }
  }

  const handleInterestToggle = (id: string) => {
    setCustomizationInterests((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const validateClient = (): boolean => {
    const rawPayload: CustomJacketRequestInput = {
      fullName,
      email,
      phone: phone || undefined,
      country,
      requestType,
      quantityBand,
      garmentType,
      fitProfile,
      baseProductSlug: baseProductSlug || undefined,
      customizationInterests,
      budgetBand: budgetBand || undefined,
      targetDate: targetDate || undefined,
      projectDetails,
      consent: consent as true,
      website,
      sourcePath: '/custom-jackets',
    }

    const result = CustomJacketRequestSchema.safeParse(rawPayload)
    if (!result.success) {
      const errors: Record<string, string> = {}
      for (const issue of result.error.issues) {
        const fieldName = String(issue.path[0] || 'general')
        if (!errors[fieldName]) {
          errors[fieldName] = issue.message
        }
      }
      setFieldErrors(errors)
      trackEvent('custom_form_error', { errorType: 'validation' })
      setTimeout(() => {
        errorSummaryRef.current?.scrollIntoView({ behavior: 'smooth' })
        errorSummaryRef.current?.focus()
      }, 50)
      return false
    }

    setFieldErrors({})
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setServerError(null)

    if (!validateClient()) {
      return
    }

    setIsSubmitting(true)
    trackEvent('custom_form_submit', {
      garmentType,
      fitProfile,
      baseProductSlug: baseProductSlug || undefined,
    })

    const payload: CustomJacketRequestInput = {
      fullName,
      email,
      phone: phone || undefined,
      country,
      requestType,
      quantityBand,
      garmentType,
      fitProfile,
      baseProductSlug: baseProductSlug || undefined,
      customizationInterests,
      budgetBand: budgetBand || undefined,
      targetDate: targetDate || undefined,
      projectDetails,
      consent: true,
      website,
      sourcePath: '/custom-jackets',
    }

    try {
      const res = await fetch('/api/custom-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setSubmittedRequestId(data.requestId || 'KL-RECEIVED')
        trackEvent('custom_form_success', {
          garmentType,
          fitProfile,
        })
      } else {
        const errorMsg =
          data.message || 'We could not submit your brief. Please try again.'
        setServerError(errorMsg)
        trackEvent('custom_form_error', { errorType: 'provider' })
      }
    } catch {
      setServerError(
        'Network error or form server unavailable. Your entered details remain safe below.'
      )
      trackEvent('custom_form_error', { errorType: 'network' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReset = () => {
    setSubmittedRequestId(null)
    setServerError(null)
    setFieldErrors({})
    setProjectDetails('')
    setCustomizationInterests([])
  }

  // SUCCESS CONFIRMATION STATE
  if (submittedRequestId) {
    return (
      <div
        id="custom-request-form"
        className="bg-white rounded-[4px] border border-[#ded7ce] p-6 sm:p-10 shadow-xs space-y-6"
      >
        <div className="flex items-center gap-3 text-[#3f6548]">
          <CheckCircle2 className="w-8 h-8 shrink-0" />
          <div>
            <h3 className="font-serif font-medium text-2xl text-[#1c1a17]">
              Custom Brief Successfully Received
            </h3>
            <p className="text-xs text-[#706a62]">
              Reference Reference ID: <strong className="text-[#1c1a17] font-mono">{submittedRequestId}</strong>
            </p>
          </div>
        </div>

        <div className="bg-[#f8f6f2] border border-[#ded7ce] rounded-[4px] p-5 text-sm text-[#2c2925] space-y-3 font-sans">
          <p className="font-semibold text-[#1c1a17]">What happens next?</p>
          <ol className="list-decimal pl-5 space-y-2 text-xs text-[#706a62] leading-relaxed">
            <li>
              <strong className="text-[#1c1a17]">Pattern Feasibility Review:</strong> Our master cutter in Sialkot reviews your garment cut, hide choice, and measurement notes.
            </li>
            <li>
              <strong className="text-[#1c1a17]">Direct Email Consultation:</strong> Within 12–24 hours, you will receive a personal reply at <span className="font-semibold text-[#1c1a17]">{email}</span> with recommendations, quote pricing, and instructions to reply with reference photos if needed.
            </li>
            <li>
              <strong className="text-[#1c1a17]">Private Marketplace Listing:</strong> When you approve the specifications, we create a private Etsy or eBay listing for secure checkout with full buyer protection.
            </li>
          </ol>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
          <button
            type="button"
            onClick={handleReset}
            className="w-full sm:w-auto px-4 py-2.5 bg-[#f8f6f2] hover:bg-[#efe9e1] text-[#1c1a17] border border-[#ded7ce] text-xs font-semibold rounded-[4px] transition-colors focus-ring"
          >
            Submit Another Custom Request
          </button>

          <Link
            href="/shop"
            className="w-full sm:w-auto px-4 py-2.5 bg-[#8b5a35] hover:bg-[#5d3923] text-white text-xs font-semibold rounded-[4px] text-center transition-colors focus-ring"
          >
            Explore Ready Collection
          </Link>
        </div>
      </div>
    )
  }

  // ACTIVE FORM STATE
  return (
    <form
      id="custom-request-form"
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-[4px] border border-[#ded7ce] p-6 sm:p-8 shadow-xs space-y-6"
    >
      {/* ERROR SUMMARY */}
      {Object.keys(fieldErrors).length > 0 && (
        <div
          ref={errorSummaryRef}
          tabIndex={-1}
          role="alert"
          aria-label="Form validation errors"
          className="bg-[#9b3f38]/10 border border-[#9b3f38]/30 rounded-[4px] p-4 text-xs space-y-2 text-[#9b3f38] focus:outline-none focus:ring-2 focus:ring-[#9b3f38]"
        >
          <div className="flex items-center gap-2 font-semibold">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>Please correct the following errors before submitting:</span>
          </div>
          <ul className="list-disc pl-5 space-y-1">
            {Object.entries(fieldErrors).map(([key, msg]) => (
              <li key={key}>
                <a href={`#field-${key}`} className="underline hover:opacity-80">
                  {msg}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* RECOVERABLE SERVER ERROR */}
      {serverError && (
        <div
          role="alert"
          className="bg-[#9b3f38]/10 border border-[#9b3f38]/30 rounded-[4px] p-4 text-xs text-[#9b3f38] space-y-2"
        >
          <div className="flex items-center gap-2 font-semibold">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{serverError}</span>
          </div>
          <p className="text-[#706a62]">
            If our online submission is unavailable, you can send your notes directly to our workshop at{' '}
            <a
              href={`mailto:${SITE.email}?subject=Custom%20Jacket%20Brief%20-%20${encodeURIComponent(fullName || 'Client')}`}
              className="font-semibold text-[#8b5a35] underline"
            >
              {SITE.email}
            </a>
            .
          </p>
        </div>
      )}

      {/* HONEYPOT (Hidden from humans) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="field-website">Do not fill this field</label>
        <input
          type="text"
          id="field-website"
          name="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* FIELD GROUP 1: Contact Details */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-[#8b5a35] border-b border-[#ded7ce] pb-2">
          1. Your Contact Information
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="field-fullName"
              className="block text-xs font-semibold text-[#1c1a17] mb-1.5"
            >
              Full Name <span className="text-[#9b3f38]">*</span>
            </label>
            <input
              type="text"
              id="field-fullName"
              required
              value={fullName}
              onFocus={handleFocusField}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Liam Vance"
              aria-describedby={fieldErrors.fullName ? 'err-fullName' : undefined}
              className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-[4px] focus-ring ${
                fieldErrors.fullName ? 'border-[#9b3f38]' : 'border-[#ded7ce]'
              }`}
            />
            {fieldErrors.fullName && (
              <p id="err-fullName" className="text-xs text-[#9b3f38] mt-1">
                {fieldErrors.fullName}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="field-email"
              className="block text-xs font-semibold text-[#1c1a17] mb-1.5"
            >
              Email Address <span className="text-[#9b3f38]">*</span>
            </label>
            <input
              type="email"
              id="field-email"
              required
              value={email}
              onFocus={handleFocusField}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. liam@example.com"
              aria-describedby={fieldErrors.email ? 'err-email' : undefined}
              className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-[4px] focus-ring ${
                fieldErrors.email ? 'border-[#9b3f38]' : 'border-[#ded7ce]'
              }`}
            />
            {fieldErrors.email && (
              <p id="err-email" className="text-xs text-[#9b3f38] mt-1">
                {fieldErrors.email}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="field-phone"
              className="block text-xs font-semibold text-[#1c1a17] mb-1.5"
            >
              Phone / WhatsApp <span className="text-[#706a62] font-normal">(Optional)</span>
            </label>
            <input
              type="tel"
              id="field-phone"
              value={phone}
              onFocus={handleFocusField}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. +1 (555) 019-2834"
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#ded7ce] rounded-[4px] focus-ring"
            />
          </div>

          <div>
            <label
              htmlFor="field-country"
              className="block text-xs font-semibold text-[#1c1a17] mb-1.5"
            >
              Country <span className="text-[#9b3f38]">*</span>
            </label>
            <select
              id="field-country"
              required
              value={country}
              onFocus={handleFocusField}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#ded7ce] rounded-[4px] focus-ring"
            >
              {COUNTRIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* FIELD GROUP 2: Garment & Cut Selection */}
      <div className="space-y-4 pt-2">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-[#8b5a35] border-b border-[#ded7ce] pb-2">
          2. Design &amp; Fit Direction
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label
              htmlFor="field-requestType"
              className="block text-xs font-semibold text-[#1c1a17] mb-1.5"
            >
              Project Type <span className="text-[#9b3f38]">*</span>
            </label>
            <select
              id="field-requestType"
              value={requestType}
              onChange={(e) => setRequestType(e.target.value as CustomRequestType)}
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#ded7ce] rounded-[4px] focus-ring"
            >
              {requestTypes.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="field-garmentType"
              className="block text-xs font-semibold text-[#1c1a17] mb-1.5"
            >
              Garment Cut <span className="text-[#9b3f38]">*</span>
            </label>
            <select
              id="field-garmentType"
              value={garmentType}
              onChange={(e) => setGarmentType(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#ded7ce] rounded-[4px] focus-ring"
            >
              {garmentTypes.map((g) => (
                <option key={g.value} value={g.value}>
                  {g.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="field-fitProfile"
              className="block text-xs font-semibold text-[#1c1a17] mb-1.5"
            >
              Sizing Profile <span className="text-[#9b3f38]">*</span>
            </label>
            <select
              id="field-fitProfile"
              value={fitProfile}
              onChange={(e) => setFitProfile(e.target.value as FitProfile)}
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#ded7ce] rounded-[4px] focus-ring"
            >
              <option value="men">Men&apos;s Standard Proportions</option>
              <option value="women">Women&apos;s Contoured Proportions</option>
              <option value="unisex">Made-to-Measure (Custom Dimensions)</option>
              <option value="not-sure">Uncertain / Sizing Advice Needed</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="field-baseProductSlug"
              className="block text-xs font-semibold text-[#1c1a17] mb-1.5"
            >
              Reference Piece from Catalogue <span className="text-[#706a62] font-normal">(Optional)</span>
            </label>
            <select
              id="field-baseProductSlug"
              value={baseProductSlug}
              onChange={(e) => setBaseProductSlug(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#ded7ce] rounded-[4px] focus-ring"
            >
              <option value="">-- No specific catalogue reference --</option>
              {PRODUCTS.map((p) => (
                <option key={p.slug} value={p.slug}>
                  {p.title} ({p.category})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="field-quantityBand"
              className="block text-xs font-semibold text-[#1c1a17] mb-1.5"
            >
              Quantity Needed <span className="text-[#9b3f38]">*</span>
            </label>
            <select
              id="field-quantityBand"
              value={quantityBand}
              onChange={(e) => setQuantityBand(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#ded7ce] rounded-[4px] focus-ring"
            >
              {quantityBands.map((qb) => (
                <option key={qb.value} value={qb.value}>
                  {qb.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* FIELD GROUP 3: Customization Interests */}
      <div className="space-y-3 pt-2">
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#8b5a35] border-b border-[#ded7ce] pb-2">
          3. Customization Details Desired
        </label>
        <p className="text-xs text-[#706a62]">
          Select any elements you would like customized on this piece:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {CUSTOMIZATION_OPTIONS.map((opt) => (
            <label
              key={opt.id}
              className={`flex items-center gap-3 p-3 rounded-[4px] border text-xs cursor-pointer transition-colors ${
                customizationInterests.includes(opt.id)
                  ? 'bg-[#f8f6f2] border-[#8b5a35] text-[#1c1a17] font-medium'
                  : 'bg-white border-[#ded7ce] text-[#706a62] hover:bg-[#f8f6f2]'
              }`}
            >
              <input
                type="checkbox"
                checked={customizationInterests.includes(opt.id)}
                onChange={() => handleInterestToggle(opt.id)}
                className="w-4 h-4 accent-[#8b5a35] rounded-[2px]"
              />
              <span>{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* FIELD GROUP 4: Budget & Project Brief */}
      <div className="space-y-4 pt-2">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-[#8b5a35] border-b border-[#ded7ce] pb-2">
          4. Budget &amp; Design Notes
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="field-budgetBand"
              className="block text-xs font-semibold text-[#1c1a17] mb-1.5"
            >
              Budget Expectation <span className="text-[#706a62] font-normal">(Optional)</span>
            </label>
            <select
              id="field-budgetBand"
              value={budgetBand}
              onChange={(e) => setBudgetBand(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#ded7ce] rounded-[4px] focus-ring"
            >
              {budgetBands.map((b) => (
                <option key={b.value} value={b.value}>
                  {b.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="field-targetDate"
              className="block text-xs font-semibold text-[#1c1a17] mb-1.5"
            >
              Target Need-By Date <span className="text-[#706a62] font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              id="field-targetDate"
              value={targetDate}
              onChange={(e) => setTargetDate(e.target.value)}
              placeholder="e.g. Late October, or Wedding date"
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#ded7ce] rounded-[4px] focus-ring"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="field-projectDetails"
            className="block text-xs font-semibold text-[#1c1a17] mb-1.5"
          >
            Describe Your Vision, Changes, or Measurements <span className="text-[#9b3f38]">*</span>
          </label>
          <textarea
            id="field-projectDetails"
            required
            rows={4}
            value={projectDetails}
            onFocus={handleFocusField}
            onChange={(e) => setProjectDetails(e.target.value)}
            placeholder="Tell us what you have in mind — leather preference (cowhide, sheepskin, or suede), color changes, sleeve or length adjustments, hardware finish, or specific measurements."
            aria-describedby={fieldErrors.projectDetails ? 'err-details' : undefined}
            className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-[4px] focus-ring ${
              fieldErrors.projectDetails ? 'border-[#9b3f38]' : 'border-[#ded7ce]'
            }`}
          />
          <div className="flex items-center justify-between text-[11px] text-[#706a62] mt-1">
            <span>Minimum 20 characters</span>
            <span>{projectDetails.length} / 2,000 characters</span>
          </div>
          {fieldErrors.projectDetails && (
            <p id="err-details" className="text-xs text-[#9b3f38] mt-1">
              {fieldErrors.projectDetails}
            </p>
          )}
        </div>
      </div>

      {/* CONSENT CHECKBOX */}
      <div className="pt-2">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            required
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="w-4 h-4 mt-0.5 accent-[#8b5a35] rounded-[2px]"
          />
          <span className="text-xs text-[#706a62] leading-relaxed">
            I agree that Kingsford Leather workshop may process my details to respond to this custom request. We never sell or share client data. See our{' '}
            <Link href="/privacy" className="text-[#8b5a35] underline hover:text-[#5d3923]">
              Privacy Policy
            </Link>
            . <span className="text-[#9b3f38]">*</span>
          </span>
        </label>
        {fieldErrors.consent && (
          <p className="text-xs text-[#9b3f38] mt-1.5">{fieldErrors.consent}</p>
        )}
      </div>

      {/* SUBMIT BUTTON */}
      <div className="pt-3 border-t border-[#ded7ce]">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-6 bg-[#8b5a35] hover:bg-[#5d3923] active:bg-[#4a2d1b] text-white font-medium text-sm rounded-[4px] transition-colors flex items-center justify-center gap-2 shadow-xs disabled:opacity-60 disabled:cursor-not-allowed focus-ring"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending Custom Brief...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Custom Request Brief</span>
            </>
          )}
        </button>

        <p className="text-[11px] text-[#706a62] text-center mt-3">
          Direct workshop review · No payment required on submission · We reply within 12–24 hours
        </p>
      </div>
    </form>
  )
}
