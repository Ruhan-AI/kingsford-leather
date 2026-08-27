import React from 'react'
import { X } from 'lucide-react'

export interface ActiveFilterItem {
  key: string
  label: string
  value: string
}

interface ActiveFiltersProps {
  filters: ActiveFilterItem[]
  onRemove: (key: string, value: string) => void
  onClearAll: () => void
}

export function ActiveFilters({
  filters,
  onRemove,
  onClearAll,
}: ActiveFiltersProps) {
  if (filters.length === 0) return null

  return (
    <div className="flex flex-wrap items-center gap-2 mb-6 pt-2">
      <span className="text-xs text-[#706a62] font-medium mr-1">
        Active Filters:
      </span>

      {filters.map((filter) => (
        <button
          key={`${filter.key}-${filter.value}`}
          type="button"
          onClick={() => onRemove(filter.key, filter.value)}
          className="inline-flex items-center gap-1.5 text-xs bg-[#f8f6f2] hover:bg-[#efe9e1] text-[#1c1a17] border border-[#ded7ce] px-2.5 py-1 rounded-full transition-colors focus-ring"
        >
          <span>{filter.label}</span>
          <X className="w-3.5 h-3.5 text-[#706a62] hover:text-[#1c1a17]" />
        </button>
      ))}

      <button
        type="button"
        onClick={onClearAll}
        className="text-xs font-semibold text-[#8b5a35] hover:text-[#5d3923] underline ml-2 focus-ring"
      >
        Clear all
      </button>
    </div>
  )
}
