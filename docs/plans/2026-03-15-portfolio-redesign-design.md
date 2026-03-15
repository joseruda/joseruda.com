# Portfolio Redesign — Design Document
**Date:** 2026-03-15
**Status:** Approved
**Direction:** Approach A — Split Hero, Clinical Panels

---

## Overview

Redesign of joseruda.com from the current "dark precision/AI" aesthetic (near-black + teal) to a Life Sciences/Biopharma style using deep navy + Veeva amber (`#F5A800`). The site remains a single-page static HTML/CSS/JS portfolio. No framework, no build step.

Key structural change: addition of a **Services** section and revamp of **Experience** to reflect an 85% Veeva / 15% pre-Veeva career split.

---

## Design Tokens

### Palette

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#070D1A` | Page background (deep navy) |
| `--bg-surface` | `#0D1829` | Alternate section backgrounds |
| `--bg-card` | `#111F35` | Cards, panels |
| `--accent` | `#F5A800` | Veeva amber — primary accent |
| `--accent-glow` | `rgba(245,168,0,0.15)` | Glows, halos |
| `--accent-dim` | `rgba(245,168,0,0.08)` | Subtle fills |
| `--accent-mid` | `rgba(245,168,0,0.35)` | Borders, rules |
| `--text` | `#EEF2F7` | Primary text |
| `--text-muted` | `rgba(238,242,247,0.55)` | Body copy |
| `--border` | `rgba(245,168,0,0.15)` | Card borders |
| `--border-soft` | `rgba(238,242,247,0.08)` | Subtle dividers |

### Typography
- **Display:** Instrument Serif (italic, headings) — unchanged
- **Body:** Epilogue 300/400/500 — unchanged
- **Labels/Mono:** DM Mono (badges, tags, nav) — unchanged

### Background Texture
Grid overlay retained but navy-tinted: `rgba(245,168,0,0.04)` lines instead of teal. Creates a technical grid feel without AI-glow connotations.

---

## Navigation

- Logo: `JR_` in DM Mono, amber
- Links: About · Skills · Services · Experience · Contact
- CTA button: `Contact` — amber outlined
- Scroll behaviour: transparent → navy frosted glass on hero exit (unchanged logic)

---

## Section 1 — Hero

**Layout:** Two-column split, vertically centred, full viewport height.

