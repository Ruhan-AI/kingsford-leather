# Kingsford Leather Premium White Website Redesign PRD

**Repository:** https://github.com/Ruhan-AI/kingsford-leather  
**Product:** Kingsford Leather brand and marketplace discovery website  
**Version:** 3.0  
**Status:** Ready for Antigravity implementation  
**Date:** 27 August 2026  
**Primary implementation agent:** Antigravity  
**Reference direction:** LeatherSCIN and Buffalo Jackson  

## 0. Antigravity execution instruction

Work inside the existing `Ruhan-AI/kingsford-leather` repository. This is a redesign of the current application, not a fresh project and not a dashboard product.

This document is the new source of truth. It supersedes all earlier UI plans and any earlier plan for photo uploads, generated outfit previews, fitting-room flows, API providers, image-generation budgets, or related experimental functionality.

Before changing code, read these repository files in full if they exist:

1. `05-MEMORY.md`
2. `04-RULES.md`
3. `01-PRD.md`
4. `02-ARCHITECTURE.md`
5. `03-DESIGN.md`
6. `src/lib/products.ts`
7. `src/lib/site.ts`
8. Current home, collection, product, header, footer, search, and sizing components

Start with:

```bash
git status --short
git checkout -b feat/premium-white-marketplace-redesign
```

If the branch already exists, reuse it. Preserve any unrelated user changes and do not use destructive Git commands.

The implementation must remain in the current Next.js application. Do not replace the repository with a template. Use the reference sites only to understand hierarchy, spacing, catalogue presentation, editorial storytelling, and product-detail depth. Do not copy their source code, copy, images, logo, exact layouts, or proprietary assets.

Run lint, type checking, tests, and a production build at the end of every major phase. Do not move to the next phase while the current phase has console errors, broken routes, hydration errors, or unresolved TypeScript errors.

## 1. Locked product decisions

The following decisions are final for this version:

1. The website uses a premium white visual theme.
2. The site is a brand, content, and product-discovery experience.
3. Etsy and eBay remain the only purchase and checkout destinations.
4. Preserve all 49 verified products, stable product slugs, prices, images, and exact marketplace URLs from the current product data.
5. There is no on-site cart, checkout, payment, customer account, login, order tracking, inventory system, or dashboard.
6. There is no photo upload, virtual fitting room, generated preview, body scan, or visualization feature.
7. Remove `The Tailor's Docket` from the public site, navigation, homepage, product pages, and code paths. Do not restore it under a different label.
8. Replace the removed feature space with product discovery, craftsmanship, size guidance, care education, and marketplace trust.
9. Product-level calls to action must lead to the exact corresponding Etsy or eBay listing.
10. The redesign must be original to Kingsford Leather and must not look like a reskinned template.

## 2. Product summary

Kingsford Leather needs a premium editorial storefront that builds trust and sends qualified visitors to Etsy or eBay. Visitors must be able to understand the brand, browse the complete catalogue, compare styles, inspect product details, learn how sizing works, and continue to the correct marketplace listing.

The owned site performs discovery and persuasion. Etsy and eBay perform payment, buyer protection, order management, shipping updates, and marketplace support.

### Core jobs of the website

1. Present Kingsford as a refined and trustworthy leather outerwear brand.
2. Make the 49-product catalogue easy to search, filter, and browse.
3. Explain material, silhouette, care, sizing, and craftsmanship clearly.
4. Preserve SEO value through strong collection, product, and guide pages.
5. Convert product interest into trackable Etsy and eBay outbound clicks.

### Primary conversion

A visitor clicks the correct Etsy or eBay button from a product page.

### Secondary conversions

- A visitor opens a product from a collection page.
- A visitor uses search or filters successfully.
- A visitor reaches the size guide, craftsmanship page, or marketplace information page.
- A visitor clicks a general Etsy or eBay store link from the header or footer.

## 3. Reference-site synthesis

The final Kingsford interface must combine the strongest parts of both references while avoiding their weaknesses.

### Inspiration from LeatherSCIN

- Predominantly white catalogue environment
- Search-first header behavior
- Clear men and women collection entry points
- Collection banners that establish context before the product grid
- Visible filtering and sorting controls
- Product cutouts with minimal visual noise
- Direct product information and size guidance

### Inspiration from Buffalo Jackson

- Strong heritage-led brand storytelling
- Editorial image and copy compositions
- Clear product-category pathways
- Craftsmanship and material education
- Detailed product gallery with supporting lifestyle imagery
- Strong information grouping for description, features, materials, sizing, and reviews
- A consistent relationship between product photography and brand narrative

### Elements not to copy

- Buffalo Jackson's dark site-wide chrome and heavy brown page backgrounds
- Either site's logo, typography, copy, imagery, icons, banners, or exact grids
- Cart, login, quantity, stock, checkout, or account controls
- Excessive sale messaging, discount badges, popups, chat bubbles, or promotional clutter
- Long keyword-stuffed blocks that reduce readability
- Crowded mega menus that expose every possible category at once
- Script fonts for major headings
- Fake customer counts, fabricated reviews, or unverified manufacturing claims

### Kingsford synthesis

Kingsford should use LeatherSCIN's light catalogue clarity with Buffalo Jackson's storytelling depth. The result should feel quieter, more premium, more spacious, and more contemporary than either reference.

The design should communicate leather through photography, warm neutral accents, grain details, stitching-inspired dividers, and measured typography. It must not rely on a dark background to feel premium.

## 4. Current repository audit and migration map

| Area | Current state | Required action |
| --- | --- | --- |
| Framework | Next.js 15.5.23, React 19, TypeScript, Tailwind CSS 4 | Keep unless a dependency requires a safe minor update |
| Catalogue | 49 consolidated Etsy and eBay products | Preserve every verified SKU and exact outbound URL |
| Product routes | `/products/[slug]` | Preserve stable URLs and redesign the page |
| Gender routes | `/men` and `/women` | Preserve and redesign as editorial collection pages |
| Product data | Central data in `src/lib/products.ts` | Normalize fields without changing verified values |
| Purchase model | External marketplace links | Make this the only transaction path |
| The Docket | Measurement-oriented homepage feature | Remove component, links, route fragments, copy, and state |
| Header | Includes obsolete feature links and commerce-like affordances | Replace with catalogue, story, guide, search, Etsy, and eBay navigation |
| Product controls | May include local size or selection controls | Remove controls that do not transfer to marketplaces |
| Gallery | Main image with limited or non-functional thumbnails | Build a keyboard-accessible gallery |
| Styling | Hardcoded values across components | Replace with design tokens and reusable variants |
| Motion | Limited or inconsistent | Add a restrained GSAP system with reduced-motion support |
| Documentation | Earlier assumptions may conflict | Update repository docs to match this PRD |

### Mandatory cleanup

Search the entire repository for the following before building the new UI:

```text
TheDocket
Tailor's Docket
tailors-docket
try-on
tryOn
fitting-room
fittingRoom
photo upload
generated preview
cart
checkout
account
dashboard
```

Classify every match as active code, stale documentation, test data, or harmless third-party text. Remove active functionality that conflicts with this PRD. Do not remove unrelated package internals.

## 5. Goals and success metrics

### Business goals

