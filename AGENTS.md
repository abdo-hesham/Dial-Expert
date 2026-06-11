<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:design-system -->
# Design System

This project follows a strict design system defined in `DESIGN.md`. Before writing any UI code, read the full spec for typography, color palette, spacing, motion, and component styling rules.

Key rules:
- Fonts: Satoshi (display/headlines), Inter (body), General Sans (statement marquee)
- Palette: binary white/black with single blue accent `#3B82F6` for interactive elements
- No serif fonts, no overlapping elements, no 3-column equal card layouts
- All motion via `transform`/`opacity` only — spring physics default
- Responsive: mobile-first collapse, `clamp()` on all headings
<!-- END:design-system -->

<!-- BEGIN:graphify -->
# Graphify: Codebase Knowledge Graph

This project uses `graphify` to build a navigable knowledge graph from the codebase. Run `/graphify .` to generate interactive HTML graph, JSON, and audit report in `graphify-out/`. Use `/graphify query "<question>"` to traverse the graph.

Installed: `graphifyy` (pip).

Commands:
- `/graphify` — full pipeline on current directory
- `/graphify <path>` — full pipeline on specific path
- `/graphify query "<question>"` — BFS traversal (broad context)
- `/graphify query "<question>" --dfs` — DFS trace (specific path)
- `/graphify add <url>` — fetch URL, add to corpus, update graph
- `graphify update .` — fast code-only re-extract (no LLM needed)

**Auto-update rule:** After every prompt that modifies the codebase (edit, write, or delete files), run `graphify update .` in the project root to keep the knowledge graph current. No need to ask — just do it silently after any file change.
<!-- END:graphify -->

<!-- BEGIN:framer-vs-design -->
# Framer Canvas vs DESIGN.md — Gap Analysis

Last updated: initial audit. Compares the Framer MCP canvas state against DESIGN.md spec.

## ✅ ALIGNED (matches spec)

