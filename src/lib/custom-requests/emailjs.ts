import emailjs from '@emailjs/browser'
import { CustomJacketRequestInput } from './schema'
import { EMAILJS_CONFIG } from '@/config/emailjs'

export interface EmailJSSendResult {
  success: boolean
  error?: string
  needsConfiguration?: boolean
}

/**
 * Send custom jacket request directly to order@kingsfordleather.ca via EmailJS
 */
export async function sendCustomRequestViaEmailJS(
  data: CustomJacketRequestInput,
  requestId: string
): Promise<EmailJSSendResult> {
  const serviceId = EMAILJS_CONFIG.serviceId
  const templateId = EMAILJS_CONFIG.templateId
  const publicKey = EMAILJS_CONFIG.publicKey

  // Verify if EmailJS credentials are provided
  if (!serviceId || !templateId || !publicKey) {
    console.warn(
      '[EmailJS] Credentials not configured yet. Please supply serviceId, templateId, and publicKey in src/config/emailjs.ts or .env.local'
    )
    return {
      success: false,
      needsConfiguration: true,
      error: 'EmailJS credentials are not configured yet.',
    }
  }

  const templateParams: Record<string, unknown> = {
    to_email: EMAILJS_CONFIG.recipientEmail,
    request_id: requestId,
    from_name: data.fullName,
    from_email: data.email,
    phone: data.phone || 'Not provided',
    country: data.country,
    request_type: data.requestType,
    quantity_band: data.quantityBand,
    garment_type: data.garmentType,
    fit_profile: data.fitProfile,
    base_product: data.baseProductSlug || 'None selected (Standard silhouette)',
    budget_band: data.budgetBand,
    target_date: data.targetDate || 'Flexible',
    customization_interests: data.customizationInterests.join(', '),
    project_details: data.projectDetails,
    submission_date: new Date().toLocaleString('en-CA', {
      timeZone: 'America/Toronto',
      dateStyle: 'medium',
      timeStyle: 'short',
    }),
  }

  try {
    const response = await emailjs.send(serviceId, templateId, templateParams, {
      publicKey,
    })

    if (response.status === 200) {
      return { success: true }
    } else {
      return {
        success: false,
        error: `EmailJS service error (${response.status}): ${response.text}`,
      }
    }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('[EmailJS] Exception occurred while sending email:', message)
    return {
      success: false,
      error: message,
    }
  }
}