- Increase qualified product traffic sent to Etsy and eBay.
- Improve brand trust before the visitor leaves the owned site.
- Make the complete product range easier to discover.
- Build a premium visual identity without adding operational commerce complexity.
- Improve organic visibility for products, categories, sizing, care, and leather education.

### Product targets

| Metric | Launch target |
| --- | --- |
| Product page to marketplace click-through rate | 18% or higher after baseline period |
| Collection page to product page click-through rate | 25% or higher |
| Search success rate | 70% or higher |
| Incorrect or broken product marketplace links | 0 |
| Mobile Lighthouse performance | 90 or higher |
| Lighthouse accessibility | 95 or higher |
| Lighthouse SEO | 100 target |
| Largest Contentful Paint | Under 2.5 seconds at the 75th percentile |
| Interaction to Next Paint | Under 200 ms at the 75th percentile |
| Cumulative Layout Shift | Under 0.1 |

Analytics must establish real baselines after launch. Do not invent historical performance numbers.

## 6. Target users

### Style-led buyer

Wants to quickly browse leather jackets, compare silhouettes, and see strong product photography before purchasing.

### Fit-conscious buyer

Needs clear measurements, size guidance, fit notes, and an easy path to the marketplace listing where options and seller communication are available.

### Marketplace-trust buyer

Discovers Kingsford through Google, social media, or a direct link but prefers Etsy or eBay for checkout and buyer protection.

### Gift buyer

Needs simple product categories, material information, price context, and a reliable marketplace purchase path.

### Returning brand visitor

Already knows Kingsford and wants fast search, direct collection access, or a general Etsy or eBay store link.

## 7. Experience principles

1. **White is the canvas.** Warm neutrals and leather tones support the interface but never dominate the page.
2. **Photography carries emotion.** UI decoration must remain quiet.
3. **The site must never pretend to process a purchase.** No fake commerce controls.
4. **Every product must have a clear next step.** Use the exact available marketplace link.
5. **Trust must be factual.** Only verified claims, ratings, shipping details, prices, and materials may be displayed.
6. **Discovery must be fast.** Search, filters, category links, and page hierarchy should reduce decision effort.
7. **Content remains accessible without animation.** Motion enhances the page but does not reveal required information exclusively.
8. **Mobile is a first-class layout.** Do not scale down desktop compositions mechanically.
9. **Premium does not mean empty.** Use whitespace with useful information and deliberate hierarchy.
10. **No template residue.** Remove dashboard language, generic SaaS patterns, oversized pills, glassmorphism, neon effects, and decorative 3D objects.

## 8. Scope

### P0 launch scope

- Premium white redesign of the global shell
- Redesigned homepage
- Full catalogue page with search, filters, and sorting
- Redesigned men and women collection pages
- Dynamic category collection pages
- Redesigned product detail pages for all 49 products
- Accessible product image gallery
- Exact product-level Etsy and eBay actions
- Our Story page
- Craftsmanship page
- Leather Guide page
- Size and Fit Guide page
- Care Guide page
- Marketplace Shipping and Returns page
- Contact page
- Privacy and Terms pages
- Technical SEO and structured data
- Outbound click analytics
- Responsive QA, accessibility QA, and performance optimization
- Removal of obsolete experimental and commerce-like features

### P1 after launch

- Product comparison without accounts or saved server state
- Curated editorial collection pages such as cafe racer, biker, bomber, shearling, and coats, based on actual catalogue data
- Journal articles based on verified expertise and search demand
- Recently viewed products stored only in the current browser
- Marketplace availability verification workflow
- Optional newsletter only after a real subscription backend and consent text exist

### Explicitly out of scope

- Photo uploads or generated previews
- Virtual fitting or body visualization
- The Tailor's Docket
- Customer dashboard
- Admin dashboard
- On-site account or login
- On-site cart
- On-site checkout
- Payment processing
- Order history or order tracking
- Inventory management
- Marketplace order synchronization
- Wishlist that requires an account
- Shopify, Medusa, WooCommerce, or a custom commerce backend
- Product reviews written or submitted on the Kingsford site
- Live chat unless a real support workflow is provided
- Native mobile app
- 3D product viewer
- Fabricated scarcity, timers, stock counters, or social-proof numbers

## 9. Information architecture

### Required routes

| Route | Purpose | Priority |
| --- | --- | --- |
| `/` | Premium brand home and collection discovery | P0 |
| `/shop` | Complete 49-product catalogue | P0 |
| `/men` | Men's editorial collection landing | P0 |
| `/women` | Women's editorial collection landing | P0 |
| `/collections/[category]` | Indexable category and silhouette landing pages | P0 |
| `/products/[slug]` | Product details and exact marketplace actions | P0 |
| `/our-story` | Kingsford brand story | P0 |
| `/craftsmanship` | Materials, construction, and process | P0 |
| `/leather-guide` | Leather and material education | P0 |
| `/size-guide` | Measurement and fit guidance | P0 |
| `/care-guide` | Product care guidance | P0 |
| `/shipping-returns` | Marketplace-specific purchase expectations | P0 |
| `/contact` | General and marketplace support routes | P0 |
| `/privacy` | Privacy and analytics policy | P0 |
| `/terms` | Website terms | P0 |
| `/journal` | Editorial index when real articles exist | P1 |
| `/journal/[slug]` | Editorial article | P1 |

Do not create `/cart`, `/checkout`, `/account`, `/login`, `/admin`, `/dashboard`, `/orders`, or any fitting-room route.

### Navigation labels

Use this desktop order:

```text
Shop | Men | Women | Collections | Craftsmanship | Guides
```

Marketplace store links remain visually separated from internal navigation.

## 10. White-theme visual system

### Theme rule

At least 70% of visible page surfaces should be pure white. Warm ivory may be used for editorial separation. Dark brown or ink backgrounds are permitted only inside small badges, buttons, the footer, or localized image overlays. Do not create long dark page sections.

### Colour tokens

```css
:root {
  --color-canvas: #ffffff;
  --color-surface: #f8f6f2;
  --color-surface-strong: #efe9e1;
  --color-ink: #1c1a17;
  --color-text: #2c2925;
  --color-muted: #706a62;
  --color-line: #ded7ce;
  --color-leather: #8b5a35;
  --color-leather-dark: #5d3923;
  --color-tan: #c9a378;
  --color-success: #3f6548;
  --color-error: #9b3f38;
}
```

Rules:

- Do not use pure black for page backgrounds.
- Do not use gold gradients or metallic CSS effects.
- Do not use beige for every section. White must remain dominant.
- Use `--color-leather` for primary actions and small accents.
- Use `--color-line` instead of heavy shadows for most separation.
- Ensure every text and control combination meets WCAG AA contrast.

### Typography

Use `next/font` and self-managed font loading.

- Display: `Cormorant Garamond`, weights 500 and 600
- Body and interface: `Manrope`, weights 400, 500, 600, and 700
- Fallback display: Georgia, serif
- Fallback body: Arial, sans-serif

Suggested scale:

```css
--text-display: clamp(3.25rem, 7vw, 6.75rem);
--text-h1: clamp(2.75rem, 5vw, 5rem);
--text-h2: clamp(2.25rem, 4vw, 4rem);
--text-h3: clamp(1.65rem, 2.4vw, 2.5rem);
--text-body-lg: clamp(1.05rem, 1.3vw, 1.25rem);
--text-body: 1rem;
--text-small: 0.875rem;
```

