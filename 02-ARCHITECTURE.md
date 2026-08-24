# 02 — Technical Architecture

**Project:** kingsfordleather.com
**Version:** 1.0 · **Date:** 2026-08-25
**Status:** Awaiting decision on §2 (commerce backend)

---

## 1. Stack summary

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 15+, App Router** | RSC = ship less JS on a media-heavy store; ISR for product pages; built-in metadata/sitemap/image APIs; first-class Vercel edge |
| Language | **TypeScript, strict** | Commerce data is nested and easy to get wrong |
| Styling | **Tailwind CSS v4** | Token-first via `@theme`; zero runtime CSS; the design system in `03-DESIGN.md` maps 1:1 to Tailwind tokens |
| Animation | **GSAP 3.13+** + ScrollTrigger, SplitText, Flip | Timeline control and scroll orchestration that CSS can't do; `useGSAP()` hook handles React cleanup |
| Smooth scroll | **Lenis** (optional, gated) | Only if the design calls for it; must respect `prefers-reduced-motion` |
| Commerce | **Shopify Storefront API (headless)** — recommended | See §2 |
| CMS | **Sanity** | Editorial, lookbooks, guides, homepage modules |
| Forms | React Hook Form + Zod | Measurement flow needs real validation |
| State | Zustand (cart UI) + React Query/SWR (server cache) | Cart drawer state is genuinely client state; everything else is server |
| Images | `next/image` + Shopify CDN / Cloudinary | AVIF/WebP, responsive srcset, blur placeholders |
| Email | Klaviyo | Abandoned cart, welcome, post-purchase review request |
| Reviews | Judge.me or Loox | Photo reviews; both integrate with Shopify cleanly |
| Analytics | GA4 + Microsoft Clarity + Vercel Analytics | Clarity's session replay is the cheapest way to debug a checkout drop-off |
| Hosting | Vercel | ISR, edge middleware, preview deploys |
| Errors | Sentry | |

> **GSAP licensing:** as of 2025 GSAP including the former Club plugins (SplitText, ScrollSmoother, MorphSVG) is free for commercial use. Verify current terms at gsap.com before shipping — do not assume.

---

## 2. Commerce backend — decision required

This is the one architectural fork that changes everything downstream. Recommendation and alternatives:

### Option A — Shopify (Storefront API, headless) ✅ **Recommended**

| Pros | Cons |
|---|---|
| PCI, fraud, tax, and duties handled for you | ~US$29–105/mo + ~2% headless transaction cost |
| Shop Pay, Apple Pay, Klarna, PayPal out of the box | Custom line-item logic (measurements) needs care |
| Multi-currency + markets for CA/US/GB/EU | Vendor lock-in on the data model |
| Both competitors run Shopify — the ops playbook, apps, and hiring pool are proven | Admin UI is Shopify's, not yours |
| Judge.me / Klaviyo / Loox all plug in without custom work | |

**Why this wins for Kingsford right now:** you have three people, no in-house engineering team, and a production business to run. Every hour spent building a payment gateway is an hour not spent cutting leather. Shopify handles the boring, dangerous parts; Next.js gives you the brand and the custom measurement flow that Shopify's themes can't express well.

**How measurements attach:** custom measurement data rides as **cart line item attributes** (`_measurements_profile_id`, `measurement_chest`, …). Underscore-prefixed attributes stay hidden from the customer-facing order but are visible in Shopify Admin for the workshop. Bespoke/quote requests use **Draft Orders** via the Admin API from a server action.

### Option B — Medusa v2 (self-hosted)
Full control, no transaction fee, own your data model. Costs: you now run a Postgres + Redis + Node backend, you integrate Stripe yourself, and you own PCI scope, tax rules, and every bug at 2am. **Choose only if you hire a dedicated backend engineer.**

### Option C — Sanity + Stripe (custom)
Cheapest and most flexible; also the most work. Realistically a 2× timeline. Not recommended for v1.

**→ Decision needed before Phase 0 ends. Log it in `05-MEMORY.md`.**

---

## 3. Rendering strategy

