import { z } from 'zod'

export const CustomRequestTypeEnum = z.enum([
  'individual',
  'gift',
  'team-brand',
  'not-sure',
])
export type CustomRequestType = z.infer<typeof CustomRequestTypeEnum>

export const FitProfileEnum = z.enum(['men', 'women', 'unisex', 'not-sure'])
export type FitProfile = z.infer<typeof FitProfileEnum>

export const CustomJacketRequestSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, 'Full name must be at least 2 characters')
    .max(80, 'Full name must be 80 characters or fewer'),

  email: z
    .string()
    .trim()
    .email('Please enter a valid email address')
    .max(100, 'Email must be 100 characters or fewer')
    .toLowerCase(),

  phone: z
    .string()
    .trim()
    .max(30, 'Phone number must be 30 characters or fewer')
    .optional()
    .or(z.literal('')),

  country: z
    .string()
    .trim()
    .min(2, 'Please select or enter your country')
    .max(60, 'Country name is too long'),

  requestType: CustomRequestTypeEnum,

  quantityBand: z.string().min(1, 'Please select a quantity band'),

  garmentType: z.string().min(1, 'Please select a garment type'),

  fitProfile: FitProfileEnum,

  baseProductSlug: z.string().trim().max(100).optional().or(z.literal('')),

  customizationInterests: z.array(z.string()).default([]),

  budgetBand: z.string().optional().or(z.literal('')),

  targetDate: z.string().optional().or(z.literal('')),

  projectDetails: z
    .string()
    .trim()
    .min(20, 'Please describe your request in at least 20 characters')
    .max(2000, 'Project details must be 2,000 characters or fewer'),

  consent: z.literal(true, {
    message: 'You must agree to the privacy terms to submit an enquiry',
  }),

  // Honeypot field - must be empty
  website: z.string().max(0, 'Spam detection triggered').optional().or(z.literal('')),

  sourcePath: z.string().default('/custom-jackets'),
})

export type CustomJacketRequestInput = z.infer<typeof CustomJacketRequestSchema>

export interface CustomRequestResponse {
  success: boolean
  requestId?: string
  message: string
  errors?: Record<string, string[]>
}