Typography rules:

- Display headings use sentence case, not all caps.
- Small eyebrows may use uppercase with `0.12em` tracking.
- Body copy must not exceed 70 characters per line.
- Avoid decorative script fonts.
- Do not animate every letter independently.

### Geometry

- Main content maximum width: `1440px`
- Reading content maximum width: `760px`
- Desktop page gutters: `clamp(24px, 5vw, 80px)`
- Mobile gutters: `20px`
- Section spacing: `96px` to `160px` desktop, `64px` to `96px` mobile
- Product grid gap: `20px` to `28px`
- Major panel radius: `8px` maximum
- Product image radius: `4px` or square corners
- Pill shape only for filter chips, status tags, and search
- Buttons use a modest `4px` radius, not a full pill

### Shadows and borders

- Default cards use a thin border or no border.
- Header shadow appears only after scroll and must remain subtle.
- Avoid floating glass cards and blurred transparency.
- Use hairline dividers inspired by stitching, but do not simulate literal stitches everywhere.

### Iconography

- Use simple 1.5px line icons.
- Use one consistent icon source.
- Do not use emoji, filled cartoon icons, AI-style sparkles, or mixed icon families.
- Icons support text and never replace essential labels.

## 11. Imagery direction

Kingsford needs two complementary image types.

### Product imagery

- Consistent neutral or white background
- Full product visible and centered
- 4:5 primary aspect ratio
- Minimal cropping of sleeves, collars, or coat length
- Accurate color representation
- Secondary hover image when available

### Editorial imagery

- Real jackets in natural settings
- Close-ups of leather grain, seams, hardware, lining, cuffs, and collars
- Workshop or making imagery only when authentic Kingsford assets exist
- Men and women represented through separate and combined collection stories
- Natural warm light with restrained grading
- No generic AI-generated people or fabricated workshop scenes

### Image implementation

- Use `next/image` with correct `sizes`.
- Generate AVIF and WebP through the production image pipeline where possible.
- Preload only the true mobile and desktop hero assets.
- Lazy-load below-the-fold media.
- Define width and height to prevent layout shift.
- Add useful alt text that describes the product or scene.
- Decorative texture images use empty alt text.

## 12. Global shell

### Announcement strip

Use a slim warm-ivory strip above the header.

Recommended copy:

```text
Discover Kingsford Leather on Etsy and eBay
```

Do not claim global free shipping. Existing information indicates that free shipping may apply on Etsy, not as a universal site-wide promise.

### Desktop header

- White background
- 76px initial height
- Kingsford crest and wordmark on the left
- Primary navigation in the center
- Search icon and labelled Etsy and eBay links on the right
- No cart icon
- No user icon
- No wishlist icon
- No experimental-feature link
- Sticky after the first 120px of scroll
- Compact to approximately 64px after scrolling
- Add a 1px bottom border and a very soft shadow only in sticky state

### Mega menu

Use a focused mega menu for `Shop` and a simple dropdown for `Guides`.

Shop mega menu:

- Column 1: Men, Women, View All
- Column 2: Actual catalogue silhouettes only
- Column 3: Actual materials or colors only when enough products exist
- Column 4: One featured collection image and link

Do not expose empty or invented categories.

### Search overlay

- Open from the header search action
- Full-width white overlay below the header on desktop
- Full-screen white sheet on mobile
- Search product title, safe alternate title, category, color, material, and tags
- Show up to six live results with image, title, category, and price
- Include `View all results` when more matches exist
- Escape closes the overlay
- Focus is trapped inside while open
- Search term appears in `/shop?q=` when the visitor views all results

### Mobile header and drawer

- 60px white header
- Wordmark on the left
- Search and menu controls on the right
- Drawer opens from the right on a white surface
- Use large text links with generous spacing
- Show Etsy and eBay as full-width labelled actions near the bottom
- Lock background scroll while open
- Restore focus to the menu control on close

### Footer

The footer may use `--color-ink` as the one contained dark brand surface.

Footer columns:

1. Brand summary and wordmark
2. Shop: All, Men, Women, Collections
3. Learn: Craftsmanship, Leather Guide, Size Guide, Care Guide
4. Help: Shipping and Returns, Contact, Privacy, Terms
5. Marketplaces: Etsy and eBay

Do not render a newsletter form unless it submits to a real configured backend with consent handling. A dead email field is not acceptable.

## 13. Homepage architecture

The homepage must feel like an editorial leather catalogue, not a generic ecommerce template. Use the following section order.

### Section 1: White editorial hero

Desktop layout:

- Two-column composition
- Left side is white with copy, primary CTA, secondary text link, and marketplace trust line
- Right side uses a strong vertical or slightly landscape lifestyle image
- Image can extend close to the viewport edge while the copy stays aligned to the grid

Mobile layout:

- Copy first
- Image second
- Primary CTA remains visible without requiring a long scroll

Recommended copy direction:

```text
Eyebrow: KINGSFORD LEATHER
Headline: Leather with Character. Made for the Years Ahead.
Body: Explore refined leather outerwear and statement pieces, then purchase securely through our Etsy and eBay stores.
Primary CTA: Explore the Collection
Secondary CTA: Discover Our Craft
Trust line: Available through Etsy and eBay
```

Antigravity must preserve the hierarchy but may refine wording to match verified brand facts. Do not add claims such as handmade, full-grain, lifetime, or made in a specific country across the whole catalogue unless every relevant statement is verified.

### Section 2: Collection navigation rail

A clean white rail immediately below the hero.

Suggested entries based on actual data:

- Men
- Women
- Biker
- Cafe Racer
- Bomber
- Shearling
- Coats
- View All

Each item includes a small editorial crop or product cutout. Hide any category that lacks products.

### Section 3: The Kingsford Edit

- Heading, one-line editorial introduction, and `View all` link
- Four featured products on desktop
- Two columns on tablet
- Horizontal snap rail or two-column grid on mobile
- Product selection must come from real featured product data
- Use a second product image on hover when available

### Section 4: Men and women editorial pair

Use two large image cards in an asymmetric white-space composition.

- Men's Collection
- Women's Collection

Each card contains one clear title and one text link. Avoid placing long copy on the image.

### Section 5: Craftsmanship story

Use a warm-ivory split section inspired by Buffalo Jackson's editorial storytelling.

- One authentic workshop or detail image
- One copy block
- Three compact factual proof points
- CTA: `Explore craftsmanship`

Suggested heading:

```text
Character lives in the details.
```

Every proof point must map to verified Kingsford product or workshop information.

### Section 6: Shop by silhouette

Use a large, image-led grid rather than generic icon cards.

Possible categories:

- Biker
- Cafe Racer
- Bomber
- Aviator
- Shearling
- Long Coats

Only render categories supported by current catalogue data.

### Section 7: Featured collection story

Use one full-width editorial image within white margins. Add a white copy panel that slightly overlaps the image on desktop and stacks below it on mobile.

Content:

- Collection eyebrow
- Short heading
- Maximum three lines of body copy
- `Shop the collection` link

