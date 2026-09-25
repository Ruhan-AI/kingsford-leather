import React from 'react'
import { Button } from '@/components/ui/Button'

interface EmptyResultsProps {
  onClearFilters: () => void
}

export function EmptyResults({ onClearFilters }: EmptyResultsProps) {
  return (
    <div className="text-center py-16 sm:py-24 bg-[#f8f6f2] rounded-[4px] border border-[#ded7ce] p-8">
      <h3 className="text-2xl font-serif font-medium text-[#1c1a17] mb-2">
        No pieces match these filters.
      </h3>
      <p className="text-sm text-[#706a62] max-w-md mx-auto mb-6 font-sans">
        Try adjusting your search terms or clearing specific category and material filters to explore the full 52-piece catalogue.
      </p>
      <div className="flex items-center justify-center gap-3">
        <Button onClick={onClearFilters} variant="primary" size="md">
          <span>Clear Filters</span>
        </Button>
        <Button href="/shop" variant="secondary" size="md">
          <span>View All 52 Pieces</span>
        </Button>
      </div>
    </div>
  )
}
