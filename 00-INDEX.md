# Kingsford Leather — Web Platform Documentation

**Project:** kingsfordleather.com (D2C storefront)
**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS · GSAP · Headless commerce
**Doc set version:** 1.0
**Last updated:** 2026-08-25

---

## How to use this doc set

These five documents are written to be read by **both humans and coding agents** (Claude Code, Cursor, etc.). Read them in order the first time. After that, `05-MEMORY.md` is the only one that changes often.

| # | Document | What it answers | Who owns it |
|---|---|---|---|
| 01 | [PRD](./01-PRD.md) | What are we building, for whom, and why. Scope, metrics, risks. | Founder / Product |
| 02 | [ARCHITECTURE](./02-ARCHITECTURE.md) | How the system is built. Stack, data model, folders, integrations. | Tech lead |
| 03 | [DESIGN](./03-DESIGN.md) | How it looks and moves. Tokens, type, layout, motion spec. | Design lead |
| 04 | [RULES](./04-RULES.md) | Non-negotiable coding + content rules for anyone touching the repo. | Tech lead |
| 05 | [MEMORY](./05-MEMORY.md) | Living state: decisions made, what's done, open questions. | Everyone (append-only) |

---

## Agent bootstrap instruction

If you are an AI coding agent starting a session on this repo, do this first:

1. Read `05-MEMORY.md` in full — it tells you the current phase and what's already decided.
2. Read `04-RULES.md` in full — these are hard constraints, not suggestions.
3. Skim `02-ARCHITECTURE.md` and `03-DESIGN.md` for the section relevant to your task.
4. Only read `01-PRD.md` when you need to know *why* something exists or whether a feature is in scope.
5. At the end of your session, append to the Decision Log and Session Log in `05-MEMORY.md`.

Copy `04-RULES.md` content into `CLAUDE.md` (or `.cursorrules`) at the repo root so it loads automatically.

---

## Repo convention

```
kingsford-leather/
├── CLAUDE.md            # mirrors 04-RULES.md
├── docs/
│   ├── 00-INDEX.md
│   ├── 01-PRD.md
│   ├── 02-ARCHITECTURE.md
│   ├── 03-DESIGN.md
│   ├── 04-RULES.md
│   └── 05-MEMORY.md
├── src/
└── ...
```

---

## Quick brand facts (single source of truth)

| Field | Value |
|---|---|
| Brand name | Kingsford Leather |
| Tagline | Handcrafted for Wild Roads & Cold Nights |
| Market entity | Canada (customer-facing) |
| Production | In-house facility, Pakistan |
| Core offer | Genuine leather outerwear, made to the customer's measurements |
| Price band | CA$140 – CA$450 |
| Existing channels | Etsy (`KingsfordLeatherCA`), eBay (`kingsfordleather`) |
| Team | Iqbal — Owner / Admin · Sahil — Founder, Production & Ops · Shahzar — Marketing & SEO |

> ⚠️ **Unresolved:** Etsy "About" says the brand started in **2022**; eBay "About" says **2018**. Pick one, correct both marketplaces, and use that single year everywhere on the new site. See `01-PRD.md` §11.