Do not use autoplay video. If an authentic optimized video is later provided, require a poster image, muted playback, no audio, and reduced-motion fallback.

### Section 8: Marketplace purchase clarity

Use a white section with a fine border and two marketplace columns.

- Explain that checkout takes place on Etsy or eBay
- Show only factual buyer-protection or shipping language
- General `Visit Etsy Store` and `Visit eBay Store` actions
- Make external-link behavior visible through an icon and accessible label

### Section 9: Verified customer feedback

Render this section only when the current repository contains traceable verified feedback.

- Maximum three visible quotes
- Customer first name or marketplace display name only if permitted
- Source label such as Etsy or eBay
- No fabricated star counts
- No duplicated quotes
- Link to the relevant public marketplace review source when available

If verification is unavailable, replace this section with a product-detail editorial section. Do not create placeholder testimonials.

### Section 10: Leather knowledge

Three editorial guide cards:

- Understanding Leather Types
- How to Measure for a Jacket
- How to Care for Leather Outerwear

Cards must link to real internal guide pages.

### Section 11: FAQ

Use five to seven concise questions based on verified policies.

Topics:

- Where checkout happens
- How to choose a size
- Whether custom sizing is available on specific listings
- How marketplace shipping and returns work
- How to contact the seller about a product
- How material information is shown

Do not make blanket claims across all products.

### Section 12: Closing CTA

End on white or warm ivory, not a large black banner.

```text
Headline: Find the piece that becomes part of your story.
Primary CTA: Shop All Leather
Secondary links: Etsy | eBay
```

## 14. Shop and collection pages

### Collection header

- White page background
- Breadcrumbs
- Large serif title
- One short paragraph
- Optional wide editorial image below the heading
- Result count aligned with catalogue controls

Do not put long SEO copy before the product grid. Longer supporting copy belongs after the grid in a readable accordion or editorial block.

### Catalogue controls

Required search and filters:

- Search query
- Gender
- Product category or silhouette
- Material
- Color
- Price range
- Marketplace availability

Required sorting:

- Featured
- Newest, only when real product dates exist
- Price: Low to High
- Price: High to Low
- Name: A to Z

Rules:

- Store filter state in URL search parameters.
- Browser back and forward must restore the state.
- Desktop uses a slim left filter column or top filter bar based on available width.
- Mobile uses an accessible bottom sheet or full-screen filter drawer.
- Selected filters appear as removable chips.
- `Clear all` resets the state.
- Show the new result count before moving focus.
- Do not add infinite scroll. Use a complete grid or accessible pagination if the catalogue grows.

### Product grid

- Four columns on large screens
- Three columns on laptop widths
- Two columns on tablet and mobile
- One column only below approximately 360px when required for readability
- Use consistent 4:5 image frames
- Product images remain the visual focus

### Product card content

Required:

- Primary image
- Secondary hover image when available
- Product title
- Category or silhouette
- Material only when verified
- Price and currency from current data
- Optional factual badge such as New or Best Seller only when backed by data
- Marketplace availability labels

Interactions:

- Entire image and title link to the internal product page
- Keyboard focus reveals the same information as hover
- Image scales no more than 1.03
- Marketplace actions should not overcrowd the card
- Optional quick link may say `View details`, never `Add to cart`

### Empty state

```text
No pieces match these filters.
Clear filters or explore the complete collection.
```

Provide `Clear filters` and `View all` actions.

## 15. Product detail page

### Desktop composition

- Breadcrumbs above the main grid
- Gallery occupies approximately 58% of the width
- Product information occupies approximately 42%
- Information panel remains sticky only while useful and must not overlap the footer
- White canvas with a warm neutral gallery background

### Mobile composition

- Swipeable image gallery first
- Product title and core facts second
- Marketplace actions visible before long details
- Accordions for supporting information
- Sticky bottom action may appear after the main actions leave the viewport

### Gallery requirements

- Main image with zoom on deliberate action, not hover-only zoom
- Accessible thumbnail list
- Arrow-key navigation for thumbnails
- Swipe on touch devices
- Fullscreen viewer with a close control and focus management
- Support product cutout, front, back, detail, and lifestyle images when available
- Do not duplicate the same image to create the appearance of a larger gallery

### Product information hierarchy

1. Category eyebrow
2. Product title
3. Short factual descriptor
4. Price and currency
5. Verified color and material
6. Marketplace purchase actions
7. Size and fit guidance
8. Product facts and care

### Marketplace actions

If both links exist:

- Primary action: `View on [primary marketplace]`
- Secondary action: `View on [secondary marketplace]`

If one link exists, show only that marketplace.

Every action:

- Opens the exact product listing in a new tab
- Uses `target="_blank"`
- Uses `rel="noopener noreferrer sponsored nofollow"`
- Includes an external-link icon
- Announces the destination in its accessible name
- Fires the outbound analytics event before navigation

Do not send product-level clicks to a general store URL when a verified product URL exists.

### Size and fit block

Do not show interactive size buttons that cannot be transferred to Etsy or eBay.

Instead display:

- A concise fit note from verified product data
- `View Size Guide`
- A message that available sizes and customization should be confirmed on the marketplace listing
- A product-specific seller-contact link when the marketplace supports it and the URL is verified

### Product details

Use accessible accordions or tabs for:

- Description
- Materials and construction
- Size and fit
- Care
- Shipping and returns

Do not hide critical material or fit information behind interaction on mobile. The first section may remain expanded.

### Supporting sections

After the main product block:

1. Full-width lifestyle image or product detail crop
2. Short product story
3. Verified construction details
4. Related products from the same category or silhouette
5. Marketplace clarity reminder

### Remove from the current product page

- Local size selection that does not transfer to the marketplace
- Local quantity control
- Add to cart
- Buy now
- Fake inventory number
- Local checkout language
- Account or wishlist prompts
- Obsolete measurement feature links
- Any photo or generated-preview action

## 16. Story and guide pages

### Our Story

Page order:

1. White hero with brand portrait or product detail
2. Kingsford origin story
3. Brand values based on verified facts
4. Timeline only when dates are verified
5. Marketplace and contact actions

Do not invent founder biography, workshop history, production location, team size, or years in business.

### Craftsmanship

Page order:

1. Editorial heading and detail image
2. Materials overview
3. Construction details
4. Hardware, lining, seams, and finishing
5. Product-level variation notice
6. Link to related products

If the catalogue contains different leather grades or non-leather materials, explain the variation and direct users to the individual product details.

### Leather Guide

Cover only facts that can be responsibly explained:

- Full-grain, top-grain, suede, shearling, and other actual catalogue materials
- Texture and patina
- Weather and moisture basics
- How to read a product material specification

Avoid presenting every product as full-grain leather.

### Size and Fit Guide

- Measurement diagram using an original illustration or precise CSS/SVG
- Chest, shoulder, sleeve, back length, waist, and coat length instructions as relevant
- Inches and centimeters
- Product-specific fit variation notice
- Marketplace size confirmation guidance
- No body-data collection
- No measurement account or profile

### Care Guide

- Cleaning basics
- Conditioning guidance
- Storage
- Moisture response
- When to use a professional leather cleaner
- Product-material variation notice

