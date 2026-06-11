# Design System: Dial Expert

## 1. Visual Theme & Atmosphere

A premium B2B brand site for a sales outsourcing floor — high-conviction, direct, and visually severe. The atmosphere is dark-contrast editorial with moments of tight asymmetry. Typography carries the weight: massive Satoshi headlines in all-caps land like statements, while body copy breathes in Inter at relaxed leading. The palette is binary — absolute white canvas against absolute black backgrounds — with a single blue accent (`#3B82F6`) that appears only on interactive elements and numeric callouts. Motion is purposeful and staggered: spring-based entrances, cinematic word-by-word hero reveals, and perpetual horizontal marquees that mirror the "floor never stops" ethos.

- **Density:** 5 — "Daily App Balanced"
- **Variance:** 6 — "Offset Asymmetric" (left-aligned hero, centered sections, full-width galleries)
- **Motion:** 7 — "Fluid CSS to Cinematic" (staggered word reveals, spring micro-interactions, marquee loops)

## 2. Color Palette & Roles

- **Pure Canvas** (`#FFFFFF`) — Primary surface for light sections, cards, and page background
- **Absolute Black** (`#000000`) — Dark section backgrounds, footer, hero base
- **Charcoal Ink** (`#000000`) — Primary body text
- **Muted Steel** (`#4A4F54`) — Secondary text, descriptions, metadata on light backgrounds
- **White Muted** (`rgba(255,255,255,0.68)`) — Secondary text on dark backgrounds
- **Whisper Border** (`#D9D9D9`) — Structural borders, dividers, input outlines on light
- **Subtle Border Dark** (`rgba(255,255,255,0.12)`) — Structural borders on dark backgrounds
- **Deep Border** (`#374151`) — Dark mode border alternative
- **Blue Signal** (`#3B82F6`) — Single accent for CTAs, active states, focus rings, stat numbers, interactive highlights
- **Deep Blue** (`#1A55F9`) — Secondary accent for link hover states and timeline progression
- **Lime Accent** (`#D0FF71`) — Rare secondary accent (decorative, light-brand moments)
- **Soft Surface** (`#F7F9FC`) — Subtle background tone for alternate surfaces
- **Gray Secondary** (`#5B5B5B`) — Low-priority metadata text
- **Charcoal Deep** (`#121212`) — Near-black surface for dark gray sections
- **Line Border** (`#262626`) — Dark structural borders on deep backgrounds

## 3. Typography Rules

- **Display / Headlines:** `Satoshi` — Ultra-bold (900) for H1/H2/H3, bold (700) for H4+. All-caps Hero uses variable tracking, uppercase with no letter-spacing. Hierarchy through weight and size, not color or decoration. Max scale: 64px Hero down to 40px subheadings.
- **Body:** `Inter` — Weights 400–700. Relaxed 1.6 leading. Max-width contained at 840px (section lead) or 1280px (full-width copy). 65ch effective max for readability.
- **Monospace:** Not used — high-density numbers use Satoshi with tabular-nums or Inter.
- **Special Statement:** `General Sans` — Bold (700), 64px, tight letter-spacing (-1.8px), for the marquee-style closing statement in the Team/Floor section.
- **Scale:** `clamp()` responsive scaling on all headings. Hero title: 64px (desktop) → 22px (mobile). Section headings: 48px → 28px. Body minimum: 14px.
- **Banned:** Serif fonts everywhere (`Times New Roman`, `Georgia`, `Garamond`, `Palatino`). Inter is allowed here (B2B context, not creative/editorial — functional clarity wins).

## 4. Component Stylings

