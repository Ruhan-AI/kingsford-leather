/**
 * In-memory sliding window rate limiter.
 * Protects the custom request API against automated spam floods.
 */

interface RateLimitRecord {
  timestamps: number[]
}

const cache = new Map<string, RateLimitRecord>()

// Clean up stale IP records every 10 minutes
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now()
    const windowMs = 60 * 60 * 1000 // 1 hour
    for (const [key, record] of cache.entries()) {
      record.timestamps = record.timestamps.filter((t) => now - t < windowMs)
      if (record.timestamps.length === 0) {
        cache.delete(key)
      }
    }
  }, 10 * 60 * 1000).unref?.()
}

/**
 * Checks if an IP or identifier has exceeded the maximum requests per window.
 * Default: 5 requests per 10 minutes per IP.
 */
export function checkRateLimit(
  identifier: string,
  limit = 5,
  windowMs = 10 * 60 * 1000
): { allowed: boolean; remaining: number; resetMs: number } {
  const now = Date.now()
  let record = cache.get(identifier)

  if (!record) {
    record = { timestamps: [] }
    cache.set(identifier, record)
  }

  // Remove timestamps outside the sliding window
  record.timestamps = record.timestamps.filter((t) => now - t < windowMs)

  if (record.timestamps.length >= limit) {
    const oldest = record.timestamps[0]
    const resetMs = oldest ? oldest + windowMs - now : windowMs
    return { allowed: false, remaining: 0, resetMs }
  }

  record.timestamps.push(now)
  return {
    allowed: true,
    remaining: limit - record.timestamps.length,
    resetMs: windowMs,
  }
}
