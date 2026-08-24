# 04 — Rules

**Scope:** binds every human and every AI agent working in this repo.
**Version:** 1.0 · **Date:** 2026-08-25

> Mirror this file to `CLAUDE.md` at the repo root so coding agents load it automatically.
> These are constraints, not preferences. If a rule blocks you, raise it — don't route around it.

---

## 0. Before you write code

1. Read `05-MEMORY.md` — current phase, decisions already made, open questions.
2. Check whether the thing you're about to build is in scope (`01-PRD.md` §5). If it isn't, stop and ask.
3. Search the codebase for an existing component before creating a new one. Duplicated `Button`s are how design systems die.
4. If a task is ambiguous, ask one specific question. Do not guess and build 400 lines.

---

## 1. Language & types

- TypeScript, `strict: true`. No `any`. `unknown` + a type guard when you truly don't know.
- No `@ts-ignore`. `@ts-expect-error` with a comment explaining why, only when unavoidable.
- Validate every external input with **Zod** at the boundary — API responses, form data, URL params, webhooks.
- Type inference over annotation for locals; explicit return types on exported functions.
- No default exports except Next.js pages/layouts (framework requirement).

## 2. React & Next.js

- **Server Components by default.** Add `'use client'` only when you need state, effects, event handlers, or browser APIs — and add it to the smallest possible leaf, never a layout.
- Data fetching happens in Server Components or server actions. No `useEffect` fetch waterfalls.
- Mutations use server actions with Zod validation server-side. Client-side validation is UX; server-side validation is security.
- `import 'server-only'` in any module touching secrets or the Admin API.
- Never expose the Shopify **Admin** API token to the client. The Storefront token is public-safe; the Admin token is not.
- Suspense boundaries with real skeletons around every async section. No layout shift.
- `error.tsx` and `loading.tsx` in every route segment that fetches.

## 3. Styling

- **Tailwind utilities only.** No CSS modules, no styled-components, no inline `style` (exception: GSAP-set values and dynamic CSS custom properties).
- **No arbitrary values for colour, font, or spacing.** `bg-slate-dusk`, not `bg-[#1C2226]`. If a token doesn't exist, add it to `@theme` in `globals.css` and update `03-DESIGN.md` — don't hardcode.
- Mobile-first. Base styles target 375px; layer `sm:`/`md:`/`lg:` upward. Never write desktop-first and patch down.
- Use `cn()` (clsx + tailwind-merge) for conditional classes. No string concatenation of class names.
- Class order: layout → box → typography → colour → state → responsive. Prettier's Tailwind plugin enforces it.

## 4. Animation (GSAP)

- All GSAP lives in `'use client'` components under `components/motion/` or a co-located client leaf.
- **Always** `useGSAP()` with a `scope` ref. Never a bare `useEffect` + `gsap.to()` — it leaks ScrollTriggers across App Router navigations.
- Animate `transform` and `opacity` only. Never `top`, `left`, `width`, `height`, `margin`.
- Every animation is gated on `useReducedMotion()`. When reduced, render the **final state**, not a broken one.
- **Content must be visible with JavaScript disabled.** If `opacity: 0` is set in CSS and the tween never runs, the customer sees an empty page. Animate *from* a state set by GSAP itself, or use `gsap.set()` inside the same `useGSAP` call.
- One `ScrollTrigger` per section. Use `ScrollTrigger.batch()` for lists.
- Call `ScrollTrigger.refresh()` after images load.
- Max 3 orchestrated moments per page (`03-DESIGN.md` §5). Adding a fourth requires a design review.
- No scroll-jacking, no custom cursors, no magnetic buttons, no parallax on more than one element per page.

## 5. Performance

- Budgets in `02-ARCHITECTURE.md` §8 are **CI gates**, not aspirations. A PR that breaks them fails.
- `next/image` for every image, with explicit `sizes`. `priority` on the hero only — never more than one per route.
- Dynamic-import anything below the fold and anything heavy: cart drawer, mega-menu, measurement flow, review widget.
- Fonts: `next/font`, self-hosted, variable, latin subset, `display: swap`. Three families total. Adding a fourth requires design approval.
- No client-side library that duplicates something the platform already does.
- Check the bundle before merging: `ANALYZE=true npm run build`.

## 6. Accessibility