Avoid unsafe universal cleaning instructions. State that care depends on the specific material and finish.

### Shipping and Returns

- Explain that policies are controlled by the chosen Etsy or eBay listing
- Link to the actual store policy pages if verified
- State that price, availability, delivery estimate, and returns should be confirmed on the marketplace before purchase
- Do not promise universal free shipping

## 17. Product data model

Keep `src/lib/products.ts` as the catalogue source unless the current architecture provides a safer equivalent. Normalize the data without discarding verified content.

Recommended interface:

```ts
export type Marketplace = "etsy" | "ebay";

export interface ProductImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  kind?: "cutout" | "front" | "back" | "detail" | "lifestyle";
}

export interface MarketplaceLinks {
  etsy?: string;
  ebay?: string;
  primary: Marketplace;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  safeTitle?: string;
  shortDescription: string;
  description: string;
  gender: "men" | "women" | "unisex";
  category: string;
  silhouette?: string;
  material?: string;
  colors: string[];
  price: number;
  currency: string;
  compareAtPrice?: number;
  images: ProductImage[];
  marketplaces: MarketplaceLinks;
  fitNote?: string;
  careNote?: string;
  features?: string[];
  featured?: boolean;
  badges?: string[];
  seoTitle?: string;
  seoDescription?: string;
}
```

### Data rules

- Preserve all 49 stable slugs.
- Preserve exact marketplace URLs.
- Preserve the current verified price and currency.
- Do not invent compare-at prices.
- Do not infer material from image appearance.
- Do not label a product Handmade, New, Best Seller, Limited, Full Grain, or Custom unless verified.
- Store price as a number and format it through `Intl.NumberFormat`.
- Store image alt text with the image object.
- Add runtime or build-time validation for required fields.
- Build fails when a product has no slug, title, image, price, currency, or valid marketplace URL.

### URL validation

Create a script such as `scripts/validate-products.mjs` that checks:

- Duplicate product IDs
- Duplicate slugs
- Empty image arrays
- Invalid image paths
- Invalid price values
- Invalid Etsy or eBay domains
- Missing primary marketplace
- Primary marketplace without a matching URL
- Unexpected internal URL used as a marketplace destination

The script validates format and internal consistency. A separate manual or approved network check validates whether listings are still live.

## 18. Search and discovery architecture

For 49 products, client-side filtering over server-provided product metadata is acceptable. Keep the initial catalogue server-rendered for SEO.

### Search behavior

- Case-insensitive
- Diacritic tolerant
- Matches title, safe title, category, silhouette, material, color, and approved tags
- Debounce only the header live-result rendering
- `/shop?q=` remains shareable and index handling is controlled through canonical rules
- No external search service is needed at launch

### Related products

Rank in this order:

1. Same category
2. Same silhouette
3. Same gender
4. Similar verified price range
5. Featured fallback

Exclude the current product and remove duplicates. Show a maximum of four.

## 19. Motion system

Use GSAP for a small number of high-quality motion moments. Add `@gsap/react` if needed. Register plugins only inside client components.

### Required motion

- Header enters cleanly on first load
- Hero copy reveals with 16px to 24px vertical movement and opacity
- Hero image uses a subtle clip or mask reveal
- Product rows use a short stagger when first entering the viewport
- Editorial images may scale from 1.03 to 1.0
- Section dividers may draw once from left to right
- Sticky header compacts smoothly
- Search and mobile drawer use short opacity and transform transitions

### Timing guidance

- Micro interaction: 160ms to 240ms
- Header and drawer: 240ms to 360ms
- Section reveal: 500ms to 750ms
- Hero sequence: maximum 1.2 seconds
- Product stagger: 60ms to 90ms per item

### Motion rules

- Do not hijack native scrolling.
- Do not add a page preloader.
- Do not use endless floating objects.
- Do not pin multiple long sections.
- Do not animate all text character by character.
- Do not delay navigation for exit animations.
- Do not run large GSAP timelines on every product card.
- Pause or avoid offscreen animation work.
- Use `gsap.context()` or `useGSAP()` cleanup.
- Respect `prefers-reduced-motion` and show final states immediately.

CSS transitions are preferred for simple button, border, color, and card hover states. GSAP is reserved for page-level sequencing and scroll reveals.

## 20. Responsive behavior

Test at minimum:

```text
375 x 812
390 x 844
430 x 932
768 x 1024
1024 x 768
1280 x 800
1440 x 900
1920 x 1080
```

### Mobile rules

- Do not render desktop mega-menu markup visibly.
- Keep primary product actions reachable without excessive scroll.
- Use two-column product grids with readable names and prices.
- Filter drawer uses large touch targets and an always-visible apply action.
- Avoid text overlays on busy photography.
- Disable non-essential parallax.
- Do not place floating widgets over the sticky marketplace action.

### Tablet rules

- Hero may use a 45/55 split or stack based on image crop.
- Product grid uses two or three columns depending on width.
- Header switches to mobile navigation before links become crowded.

### Desktop rules

- Use whitespace to create hierarchy.
- Avoid stretching body copy across the full viewport.
- Keep product card widths visually consistent.
- Sticky elements must respect the footer and viewport height.

## 21. Technical architecture

### Core stack

- Next.js 15 App Router
- React 19
- TypeScript with strict settings
- Tailwind CSS 4
- GSAP with `@gsap/react`
- Next Image
- Next Font
- Existing analytics provider if correctly configured

Do not add a component framework merely for basic cards, buttons, drawers, or accordions. Build a small Kingsford component system.

### Rendering model

- Server Components by default
- Client Components only for search overlay, filter state, gallery controls, mobile drawer, accordions, and motion islands
- Static generation for product and collection routes where possible
- `generateStaticParams` for all product slugs and supported collection categories
- `notFound()` for invalid products or collections
- Use metadata generation from product and collection data

### Suggested component map

```text
src/
  app/
    layout.tsx
    globals.css
    page.tsx
    shop/page.tsx
    men/page.tsx
    women/page.tsx
    collections/[category]/page.tsx
    products/[slug]/page.tsx
    our-story/page.tsx
    craftsmanship/page.tsx
    leather-guide/page.tsx
    size-guide/page.tsx
    care-guide/page.tsx
    shipping-returns/page.tsx
    contact/page.tsx
    privacy/page.tsx
    terms/page.tsx
    sitemap.ts
    robots.ts
  components/
    layout/
      AnnouncementBar.tsx
      SiteHeader.tsx
      ShopMegaMenu.tsx
      MobileNav.tsx
      SearchOverlay.tsx
      SiteFooter.tsx
    home/
      EditorialHero.tsx
      CollectionRail.tsx
      FeaturedEdit.tsx
      GenderEditorial.tsx
      CraftStory.tsx
      SilhouetteGrid.tsx
      MarketplaceTrust.tsx
      VerifiedReviews.tsx
      GuideCards.tsx
      HomeFAQ.tsx
      ClosingCTA.tsx
    catalog/
      CatalogueShell.tsx
      CatalogueToolbar.tsx
      FilterPanel.tsx
      FilterDrawer.tsx
      ActiveFilters.tsx
      ProductGrid.tsx
      ProductCard.tsx
      EmptyResults.tsx
    product/
      ProductGallery.tsx
      ProductSummary.tsx
      MarketplaceActions.tsx
      SizeFitNote.tsx
      ProductDetails.tsx
      ProductStory.tsx
      RelatedProducts.tsx
      MobileMarketplaceBar.tsx
    content/
      EditorialHero.tsx
      ProseSection.tsx
      ImageTextSplit.tsx
      GuideNavigation.tsx
    motion/
      Reveal.tsx
      ImageReveal.tsx
      StaggerGroup.tsx
      MotionProvider.tsx
    ui/
      Button.tsx
      Container.tsx
      SectionHeading.tsx
      Breadcrumbs.tsx
      Accordion.tsx
      Drawer.tsx
      ExternalLink.tsx
  lib/
    products.ts
    product-filters.ts
    related-products.ts
    marketplaces.ts
    analytics.ts
    seo.ts
    site.ts
  scripts/
    validate-products.mjs
```

