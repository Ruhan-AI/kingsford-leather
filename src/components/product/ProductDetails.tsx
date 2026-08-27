'use client'

import React from 'react'
import { Accordion, AccordionItem } from '@/components/ui/Accordion'
import { Product } from '@/lib/products'

interface ProductDetailsProps {
  product: Product
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const items: AccordionItem[] = [
    {
      id: 'description',
      title: 'Garment Overview & Cut',
      defaultOpen: true,
      content: (
        <div className="space-y-3">
          <p>{product.description}</p>
          <div className="pt-2 flex flex-wrap gap-2">
            <span className="text-[11px] bg-[#f8f6f2] border border-[#ded7ce] px-2.5 py-1 rounded-[2px] font-medium text-[#1c1a17]">
              Silhouette: {product.category.replace('-', ' ')}
            </span>
            <span className="text-[11px] bg-[#f8f6f2] border border-[#ded7ce] px-2.5 py-1 rounded-[2px] font-medium text-[#1c1a17]">
              Gender: {product.gender}
            </span>
            <span className="text-[11px] bg-[#f8f6f2] border border-[#ded7ce] px-2.5 py-1 rounded-[2px] font-medium text-[#1c1a17]">
              SKU: {product.id}
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 'materials',
      title: 'Materials & Hardware',
      content: (
        <div className="space-y-2.5">
          <p>
            <strong>Primary Material:</strong> {product.material}
          </p>
          <p>
            <strong>Hardware:</strong> Heavy-duty antique brass / nickel YKK zippers and snap closures.
          </p>
          <p>
            <strong>Lining:</strong> Premium quilted polyester or satin interior lining for smooth layering and breathability.
          </p>
          <p>
            <strong>Stitching:</strong> High-tensile bonded nylon thread with reinforced stress points.
          </p>
        </div>
      ),
    },
    {
      id: 'sizing-fit',
      title: 'Sizing & Custom Measurements',
      content: (
        <div className="space-y-2.5">
          <p>
            <strong>Standard Sizing:</strong> XS, S, M, L, XL, 2XL, 3XL.
          </p>
          <p>
            <strong>Custom Made-to-Measure:</strong> Available at no additional markup. Submit chest, shoulder width, sleeve length, and back length in the Etsy personalization box or via eBay message.
          </p>
          <p className="text-xs text-[#706a62]">
            Our pattern master checks all submitted measurements for proportional balance before cutting leather hides.
          </p>
        </div>
      ),
    },
    {
      id: 'care',
      title: 'Leather Care & Maintenance',
      content: (
        <div className="space-y-2">
          <p>• Hang on a wide, contoured wooden hanger to maintain shoulder structure.</p>
          <p>• Avoid direct sunlight and high heat radiators to prevent hide drying.</p>
          <p>• Condition smooth leather twice annually with a natural leather balm.</p>
          <p>• For suede surfaces, use a soft brass or crepe suede brush.</p>
        </div>
      ),
    },
    {
      id: 'shipping',
      title: 'Marketplace Shipping & Returns',
      content: (
        <div className="space-y-2.5">
          <p>
            <strong>Dispatch:</strong> 3–5 business days for standard off-the-rack sizes; 10–14 days for custom made-to-measure tailoring.
          </p>
          <p>
            <strong>Carrier:</strong> Express tracked courier with live door-to-door tracking.
          </p>
          <p>
            <strong>Buyer Protection:</strong> 30-day return & exchange policy backed by Etsy Purchase Protection and eBay Money Back Guarantee.
          </p>
        </div>
      ),
    },
  ]

  return (
    <div className="mt-8 pt-6 border-t border-[#ded7ce]">
      <Accordion items={items} />
    </div>
  )
}
