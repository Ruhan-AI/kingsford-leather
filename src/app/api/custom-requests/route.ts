import { NextRequest, NextResponse } from 'next/server'
import { CustomJacketRequestSchema, CustomRequestResponse } from '@/lib/custom-requests/schema'
import { checkRateLimit } from '@/lib/custom-requests/rate-limit'
import { generateRequestId } from '@/lib/custom-requests/request-id'
import { sendCustomRequestNotification } from '@/lib/custom-requests/mailer'

export async function POST(req: NextRequest): Promise<NextResponse<CustomRequestResponse>> {
  try {
    // 1. IP identification & rate limiting
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      req.headers.get('x-real-ip') ||
      'anonymous'

    const rateLimit = checkRateLimit(ip, 5, 10 * 60 * 1000)
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          message: 'Too many requests submitted. Please wait a few minutes before trying again.',
        },
        {
          status: 429,
          headers: {
            'Retry-After': Math.ceil(rateLimit.resetMs / 1000).toString(),
          },
        }
      )
    }

    // 2. Parse JSON body
    let rawBody: unknown
    try {
      rawBody = await req.json()
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid JSON payload in request.',
        },
        { status: 400 }
      )
    }

    // 3. Schema validation with Zod
    const parseResult = CustomJacketRequestSchema.safeParse(rawBody)
    if (!parseResult.success) {
      const fieldErrors: Record<string, string[]> = {}
      for (const issue of parseResult.error.issues) {
        const key = issue.path[0] ? String(issue.path[0]) : 'general'
        if (!fieldErrors[key]) fieldErrors[key] = []
        fieldErrors[key].push(issue.message)
      }

      return NextResponse.json(
        {
          success: false,
          message: 'Please review and correct the highlighted fields.',
          errors: fieldErrors,
        },
        { status: 400 }
      )
    }

    const validData = parseResult.data

    // 4. Honeypot check (spam bots fill hidden 'website' field)
    if (validData.website && validData.website.trim().length > 0) {
      // Silently accept to misdirect bot, but don't process
      return NextResponse.json({
        success: true,
        requestId: generateRequestId(),
        message: 'Request processed.',
      })
    }

    // 5. Generate non-guessable request ID
    const requestId = generateRequestId()

    // 6. Send notification email to workshop
    await sendCustomRequestNotification(requestId, validData)

    return NextResponse.json({
      success: true,
      requestId,
      message: 'Your custom jacket brief has been received. Our workshop team will review it and reply within 12–24 hours.',
    })
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected error occurred while processing your request. Please try again or contact us directly.',
      },
      { status: 500 }
    )
  }
}
