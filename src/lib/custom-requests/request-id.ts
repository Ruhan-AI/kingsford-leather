import crypto from 'crypto'

/**
 * Generates an opaque, non-guessable custom request reference ID.
 * Format: KL-YYYYMMDD-XXXXXX (e.g. KL-20260901-7F3A9C)
 */
export function generateRequestId(): string {
  const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '')
  const randomHex = crypto.randomBytes(3).toString('hex').toUpperCase()
  return `KL-${dateStr}-${randomHex}`
}
