# 03 — Design System

**Project:** kingsfordleather.com
**Version:** 1.0 · **Date:** 2026-08-25

---

## 1. Direction

**The thesis: cold ground, warm hide.**

The brand's own line is *Handcrafted for Wild Roads & Cold Nights.* That sentence contains a contrast, and the contrast is the design: a cold blue-grey world — dusk, wet highway, Canadian winter — and one warm object in it, the leather. Every screen is built on that. The interface is cold and quiet. The product is the only warm thing on the page.

**What we are deliberately not doing:**
- Not black-on-black with a neon accent. Every leather site does this, and it flattens brown leather into mud.
- Not warm cream + high-contrast serif + terracotta. That's the current default look for artisan brands and it reads as generic on sight.
- Not the broadsheet/newspaper grid with hairline rules and zero radius.
- Not Decrum's clean-white e-comm neutrality, and not The Jacket Maker's dense mega-menu department store.

**The risk we are taking:** a serif body face on an outerwear e-commerce site, paired with a *wide* grotesque display (not the condensed one everybody reaches for) and a monospace reserved exclusively for measurements and specs. Justification: the brand sells tailoring, and tailoring is numbers. Giving numbers their own typeface makes the differentiator visible before anyone reads a word.

---

## 2. Colour

| Token | Hex | Role |
|---|---|---|
| `slate-dusk` | `#1C2226` | Primary ground. Cold blue-black — the "cold night". Never pure black. |
| `dusk-raise` | `#262E33` | Raised surfaces on dark: cards, drawers, inputs |
| `bone` | `#DCDCD6` | Light ground and primary text on dark. Cool workshop linen, not cream. |
| `bone-warm` | `#C9C7BF` | Secondary text on dark, dividers, muted labels |
| `saddle` | `#A6683A` | The hide. Primary warm accent — active states, links, key CTAs |
| `oxblood` | `#5A1F22` | Depth accent. Section grounds, sale/limited flags, hover on saddle |
| `brass` | `#C8A15A` | Hardware. Reserved for micro-detail only: focus rings, rule accents, the docket stamp |

**Usage discipline**
- Dark ground is the default. Light (`bone`) sections are used *sparingly* and deliberately, mainly for product grids where the leather needs a neutral backdrop.
- `brass` is a spice. If more than ~2% of a viewport is brass, it's wrong.
- Never place `saddle` on `oxblood` — insufficient contrast. `bone` on `slate-dusk` is 12.4:1; `saddle` on `slate-dusk` is 4.9:1 (large text and UI only, not body copy).
- Product photography is the only source of additional colour. The UI never introduces a colour the leather doesn't have.

**Semantic**
```
--color-success: #4E7A5C   --color-warning: #C8A15A (brass)
--color-error:   #B4483F   --color-focus:   #C8A15A
```

---

## 3. Typography

| Role | Face | Weights | Use |
|---|---|---|---|
| Display | **Archivo** (variable, widths 100–125) | 600 / 700 | Headlines, section titles, CTA labels. Set *expanded* (`font-stretch: 112%`) with tight tracking. Road-sign authority, not fashion-magazine condensed. |
| Body | **Newsreader** (variable) | 300 / 400 / 500 | All reading copy — product descriptions, story, journal, policies. A text serif signals hand and patience. |
| Spec | **Martian Mono** | 400 / 500 | **Measurements, sizes, prices, SKU, lead times, spec tables — and nothing else.** |

**The spec-face rule is load-bearing.** The moment a number is a measurement, it goes mono. This is the visual system encoding the actual product truth: this brand is about your numbers.

**Scale** (fluid, `clamp()`)

| Token | Size | Face | Tracking | Leading |
|---|---|---|---|---|
| `hero` | `clamp(3rem, 9vw, 8rem)` | Display 700 exp. | `-0.03em` | `0.92` |
| `h1` | `clamp(2.25rem, 5vw, 4rem)` | Display 700 | `-0.02em` | `1.02` |
| `h2` | `clamp(1.75rem, 3.5vw, 2.75rem)` | Display 600 | `-0.015em` | `1.1` |
| `h3` | `1.375rem` | Display 600 | `-0.01em` | `1.25` |
| `body-lg` | `1.125rem` | Body 400 | `0` | `1.6` |
| `body` | `1rem` | Body 400 | `0` | `1.65` |
| `small` | `0.875rem` | Body 400 | `0` | `1.5` |
| `spec` | `0.8125rem` | Spec 400 | `0.02em` | `1.45` |
| `eyebrow` | `0.75rem` | Spec 500 | `0.14em` uppercase | `1.2` |

Measure: body copy max `68ch`. Never full-bleed paragraphs.
Self-host all three via `next/font`, variable, latin subset, `display: swap`.

---

## 4. Layout

**Grid:** 12 columns, gutter `clamp(1rem, 3vw, 2rem)`, max content width `1440px`, generous outer margin. Mobile: single column, 20px side padding, no exceptions.

