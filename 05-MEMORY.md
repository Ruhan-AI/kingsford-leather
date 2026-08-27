# 05 — Project Memory

**Living document. Append, don't rewrite.**
Last updated: 2026-08-26 · Current phase: **Phase 1 — Marketplace Redesign & AI Virtual Try-On (In Progress)**

> Read this file first at the start of every session. Update it at the end of every session.
> A decision that isn't written here didn't happen.

---

## Current state

| | |
|---|---|
| Phase | 1 — Redesign & AI Virtual Fitting Room |
| Branch | `feat/marketplace-redesign-ai-try-on` |
| Commerce model | **Marketplace-led (Etsy & eBay direct conversion)** — On-site cart, checkout, and accounts removed |
| Signature feature | **AI Virtual Fitting Room** (replaces The Docket) |
| Design tokens | Specified in `03-DESIGN.md` & `globals.css` (night, charcoal, smoke, parchment, bone, muted, saddle, oxblood, brass) |
| Photography | 49 consolidated products with verified marketplace URLs |
| Live shops | Etsy `KingsfordLeatherCA` · eBay `kingsfordleather` |

**Next actions:**
1. Install GSAP motion packages and configure Tailwind semantic tokens
2. Implement global shell (floating header, mobile menu, search palette, footer, fitting room trigger)
3. Rebuild home, catalog, collections, and PDPs
4. Implement provider-agnostic AI Virtual Fitting Room (Google VTO adapter + Mock)
5. Create editorial and policy routes (/our-story, /craftsmanship, /leather-guide, /size-guide, /shipping-returns, /contact, /privacy, /terms)

---

## Business facts (stable — treat as source of truth)

- **Brand:** Kingsford Leather · tagline *Handcrafted for Wild Roads & Cold Nights*
- **Customer-facing market:** Canada. **Production:** in-house facility, Pakistan.
- **Team:** Iqbal (owner, admin, Etsy account) · Sahil (founder; production, sourcing, QC, dispatch) · Shahzar (SEO, listings, ads, growth)
- **Channels:** Etsy `KingsfordLeatherCA` (36 listings, 3 sales, 5.0/2 reviews, ~2 months old) · eBay `kingsfordleather` (40+ listings, 13 sold, 100% positive/8, member since Oct 2024)
- **Price band:** CA$140–450 list; currently discounted ~35% on Etsy
- **Payment & Security:** Fully handled by Etsy and eBay with buyer protection
- **Product range:** biker · cafe racer · bomber & aviator · trucker · suede · shearling/Toscana · trench & duster · peacoat · blazer · vests · statement
- **Real differentiator:** handmade made-to-order outerwear direct from maker with standard or custom sizing, visualized through AI Virtual Try-On before purchase.

---

## Decision log

| # | Date | Decision | Rationale | Status |
|---|---|---|---|---|
| D1 | 2026-08-25 | Next.js 15 App Router + TypeScript + Tailwind v4 + GSAP | RSC keeps media-heavy store fast, GSAP provides controlled editorial motion | ✅ Locked |
| D2 | 2026-08-25 | Marketplaces stay live as exclusive checkout channels | Etsy and eBay handle payment processing, taxes, buyer protection, and order management | ✅ Locked |
| D3 | 2026-08-25 | All IP/celebrity-named SKUs stay renamed | Prevents trademark liability on owned domain | ✅ Locked |
| D4 | 2026-08-26 | Replace The Docket with AI Virtual Fitting Room | Practical visualization tool driving qualified outbound marketplace traffic | ✅ Locked |
| D5 | 2026-08-26 | No on-site cart, checkout, or customer accounts | Simplifies operations, eliminates compliance and backend overhead | ✅ Locked |
| D6 | 2026-08-26 | Google Virtual Try-On adapter with Mock fallback | Server-side provider abstraction with zero PII retention and ephemeral processing | ✅ Locked |

---

## Session log

### 2026-08-26 — Antigravity — PRD 2.0 Transition
- Did: Switched to `feat/marketplace-redesign-ai-try-on`. Created comprehensive implementation plan for PRD 2.0. Updated documentation to lock marketplace-led conversion and AI Virtual Try-On.
- Decided: D4–D6 locked.
- Next: Install GSAP, configure semantic tokens, implement global shell and AI fitting room.

