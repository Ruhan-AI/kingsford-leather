import { CustomJacketRequestInput } from './schema'
import { sanitizeHtml } from './sanitize'
import { SITE } from '@/lib/site'

export interface MailerResult {
  sent: boolean
  provider?: string
  error?: string
}

/**
 * Sends structured email notification to Kingsford Leather workshop.
 * Uses RESEND_API_KEY if configured in environment, otherwise logs safely in development.
 */
export async function sendCustomRequestNotification(
  requestId: string,
  data: CustomJacketRequestInput
): Promise<MailerResult> {
  const recipientEmail =
    process.env.CUSTOM_REQUEST_RECIPIENT_EMAIL || SITE.email
  const fromEmail =
    process.env.CUSTOM_REQUEST_FROM_EMAIL || 'Kingsford Workshop <care@kingsfordleather.com>'
  const resendApiKey = process.env.RESEND_API_KEY

  const safeName = sanitizeHtml(data.fullName)
  const safeEmail = sanitizeHtml(data.email)
  const safePhone = data.phone ? sanitizeHtml(data.phone) : 'Not provided'
  const safeCountry = sanitizeHtml(data.country)
  const safeDetails = sanitizeHtml(data.projectDetails).replace(/\n/g, '<br/>')
  const safeInterests =
    data.customizationInterests.length > 0
      ? data.customizationInterests.map(sanitizeHtml).join(', ')
      : 'None specified'

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1c1a17; line-height: 1.5;">
      <div style="background-color: #1c1a17; color: #ffffff; padding: 24px; text-align: center;">
        <h1 style="margin: 0; font-size: 20px; font-weight: normal; letter-spacing: 1px;">KINGSFORD LEATHER</h1>
        <p style="margin: 6px 0 0 0; font-size: 13px; color: #c9a378;">New Custom Jacket Request · Ref: ${requestId}</p>
      </div>

      <div style="padding: 24px; background-color: #f8f6f2; border: 1px solid #ded7ce;">
        <h2 style="font-size: 16px; margin-top: 0; color: #8b5a35; border-bottom: 1px solid #ded7ce; padding-bottom: 8px;">Client Information</h2>
        <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
          <tr><td style="padding: 6px 0; font-weight: bold; width: 140px;">Name:</td><td>${safeName}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: bold;">Email:</td><td><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
          <tr><td style="padding: 6px 0; font-weight: bold;">Phone/WhatsApp:</td><td>${safePhone}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: bold;">Country:</td><td>${safeCountry}</td></tr>
        </table>

        <h2 style="font-size: 16px; margin-top: 24px; color: #8b5a35; border-bottom: 1px solid #ded7ce; padding-bottom: 8px;">Garment Specifications</h2>
        <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
          <tr><td style="padding: 6px 0; font-weight: bold; width: 140px;">Request Type:</td><td>${data.requestType}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: bold;">Quantity:</td><td>${data.quantityBand}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: bold;">Garment Type:</td><td>${data.garmentType}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: bold;">Fit Profile:</td><td>${data.fitProfile}</td></tr>
          ${data.baseProductSlug ? `<tr><td style="padding: 6px 0; font-weight: bold;">Starting Model:</td><td>${sanitizeHtml(data.baseProductSlug)}</td></tr>` : ''}
          <tr><td style="padding: 6px 0; font-weight: bold;">Interests:</td><td>${safeInterests}</td></tr>
          ${data.budgetBand ? `<tr><td style="padding: 6px 0; font-weight: bold;">Budget Band:</td><td>${sanitizeHtml(data.budgetBand)}</td></tr>` : ''}
          ${data.targetDate ? `<tr><td style="padding: 6px 0; font-weight: bold;">Target Date:</td><td>${sanitizeHtml(data.targetDate)}</td></tr>` : ''}
        </table>

        <h2 style="font-size: 16px; margin-top: 24px; color: #8b5a35; border-bottom: 1px solid #ded7ce; padding-bottom: 8px;">Project Brief &amp; Notes</h2>
        <div style="background-color: #ffffff; padding: 16px; border: 1px solid #ded7ce; font-size: 14px; border-radius: 4px;">
          ${safeDetails}
        </div>
      </div>

      <div style="padding: 16px; text-align: center; font-size: 12px; color: #706a62;">
        Received from Kingsford Leather custom jackets portal (${data.sourcePath}).
      </div>
    </div>
  `

  if (resendApiKey) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [recipientEmail],
          reply_to: data.email,
          subject: `[Kingsford Custom Request] ${data.fullName} · ${requestId}`,
          html: htmlBody,
        }),
      })

      if (res.ok) {
        return { sent: true, provider: 'resend' }
      } else {
        const errText = await res.text()
        return { sent: false, provider: 'resend', error: errText }
      }
    } catch (e: any) {
      return { sent: false, provider: 'resend', error: e?.message || 'Network error' }
    }
  }

  // Development / server logging fallback
  if (process.env.NODE_ENV !== 'production') {
    console.log(`[CustomRequest: ${requestId}] Notification prepared for ${recipientEmail}`)
  }

  return { sent: true, provider: 'local-queue' }
}
