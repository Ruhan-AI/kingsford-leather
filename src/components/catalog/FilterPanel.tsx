import React from 'react'
import { CATEGORIES } from '@/lib/products'

interface FilterPanelProps {
  selectedGender: string
  selectedCategory: string
  selectedMaterial: string
  selectedMarketplace: string
  onGenderChange: (val: string) => void
  onCategoryChange: (val: string) => void
  onMaterialChange: (val: string) => void
  onMarketplaceChange: (val: string) => void
}

const MATERIALS = [
  { id: 'cowhide', label: 'Cowhide Leather' },
  { id: 'sheepskin', label: 'Sheepskin' },
  { id: 'suede', label: 'Genuine Suede' },
  { id: 'shearling', label: 'Shearling & Fur' },
]

export function FilterPanel({
  selectedGender,
  selectedCategory,
  selectedMaterial,
  selectedMarketplace,
  onGenderChange,
  onCategoryChange,
  onMaterialChange,
  onMarketplaceChange,
}: FilterPanelProps) {
  return (
    <aside className="w-64 shrink-0 space-y-8 pr-6 border-r border-[#ded7ce]">
      {/* Gender */}
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8b5a35] mb-3">
          Gender
        </h4>
        <div className="space-y-2 text-sm text-[#2c2925]">
          {['all', 'men', 'women'].map((g) => (
            <label
              key={g}
              className="flex items-center gap-2.5 cursor-pointer hover:text-[#8b5a35] transition-colors"
            >
              <input
                type="radio"
                name="gender"
                checked={selectedGender === (g === 'all' ? '' : g)}
                onChange={() => onGenderChange(g === 'all' ? '' : g)}
                className="accent-[#8b5a35] focus-ring"
              />
              <span className="capitalize">{g === 'all' ? 'All Genders' : g}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Silhouettes */}
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8b5a35] mb-3">
          Silhouette & Cut
        </h4>
        <div className="space-y-2 text-sm text-[#2c2925]">
          <label className="flex items-center gap-2.5 cursor-pointer hover:text-[#8b5a35] transition-colors">
            <input
              type="radio"
              name="category"
              checked={selectedCategory === ''}
              onChange={() => onCategoryChange('')}
              className="accent-[#8b5a35] focus-ring"
            />
            <span>All Silhouettes</span>
          </label>
          {CATEGORIES.map((cat) => (
            <label
              key={cat.slug}
              className="flex items-center gap-2.5 cursor-pointer hover:text-[#8b5a35] transition-colors"
            >
              <input
                type="radio"
                name="category"
                checked={selectedCategory === cat.slug}
                onChange={() => onCategoryChange(cat.slug)}
                className="accent-[#8b5a35] focus-ring"
              />
              <span>{cat.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8b5a35] mb-3">
          Material & Leather
        </h4>
        <div className="space-y-2 text-sm text-[#2c2925]">
          <label className="flex items-center gap-2.5 cursor-pointer hover:text-[#8b5a35] transition-colors">
            <input
              type="radio"
              name="material"
              checked={selectedMaterial === ''}
              onChange={() => onMaterialChange('')}
              className="accent-[#8b5a35] focus-ring"
            />
            <span>All Materials</span>
          </label>
          {MATERIALS.map((mat) => (
            <label
              key={mat.id}
              className="flex items-center gap-2.5 cursor-pointer hover:text-[#8b5a35] transition-colors"
            >
              <input
                type="radio"
                name="material"
                checked={selectedMaterial === mat.id}
                onChange={() => onMaterialChange(mat.id)}
                className="accent-[#8b5a35] focus-ring"
              />
              <span>{mat.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Marketplace */}
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8b5a35] mb-3">
          Marketplace
        </h4>
        <div className="space-y-2 text-sm text-[#2c2925]">
          {[
            { id: '', label: 'All Marketplaces' },
            { id: 'etsy', label: 'Available on Etsy' },
            { id: 'ebay', label: 'Available on eBay' },
          ].map((m) => (
            <label
              key={m.id}
              className="flex items-center gap-2.5 cursor-pointer hover:text-[#8b5a35] transition-colors"
            >
              <input
                type="radio"
                name="marketplace"
                checked={selectedMarketplace === m.id}
                onChange={() => onMarketplaceChange(m.id)}
                className="accent-[#8b5a35] focus-ring"
              />
              <span>{m.label}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  )
}
