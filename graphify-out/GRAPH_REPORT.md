# Graph Report - Dial-Expert  (2026-06-18)

## Corpus Check
- 36 files · ~2,319,715 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 228 nodes · 287 edges · 17 communities (12 shown, 5 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `2b6cd194`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 35|Community 35]]
- [[_COMMUNITY_Community 38|Community 38]]
- [[_COMMUNITY_Community 43|Community 43]]
- [[_COMMUNITY_Community 62|Community 62]]
- [[_COMMUNITY_Community 75|Community 75]]
- [[_COMMUNITY_Community 99|Community 99]]
- [[_COMMUNITY_Community 100|Community 100]]
- [[_COMMUNITY_Community 101|Community 101]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `Design System: Dial Expert` - 9 edges
3. `walkChildren()` - 7 edges
4. `walk()` - 7 edges
5. `createRuntime()` - 7 edges
6. `compileAttr()` - 6 edges
7. `collectProps()` - 6 edges
8. `Framer Canvas vs DESIGN.md — Gap Analysis` - 6 edges
9. `scripts` - 5 edges
10. `boot()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `PulseBeams()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/pulse-beams.tsx → src/lib/utils.ts
- `BeamsBackground()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/beams-background.tsx → src/lib/utils.ts

## Import Cycles
- None detected.

## Communities (17 total, 5 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.07
Nodes (26): dependencies, ffmpeg-static, framer-motion, lenis, lucide-react, motion, next, react (+18 more)

### Community 1 - "Community 1"
Cohesion: 0.20
Nodes (7): cn(), Beam, BeamsBackground(), BeamsBackgroundProps, BeamPath, PulseBeams(), PulseBeamsProps

### Community 2 - "Community 2"
Cohesion: 0.08
Nodes (28): boot(), createComponentFactory(), createExternalModules(), createHelmetManager(), createPseudoSheet(), createRegistry(), createRuntime(), cssToObj() (+20 more)

### Community 4 - "Community 4"
Cohesion: 0.32
Nodes (12): collectProps(), compileAttr(), compileTemplate(), encodeCase(), walk(), walkChildren(), walkComponent(), walkElement() (+4 more)

### Community 5 - "Community 5"
Cohesion: 0.40
Nodes (3): optimizeBgImage(), MotionLink, services

### Community 12 - "Community 12"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 33 - "Community 33"
Cohesion: 0.20
Nodes (9): ✅ ALIGNED (matches spec), 🎨 Color Style Cleanup, Design System, Framer Canvas vs DESIGN.md — Gap Analysis, Graphify: Codebase Knowledge Graph, ❌ MISSING / BROKEN, 🏗 Page Structure (Desktop), 🟡 PARTIAL / NEEDS VERIFICATION (+1 more)

### Community 34 - "Community 34"
Cohesion: 0.20
Nodes (9): 1. Visual Theme & Atmosphere, 2. Color Palette & Roles, 3. Typography Rules, 4. Component Stylings, 5. Layout Principles, 6. Motion & Interaction, 7. Anti-Patterns (Banned), 7. Responsive Rules (+1 more)

### Community 35 - "Community 35"
Cohesion: 0.06
Nodes (17): ByTheNumbers, ContactForm, CTA, EngagementWays, FAQ, FooterSection, Revenue, RevenueCycle (+9 more)

### Community 38 - "Community 38"
Cohesion: 0.08
Nodes (10): AnimatedSectionHeadingProps, EyebrowIconProps, stats, supportOptions, problems, faqData, challenges, steps (+2 more)

### Community 43 - "Community 43"
Cohesion: 0.25
Nodes (3): Props, sweepEase, team

## Knowledge Gaps
- **98 isolated node(s):** `eslintConfig`, `nextConfig`, `name`, `version`, `private` (+93 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `eslintConfig`, `nextConfig`, `name` to the rest of the system?**
  _98 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.07407407407407407 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.07804878048780488 - nodes in this community are weakly interconnected._
- **Should `Community 12` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Community 35` be split into smaller, more focused modules?**
  _Cohesion score 0.06050420168067227 - nodes in this community are weakly interconnected._
- **Should `Community 38` be split into smaller, more focused modules?**
  _Cohesion score 0.07661290322580645 - nodes in this community are weakly interconnected._