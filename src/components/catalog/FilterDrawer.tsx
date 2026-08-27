import React from 'react'
import { Drawer } from '@/components/ui/Drawer'
import { FilterPanel } from './FilterPanel'
import { Button } from '@/components/ui/Button'

interface FilterDrawerProps {
  isOpen: boolean
  onClose: () => void
  totalResults: number
  selectedGender: string
  selectedCategory: string
  selectedMaterial: string
  selectedMarketplace: string
  onGenderChange: (val: string) => void
  onCategoryChange: (val: string) => void
  onMaterialChange: (val: string) => void
  onMarketplaceChange: (val: string) => void
  onClearAll: () => void
}

export function FilterDrawer({
  isOpen,
  onClose,
  totalResults,
  selectedGender,
  selectedCategory,
  selectedMaterial,
  selectedMarketplace,
  onGenderChange,
  onCategoryChange,
  onMaterialChange,
  onMarketplaceChange,
  onClearAll,
}: FilterDrawerProps) {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} title="Filter Catalogue" position="right">
      <div className="flex flex-col justify-between h-full space-y-6">
        <div className="flex-1">
          <FilterPanel
            selectedGender={selectedGender}
            selectedCategory={selectedCategory}
            selectedMaterial={selectedMaterial}
            selectedMarketplace={selectedMarketplace}
            onGenderChange={onGenderChange}
            onCategoryChange={onCategoryChange}
            onMaterialChange={onMaterialChange}
            onMarketplaceChange={onMarketplaceChange}
          />
        </div>

        <div className="pt-4 border-t border-[#ded7ce] space-y-2.5">
          <Button onClick={onClose} variant="primary" size="md" className="w-full">
            Show {totalResults} Pieces
          </Button>
          <Button onClick={onClearAll} variant="secondary" size="md" className="w-full">
            Clear All Filters
          </Button>
        </div>
      </div>
    </Drawer>
  )
}