| Route | Strategy | Revalidate |
|---|---|---|
| `/` | ISR | 1h + on-demand webhook |
| `/[gender]/[category]` | ISR | 1h |
| `/products/[slug]` | ISR + `generateStaticParams` for top 50 | 15m + on-demand on product update |
| `/journal/*` | ISR | 1h + Sanity webhook |
| Trust/policy pages | Static | On deploy |
| `/cart`, `/account/*`, `/measurements/*` | Dynamic, client-auth | — |
| `/api/*`, server actions | Dynamic | — |

**Rule:** every page that a search engine or an AI crawler should read must render its content on the server. Nothing that matters may be client-fetch-only.

---

## 4. Folder structure

```
src/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx                    # home
│   │   ├── our-story/
│   │   ├── how-we-make-it/
│   │   ├── size-guide/
│   │   ├── leather-guide/
│   │   ├── care/
│   │   ├── shipping-and-duties/
│   │   ├── returns/
│   │   └── journal/[slug]/
│   ├── (shop)/
│   │   ├── [gender]/
│   │   │   ├── page.tsx                # /men, /women
│   │   │   └── [category]/page.tsx     # /men/biker-jackets
│   │   ├── products/[slug]/
│   │   │   ├── page.tsx
│   │   │   └── opengraph-image.tsx
│   │   ├── search/
│   │   └── cart/
│   ├── (custom)/
│   │   ├── made-to-measure/            # the differentiator: explainer + entry
│   │   ├── measurements/               # guided flow (client, multi-step)
│   │   └── bespoke-request/            # off-catalogue quote request
│   ├── (account)/
│   │   └── account/{orders,measurements,addresses}/
│   ├── api/
│   │   ├── revalidate/route.ts         # Shopify + Sanity webhooks
│   │   └── measurements/route.ts
│   ├── layout.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   └── not-found.tsx
│
├── components/
│   ├── ui/              # Button, Input, Select, Dialog, Drawer, Accordion — primitives only
│   ├── commerce/        # ProductCard, ProductGallery, VariantPicker, AddToCart, CartDrawer, PriceDisplay
│   ├── measurement/     # MeasurementStep, MeasurementDiagram, UnitToggle, MeasurementSummary
│   ├── layout/          # Header, Nav, MegaMenu, Footer, AnnouncementBar
│   ├── motion/          # GSAP wrappers — see §7
│   └── sections/        # Hero, CategoryGrid, TrustBar, ReviewWall, WorkshopStrip, EmailCapture
│
├── lib/
│   ├── shopify/         # client.ts, queries/, mutations/, types.ts, normalize.ts
│   ├── sanity/          # client.ts, queries.ts
│   ├── measurement/     # schema.ts (Zod), validation.ts, units.ts
│   ├── seo/             # metadata.ts, json-ld.ts
│   ├── analytics/
│   └── utils/
│
├── hooks/               # useCart, useMeasurements, useMediaQuery, useReducedMotion
├── styles/globals.css   # Tailwind v4 @theme tokens
└── types/
```

**Rules:** `components/ui` never imports from `components/commerce`. `lib/` never imports from `components/`. Server-only modules carry `import 'server-only'`.

---

## 5. Data model (domain layer)

Normalise Shopify's shape into your own types at the boundary in `lib/shopify/normalize.ts`. Never let raw Shopify GraphQL types leak into components — if you switch backends later, only that one file changes.

```ts
type Product = {
  id: string
  slug: string
  title: string                  // garment-descriptive, never IP-named (see RULES §7)
  description: string
  descriptionHtml: string
  gender: 'men' | 'women' | 'unisex'
  category: Category
  leather: LeatherSpec
  images: ProductImage[]
  variants: Variant[]
  priceRange: { min: Money; max: Money }
  madeToMeasure: boolean          // drives the measurement CTA on PDP
  leadTimeDays: number            // drives the "shipped by <date>" line
  specs: SpecRow[]                // material, lining, closure, collar, pockets, fit
  seo: { title: string; description: string }
}

type LeatherSpec = {
  type: 'lambskin' | 'cowhide' | 'sheepskin' | 'suede' | 'faux'
  finish?: 'distressed' | 'pull-up' | 'matte' | 'nappa'
  weightOz?: number
}

type MeasurementProfile = {
  id: string
  label: string                   // "Winter fit", "For Dad"
  unit: 'in' | 'cm'
  chest: number; waist: number; hips: number
  shoulderWidth: number; sleeveLength: number
  bicep: number; wrist: number; jacketLength: number
  neck: number; height: number; weight: number
  fitPreference: 'slim' | 'regular' | 'relaxed'
  referencePhotos?: string[]      // private, signed URLs, deleted post-fulfilment
  notes?: string
  updatedAt: string
}
```