**Spacing scale (4px base):** `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 192`
Section rhythm: `py-24 md:py-32 lg:py-48`. Consistency here does more for perceived quality than any effect.

**Radius:** `4px` on inputs and small controls, `2px` on cards, `0` on images. Leather is cut with straight blades; the interface follows.

**Elevation:** almost none. Depth comes from `dusk-raise` surface shifts and a single hairline `1px solid rgba(220,220,214,0.10)`. No drop shadows on dark ground — they read as dirt.

### Home page structure

```
┌───────────────────────────────────────────────────────┐
│ [announcement: free shipping · duties included]        │
│ KINGSFORD      men  women  made to measure   ⌕  ♡  ⌂  │
├───────────────────────────────────────────────────────┤
│                                                        │
│   HANDCRAFTED FOR                    ┌──────────────┐ │
│   WILD ROADS &                       │              │ │
│   COLD NIGHTS                        │  hero image  │ │
│                                      │  full-bleed  │ │
│   Made to your measurements.         │  right half  │ │
│   One jacket at a time.              │              │ │
│                                      │              │ │
│   [ Start with your size → ]         └──────────────┘ │
│                                                        │
│   ── SINCE 20XX ── CANADA ── HANDMADE ──              │  ← spec face
├───────────────────────────────────────────────────────┤
│  ▸ THE DOCKET  (signature element — see §6)           │
├───────────────────────────────────────────────────────┤
│   SHOP BY SHAPE                                        │
│   ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                │
│   │Biker │ │Bomber│ │Duster│ │Suede │   ← 4-up, bone  │
│   └──────┘ └──────┘ └──────┘ └──────┘      ground     │
├───────────────────────────────────────────────────────┤
│   FROM THE BENCH — workshop strip, 3 photos + copy     │
├───────────────────────────────────────────────────────┤
│   WHAT PEOPLE SAY — full review text, not star counts  │
├───────────────────────────────────────────────────────┤
│   footer                                               │
└───────────────────────────────────────────────────────┘
```

### PDP structure (desktop)

```
┌────────────────────────┬──────────────────────────────┐
│                        │  Men's Black Cafe Racer      │  display
│                        │  CA$194.99                   │  spec face
│  sticky image column   │  ─────────────────────────── │
│  (scrolls through      │  SIZE                        │
│   6–10 shots)          │  [S][M][L][XL] │ MADE TO ME  │  ← the fork
│                        │                              │
│                        │  Ships by 12 Sep             │  spec face
│                        │  [ Add to bag ]              │
│                        │                              │
│                        │  ▾ Specification (mono table)│
│                        │  ▾ About this leather        │
│                        │  ▾ Fit & sizing              │
│                        │  ▾ Shipping & returns        │
└────────────────────────┴──────────────────────────────┘
│  THE CUT — technical flat + measurement docket          │
│  REVIEWS (photo-first)                                  │
│  YOU MIGHT ALSO LIKE                                    │
```

Mobile PDP: gallery swipe → title/price → **size fork immediately** (do not bury the made-to-measure option below the fold) → sticky bottom add-to-bag bar.

---

## 5. Motion

GSAP + ScrollTrigger. Every single one of these is skipped when `prefers-reduced-motion: reduce`.

**Budget: 3 orchestrated moments per page. No more.**

| # | Moment | Spec |
|---|---|---|
| 1 | **Hero set** (home, on load) | Headline lines reveal with SplitText, y `+40 → 0`, opacity `0 → 1`, stagger `0.09`, `power3.out`, `0.9s`. Hero image scale `1.06 → 1` over `1.4s` simultaneously. Total under 1.5s. |
| 2 | **The pattern draw** (the signature) | SVG technical flat: `stroke-dashoffset` animates full → 0, `1.6s`, `power2.inOut`, ScrollTrigger `start: 'top 70%'`, `once: true`. Measurement labels fade in on a `0.06s` stagger *after* the line reaches them. |
| 3 | **Grid stagger** (collections) | Product cards `y +28 → 0`, opacity, stagger `0.06`, batched with `ScrollTrigger.batch()` so a 40-card grid creates one trigger, not forty. |

**Micro-interactions** (CSS, not GSAP)
- Product card hover: image crossfade to alternate shot, `320ms`, `--ease-leather`. No zoom, no lift, no shadow.
- Buttons: background `saddle → oxblood`, `180ms`
- Links: `1px` underline grows left→right, `220ms`
- Focus: `2px` `brass` ring, `2px` offset — always visible, never removed

**Forbidden**
- Parallax on more than one element per page
- Scroll-jacking or pinned full-screen sections
- Cursor followers, magnetic buttons, custom cursors
- Any animation on `top/left/width/height`
- Text that is invisible until an animation fires (see `04-RULES.md` §4)

