# 01 — Product Requirements Document

**Product:** kingsfordleather.com
**Version:** 1.0 · **Status:** Draft for approval · **Date:** 2026-08-25
**Owner:** Iqbal (business) / Sahil (product truth) / Shahzar (growth)

---

## 1. Context

Kingsford Leather currently sells only through marketplaces:

| Channel | Listings | Sales | Rating | Age |
|---|---|---|---|---|
| Etsy `KingsfordLeatherCA` | 36 | 3 | 5.0 (2 reviews) | ~2 months |
| eBay `kingsfordleather` | 40+ | 13 | 100% positive (8) | Member since Oct 2024 |

Both channels work, but they cap the business in four ways:

1. **Margin** — Etsy takes listing + transaction + payment + Offsite Ads fees; eBay takes final value fees. Every sale is rented.
2. **Brand** — Products sit inside a competitor grid. Nobody remembers "Kingsford"; they remember "that leather jacket on Etsy."
3. **Data** — No email list, no pixel, no retargeting, no customer record you own.
4. **The actual product doesn't fit the channel** — Kingsford's real product is *made-to-measure*, and marketplace listing formats are built for fixed-size inventory. The 5-star Etsy review that says the shop customised a piece *"that's not on the actual list of offers"* is the business hiding inside the wrong container.

This site exists to move the made-to-measure offer to the front.

---

## 2. What the market looks like

### Competitor A — Decrum (decrum.com)
Shopify, US-first, multi-currency. Positioned as **ready-to-wear lambskin at accessible price**.

- Price anchor: $179 (women) / $189 (men), flat across most of the catalogue
- Proof: "50,000+ customers", Trustpilot 4.7, since 2015
- Trust bar: real lambskin · tailored fit · eco packaging · free shipping · 30-day returns
- Growth machinery: 10%-off first-order capture (`DM10`), loyalty/rewards program, `#decrum` UGC gallery with geotagged Instagram customers, buying-guide blog, size guide, customer gallery
- Taxonomy: shallow and clean — Biker / Bomber / Suede / Trucker × Men / Women

**Read:** Decrum wins on *simplicity and social proof*. Its weakness is that every jacket is the same four sizes. It does not do custom.

### Competitor B — The Jacket Maker (thejacketmaker.pk)
Shopify, 135+ countries, huge catalogue, sub-brands (TruCarry bags, Eviternity shoes).

