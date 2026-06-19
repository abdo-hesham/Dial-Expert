# Graph Report - Dial-Expert  (2026-06-19)

## Corpus Check
- 34 files · ~2,321,503 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 219 nodes · 277 edges · 24 communities (13 shown, 11 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `5006e842`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
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
3. `walkChildren()` - 7 edges
4. `walk()` - 7 edges
5. `createRuntime()` - 7 edges
6. `compileAttr()` - 6 edges
7. `collectProps()` - 6 edges
8. `Framer Canvas vs DESIGN.md — Gap Analysis` - 6 edges
9. `scripts` - 5 edges
10. `boot()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `PhotoCard()` --calls--> `cn()`  [EXTRACTED]
  src/components/sections/Team.tsx → src/lib/utils.ts
- `MemberRow()` --calls--> `cn()`  [EXTRACTED]
  src/components/sections/Team.tsx → src/lib/utils.ts

## Import Cycles
- None detected.

## Communities (24 total, 11 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.22
Nodes (9): devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, @types/node, @types/react, @types/react-dom (+1 more)

### Community 2 - "Community 2"
Cohesion: 0.07
Nodes (30): boot(), compileTemplate(), createComponentFactory(), createExternalModules(), createHelmetManager(), createPseudoSheet(), createRegistry(), createRuntime() (+22 more)

### Community 3 - "Community 3"
Cohesion: 0.42
Nodes (10): collectProps(), compileAttr(), walk(), walkChildren(), walkComponent(), walkElement(), walkFor(), walkIf() (+2 more)

### Community 4 - "Community 4"
Cohesion: 0.25
Nodes (3): EyebrowIconProps, Stats, headingLines

### Community 5 - "Community 5"
Cohesion: 0.40
Nodes (3): heroLines, heroLineStarts, metrics

### Community 11 - "Community 11"
Cohesion: 0.11
Nodes (17): dependencies, ffmpeg-static, framer-motion, lenis, lucide-react, next, react, react-dom (+9 more)

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
Cohesion: 0.25
Nodes (4): AnimatedSectionHeadingProps, engagementWays, MotionLink, services

### Community 43 - "Community 43"
Cohesion: 0.14
Nodes (10): Props, sweepEase, cn(), col1, col2, col3, MemberRow(), members (+2 more)

## Knowledge Gaps
- **91 isolated node(s):** `eslintConfig`, `nextConfig`, `name`, `version`, `private` (+86 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Community 0` to `Community 11`?**
  _High betweenness centrality (0.007) - this node is a cross-community bridge._
- **What connects `eslintConfig`, `nextConfig`, `name` to the rest of the system?**
  _91 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.07419712070874862 - nodes in this community are weakly interconnected._
- **Should `Community 11` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._
- **Should `Community 12` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Community 35` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._
- **Should `Community 43` be split into smaller, more focused modules?**
  _Cohesion score 0.13970588235294118 - nodes in this community are weakly interconnected._