**Easing:** `--ease-leather: cubic-bezier(0.22, 1, 0.36, 1)` — fast out, long settle. Leather has weight; the motion should too.

---

## 6. The signature element — "The Docket"

Every brand needs one thing people remember. For Kingsford it is **the tailor's docket**: the measurement ticket that goes to the cutting bench.

**What it is:** a panel showing a technical line-drawing of the jacket (flat sketch, `bone` stroke on `slate-dusk`) with measurement callouts pinned to it in Martian Mono, laid out like a real workshop docket — a brass-stamped header, a job number, the customer's name, their numbers.

**Where it appears:**
1. **Home** — as an interactive teaser. Hover/tap a measurement label and that line highlights on the drawing. It explains the entire business model in five seconds without a paragraph of copy.
2. **PDP** — as "The Cut" section, showing this specific garment's flat.
3. **Measurement flow** — it fills in live as the customer enters each number. This is the payoff moment: they watch their own docket being written.
4. **Order confirmation email** — a static render of their docket. This is the thing they screenshot and send to a friend.

**Why this and not something else:** the alternative signature moves were a leather-grain scroll texture (decorative, says nothing), a big number counter (template answer), or a full-screen scroll-pinned product rotation (heavy, hostile on mobile). The docket is the only option that *is* the product truth rather than decoration on top of it. It also degrades perfectly: with JS off it's a static SVG that still communicates.

---

## 7. Components

**Buttons**
| Variant | Idle | Hover | Use |
|---|---|---|---|
| Primary | `saddle` bg, `bone` text | `oxblood` bg | Add to bag, Start measuring |
| Secondary | transparent, `1px bone/30` border, `bone` text | `bone/8` fill | Browse, secondary nav |
| Ghost | text only, `saddle` | underline grows | Inline actions |
Height `48px` (mobile `52px` — thumb target). Label: Display 600, `0.02em`, sentence case.

**Product card**
Image (4:5, no radius) → title (Display 600, `1rem`) → leather type (Spec, `bone-warm`) → price (Spec 500). Hover swaps to second image. **No badge clutter.** One badge maximum, and only when true: `MADE TO MEASURE` or `LAST ONE`.

**Spec table** — always Martian Mono, two columns, `1px bone/10` row rules, label in `bone-warm`, value in `bone`.

**Input** — `dusk-raise` fill, `1px bone/15` border, `bone` text, label above in eyebrow style. Focus: `brass` ring. Error: `1px error` border + message below in `small`, never colour alone.

**Announcement bar** — `oxblood` ground, `bone` text, Spec face, `0.14em` tracking, dismissible.

---

## 8. Imagery direction

- **Product:** neutral cool-grey seamless (`#33393D`-ish), single soft key from camera-left, one raking light to reveal grain. Consistency across all SKUs matters more than any individual shot.
- **Lifestyle:** dusk, blue hour, damp asphalt, headlights, breath in cold air. Cold environment, warm jacket — the thesis, literally.
- **Workshop:** hands, hides, chalk marks, patterns, the machine. Shot warm and close. This is the proof.
- **Never:** white-background stock models, AI-generated people, borrowed competitor imagery, over-saturated HDR.
- **Aspect ratios:** product `4:5` · lifestyle `3:2` · hero `16:9` desktop / `4:5` mobile. Locked. Never let the CMS improvise ratios — that's how CLS happens.
- Every image needs descriptive `alt` written for a person, not for a keyword.

---

## 9. Accessibility floor

Non-negotiable, checked in CI:

- Body text contrast ≥ 4.5:1; large text and UI ≥ 3:1
- Visible focus on every interactive element — `brass` ring, never `outline: none`
- Full keyboard operability: mega-menu, cart drawer, gallery, measurement flow
- Touch targets ≥ 44×44px
- `prefers-reduced-motion` respected everywhere, no exceptions
- Semantic HTML: real `<button>`, real `<nav>`, real `<h1>` (one per page)
- Form errors announced via `aria-live`, tied to inputs with `aria-describedby`
- Colour never the sole carrier of meaning
- Site is fully readable and shoppable with JavaScript disabled down to the checkout handoff

---

## 10. Voice

Plain, confident, unembellished. The brand is three people and a workshop — write like it.

| Write | Don't write |
|---|---|
| "Made to your measurements." | "Experience the pinnacle of bespoke luxury craftsmanship." |
| "Ships by 12 September." | "Fast worldwide delivery!" |
| "Cowhide, 1.2mm. Heavier than lambskin, breaks in slower, lasts longer." | "Premium genuine leather." |
| "That size sold out. We can make it to your measurements in about three weeks." | "Sorry! This item is currently unavailable." |
| "Add to bag" | "Submit" |

Rules: sentence case everywhere except eyebrows. Active voice. Errors explain what happened and what to do next — they don't apologise. An empty cart is an invitation, not a shrug. The same action keeps the same word from button to confirmation ("Add to bag" → "Added to bag").