Adapt this map to the repository instead of duplicating components that already work correctly.

### State rules

- No global state library is required.
- URL search parameters own catalogue filters.
- Local component state owns gallery, drawer, accordion, and search-overlay UI.
- Do not persist sensitive or unnecessary visitor data.
- Recently viewed state, if added later, stays in local storage and contains product IDs only.

## 22. Marketplace conversion and analytics

### Marketplace helper

Create a single helper or component that owns:

- Marketplace label
- Button style
- External-link attributes
- Destination validation
- Accessible name
- Analytics payload
- Primary and secondary ordering

Do not manually implement outbound behavior differently in multiple components.

### Required events

```text
view_home
view_collection
view_product
search_open
search_submit
filter_apply
filter_clear
select_product
marketplace_click
size_guide_open
guide_view
faq_expand
```

Required `marketplace_click` fields:

```ts
{
  marketplace: "etsy" | "ebay";
  productId?: string;
  productSlug?: string;
  source: "header" | "footer" | "product" | "collection" | "home" | "shipping";
  destinationType: "product" | "store";
}
```

Do not include personal data, full referrer URLs with sensitive query values, or visitor-entered free text in analytics events.

Use `sendBeacon` or an analytics navigation-safe method for product outbound events when supported.

## 23. SEO and AEO requirements

### Technical SEO

- Unique title and meta description for every indexable route
- Self-referencing canonical tags
- Canonical `/shop` for non-indexable filter combinations unless an approved SEO landing page exists
- Dynamic sitemap for all products, collections, and core content routes
- Robots rules that allow public content and prevent low-value parameter combinations from becoming crawl traps
- Correct Open Graph and X metadata
- Product-specific social images where assets permit
- Breadcrumb navigation and BreadcrumbList schema
- No broken internal links
- No orphan product pages
- Semantic heading order
- Descriptive image alt text

### Structured data

Use only schema supported by visible page content:

- `Organization`
- `WebSite`
- `BreadcrumbList`
- `Product`
- `ItemList` for collection pages
- `FAQPage` only when the exact questions and answers are visible
- `Article` for future journal pages

Product offer rules:

- Include an `Offer` only when price, currency, availability, condition, and destination URL are accurate.
- Use the exact marketplace product URL as the offer URL when appropriate.
- Do not fabricate aggregate rating data.
- Omit uncertain fields instead of guessing.

### Content SEO

- Write original Kingsford descriptions and do not copy Etsy, eBay, LeatherSCIN, or Buffalo Jackson text verbatim.
- Keep product titles accurate and readable.
- Add concise category introductions above the grid.
- Put longer informational copy after the grid.
- Build internal links among products, collections, guides, and craftsmanship content.
- Avoid keyword stuffing and repetitive headings.

### AEO structure

Guide and FAQ pages should provide concise direct answers followed by useful explanation. Use factual headings such as:

- How do I measure for a leather jacket?
- What information should I confirm before buying on Etsy or eBay?
- How should a leather jacket be stored?
- What is the difference between leather finishes?

## 24. Accessibility requirements

Target WCAG 2.2 AA.

- Keyboard access for all navigation, search, filters, gallery, drawers, tabs, and accordions
- Visible focus styles with sufficient contrast
- Skip-to-content link
- Correct landmark structure
- One page-level H1
- Dialog roles and focus trapping for overlays
- Escape closes dismissible overlays
- Focus returns to the triggering control
- Touch targets at least 44 by 44 pixels
- No information conveyed by color alone
- Alt text for informative imagery
- Empty alt text for decorative imagery
- Form fields have programmatic labels
- Filter changes announced through an `aria-live` region
- External links clearly communicate that a new tab opens
- Reduced-motion support
- Zoom to 200% without clipped content
- Horizontal orientation support on mobile

## 25. Performance requirements

### Performance budgets

- LCP under 2.5 seconds on representative mobile conditions
- CLS under 0.1
- INP under 200ms
- No unoptimized full-resolution images in cards
- Hero mobile asset target under 300KB when visual quality permits
- Hero desktop asset target under 500KB when visual quality permits
- Avoid client-side JavaScript for static content sections
- Load GSAP only where motion components are rendered
- Avoid large icon and component libraries
- No autoplay third-party embeds on initial load
- No synchronous third-party scripts in the head

### Implementation checks

- Use route-level code splitting
- Inspect bundle output before release
- Preconnect only to required origins
- Use `font-display: swap` through Next Font
- Reserve image dimensions
- Avoid layout-dependent JavaScript during initial render
- Use CSS for simple hover and active states
- Verify the sticky header does not cause layout shift

## 26. Error and fallback states

### Product not found

- Return the real Next.js 404 state
- Provide links to Shop, Men, Women, and Home
- Do not silently redirect to the homepage

### Missing marketplace link

- Hide the missing marketplace action
- Show the verified available marketplace only
- Log a non-personal diagnostic in development
- Product validation should catch this before deployment

### Broken image

- Use a neutral Kingsford placeholder only when an asset fails unexpectedly
- Placeholder must not pretend to be the product
- Record missing assets during build validation

### Search failure

- Search remains local and should not depend on a remote service
- If no results match, show clear reset actions

### JavaScript unavailable

- Primary navigation, product content, collection content, and marketplace links remain usable
- Filters may fall back to the complete server-rendered product list

## 27. Security and privacy

- No visitor photo or body data collection
- No account data
- No payment data
- Validate and encode all URL search parameters
- Do not render arbitrary HTML from product data
- Use safe external-link attributes
- Restrict analytics to necessary events
- Keep environment secrets server-only
- Add a Content Security Policy compatible with actual services
- Remove unused API routes and environment variables from earlier experimental plans
- Remove dead storage buckets, upload rules, and provider keys if they were added during an unfinished implementation
- Do not expose marketplace management credentials

## 28. Phased implementation plan

Each phase has a required exit gate. Antigravity should implement sequentially and maintain a short phase log in the repository.

### Phase 0: Baseline, cleanup, and source-of-truth lock

Tasks:

1. Create or reuse `feat/premium-white-marketplace-redesign`.
2. Record `git status --short` and preserve unrelated changes.
3. Run current install, lint, type check, tests, and build.
4. Capture current screenshots at mobile and desktop widths.
5. Generate a catalogue audit for all 49 products.
6. Export the current slug and marketplace URL map before editing.
7. Search for conflicting features and routes listed in Section 4.
8. Remove obsolete experimental functionality, Tailor's Docket UI, dead imports, dead route links, and unused configuration.
9. Update repository planning documents so they do not request a dashboard, cart, checkout, account, or photo-based feature.

