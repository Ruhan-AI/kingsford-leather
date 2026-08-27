# 05 — Project Memory

**Living document. Append, don't rewrite.**
Last updated: 2026-08-27 · Current phase: **Phase 1 — Premium White Marketplace Redesign (PRD v3.0 In Progress)**

> Read this file first at the start of every session. Update it at the end of every session.
> A decision that isn't written here didn't happen.

---

## Current state

| | |
|---|---|
| Phase | Premium White Marketplace Storefront Redesign (PRD v3.0) |
| Branch | `feat/premium-white-marketplace-redesign` |
| Visual theme | **Premium White** (>=70% white surfaces, warm ivory `#f8f6f2` / `#efe9e1` separation, leather brown `#8b5a35` accents, dark `#1c1a17` confined to badges/buttons/footer) |
| Typography | `Cormorant Garamond` (display) + `Manrope` (body/interface) via `next/font/google` |
| Commerce model | **Marketplace-led (Etsy & eBay direct conversion)** — On-site cart, checkout, and accounts removed |
| Feature scope | Pure brand, discovery, craftsmanship, size guidance, care education & marketplace trust. All try-on/fitting-room/docket features removed. |
| Photography | 49 verified products with exact marketplace URLs preserved |
| Live shops | Etsy `KingsfordLeatherCA` · eBay `kingsfordleather` |

---

## Business facts (stable — treat as source of truth)

- **Brand:** Kingsford Leather · tagline *Handmade leather outerwear, made to order*
- **Customer-facing market:** Canada. **Production:** in-house facility, Pakistan.
- **Team:** Iqbal (owner, admin, Etsy account) · Sahil (founder; production, sourcing, QC, dispatch) · Shahzar (SEO, listings, ads, growth)
- **Channels:** Etsy `KingsfordLeatherCA` (36 listings, 3 sales, 5.0/2 reviews, ~2 months old) · eBay `kingsfordleather` (41 listings, 13 sold, 100% positive/8, member since Oct 2024)
- **Price band:** CA$140–450 list; currently discounted ~35% on Etsy
- **Payment & Security:** Fully handled by Etsy and eBay with buyer protection
- **Product range:** biker · cafe racer · bomber & aviator · trucker · suede · shearling/Toscana · trench & duster · peacoat · blazer · vests · statement
- **Real differentiator:** handmade made-to-order outerwear direct from maker with standard or custom sizing, purchased securely on Etsy and eBay.

---

## Decision log

| # | Date | Decision | Rationale | Status |
|---|---|---|---|---|
| D1 | 2026-08-25 | Next.js 15 App Router + TypeScript + Tailwind v4 + GSAP | RSC keeps media-heavy store fast, GSAP provides controlled editorial motion | ✅ Locked |
| D2 | 2026-08-25 | Marketplaces stay live as exclusive checkout channels | Etsy and eBay handle payment processing, taxes, buyer protection, and order management | ✅ Locked |
| D3 | 2026-08-25 | All IP/celebrity-named SKUs stay renamed | Prevents trademark liability on owned domain | ✅ Locked |
| D4 | 2026-08-27 | Premium White theme (PRD v3.0) | Pure white canvas with warm ivory accents and leather brown highlights for high-end luxury editorial look | ✅ Locked |
| D5 | 2026-08-27 | No on-site cart, checkout, or customer accounts | Simplifies operations, eliminates compliance and backend overhead | ✅ Locked |
| D6 | 2026-08-27 | Remove all fitting room / virtual try-on / docket features | Focus entirely on editorial discovery, craftsmanship, fit education, and qualified marketplace conversions | ✅ Locked |

---

## Session log

### 2026-08-27 — Antigravity — PRD 3.0 Transition & Execution
- Did: Switched to branch `feat/premium-white-marketplace-redesign`. Created `scripts/validate-products.mjs` confirming 49 products. Prepared PRD v3.0 design system tokens and structure.
- Decided: D4–D6 locked according to PRD v3.0.
