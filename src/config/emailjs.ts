/**
 * EmailJS Configuration for Kingsford Leather Custom Requests
 * 
 * Destination: order@kingsfordleather.ca
 * 
 * You can set these values either:
 * 1. In your `.env.local` file:
 *    NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxx
 *    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxx
 *    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxx_public_key
 * 
 * 2. Or directly paste them in this file as fallbacks below.
 */

export const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
  recipientEmail: 'order@kingsfordleather.ca',
}
