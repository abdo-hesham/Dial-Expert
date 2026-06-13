# Graph Report - Dial-Expert  (2026-06-13)

## Corpus Check
- 27 files · ~682,107 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 137 nodes · 139 edges · 15 communities (9 shown, 6 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `4b665905`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 11|Community 11]]
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
3. `Framer Canvas vs DESIGN.md — Gap Analysis` - 6 edges
4. `scripts` - 5 edges
5. `paths` - 2 edges
6. `eslintConfig` - 1 edges
7. `nextConfig` - 1 edges
8. `private` - 1 edges
9. `dev` - 1 edges
10. `build` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (15 total, 6 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.22
Nodes (9): devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, @types/node, @types/react, @types/react-dom (+1 more)

### Community 11 - "Community 11"
Cohesion: 0.12
Nodes (16): dependencies, ffmpeg-static, framer-motion, lenis, lucide-react, next, react, react-dom (+8 more)

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
Cohesion: 0.13
Nodes (3): navLinks, navLinks, socialLinks

### Community 38 - "Community 38"
Cohesion: 0.10
Nodes (10): AnimatedSectionHeadingProps, EyebrowIconProps, faqData, cycleSteps, orbitStops, steps, MotionLink, services (+2 more)

### Community 43 - "Community 43"
Cohesion: 0.25
Nodes (3): Props, sweepEase, team

## Knowledge Gaps
- **79 isolated node(s):** `eslintConfig`, `nextConfig`, `name`, `version`, `private` (+74 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Community 0` to `Community 11`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **What connects `eslintConfig`, `nextConfig`, `name` to the rest of the system?**
  _79 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 11` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._
- **Should `Community 12` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Community 35` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._
- **Should `Community 38` be split into smaller, more focused modules?**
  _Cohesion score 0.09788359788359788 - nodes in this community are weakly interconnected._