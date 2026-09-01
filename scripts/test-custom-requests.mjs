import assert from 'node:assert'
import { CustomJacketRequestSchema } from '../src/lib/custom-requests/schema.ts'
import { generateRequestId } from '../src/lib/custom-requests/request-id.ts'
import { sanitizeHtml } from '../src/lib/custom-requests/sanitize.ts'
import { checkRateLimit } from '../src/lib/custom-requests/rate-limit.ts'
import { CUSTOM_JACKETS_CONTENT } from '../src/content/custom-jackets.ts'

console.log('--- Running Custom Requests Unit Tests ---')

// 1. Valid Request Test
const validPayload = {
  fullName: 'Alexander Wright',
  email: 'alex.wright@example.com',
  phone: '+1 416 555 0199',
  country: 'Canada',
  requestType: 'individual',
  quantityBand: '1',
  garmentType: 'cafe-racer',
  fitProfile: 'men',
  baseProductSlug: 'mens-black-cafe-racer-racing-stripes',
  customizationInterests: ['measurements', 'hide-type', 'hardware'],
  budgetBand: '200-350',
  targetDate: 'Late Autumn 2026',
  projectDetails: 'I would like this cafe racer crafted from distressed cowhide with antique brass hardware and 2 inches added to sleeve length.',
  consent: true,
  website: '',
  sourcePath: '/custom-jackets',
}

const validResult = CustomJacketRequestSchema.safeParse(validPayload)
assert.strictEqual(validResult.success, true, 'Valid payload should parse cleanly')
console.log('✓ Zod accepts valid request payload')

// 2. Missing Required Fields
const invalidPayloadMissingEmail = { ...validPayload, email: 'not-an-email' }
const invalidResult1 = CustomJacketRequestSchema.safeParse(invalidPayloadMissingEmail)
assert.strictEqual(invalidResult1.success, false, 'Invalid email should fail')
console.log('✓ Rejects invalid email format')

const invalidPayloadShortName = { ...validPayload, fullName: 'A' }
const invalidResult2 = CustomJacketRequestSchema.safeParse(invalidPayloadShortName)
assert.strictEqual(invalidResult2.success, false, 'Short name should fail')
console.log('✓ Rejects name under 2 characters')

const invalidPayloadNoConsent = { ...validPayload, consent: false }
const invalidResult3 = CustomJacketRequestSchema.safeParse(invalidPayloadNoConsent)
assert.strictEqual(invalidResult3.success, false, 'Unchecked consent should fail')
console.log('✓ Rejects unconsented submission')

const invalidPayloadShortDetails = { ...validPayload, projectDetails: 'too short' }
const invalidResult4 = CustomJacketRequestSchema.safeParse(invalidPayloadShortDetails)
assert.strictEqual(invalidResult4.success, false, 'Short details should fail')
console.log('✓ Rejects brief under 20 characters')

// 3. Honeypot Test
const botPayload = { ...validPayload, website: 'https://spam-bot.com' }
const botResult = CustomJacketRequestSchema.safeParse(botPayload)
assert.strictEqual(botResult.success, false, 'Honeypot violation should fail')
console.log('✓ Rejects populated honeypot website field')

// 4. Request ID Generator
const id1 = generateRequestId()
const id2 = generateRequestId()
assert.notStrictEqual(id1, id2, 'Generated request IDs must be distinct')
assert.match(id1, /^KL-\d{8}-[A-F0-9]{6}$/, 'Request ID must follow KL-YYYYMMDD-XXXXXX format')
console.log(`✓ Request ID format valid: ${id1}`)

// 5. HTML Sanitization
const unsafeInput = '<script>alert("hack")</script>&"quote"'
const safeOutput = sanitizeHtml(unsafeInput)
assert.strictEqual(safeOutput.includes('<script>'), false, 'Script tags must be escaped')
assert.strictEqual(safeOutput.includes('&lt;script&gt;'), true, 'Tags must become entities')
console.log('✓ HTML sanitization escapes unsafe characters')

// 6. Rate Limiter Test
const testIp = 'test-ip-123'
for (let i = 0; i < 5; i++) {
  const res = checkRateLimit(testIp, 5, 10000)
  assert.strictEqual(res.allowed, true, `Request ${i + 1} should be allowed`)
}
const blockedRes = checkRateLimit(testIp, 5, 10000)
assert.strictEqual(blockedRes.allowed, false, '6th request should be rate-limited')
console.log('✓ Rate limiter enforces 5 requests per window')

// 7. Capability Flags
assert.strictEqual(CUSTOM_JACKETS_CONTENT.capabilities.logoBranding, false, 'Unverified logo branding must be disabled')
assert.strictEqual(CUSTOM_JACKETS_CONTENT.capabilities.embroidery, false, 'Unverified embroidery must be disabled')
assert.strictEqual(CUSTOM_JACKETS_CONTENT.capabilities.singlePiece, true, 'Single piece custom must be enabled')
console.log('✓ Capability gates verified')

console.log('--- All Unit Tests Passed! ---')