| Section | Status | Details |
|---------|--------|---------|
| **Typography** | ✅ Exact match | Satoshi-black 64px H1, Satoshi-black 48px H2, Satoshi-bold 40px H3, Inter body throughout. Text styles defined: `/H1/Heading`, `/Heading 2`, `/Heading 3`, `/Body Large/Regular`, `/Body Medium/Medium` |
| **Color Palette** | ✅ Match | `/Light Colors/White` (#FFFFFF), `/Dark Colors/Dark` (#000000), `/Theme color 1` (#3B82F6 blue accent), `/Light Colors/Border` (#D9D9D9), `/Gray/Gray` (#F7F9FC), `/Gray/Gray Secondary` (#5B5B5B), `/Gray/Gray Quaternary` (#121212), `/Line Border` (#262626) |
| **Hero Section** | ✅ Match | Full-viewport video bg (900px), dual overlay Frame, 1280px constrained container, left-aligned, single "Let's Talk" CTA, word-by-word stagger ready |
| **Who We Are** | ✅ Match | Centered layout, eyebrow label+icon, Satoshi 48px heading, body at 20px Inter-Medium, 4-column stats grid (gap 24px) with Satoshi numbers |
| **Services** | ✅ Match | Black bg (`/Dark Colors/Dark`), Satoshi index numbers (01-07), 7 services in vertical stack, 1280px container, 120px section padding |
| **Revenue Cycle** | ✅ Match | 3-step cards (01/02/03) with Satoshi step numbers, stacked vertical with 32px gap, no card bg or shadows, border-top dividers implied |
| **Timeline** | ✅ Match | Uses `WhatToExpectTimeline` code component with progressColor #3B82F6 (blue accent), 1280px container |
| **FAQ** | ✅ Match | Two-column layout (470px left heading + right accordion list), items separated by border, `/Light Colors/White` bg |
| **CTA Section** | ✅ Match | Full-width marquee-style with `CallToAction` components, links to /contact |
| **Content Width** | ✅ Match | All sections use `maxWidth="1280px"` or `100%` with centered alignment |
| **Section Padding** | ✅ Match | Standard 120px top/bottom padding throughout |
| **No Overlapping Elements** | ✅ Clean | No absolute text-on-image stacking outside hero; clean spatial zones |
| **No 3-column cards** | ✅ Avoided | Uses asymmetrical grids and hover-expand rows instead |

## 🟡 PARTIAL / NEEDS VERIFICATION

| Section | Issue | Action |
|---------|-------|--------|
| **Navigation** | 🟡 Component exists (`Navbar` g5CIJltLc) but NOT placed in page XML. Current page has no nav bar. Spec: fixed glassmorphism `rgba(10,10,10,0.38)` + `blur(34px) saturate(190%)` + pill 999px + `inset 0 1px 0 rgba(255,255,255,0.22)` | Insert Navbar ComponentInstance into page |
| **Footer** | 🟡 `Footer` + `FooterSection` components exist but NOT placed in page XML. Spec: black bg, video overlay (0.23 opacity), 2-column grid, CTA fill-slide hover, 223px Satoshi wordmark | Insert Footer into page |
| **Gallery (Meet the Floor)** | 🟡 `Gallery` component exists (`jN5W89UBM`), but internal must verify: infinite scroll 38s marquee, grayscale→color hover, 12px border-radius, gradient overlay with name/role on hover | Inspect component internals |
| **The Floor Problem (Orbit)** | 🟡 Uses `ProcessesCard` component with 4 labels (Leads, Appointments, Closes, CSAT). Need to verify it's SVG donut-chart with animated arcs, not a static card | Inspect component internals |
| **Button shapes** | 🟡 Services CTA uses borderRadius="24px" (not 999px). Hero uses `SlideInButton` component. Spec: pill-shaped `border-radius: 999px` | Review button radii |
| **Phone variant** | 🟡 Phone variant exists but has NO content — empty responsive layout | Build mobile content / collapse |

## ❌ MISSING / BROKEN

| Requirement | Status | Spec Reference |
|------------|--------|---------------|
| **Navbar glassmorphism** | ❌ No nav visible on page | §4 Navigation |
| **Footer wordmark** | ❌ No footer on page | §4 Footer |
| **General Sans statement marquee** | ❌ Missing closing marquee statement | §3 Typography (Special Statement) |
| **Mobile-first collapse (<768px)** | ❌ Phone variant empty | §7 Responsive |
| **Navigation collapse at <1200px** | ❌ Tablet breakpoint not built | §7 Responsive |
| **`clamp()` on all headings** | ❌ Text styles use fixed px sizes | §7 Responsive / §3 Typography |
| **Hero word-wrap clamp** | ❌ Hero title uses fixed 64px | §7 Responsive |
| **GSAP ScrollTriggers** | ⚠️ SmoothScroll element exists but full ScrollTrigger pinning/scrubbing needs verification | §6 Motion |

## 🎨 Color Style Cleanup

Duplicative color style paths found:
- `/White` defined 3 times (paths: `/White`, `/Light Neutral 1`, `/Primary`)
- `/Black` defined as `/Black` and `/Dark Neutral 1`
- `/Line Border` (rgb 38,38,38) — correct per spec
- `/Lime Green` = rgb(59,130,246) — misnamed, should be Blue Signal

## 🏗 Page Structure (Desktop)

Current section order on page:
1. HeroSection (900px)
2. WhoWeAre (light bg, 4 stats)
3. Meet The Floor / Gallery
4. Highlight Marker Text Reveal
5. The Floor Problem (ProcessesCard orbit)
6. Revenue Cycle (3 steps)
7. ServiceSection (7 services, dark bg)
8. WhatToExpect / Timeline
9. TestmonialsSection
10. FaqsSection
11. CtaSection (2 marquee bands)
12. SmoothScroll decorator

**Missing from page:** Navbar, Footer
<!-- END:framer-vs-design -->
