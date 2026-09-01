'use client'

import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { CustomHero } from './CustomHero'
import { CustomAnchorNav } from './CustomAnchorNav'
import { CustomRequestSection } from './CustomRequestSection'
import { StartingStyleGrid } from './StartingStyleGrid'
import { VerifiedTrustStrip } from './VerifiedTrustStrip'
import { CustomizationMatrix } from './CustomizationMatrix'
import { FitPathways } from './FitPathways'
import { CustomProcess } from './CustomProcess'
import { CustomFAQ } from './CustomFAQ'
import { MarketplaceClarity } from './MarketplaceClarity'
import { CustomClosingCTA } from './CustomClosingCTA'
import { MobileCustomCTA } from './MobileCustomCTA'
import { SilhouetteOption } from '@/content/custom-jackets'
import { FitProfile } from '@/lib/custom-requests/schema'
import { trackEvent } from '@/lib/analytics/events'

interface CustomJacketsViewProps {
  initialProductSlug?: string
}

export function CustomJacketsView({ initialProductSlug }: CustomJacketsViewProps) {
  const searchParams = useSearchParams()
  const queryProduct = searchParams?.get('product') || initialProductSlug

  const [prefillGarmentType, setPrefillGarmentType] = useState<string | undefined>(undefined)
  const [prefillFitProfile, setPrefillFitProfile] = useState<FitProfile | undefined>(undefined)
  const [prefillBaseProductSlug, setPrefillBaseProductSlug] = useState<string | undefined>(
    queryProduct || undefined
  )

  useEffect(() => {
    trackEvent('view_custom_jackets')
  }, [])

  useEffect(() => {
    if (queryProduct) {
      setPrefillBaseProductSlug(queryProduct)
    }
  }, [queryProduct])

  const handleSelectSilhouette = (silhouette: SilhouetteOption) => {
    setPrefillGarmentType(silhouette.id)
    if (silhouette.sampleProductSlug) {
      setPrefillBaseProductSlug(silhouette.sampleProductSlug)
    }
  }

  const handleSelectFit = (profile: FitProfile) => {
    setPrefillFitProfile(profile)
  }

  const handleStartRequest = () => {
    const formEl =
      document.getElementById('custom-request-heading') ||
      document.getElementById('custom-request-form')
    formEl?.scrollIntoView({ behavior: 'smooth' })
    formEl?.focus()
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Custom Hero */}
      <CustomHero onStartRequest={handleStartRequest} />

      {/* 2. Desktop Anchor Navigation */}
      <CustomAnchorNav />

      {/* 3. Custom Request Form (Placed high as single source-of-truth) */}
      <CustomRequestSection
        prefillGarmentType={prefillGarmentType}
        prefillFitProfile={prefillFitProfile}
        prefillBaseProductSlug={prefillBaseProductSlug}
      />

      {/* 4. Starting Silhouettes Grid */}
      <StartingStyleGrid onSelectSilhouette={handleSelectSilhouette} />

      {/* 5. Verified Trust Strip */}
      <VerifiedTrustStrip />

      {/* 6. What Can Be Customized Matrix */}
      <CustomizationMatrix />

      {/* 7. Fit Pathways */}
      <FitPathways onSelectFit={handleSelectFit} />

      {/* 8. Process Timeline */}
      <CustomProcess />

      {/* 9. Custom FAQ Accordion */}
      <CustomFAQ />

      {/* 10. Marketplace & Payment Clarity */}
      <MarketplaceClarity />

      {/* 11. Closing CTA */}
      <CustomClosingCTA onStartRequest={handleStartRequest} />

      {/* Mobile Sticky CTA */}
      <MobileCustomCTA />
    </div>
  )
}