Deliverables:

- Baseline report
- Preserved product and URL map
- Clean build
- Conflict list resolved

Exit gate:

- All 49 products accounted for
- No production route depends on removed functionality
- Existing site builds before redesign work begins

Suggested commit:

```text
chore: align kingsford scope with marketplace storefront
```

### Phase 1: Design foundation and reusable UI

Tasks:

1. Configure Next Font.
2. Add design tokens to `globals.css`.
3. Build Container, Button, SectionHeading, Breadcrumbs, ExternalLink, Accordion, and Drawer primitives.
4. Add consistent focus styles.
5. Add GSAP and the motion utility components.
6. Build the responsive grid, spacing, and typography foundations.
7. Create a small internal design-check page only in development or Storybook if already configured.

Deliverables:

- White-theme tokens
- Reusable components
- Reduced-motion behavior
- Responsive foundations

Exit gate:

- Components pass contrast and keyboard checks
- No hardcoded palette remains in newly built page components
- Production build succeeds

Suggested commit:

```text
feat: add premium white design foundation
```

### Phase 2: Global shell, navigation, search, and footer

Tasks:

1. Build the announcement strip.
2. Build desktop header and focused mega menu.
3. Build mobile header and accessible drawer.
4. Build header search overlay and live results.
5. Add correct Etsy and eBay external links.
6. Build the footer and content navigation.
7. Add sticky-header motion and reduced-motion fallback.

Deliverables:

- Complete responsive shell
- Search entry point
- Marketplace store entry points

Exit gate:

- Header works by keyboard at all test widths
- Search returns correct products
- No cart, account, dashboard, or obsolete feature link exists
- Focus and background-scroll behavior are correct

Suggested commit:

```text
feat: rebuild marketplace storefront shell
```

### Phase 3: Homepage redesign

Tasks:

1. Build the editorial white hero.
2. Build collection navigation rail.
3. Build featured product edit.
4. Build men and women editorial cards.
5. Build craftsmanship story.
6. Build silhouette grid.
7. Build featured collection story.
8. Build marketplace clarity section.
9. Render verified feedback or approved fallback.
10. Build guide cards, FAQ, and closing CTA.
11. Add restrained GSAP section reveals.

Deliverables:

- Complete premium homepage
- Real catalogue content
- Original Kingsford visual identity

Exit gate:

- Homepage remains predominantly white
- All home CTAs resolve correctly
- No unverified proof point or review appears
- Mobile LCP and CLS remain within the stated budgets in local testing

Suggested commit:

```text
feat: redesign kingsford home experience
```

### Phase 4: Product data, shop, and collection pages

Tasks:

1. Normalize product data while preserving verified values.
2. Add product validation script.
3. Build product card and responsive grid.
4. Build URL-synced search, filters, active chips, and sorting.
5. Build `/shop`.
6. Redesign `/men` and `/women`.
7. Build `/collections/[category]` from actual product categories.
8. Add empty states and no-JavaScript fallback.

Deliverables:

- Complete 49-product catalogue
- Shareable filtered URLs
- Indexable collection pages

Exit gate:

- Product validator passes
- Every current product appears in at least one appropriate catalogue view
- Back and forward navigation restores filters
- No duplicate product card is rendered unintentionally

Suggested commit:

```text
feat: rebuild product discovery and collections
```

### Phase 5: Product detail page redesign

Tasks:

1. Build accessible product gallery.
2. Build product summary and verified facts.
3. Build centralized marketplace action component.
4. Build size and fit guidance.
5. Build product detail accordions.
6. Build product story and related products.
7. Build mobile marketplace bar.
8. Remove local transaction and obsolete measurement controls.
9. Verify every stable product URL.

Deliverables:

- Redesigned PDP for every product
- Exact Etsy and eBay conversion actions
- Responsive gallery and details

Exit gate:

- All 49 product pages build successfully
- Every displayed marketplace action uses the correct verified URL
- Gallery is keyboard and touch accessible
- No local cart, checkout, quantity, or fake size transaction state exists

Suggested commit:

```text
feat: redesign product pages for marketplace conversion
```

### Phase 6: Story, guide, help, and legal pages

Tasks:

1. Build Our Story.
2. Build Craftsmanship.
3. Build Leather Guide.
4. Build Size and Fit Guide.
5. Build Care Guide.
6. Build Shipping and Returns.
7. Build Contact, Privacy, and Terms.
8. Add internal links among guides, collections, and products.

Deliverables:

- Complete trust and education layer
- Original content structure
- No dead footer links

Exit gate:

- Every global navigation and footer route resolves
- Claims are verified or written with appropriate product-level qualifiers
- Pages remain readable at 200% zoom

Suggested commit:

```text
feat: add kingsford story guides and trust pages
```

### Phase 7: SEO, analytics, accessibility, and performance

Tasks:

1. Add dynamic metadata.
2. Add sitemap, robots, canonicals, Open Graph, and schemas.
3. Add central analytics events.
4. Optimize images and font loading.
5. Inspect bundles and remove unused client code.
6. Run keyboard and screen-reader-oriented checks.
7. Test reduced motion.
8. Run Lighthouse on representative routes.
9. Validate external-link behavior and analytics.

Deliverables:

- SEO-complete site
- Conversion measurement
- Performance and accessibility report

Exit gate:

- No schema validation errors
- Zero broken internal links
- Zero incorrect marketplace links
- Lighthouse targets met or any exception documented with evidence

Suggested commit:

```text
feat: complete seo analytics and performance pass
```

### Phase 8: Final QA and release preparation

Tasks:

1. Run the complete viewport matrix.
2. Test Chrome, Edge, Safari, and Firefox where available.
3. Test all 49 product pages.
4. Test every filter and sort combination for errors.
5. Test keyboard-only navigation.
6. Test outbound marketplace links.
7. Run final lint, type check, tests, and build.
8. Compare final screenshots with the visual acceptance criteria.
9. Produce a release summary with changed files, test results, known limitations, and deployment steps.

Exit gate:

- Definition of Done is fully satisfied
- No console or hydration errors
- No placeholder copy or temporary assets
- Feature branch is ready for review

Suggested commit:

```text
chore: finalize premium white redesign
```

## 29. Testing plan

### Automated checks

- TypeScript strict type check
- ESLint
- Production build
- Product-data validation
- Route generation test for all product slugs
- Unit tests for filtering, sorting, related products, and marketplace helper
- Component tests for search, drawer, filters, gallery, and accordions when the repository supports them
- End-to-end smoke tests for home, shop, collection, product, guide, and external-link paths

### Manual checks

- Header and drawer keyboard navigation
- Search with partial terms, color, category, and no result
- Filter apply, remove, clear, back, forward, and refresh
- Gallery keyboard, touch, fullscreen, and close behavior
- Marketplace link source and destination
- Reduced motion
- 200% zoom
- Screen-reader labels for marketplace actions
- Mobile sticky action overlap
- Long product titles
- One-marketplace and two-marketplace products
- Missing optional material, fit, or secondary image data