- **Buttons:** Pill-shaped (border-radius 999px). Flat background with no outer glow. Light fill (#FFF + `#090909` text) for primary; outline + transparent fill for dark variants. Tactile `-1px` translateY on hover. Desktop CTA: 48px min-height, 16px font. No custom mouse cursors.
- **Navigation:** Fixed-position glassmorphism bar. On scroll: pill-shaped container (`border-radius: 999px`) with `rgba(10,10,10,0.38)` background, `blur(34px) saturate(190%)`, and subtle white inner border highlight (`inset 0 1px 0 rgba(255,255,255,0.22)`). Nav links at 18px, 500 weight, 0.84 opacity → full on hover. Desktop-only — collapses entirely on tablet/mobile.
- **Hero Section:** Full-viewport background video with dual gradient overlay (dark edge fade left and bottom). Text overlays positioned in a 1280px constrained container. Word-by-word staggered reveal animation — each word fades in + 28px translateY + blur(8px) → blur(0), staggered at 90ms per word. Single CTA button (Let's Talk → /contact). No scroll-down chevrons or "scroll to explore" text.
- **"Who We Are" Section:** Centered text layout. Eyebrow label with rotating SVG icon. Section heading uses Satoshi 900 at 56px. Body copy at 20px, 600 weight, 1.42 leading, constrained to 1280px. Four-column stats grid (gap 28px) with Satoshi 56px blue numbers and Inter 22px labels.
- **Meet the Floor (Gallery):** Full-width horizontal auto-scroll image strip. Grayscale images (`filter: grayscale(1) contrast(1.06)`) that desaturate on hover to full color (`grayscale(0) saturate(1.18)`). 38s linear infinite marquee loop. Pauses on hover. Per-tile gradient overlay reveals name/role on hover (slide-up fade-in). Tile border-radius: 12px for timeline images only.
- **Services:** Interactive expanding rows on black background. Each row has a 280px media thumbnail with angled clip-path (`polygon(0 0, calc(100% - 44px) 0, 100% 42px, 100% 100%, ...)`). On hover, media shrinks to 280px width and description slides in from the right. Title overlay fades on hover. Service index in Satoshi 48px blue.
- **The Floor Problem (Orbit Diagram):** Centered SVG donut-chart-style ring with animated progress arcs. Four orbiting labels (Leads, Appointments, Closes, CSAT) in Satoshi, with active state pulsing the blue accent. Center core contains animated stats.
- **Revenue Cycle:** Three-step card layout on a 2-column grid (300px intro + 3 equal step cards). Step numbers in blue Satoshi 48px. Cards use vertical stack with 32px gap and border-top dividers — no card backgrounds or shadows.
- **Timeline (From First Call to Live Campaign):** Vertical dot-and-line timeline with alternating left/right content. Blue line fill animates as user scrolls. Step labels in Inter 14px blue (#1A55F9). Headings in Satoshi 40px bold.
- **Testimonials:** Dark section with full-width framer-motion text animations. Animated heading reveals words staggered. Revenue share button with slide-in fill effect on hover (`#3B82F6` fill slides left-to-right over white background, text flips to white).
- **FAQ:** Two-column grid layout (470px left heading + right accordion list). Accordion items separated by `#D9D9D9` borders. Toggle opens with max-height transition. Hover color shifts to blue.
- **CTA (Contact Band):** Full-width marquee text row. Satoshi 900 at 82px. Two directional bands (left-to-right + right-to-left). On hover, a blue circle badge appears at center with `box-shadow: 0 18px 36px rgba(59,130,246,0.3)`.
- **Footer:** Black background with subtle video overlay (masked, 0.23 opacity). Two-column grid layout. CTA button with same fill-slide hover as revenue share. Social links with `+2px` translateX on hover. Large wordmark signature at bottom in Satoshi up to 223px.
- **Form Inputs (Contact):** Clean bordered inputs with 12px radius, 14px/16px padding. Label above (12px, 700 weight). Error states below. Focus ring in blue accent. No floating labels.
- **Loading States:** Skeletal shimmer placeholders recommended — no circular spinners.
- **Empty States:** Composed illustrated messaging — not just "No data."

## 5. Layout Principles

- **Content width:** `1280px` max-width constraint for all section inner containers, centered via margin auto.
- **Page gutter:** CSS custom property `--pad-x` — 80px on large screens, 32px on tablet, 18px on mobile.
- **Section padding:** `120px` top and bottom (standard). Reduced to 80px on mobile.
- **Hero:** Full-viewport (900px height), no horizontal max-width on outer container. Inner content constrained to 1280px. Left-aligned (not centered). Single CTA.
- **Grid philosophy:** CSS Grid preferred over flexbox percentage math. Stats grid: 4-column → 2-column → 1-column. Service rows: hover-expand layout. FAQ: 2-column shell.
- **No overlapping elements** — every element occupies its own clean spatial zone. No absolute text-on-image stacking outside the hero.
- **The generic "3 equal cards horizontally" feature row is BANNED** — use 2-column Zig-Zag, hover-expand rows, or animated orbit diagrams instead.
- **"Meet the Floor" gallery** breaks the 1280px constraint — spans full viewport width with edge fade masks.
- Section IDs used for anchor navigation: `#who-we-are`, `#services`, `#testimonials`, `#faqs`.

## 6. Motion & Interaction

- **Spring Physics default:** `stiffness: 100, damping: 20` for premium weighty feel. No linear easing.
- **Hero entrance:** Word-by-word stagger at 90ms intervals. Each word: 0 → 28px y, 8px blur → 0. Ease: `[0.22, 1, 0.36, 1]`. Duration: 1.15s per word.
- **Section reveals:** Framer Motion `useInView` — 30px y fade-in with 0.6s duration. Staggered cascade for stat items (0.1s per card).
- **Perpetual micro-interactions:** Gallery marquee (38s infinite loop, pauses on hover). Eyebrow icon spin (12s linear infinite). Marquee CTA bands (26s infinite).
- **Service rows:** On hover — media thumbnail shrinks from 100% to 280px (520ms cubic-bezier), description slides in from right (+18px → 0), title overlay fades out. Clip-path maintains angled leading edge.
- **Timeline line fill:** Animated as sections enter viewport. Blue fill progresses from top to bottom on `transform: scaleY()` with spring easing.
- **Button hover:** `transform: translateY(-1px)` in 160ms ease. CTA fill-slide buttons: blue background slides in from -101% to 0 over 420ms, text color swaps to white.
- **Gallery tiles:** Grayscale → full color on hover (260ms). Name label slides up from 14px offset (280ms). Gradient overlay appears (240ms).
- **No CSS `top/left/width/height` animations** — exclusively `transform` and `opacity` for performance. `will-change` on GPU-accelerated elements.
- **Reduced motion respected** via `useReducedMotion()` — all animations skip to final state when user prefers reduced motion.

## 7. Responsive Rules

- **Mobile-first collapse (< 768px):** All multi-column layouts collapse to single column. Stats grid: 4→2→1. Cycle grid: 2→1. Footer: 2→1. FAQ shell: 2→1.
- **Navigation:** Full desktop topnav disappears on tablet (<1200px). Hamburger menu or no nav links shown.
- **Hero:** Title scales via `clamp(22px, 6.8vw, 30px)` on mobile. Word wrap normal (no `white-space: nowrap`). Video remains full viewport height.
- **Service rows:** Service rows collapse from horizontal hover-expand to stacked layout. No hover effects — all content visible by default. Media stays at 220px.
- **Typography scaling:** All headings use `clamp()` for fluid scaling. Body text never below 14px. Section padding reduces to 80px.
- **Touch targets:** All interactive elements minimum 44px. Topbar Let's Talk button remains 48px min-height.
- **Inline gallery images:** Remain full-width scroll strip on mobile (2 tiles visible at once).
- **Section padding:** Mobile: 80px top/bottom. Tablet: 120px.

## 7. Anti-Patterns (Banned)

- No emojis anywhere in the interface
- No generic serif fonts (`Times New Roman`, `Georgia`, `Garamond`, `Palatino`)
- No pure black for backgrounds on light sections (use `#121212` or tinted off-black if needed)
- No neon/outer glow shadows — use diffused, tint-to-hue shadows only
- No oversaturated accents — single blue accent only, saturation at ~65%
- No excessive gradient text on large headers — flat color typography only
- No custom mouse cursors
- No overlapping elements — clean spatial separation always
- No 3-column equal card layouts — use asymmetrical grids, hover-expand, or marquees
- No generic placeholder names ("John Doe", "Acme Corp")
- No fake round numbers (`99.99%`, `50%`, `10x`)
- No AI copywriting clichés ("Elevate", "Seamless", "Unleash", "Next-Gen", "Revolutionize")
- No filler UI text: "Scroll to explore", "Swipe down", scroll arrows, bouncing chevrons
- No `calc()` percentage hacks — use CSS Grid native sizing
- No broken Unsplash links — use Framer-hosted assets or `picsum.photos`
- No centered Hero layouts — always maintain the current left-aligned, full-video hero structure