- WCAG 2.2 AA is the floor, enforced by `eslint-plugin-jsx-a11y` + axe in Playwright.
- Semantic HTML first. A `<div onClick>` is a bug.
- Visible focus everywhere. `outline: none` without a replacement ring is an automatic PR rejection.
- Touch targets ≥ 44×44px.
- Every image has meaningful `alt` (empty `alt=""` only for genuinely decorative images).
- Form errors: `aria-live`, linked via `aria-describedby`, and never communicated by colour alone.
- Test the measurement flow and checkout with keyboard only before shipping either.

## 7. Content & product data ⚠️

**These rules exist because they carry real legal and financial risk. Read `01-PRD.md` §11 R1.**

- **Never name a product after a protected property or a real person.** No Michael Jackson, Jaafar Jackson, Mad Max, Fallout, Punisher, Captain America, Resident Evil, Terminator, Akira, or any band, film, game, studio, or celebrity — in the title, slug, URL, alt text, meta description, structured data, or on-page copy. Describe the garment: silhouette, colour, material, detail.
- No competitor product copy, images, or descriptions. Ever. Both competitors are indexed; duplication is both a legal and an SEO problem.
- No logos, characters, or trade dress in imagery.
- **Material claims must be true per SKU.** Say `lambskin` / `cowhide` / `sheepskin` / `suede` / `faux`. Never label a faux item "genuine leather". Where both are offered, they are explicit priced variants.
- **Never invent social proof.** No fabricated review counts, customer numbers, ratings, press mentions, or "as seen in" logos. If the real number is 10 reviews, the site says 10.
- Delivery estimates must reflect real production capacity. A missed promise costs more than a longer promise.
- All customer-facing copy follows the voice rules in `03-DESIGN.md` §10.

## 8. Privacy & security

- Measurement reference photos: private storage, signed short-TTL URLs, never a public CDN path, auto-deleted after fulfilment + 30 days. Documented in the privacy policy.
- Secrets in environment variables only. `.env.example` is committed with blank values; `.env*` is gitignored. If a secret ever lands in a commit, rotate it — don't just delete the line.
- Rate-limit every public form endpoint (bespoke request, measurement submit, newsletter).
- Cookie consent gate before GA4, Klaviyo, or Clarity load.
- Sanitise anything rendered as HTML from the CMS.
- Never log PII (measurements, addresses, emails) to console or Sentry.

## 9. Git & review

- Branches: `feat/…`, `fix/…`, `chore/…`, `docs/…`
- Conventional commits: `feat(pdp): add made-to-measure size fork`
- PRs stay under ~400 changed lines where possible. Big PRs get bad reviews.
- Every PR: what changed, why, screenshots for anything visual, and a note if it touches performance or accessibility.
- CI must be green. Do not merge red and "fix it after."
- Never commit directly to `main`.

## 10. Testing

- Unit (Vitest): all `lib/` logic — measurement validation, unit conversion, price formatting, normalisation.
- Integration: cart operations, and specifically **an assertion that custom line-item attributes survive cart → checkout → order webhook**. This is the one that will silently break and lose a customer's measurements.
- E2E (Playwright): browse → PDP → add to bag → checkout redirect; and the full measurement flow.
- Lighthouse CI on home, a collection, and a PDP.
- Manual before every release: iOS Safari, Android Chrome, keyboard-only, and reduced-motion.

## 11. What to do when you're stuck or unsure

- **Ambiguous requirement** → ask one specific question. Don't build both options.
- **Rule blocks the task** → say so and propose an alternative. Don't silently work around it.
- **Something in these docs is wrong or outdated** → fix the doc in the same PR.
- **A decision gets made in conversation** → write it into `05-MEMORY.md` Decision Log before ending the session. A decision that isn't written down didn't happen.

---

## Quick reference — forbidden

```
❌ any                              ❌ hardcoded hex in components
❌ @ts-ignore                       ❌ desktop-first CSS
❌ 'use client' on a layout         ❌ outline: none
❌ useEffect + gsap (no useGSAP)    ❌ <div onClick>
❌ animating width/height/top/left  ❌ celebrity or IP product names
❌ >1 priority image per route      ❌ invented review counts
❌ Admin API token client-side      ❌ competitor copy or images
❌ scroll-jacking / custom cursors   ❌ PII in logs
```