## 30. Risk register

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Marketplace URL mapped to the wrong product | Critical conversion failure | Preserve pre-change map, validate data, manually sample every product |
| Marketplace price becomes stale | Trust and schema issue | Use verified current data and schedule a future verification process |
| White theme feels generic | Weak brand identity | Use original typography, leather-detail photography, editorial asymmetry, and restrained brown accents |
| Too much reference copying | Legal and brand risk | Recreate hierarchy with original components, copy, proportions, and assets |
| GSAP reduces performance | Poor mobile experience | Use client islands, short timelines, cleanup, and reduced motion |
| Product image inconsistency | Uneven catalogue | Normalize aspect ratios and use neutral frames without distorting products |
| Unverified craftsmanship claim | Trust and compliance risk | Require source evidence or qualify the wording at product level |
| Old feature remnants remain | Confusing UX and dead code | Repository-wide search, route audit, and final forbidden-term check |
| Filters create crawl traps | SEO dilution | Canonicalize parameter states and create indexable landing pages only for approved categories |
| Sticky controls overlap content | Accessibility issue | Test full viewport matrix and reserve safe-area spacing |

## 31. Visual acceptance criteria

The redesign is visually accepted only when all statements below are true:

- The first impression is white, spacious, editorial, and premium.
- The site does not resemble a SaaS dashboard or an admin template.
- Header, search, filters, and product cards feel like one design system.
- Leather brown is an accent, not the page background.
- Product imagery is larger and clearer than supporting UI.
- Men, women, categories, products, craftsmanship, guides, and marketplaces are discoverable without clutter.
- Homepage sections do not repeat the same four-card pattern.
- Typography has clear editorial hierarchy without script fonts.
- Buttons are restrained rectangles, not oversized pills.
- Motion is noticeable but never distracting.
- Mobile layouts are intentionally composed.
- There is no cart, login, dashboard, Tailor's Docket, photo upload, fitting room, or generated-preview UI.

## 32. Definition of Done

The project is complete only when:

1. All 49 current products remain present.
2. All stable product slugs remain valid.
3. Exact Etsy and eBay links are preserved and verified.
4. The homepage follows the specified white editorial architecture.
5. Shop, men, women, collections, and product pages are fully responsive.
6. Search, filters, sorting, gallery, navigation, and accordions work by mouse, touch, and keyboard.
7. No on-site transaction, account, dashboard, measurement, upload, or generated-preview feature exists.
8. Every required story, guide, help, and legal route resolves.
9. Metadata, canonicals, sitemap, robots, Open Graph, and structured data are implemented.
10. Analytics captures outbound marketplace clicks without personal data.
11. WCAG 2.2 AA requirements are met.
12. Core Web Vitals targets are met in representative testing or exceptions are documented.
13. No console errors, hydration warnings, TypeScript errors, or build failures remain.
14. No placeholder copy, placeholder reviews, dead links, or temporary images remain.
15. Repository documentation matches the final product model.
16. Final release summary and QA evidence are available on the feature branch.

## 33. Ready-to-paste Antigravity master prompt

Copy everything below into Antigravity together with this complete PRD file:

```text
You are the senior product designer and Next.js frontend engineer responsible for redesigning the existing Kingsford Leather repository:

https://github.com/Ruhan-AI/kingsford-leather

Read the attached "Kingsford Leather Premium White Website Redesign PRD v3.0" in full and treat it as the current source of truth. It overrides all older UI, dashboard, commerce, measurement, upload, and experimental-feature plans.

Work inside the existing repository. Do not replace it with a template. First inspect git status and preserve all unrelated existing changes. Use or create this feature branch:

feat/premium-white-marketplace-redesign

The product model is fixed:

1. Kingsford is a premium white-theme brand and product-discovery website.
2. Preserve all 49 products, stable slugs, verified product information, images, prices, and exact Etsy/eBay URLs.
3. Etsy and eBay are the only checkout destinations.
4. Do not build a cart, checkout, payment flow, login, account, wishlist account, admin area, customer dashboard, order system, inventory system, or marketplace sync.
5. Remove The Tailor's Docket and all obsolete measurement UI.
6. Do not build photo upload, virtual fitting, generated preview, body scan, or any similar feature.
7. Do not show local size, quantity, stock, or purchase controls that cannot transfer to the selected marketplace.

Design direction:

- Use LeatherSCIN for white catalogue clarity, collection banners, search, filters, and product cutout presentation.
- Use Buffalo Jackson for heritage storytelling, editorial image/copy compositions, category pathways, craftsmanship depth, and detailed product galleries.
- Build an original Kingsford system. Do not copy code, text, images, logo, fonts, or exact layouts from either reference.
- Keep at least 70% of visible surfaces white.
- Use warm ivory for section separation and leather brown only as an accent.
- Use Cormorant Garamond for display and Manrope for body/interface through Next Font.
- Use restrained GSAP motion with reduced-motion support. Do not hijack scroll, add a preloader, or overanimate text.
- Use square or lightly rounded editorial geometry, thin borders, large product imagery, and generous spacing.
- Avoid glassmorphism, neon colors, dark site-wide sections, excessive pills, cartoon icons, and template-like dashboard components.

Technical direction:

- Keep Next.js 15 App Router, React 19, TypeScript, and Tailwind CSS 4.
- Use Server Components by default and small client islands for search, filters, gallery, drawers, accordions, and GSAP.
- Use Next Image, Next Font, static generation for products/collections where possible, dynamic metadata, sitemap, robots, canonicals, Open Graph, Product/ItemList/Breadcrumb schemas, and accessible semantic markup.
- Use URL search parameters for shop filters.
- Centralize marketplace links and analytics behavior.
- Add product-data validation for duplicate slugs, missing images, prices, currencies, and invalid Etsy/eBay URLs.
- Maintain WCAG 2.2 AA and the performance budgets in the PRD.

Implement the work strictly in the nine phases numbered 0 through 8 in the PRD:

0. Baseline, cleanup, and source-of-truth lock
1. Design foundation and reusable UI
2. Global shell, navigation, search, and footer
3. Homepage redesign
4. Product data, shop, and collection pages
5. Product detail page redesign
6. Story, guide, help, and legal pages
7. SEO, analytics, accessibility, and performance
8. Final QA and release preparation

At the end of every phase:

- Run lint, type checking, tests, product validation, and a production build as applicable.
- Fix all errors before continuing.
- Verify mobile and desktop layouts.
- Make one logical commit using the suggested commit wording from the PRD.
- Update a short implementation log with completed work and any verified limitation.

Do not stop for routine implementation confirmation. Stop only if the repository contains an unresolved conflict that could destroy user work, required product data is missing, or a decision would materially change the locked product model.

Final output must include:

- Complete redesigned source code on the feature branch
- All test and build results
- The 49-product slug and marketplace-link verification result
- Before and after screenshots at representative mobile and desktop widths
- Accessibility and Lighthouse results
- A concise release summary and deployment instructions
```

## 34. Reference notes

Visual and structural research for this revision used:

- https://www.leatherscin.com/
- https://buffalojackson.com/

Reference principles are translated into an original Kingsford system. No reference content or proprietary asset should be shipped in the product.
