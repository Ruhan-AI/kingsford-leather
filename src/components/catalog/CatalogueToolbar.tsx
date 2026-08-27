import React from 'react'
import { Filter, Search } from 'lucide-react'

interface CatalogueToolbarProps {
  totalResults: number
  searchQuery: string
  onSearchChange: (q: string) => void
  sortBy: string
  onSortChange: (s: string) => void
  onOpenMobileFilters: () => void
  activeFiltersCount: number
}

export function CatalogueToolbar({
  totalResults,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  onOpenMobileFilters,
  activeFiltersCount,
}: CatalogueToolbarProps) {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-6 border-b border-[#ded7ce] mb-6">
      {/* Search Input */}
      <div className="relative flex-1 max-w-md">
        <Search className="w-4 h-4 text-[#706a62] absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Filter by title, cut, leather..."
          className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-white border border-[#ded7ce] rounded-[4px] placeholder:text-[#a7a39b] text-[#1c1a17] focus-ring"
        />
      </div>

      <div className="flex items-center justify-between sm:justify-end gap-3">
        {/* Mobile Filter Button */}
        <button
          type="button"
          onClick={onOpenMobileFilters}
          className="lg:hidden inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 bg-[#f8f6f2] hover:bg-[#efe9e1] text-[#1c1a17] border border-[#ded7ce] rounded-[4px] transition-colors focus-ring"
        >
          <Filter className="w-3.5 h-3.5" />
          <span>Filters</span>
          {activeFiltersCount > 0 && (
            <span className="w-4 h-4 rounded-full bg-[#8b5a35] text-white text-[10px] flex items-center justify-center">
              {activeFiltersCount}
            </span>
          )}
        </button>

        {/* Count */}
        <span className="text-xs text-[#706a62] hidden sm:inline">
          Showing <strong className="text-[#1c1a17]">{totalResults}</strong> pieces
        </span>

        {/* Sort Select */}
        <div className="flex items-center gap-2">
          <label htmlFor="sort-select" className="text-xs text-[#706a62] font-medium hidden md:inline">
            Sort:
          </label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="text-xs bg-white border border-[#ded7ce] rounded-[4px] px-2.5 py-2 text-[#1c1a17] focus-ring cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
          </select>
        </div>
      </div>
    </div>
  )
}