**Measurement storage:** profiles live with the customer record (Shopify customer metafields for v1; a small Postgres/Convex store if it outgrows that). Reference photos go to private object storage with signed, expiring URLs — **never** a public CDN path.

---

## 6. Tailwind v4 setup

All tokens live in `styles/globals.css` under `@theme`. No `tailwind.config.js` colour block, no arbitrary hex values in components.

```css
@import "tailwindcss";

@theme {
  /* Palette — see 03-DESIGN.md §2 for rationale */
  --color-slate-dusk:   #1C2226;
  --color-dusk-raise:   #262E33;
  --color-bone:         #DCDCD6;
  --color-bone-warm:    #C9C7BF;
  --color-saddle:       #A6683A;
  --color-oxblood:      #5A1F22;
  --color-brass:        #C8A15A;

  /* Type */
  --font-display: "Archivo", ui-sans-serif, system-ui;
  --font-body:    "Newsreader", ui-serif, Georgia, serif;
  --font-spec:    "Martian Mono", ui-monospace, monospace;

  /* Scale */
  --text-hero:  clamp(3rem, 9vw, 8rem);
  --text-h1:    clamp(2.25rem, 5vw, 4rem);
  --text-h2:    clamp(1.75rem, 3.5vw, 2.75rem);
  --text-spec:  0.8125rem;

  /* Motion */
  --ease-leather: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast:   180ms;
  --dur-base:   420ms;
  --dur-slow:   900ms;
}
```

Breakpoints: default Tailwind (`sm 640 / md 768 / lg 1024 / xl 1280 / 2xl 1536`). **Design mobile-first** — 70%+ of traffic is phones; write the base styles for 375px and add `md:` upward.

---

## 7. GSAP architecture

### 7.1 Registration
One client module registers plugins once:

```ts
// components/motion/gsap-init.ts
'use client'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger, useGSAP)
export { gsap, ScrollTrigger, useGSAP }
```

### 7.2 The only allowed pattern

```tsx
'use client'
import { useRef } from 'react'
import { gsap, useGSAP } from '@/components/motion/gsap-init'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function RevealSection({ children }: { children: React.ReactNode }) {
  const scope = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  useGSAP(() => {
    if (reduced) return                     // no animation, final state already in CSS
    gsap.from('[data-reveal]', {
      y: 32, opacity: 0, duration: 0.9, stagger: 0.08,
      ease: 'power3.out',
      scrollTrigger: { trigger: scope.current, start: 'top 78%', once: true },
    })
  }, { scope, dependencies: [reduced] })    // useGSAP auto-reverts on unmount

  return <div ref={scope}>{children}</div>
}
```

**Hard rules:**
- Animation lives only in `'use client'` components. Keep them leaf-level so the rest of the tree stays RSC.
- Always `useGSAP` with a `scope` — it calls `gsap.context().revert()` on unmount. Manual `useEffect` + GSAP leaks ScrollTriggers on route change in the App Router.
- Animate `transform` and `opacity` only. Never `top/left/width/height` — they force layout.
- **Elements must be visible and readable with JS disabled.** Animate *from* a hidden state, don't set `opacity: 0` in CSS and hope the tween runs. If it fails, the customer sees a blank product page.
- `ScrollTrigger.refresh()` after images load and on route change.
- One `ScrollTrigger` per section maximum. On a PDP with 40 images, scroll triggers are the fastest way to destroy INP.
- Everything gated on `prefers-reduced-motion`.

### 7.3 Motion budget per page
Max 3 orchestrated moments. Anything more reads as a template. Motion spec is in `03-DESIGN.md` §5.

---

## 8. Performance budget

| Asset | Budget |
|---|---|
| JS on first load (home) | < 150 KB gzipped |
| JS on first load (PDP) | < 180 KB gzipped |
| GSAP + ScrollTrigger | ~48 KB gz — counted, worth it, don't add more plugins casually |
| Largest image (hero) | < 200 KB AVIF |
| Total page weight (PDP) | < 1.2 MB |
| Fonts | 3 families, variable, `font-display: swap`, subset latin, self-hosted via `next/font` |