- Positioning: **"Finest Quality. Fair Pricing."** Bespoke is the core engine.
- Proof: 41,000+ customers, 478,000+ custom requests, 3,900+ reviews / 4.9, press wall (Esquire, Elle, Men's Health, Refinery29, Buzzfeed, Yahoo, Mashable), celebrity Instagram "Star Spotlight"
- Bespoke depth: "Design Your Own Leather Jacket" product builder, plus custom bombers/varsity/trench/moto/parka/suits/bags/shoes/apparel, corporate gifting, quantity-tiered consultation form (1 / 2–5 / 6–20 / 21–50 / 50+)
- Merch tactics: Clearance 50%, Factory Seconds 40%, "Prime Delivery" badges, "Made for you / Made to fit / Made to last" tabs
- Programs: affiliate + brand ambassador

**Read:** TJM already owns "bespoke leather" at scale. You will not out-catalogue them. Their weakness is that they are *big* — the buyer talks to a consultation team, not to the person cutting the leather.

### The gap Kingsford can actually own

|  | Decrum | The Jacket Maker | **Kingsford** |
|---|---|---|---|
| Custom fit | ✗ | ✓ (at scale, via consultants) | ✓ (direct from the maker) |
| Off-catalogue one-offs | ✗ | Limited | ✓ **already doing it** |
| Price | $179–189 | Rs.36k–63k (~$130–225) | CA$140–450 |
| Scale of catalogue | Small | Enormous | Small, curated |
| Feels personal | ✗ | ✗ | ✓ **the whole advantage** |

**Positioning statement:**
> Kingsford Leather makes genuine leather outerwear to your measurements — one jacket at a time, straight from the workshop bench. Not a size chart. Your numbers.

---

## 3. Users

**P1 — "The exact-fit buyer" (primary, ~55% of revenue)**
Age 25–45. Has been let down by off-the-rack leather: sleeves too long, shoulders too wide, or is between sizes / tall / plus. Willing to wait 2–3 weeks for a jacket that actually fits. Searches *"custom leather jacket my measurements"*, *"tall men leather jacket"*, *"plus size leather jacket women"*.
**Needs:** confidence that the measurement process works, visible proof of past custom fits, clear timeline, safety net if it's wrong.

**P2 — "The style hunter" (~30%)**
Wants a specific silhouette that mainstream retail doesn't stock — cafe racer with piping, Toscana shearling gilet, western duster, Victorian/gothic tailcoat, lace-up corset biker, club vest. Already knows the vocabulary.
**Needs:** deep style taxonomy, honest material specs, real photography, fast browse.

**P3 — "The gift buyer" (~15%, spikes Oct–Dec)**
Buying for a partner. Doesn't know measurements, needs speed and reassurance.
**Needs:** gift card, size-by-proxy guidance, guaranteed-by dates, easy exchange, discreet packaging.

**Secondary — small B2B/group orders** (motorcycle clubs, film/theatre wardrobe, corporate gifting). Low volume, high AOV. One lead-capture form is enough for v1.

---

## 4. Goals & success metrics

**Primary business goal (12 months):** shift ≥50% of order volume from marketplaces to owned channel, at higher contribution margin per order.

| Metric | Baseline | 6 mo | 12 mo |
|---|---|---|---|
| Owned-channel orders / month | 0 | 25 | 80 |
| Site conversion rate | — | 1.2% | 2.0% |
| Custom-order requests / month | ~2 (informal) | 20 | 60 |
| Email list | 0 | 1,500 | 6,000 |
| Avg. order value | ~CA$195 | CA$225 | CA$260 |
| Organic sessions / month | 0 | 4,000 | 20,000 |
| Return / remake rate | unknown | <8% | <5% |
| Lighthouse mobile perf | — | ≥90 | ≥90 |
| Core Web Vitals | — | all green | all green |

**Guardrail metric:** review score must stay ≥4.8. Growth that costs quality is not growth — the entire positioning is built on the reviews.

---

## 5. Scope

### P0 — MVP (launch)
Ship in this order. Nothing below is optional.

1. **Home** — hero, category entry, why-custom explainer, best sellers, real reviews, email capture
2. **Collection pages** — Men / Women × Biker, Bomber & Aviator, Cafe Racer, Suede, Trucker, Vests, Coats & Trench, Shearling & Fur, Blazers. Filter by gender, style, colour, leather type, price. Sort.
3. **Product detail page (PDP)** — gallery, spec table, size selector **plus "made to my measurements" option**, leather-type explainer, delivery estimate, care note, reviews, related
4. **Measurement flow** — guided form (12 measurements + 4 photos optional), saved to account, attached to order. This is the differentiator. Do not ship a generic "contact us" instead.
5. **Custom / bespoke request page** — for pieces not in the catalogue (reference image upload + brief + budget + timeline). Feeds a quote, not an instant checkout.
6. **Cart + checkout** — guest checkout, Apple Pay / Google Pay / PayPal / Klarna, CAD/USD/GBP/EUR, duties-and-taxes clarity at checkout
7. **Account** — orders, saved measurements, addresses
8. **Trust pages** — Our Story, How We Make It, Size & Measurement Guide, Leather Guide, Shipping & Duties, Returns & Exchanges, Care Guide, Contact, Privacy, Terms
9. **Order tracking** — status + shipping tracking
10. **SEO/GEO foundation** — metadata, JSON-LD, sitemap, robots, hreflang (CA/US/GB/AU), OG images
11. **Email capture + welcome flow** — 10% first order

### P1 — 3 months post-launch
- Photo reviews with UGC gallery (counter Decrum's `#decrum` play)
- Blog / buying guides (SEO engine — TJM and Decrum both rank off this)
- Wishlist
- Bulk & corporate order landing page
- Gift cards
- Live chat / WhatsApp handoff
- Advanced size recommender (height/weight/fit-preference → suggested size)

### P2 — 6–12 months
- Jacket configurator (leather type → colour → hardware → lining → collar → pockets), priced live
- Loyalty program
- Affiliate program
- Multi-language (FR for Canada is legally useful, then DE/ES)
- 3D / AR preview

### Explicitly OUT of scope for v1
- Marketplace de-listing (run all three channels in parallel — do not kill Etsy/eBay revenue)
- Native mobile app
- Subscription anything
- User-generated design marketplace
- Bags, shoes, accessories (TJM's sub-brand game; not your fight yet)

---

## 6. Key flow specs

### 6.1 The measurement flow (highest-value feature)

**Entry points:** PDP size selector → "Made to my measurements" · Custom request page · Account

**Steps:**
1. **Choose method** — (a) enter my measurements, (b) copy from a jacket I own, (c) I'll send them later / help me
2. **Guided entry** — one measurement per screen on mobile, with a diagram + a one-line "how to measure this" + a plain-language sanity check (e.g. chest 32–60 in). Fields: chest, waist, hips, shoulder width, sleeve length (shoulder→wrist), bicep, wrist, jacket length (back), neck, height, weight, plus fit preference (slim / regular / relaxed).
3. **Optional photos** — front + side, for the cutter's reference. Clearly marked optional and never publicly displayed.
4. **Review & save** — named profile ("Sahil — winter fit") reusable on future orders
5. **Confirmation copy** — turnaround time, what happens if it doesn't fit

**Rules:**
- Never block checkout on measurements. Allow "send later" → order is placed, an email + reminder collects them.
- Both imperial and metric, remembered per user.
- Every measurement order gets a human confirmation email from the workshop within 24h.

**Success:** ≥60% of users who start the flow complete it; ≥40% of measurement orders come from repeat measurement profiles by month 12.

### 6.2 PDP requirements
- 6–10 images minimum: front, back, 3/4, detail of hardware, detail of lining, on-body, scale/drape shot
- Spec table using consistent vocabulary: leather type · lining · closure · collar · pockets (outer/inner) · fit · colour · weight
- "Why this leather" inline expander (lambskin vs cowhide vs suede vs sheepskin — buyers genuinely don't know)
- Delivery estimate calculated from *today* ("Made and shipped by 12 Sep")
- Reviews with photos, filtered to this product
- Sticky add-to-cart on mobile

### 6.3 Trust surface (this is where you beat marketplaces)
Every page must carry at least one of: real review, real customer photo, workshop photo, guarantee, or maker credit. Marketplace buyers trust Etsy/eBay, not you. On your own domain you have to manufacture that trust yourself.

Minimum trust set at launch:
- Free shipping (matches both competitors — table stakes)
- 30-day returns / free remake on fit issues (see §11 risk)
- "All duties and taxes included at checkout" if you can afford it — TJM does this and it removes the single biggest cross-border objection
- Real photographs of the workshop and the team (Sahil, cutting, stitching). Not stock.
- Review count displayed honestly. **Do not invent numbers.** With 10 reviews, say 10.

---

## 7. Content requirements

You cannot launch a premium D2C site with marketplace-cropped photos. Budget for:

- **Photography:** 8–10 images × 40 SKUs on white/neutral + 1 lifestyle each ≈ 400 assets
- **Workshop shoot:** 20–30 images of the Pakistan facility, hands, tools, hide selection, stitching. This is your entire "handcrafted" claim's evidence.
- **Video:** one 45–60s brand film + one 30s "how we make one jacket". Both used in hero and About.
- **Copy:** 40 product descriptions rewritten from marketplace-keyword-stuffed format into brand voice; 10 trust/policy pages; 12 launch blog posts.
- **Size & measurement guide:** illustrated, per garment type. Highest-traffic page you will own.

---

## 8. SEO / GEO requirements

Both competitors rank hard on informational content. Match it.

- **Technical:** SSR/ISR product pages, clean URLs (`/men/biker-jackets/[slug]`), canonical tags, `hreflang` for en-CA / en-US / en-GB, XML sitemaps split by type, `robots.txt`, 301 map from any legacy URLs
- **Structured data:** `Product` + `Offer` + `AggregateRating`, `Organization`, `BreadcrumbList`, `FAQPage`, `Article`, `LocalBusiness`
- **Target clusters:**
  - *Custom intent (your moat):* custom leather jacket canada · made to measure leather jacket · leather jacket my measurements · tall/plus size leather jacket
  - *Style intent:* cafe racer jacket · leather duster coat · toscana shearling vest · leather trench coat women · biker club vest
  - *Informational:* how to measure for a leather jacket · lambskin vs cowhide · how to break in a leather jacket · leather jacket care
- **GEO / AI-search:** clear factual specs in plain HTML (not image-only), FAQ blocks on every PDP, an `/about` page that states who/what/where/since in unambiguous sentences, and consistent NAP across Etsy, eBay, Google Business, and site.
- Do **not** copy competitor product descriptions. Both are indexed; duplicate content will bury you.

---

## 9. Non-functional requirements

| Requirement | Target |
|---|---|
| LCP (mobile, 4G) | < 2.5s |
| CLS | < 0.1 |
| INP | < 200ms |
| Lighthouse Perf / A11y / SEO | ≥ 90 / ≥ 95 / 100 |
| Uptime | 99.9% |
| Accessibility | WCAG 2.2 AA |
| Browser support | Last 2 versions Chrome/Safari/Firefox/Edge; iOS 15+ |
| Mobile share assumption | 70%+ of traffic — design mobile-first, always |

---

## 10. Launch phases

| Phase | Weeks | Output |
|---|---|---|
| 0 — Foundation | 1–2 | Repo, design system, tokens, CI, commerce backend connected |
| 1 — Core commerce | 3–6 | Collections, PDP, cart, checkout, account |
| 2 — Differentiator | 7–9 | Measurement flow, custom request, order tracking |
| 3 — Content & trust | 10–12 | All trust pages, photography integrated, reviews, SEO |
| 4 — Polish & motion | 13–14 | GSAP passes, perf tuning, a11y audit, cross-browser |
| 5 — Soft launch | 15 | Friends/past customers, 20 test orders, fix |
| 6 — Public launch | 16 | Paid + email + marketplace insert cards driving to site |

---

## 11. Risk register

| # | Risk | Severity | Mitigation |
|---|---|---|---|
| R1 | **IP / trademark exposure.** A large part of the current catalogue is named after protected properties and real people — Michael Jackson, Jaafar Jackson, Mad Max, Fallout, Punisher, Captain America, Resident Evil, Terminator 2, Akira, Black Label Society. Marketplaces absorb some of this risk; **your own domain does not.** You are directly liable for trademark infringement, copyright, and right-of-publicity claims, and a single takedown can hit your payment processor. | **Critical** | Before launch: rename every SKU to describe the *garment*, not the property ("Wasteland Rider Jacket", "Vault Blue & Gold Bomber", "Red & Black Zip-Panel Jacket"). Remove celebrity names from titles, alt text, meta, and URLs. Get a lawyer to review the catalogue once. Keep marketplace listings separate if you choose, but the owned site must be clean. |
| R2 | **Founding-year contradiction.** Etsy says 2022, eBay says 2018. | High | Pick the true year. Fix both marketplaces and use it everywhere. Inconsistent origin stories are the fastest way to lose a first-time buyer who is already nervous about a small brand. |
| R3 | **Thin social proof.** 10 total reviews vs Decrum's 50k customers and TJM's 3,900 reviews. | High | Don't fake it — own it. Lead with "every jacket made by hand, one at a time" and show *depth* (full review text, photos, the maker's name) instead of *volume*. Run a post-purchase review request from day one. Import Etsy/eBay reviews with attribution where the platform permits. |
| R4 | Cross-border duties surprise on delivery → chargebacks and bad reviews. | High | Use DDP (delivered duty paid) and state it at checkout. This is what TJM does. |
| R5 | Fit failures on made-to-measure orders. | High | Free alteration or remake policy, funded into pricing. Confirm measurements by human email before cutting. Track remake rate as a first-class metric. |
| R6 | "Genuine leather" claims. Canadian Competition Bureau and US FTC both police textile/leather labelling. | Medium | Only claim what is true, per SKU. Say *lambskin*, *cowhide*, *suede*, *sheepskin*, or *faux* — never a vague "genuine leather" on a faux item. One Etsy listing already offers "Faux or Genuine" — that must be an explicit, priced variant on-site. |
| R7 | Privacy law — Canada PIPEDA + anti-spam CASL, plus GDPR/UK for EU traffic. Measurement photos are sensitive personal data. | Medium | Express opt-in for marketing. Cookie consent. Measurement photos: encrypted, access-limited, deleted after fulfilment, never public, disclosed in privacy policy. |
| R8 | Production capacity. 80 orders/month of made-to-measure is a real load on one facility. | Medium | Model capacity before spending on ads. Publish honest lead times. A slipped promise costs more than a slower promise. |
| R9 | Single-founder dependency (Sahil owns production, sourcing, QC, dispatch). | Medium | Document the process. It's a business risk, not a website risk, but it caps growth. |

---

## 12. Open questions

1. Which commerce backend — hosted Shopify with a headless front end, or self-hosted (Medusa)? See `02-ARCHITECTURE.md` §2 for the recommendation and trade-offs. **Blocks Phase 0.**
2. Is the selling entity Canadian-registered? Determines GST/HST, payment gateway, and returns address.
3. Returns: who pays return shipping from Canada/US to Pakistan? Or is there a Canadian return address?
4. Real founding year?
5. Photography budget and timeline — this is the longest lead-time item and it is on the critical path.
6. Do you want a Canadian French version at launch? (Useful for credibility in CA, doubles content cost.)
7. Confirmed capacity: how many made-to-measure jackets per month can the facility actually deliver at current quality?

---

## 13. Sign-off

| Role | Name | Approved | Date |
|---|---|---|---|
| Business owner | Iqbal | ☐ | |
| Production / product truth | Sahil | ☐ | |
| Growth / SEO | Shahzar | ☐ | |
