# 05 — Project Memory

**Living document. Append, don't rewrite.**
Last updated: 2026-08-25 · Current phase: **Phase 0 — Foundation (not started)**

> Read this file first at the start of every session. Update it at the end of every session.
> A decision that isn't written here didn't happen.

---

## Current state

| | |
|---|---|
| Phase | 0 — Foundation |
| Repo | not created |
| Commerce backend | **NOT DECIDED — blocks everything** (see Open Questions Q1) |
| Design tokens | specified in `03-DESIGN.md`, not implemented |
| Photography | not started — **longest lead time, on the critical path** |
| Live site | none |

**Next three actions:**
1. Decide commerce backend (Q1) — cannot start Phase 0 without it
2. Confirm real founding year and fix Etsy + eBay (Q4)
3. Book the product + workshop photography (Q5)

---

## Business facts (stable — treat as source of truth)

- **Brand:** Kingsford Leather · tagline *Handcrafted for Wild Roads & Cold Nights*
- **Customer-facing market:** Canada. **Production:** in-house facility, Pakistan.
- **Team:** Iqbal (owner, admin, Etsy account) · Sahil (founder; production, sourcing, QC, dispatch) · Shahzar (SEO, listings, ads, growth)
- **Channels:** Etsy `KingsfordLeatherCA` (36 listings, 3 sales, 5.0/2 reviews, ~2 months old) · eBay `kingsfordleather` (40+ listings, 13 sold, 100% positive/8, member since Oct 2024)
- **Price band:** CA$140–450 list; currently discounted ~35%
- **Payment on Etsy:** PayPal, Visa, Mastercard, Apple Pay, Klarna
- **Product range:** biker · cafe racer · bomber & aviator · trucker · suede · shearling/Toscana · trench & duster · peacoat · blazer · vests (biker, tactical) · puffer · gothic/Victorian
- **Real differentiator (confirmed by customer reviews, not assumption):** made-to-measure, including one-off pieces not in the catalogue. One 5★ review explicitly praises a custom piece *"not on the actual list of offers"*.
- **Known weakness in reviews:** one customer noted the leather was thinner than expected. Watch material-weight expectations in copy.

## Competitor facts

**Decrum** — Shopify, US-first, ready-to-wear lambskin, $179/$189, "50,000+ customers", Trustpilot 4.7, since 2015. Loyalty program, `#decrum` UGC gallery, 10%-off capture, buying-guide blog. **No custom offer.**

**The Jacket Maker** — Shopify, 135+ countries, bespoke at scale. 41,000+ customers, 478,000+ custom requests, 3,900+ reviews / 4.9. Sub-brands TruCarry (bags), Eviternity (shoes). Press wall: Esquire, Elle, Men's Health, Refinery29, Buzzfeed, Yahoo, Mashable. "Design Your Own" builder. Clearance 50% + Factory Seconds 40%. Affiliate + ambassador programs.

**Positioning gap Kingsford takes:** custom fit direct from the maker, at Etsy-level price, with the person who cuts the leather answering the email. Neither competitor can claim that.

---

## Decision log

| # | Date | Decision | Rationale | Status |
|---|---|---|---|---|
| D1 | 2026-08-25 | Next.js 15 App Router + TypeScript + Tailwind v4 + GSAP | Client requirement; RSC keeps a media-heavy store fast | ✅ Locked |
| D2 | 2026-08-25 | Made-to-measure is the site's core narrative, not a footnote | It's what the existing 5★ reviews actually praise | ✅ Locked |
| D3 | 2026-08-25 | Design direction "cold ground, warm hide" — slate-dusk ground, saddle/brass accents, Archivo + Newsreader + Martian Mono | Derived from the brand's own tagline; deliberately avoids the default cream/serif/terracotta and black/neon looks | ✅ Locked |
| D4 | 2026-08-25 | Signature element = "The Docket" (measurement ticket) | The differentiator made visible; degrades to static SVG without JS | ✅ Locked |
| D5 | 2026-08-25 | Marketplaces stay live through launch | Don't kill working revenue for an unproven channel | ✅ Locked |
| D6 | 2026-08-25 | All IP/celebrity-named SKUs get renamed before launch | Direct legal liability on an owned domain; risk to payment processing | ✅ Locked — **blocking for launch** |
| D7 | — | Commerce backend | Shopify headless recommended (`02-ARCHITECTURE.md` §2) | ⏳ **Pending** |
| D8 | — | Returns address / who pays return shipping | Affects policy page, checkout copy, and margin | ⏳ Pending |
| D9 | — | French-Canadian localisation at launch? | Credibility in CA vs doubled content cost | ⏳ Pending |

---

## Open questions

| # | Question | Blocks | Owner |
|---|---|---|---|
| Q1 | Shopify headless, Medusa self-hosted, or fully custom? | **Phase 0 — everything** | Iqbal |
| Q2 | Is the selling entity Canadian-registered? (GST/HST, gateway, returns address) | Checkout, policy pages | Iqbal |
| Q3 | Who pays return shipping — and to which address? | Returns policy, margin model | Iqbal / Sahil |
| Q4 | Real founding year? Etsy says 2022, eBay says 2018. | All brand copy, About page | Iqbal |
| Q5 | Photography budget + timeline? ~400 product assets + workshop shoot + 2 videos | Phase 3, and it's the longest lead time | Iqbal |
| Q6 | French-Canadian version at launch? | Content scope, routing, hreflang | Iqbal |
| Q7 | Real monthly made-to-measure capacity at current quality? | Lead-time promises, ad spend ceiling | Sahil |
| Q8 | Duties: can we absorb DDP like The Jacket Maker does? | Pricing, checkout copy | Iqbal |

---

## Known risks being tracked

- **R1 IP/trademark on product names** — critical, blocking for launch (D6)
- **R2 Founding-year contradiction** across Etsy and eBay (Q4)
- **R3 Thin social proof** vs competitors — strategy is depth over volume, never fabrication
- **R5 Fit failures** on made-to-measure — free remake policy must be priced in
- **R8 Production capacity** may cap growth before marketing does (Q7)

Full register: `01-PRD.md` §11.

---

## Glossary

| Term | Meaning |
|---|---|
| **The Docket** | The signature UI element — a tailor's measurement ticket rendered as a technical flat with mono callouts |
| **Measurement profile** | A named, saved set of a customer's 12 measurements, reusable across orders |
| **Made-to-measure (MTM)** | Catalogue garment cut to customer measurements |
| **Bespoke request** | An off-catalogue piece, quoted individually. Not instant checkout. |
| **The fork** | The PDP moment where the customer chooses standard size vs made-to-measure |
| **Spec face** | Martian Mono. Used only for measurements, sizes, prices, SKUs, lead times. |
| **DDP** | Delivered Duty Paid — duties collected at checkout, nothing owed on delivery |
| **FS** | Factory Seconds (competitor merchandising tactic, not currently used) |

---

## Session log

Append one entry per working session. Keep it short.

```
### YYYY-MM-DD — <who> — <what>
- Did:
- Decided:
- Blocked on:
- Next:
```

### 2026-08-25 — Planning — Documentation set created
- Did: Audited Etsy + eBay shops and both competitor sites. Wrote PRD, Architecture, Design, Rules, Memory.
- Decided: D1–D6 (see Decision Log).
- Blocked on: Q1 (commerce backend) — nothing can start until this lands.
- Next: backend decision → repo scaffold → design tokens → photography booking.