Techniques: RSC by default · dynamic import for cart drawer, mega-menu, measurement flow · `next/image` with explicit `sizes` · `priority` only on the hero · preconnect to Shopify CDN · route-level code splitting.

---

## 9. SEO implementation

```ts
// app/products/[slug]/page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const product = await getProduct(params.slug)
  if (!product) return {}
  return {
    title: `${product.title} | Kingsford Leather`,
    description: product.seo.description,
    alternates: {
      canonical: `https://kingsfordleather.com/products/${product.slug}`,
      languages: {
        'en-CA': `/products/${product.slug}`,
        'en-US': `/us/products/${product.slug}`,
        'en-GB': `/uk/products/${product.slug}`,
      },
    },
    openGraph: { images: [product.images[0].url], type: 'website' },
  }
}
```

JSON-LD injected server-side per page type: `Product` + `Offer` + `AggregateRating` (PDP), `BreadcrumbList` (all shop routes), `Organization` (root layout), `FAQPage` (PDP + guides), `Article` (journal). Sitemaps generated in `app/sitemap.ts`, split by products / collections / content.

---

## 10. Security & privacy

- Server actions for all mutations; never expose Shopify Admin API tokens to the client (Storefront API token is public-safe, Admin API token is **not**)
- Zod-validate every input server-side, not just client-side
- Rate-limit the bespoke-request and measurement endpoints (Upstash) — file-upload forms are spam magnets
- CSP headers via `next.config.ts`; allowlist Shopify CDN, Sanity CDN, GSAP if externally loaded (prefer bundled)
- Measurement reference photos: private bucket, signed URLs with short TTL, auto-delete job after fulfilment + 30 days, documented in the privacy policy
- Cookie consent before any non-essential script (GA4, Klaviyo, Clarity) — required for EU/UK traffic, good practice for CA
- Secrets in Vercel env vars; nothing in the repo; `.env.example` committed with keys blank

---

## 11. Environments & CI

| Env | Branch | URL | Backend |
|---|---|---|---|
| Production | `main` | kingsfordleather.com | Shopify live |
| Staging | `develop` | staging.kingsfordleather.com | Shopify dev store |
| Preview | any PR | auto Vercel URL | Shopify dev store |

**CI (GitHub Actions) on every PR:** `tsc --noEmit` → ESLint → Prettier check → unit tests (Vitest) → build → Lighthouse CI on 3 key routes (home, collection, PDP) with the §8 budgets as hard failures → Playwright smoke (browse → PDP → add to cart → checkout redirect).

---

## 12. Third-party integration map

```
Next.js (Vercel)
├── Shopify Storefront API ── products, collections, cart, checkout
├── Shopify Admin API (server-only) ── draft orders, customer metafields
├── Sanity ── journal, lookbooks, homepage modules, guides
├── Klaviyo ── email capture, flows, abandoned cart
├── Judge.me / Loox ── reviews + photo UGC
├── Cloudinary (optional) ── image transforms beyond Shopify CDN
├── Upstash Redis ── rate limiting
├── Sentry ── errors
└── GA4 · Clarity · Vercel Analytics ── measurement
```

---

## 13. What could go wrong

| Risk | Mitigation |
|---|---|
| GSAP ScrollTriggers leak on App Router navigation → jank, memory growth | `useGSAP` with scope everywhere; `ScrollTrigger.killAll()` on route change in a top-level listener |
| Heavy imagery kills LCP | Strict `sizes`, AVIF, blur placeholder, `priority` on hero only, Lighthouse CI gate |
| Measurement flow abandonment | One field per screen on mobile, progress saved to localStorage, resumable, never blocks checkout |
| Shopify checkout breaks brand continuity | Customise checkout branding; on Plus, use Checkout Extensibility. Accept some seam — do not build your own payment flow |
| Custom line-item attributes lost between cart and fulfilment | Integration test that asserts attributes survive cart → checkout → order webhook |
| Vendor lock-in | The `lib/shopify/normalize.ts` boundary is the escape hatch — keep it clean |