**Left column (60%):**
- Mono badge: `LIFE SCIENCES & BIOPHARMA`
- Large italic serif: *Jose Ruda*
- Thin amber horizontal rule (1px, gradient to transparent)
- Mono subtitle: `CONSULTANT · COMMERCIAL CONTENT`
- Tagline: *AI-driven workflows. Regulated content lifecycle. Enterprise-scale implementation.*
- Two CTAs side by side:
  - `Get in Touch` — amber outlined button (scrolls to #contact)
  - `View Services` — ghost button (scrolls to #services)

**Right column (40%):**
- Headshot in sharp rectangular frame
- Thin amber L-bracket accent (top + left edges)
- Floating badge bottom-right corner: `VAULT ADMIN CERTIFIED` (mono, amber on dark card)
- Subtle amber radial glow behind photo

**Animations:** Staggered fade-up left column; photo slides in from right.

**Photo file:** `assets/headshot.jpg` (to be added to repo)

---

## Section 2 — About

**Layout:** Two-column grid — prose left, fact cards right.

**Prose (left):** 2 paragraphs max.
- Opens with Veeva/life sciences focus: consultant in commercial content implementation for Life Sciences and Biopharma, specialising in Veeva Vault platforms, regulated content lifecycle, and AI-driven workflows.
- Closes with one sentence on supply chain/ops background as the source of a delivery-first, operationally grounded consulting approach. MBA in AI mentioned.

**Fact cards (right):** Amber left-border cards.

| Label | Value |
|---|---|
| Industry | Life Sciences & Biopharma |
| Specialisation | Veeva Vault · Commercial Content |
| Qualification | MBA in Artificial Intelligence |
| Experience | 8+ Years |
| Background | Supply Chain & Operations |
| Languages | English · Spanish · Catalan |

No availability/status messaging anywhere on the page.

---

## Section 3 — Services *(new)*

**Layout:** 3-column card grid.

Each card structure:
- Large mono number top-left: `01`–`06`
- Amber top-border rule (2px)
- Bold italic serif service title
- 2-sentence description
- Tag row at bottom

| # | Title | Tags |
|---|---|---|
| 01 | Veeva Vault Implementation | PromoMats · MedComms |
| 02 | MLR Process Design | Regulatory · Compliance |
| 03 | AI-Driven Content Workflows | Automation · Agentic |
| 04 | Scientific Communication Platform | SCP · Medical Content |
| 05 | API & System Integrations | Vault API · Downstream Systems |
| 06 | Training & Change Management | Enablement · Go-live |

---

## Section 4 — Capabilities

**Layout:** 3-column card grid. Amber top-border on Veeva cards; `--border-soft` on foundation card.

**Vault Administrator Certified** banner above grid (amber, unchanged style).

**Veeva & Life Sciences (5 cards):**

| Title | Tags |
|---|---|
| AI & Agentic Workflows | AI Implementations · Automation |
| MLR Process Design & Optimisation | Regulatory · Compliance |
| Claims Management & Content Lifecycle | Claims · PromoMats |
| SCP Digitisation | SCP · Medical Content |
| System Configuration & Validation | Configuration · Go-live |

**Foundation (1 card — visually secondary):**

| Title | Tags |
|---|---|
| Operations & Process Transformation | Supply Chain · Team Leadership · Power Automate |

The foundation card uses `--border-soft` borders (no amber top-border) and carries a small `FOUNDATION` mono label above the title to signal context.

---

## Section 5 — Experience

**Layout:** Vertical timeline. Amber dot + line. 4 Veeva entries + 1 pre-Veeva consolidated entry separated by a thin amber divider.

**Veeva entries (outcome-led):**

1. **[Current]** Functional Analyst — AI-Driven Content Implementation
   *Aligning AI capabilities with regulated commercial content processes at global scale. Responsibilities span requirements definition, functional design, and cross-functional delivery within a major biopharma programme.*

2. Functional Analyst — Medical Content Migration & SCP Digitisation
   *Led cross-market delivery across Phases 0 and 1 of a large-scale medical content migration and SCP digitisation initiative. Delivered process analysis, requirements tracking, and functional validation.*

3. Configuration Analyst — EU Digital Publishing Rollout
   *Enabled compliant digital content distribution across multiple European markets as part of a multi-country biopharma publishing infrastructure programme.*

4. Implementation Consultant & Training Lead — Essentials Implementation
   *Full-cycle ownership from configuration through go-live. Combined platform configuration with training programme design and end-user adoption, delivering full enablement from inception.*

**Pre-Veeva consolidated entry (after amber divider):**

> **Operations & Commercial Leadership** — *Prior to Life Sciences*
> Eight years leading commercial operations across European logistics — managing a €78M pipeline, international teams across Spain, Poland, and the UK, and delivering process automation that cut response times by 40%. Foundation in data-driven operations, team management, and cross-border execution that informs a delivery-first consulting approach.

---

## Section 6 — Contact

**Layout:** Centred, same structure as current.

- Section label: `// Contact`
- Heading: *Let's Connect*
- Intro: `Get in touch via email or LinkedIn.` (no availability language)
- Email link + LinkedIn link (same as current)
- Footer: `© 2026 Jose Ruda · Life Sciences & Biopharma Consultant`

All hover states use amber (`--accent`, `--accent-mid`, `--accent-glow`).

---

## Implementation Notes

- **Photo asset:** Save headshot as `assets/headshot.jpg`
- **Magic MCP:** Use 21st.dev Magic to generate UI components (hero split layout, service cards, capability cards) — integrate into static HTML
- **No new dependencies:** Keep vanilla HTML/CSS/JS, no framework
- **Responsive:** Mobile breakpoints — hero stacks (photo above text on mobile), 3-col grids → 2-col → 1-col
- **All teal references replaced** with amber equivalents throughout style.css
- **Nav updated** to include Services link
