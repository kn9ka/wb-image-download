# Graph Report - .  (2026-08-12)

## Corpus Check
- Corpus is ~17,826 words - fits in a single context window. You may not need a graph.

## Summary
- 118 nodes · 113 edges · 14 communities (11 shown, 3 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Application bootstrapping
- FSD architecture
- FSD asset guidance
- FSD import boundaries
- FSD entity guidance
- FSD framework setup
- FSD layer structure
- FSD migration
- FSD practical patterns
- Project conventions
- Ponytail guidance
- Build configuration
- Application UI

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 19 edges
2. `scripts` - 8 edges
3. `paths` - 7 edges
4. `Feature-Sliced Design v2.1` - 6 edges
5. `ignorePatterns` - 5 edges
6. `lib` - 4 edges
7. `HomePage()` - 3 edges
8. `include` - 3 edges
9. `Slice public API` - 3 edges
10. `@emotion/react` - 2 edges

## Surprising Connections (you probably didn't know these)
- `WB Image Download project conventions` --semantically_similar_to--> `Ponytail`  [INFERRED] [semantically similar]
  AGENTS.md → .agents/skills/ponytail/SKILL.md
- `WB Image Download project conventions` --references--> `Feature-Sliced Design v2.1`  [EXTRACTED]
  AGENTS.md → .agents/skills/feature-sliced-design/SKILL.md
- `Vite application entrypoint` --conceptually_related_to--> `wb-image-download`  [INFERRED]
  index.html → README.md
- `Entities extraction threshold` --conceptually_related_to--> `Feature-Sliced Design v2.1`  [EXTRACTED]
  .agents/skills/feature-sliced-design/references/excessive-entities.md → .agents/skills/feature-sliced-design/SKILL.md
- `FSD migration guidance` --references--> `Feature-Sliced Design v2.1`  [EXTRACTED]
  .agents/skills/feature-sliced-design/references/migration-guide.md → .agents/skills/feature-sliced-design/SKILL.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **FSD structure governance** — agents_skills_feature_sliced_design_skill_fsd_v21, agents_skills_feature_sliced_design_skill_layer_order, agents_skills_feature_sliced_design_skill_public_api [EXTRACTED 1.00]
- **Minimal extraction guidance** — agents_skills_feature_sliced_design_skill_fsd_v21, agents_skills_feature_sliced_design_references_excessive_entities_entities_threshold, agents_skills_ponytail_skill_ponytail [INFERRED 0.85]

## Communities (14 total, 3 thin omitted)

### Community 0 - "Application bootstrapping"
Cohesion: 0.11
Nodes (18): node, compilerOptions, allowImportingTsExtensions, allowJs, allowSyntheticDefaultImports, esModuleInterop, forceConsistentCasingInFileNames, jsx (+10 more)

### Community 1 - "FSD architecture"
Cohesion: 0.12
Nodes (17): oxfmt, oxlint, devDependencies, oxfmt, oxlint, @types/node, @types/react, @types/react-dom (+9 more)

### Community 2 - "FSD asset guidance"
Cohesion: 0.13
Nodes (15): @emotion/react, @emotion/styled, @mui/icons-material, @mui/material, dependencies, @emotion/react, @emotion/styled, @mui/icons-material (+7 more)

### Community 3 - "FSD import boundaries"
Cohesion: 0.15
Nodes (12): name, private, scripts, build, dev, format, format:check, lint (+4 more)

### Community 4 - "FSD entity guidance"
Cohesion: 0.15
Nodes (13): ./src/app/*, ./src/entities/*, ./src/features/*, ./src/pages/*, ./src/shared/*, ./src/widgets/*, paths, @/app/* (+5 more)

### Community 5 - "FSD framework setup"
Cohesion: 0.20
Nodes (10): WB Image Download project conventions, Cross-import resolution, Entities extraction threshold, FSD framework integration, FSD migration guidance, FSD practical examples, Feature-Sliced Design v2.1, FSD layer order (+2 more)

### Community 6 - "FSD layer structure"
Cohesion: 0.29
Nodes (5): App(), root, AppProviders(), queryClient, HomePage()

### Community 7 - "FSD migration"
Cohesion: 0.29
Nodes (6): ignorePatterns, $schema, .agents/skills/, graphify-out/, README.md, skills-lock.json

### Community 8 - "FSD practical patterns"
Cohesion: 0.50
Nodes (4): DOM, DOM.Iterable, ES2022, lib

### Community 9 - "Project conventions"
Cohesion: 0.50
Nodes (3): src, vite.config.ts, include

## Knowledge Gaps
- **73 isolated node(s):** `$schema`, `.agents/skills/`, `README.md`, `graphify-out/`, `skills-lock.json` (+68 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `compilerOptions` connect `Application bootstrapping` to `FSD practical patterns`, `Project conventions`, `FSD entity guidance`?**
  _High betweenness centrality (0.090) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `FSD architecture` to `FSD import boundaries`?**
  _High betweenness centrality (0.083) - this node is a cross-community bridge._
- **Why does `dependencies` connect `FSD asset guidance` to `FSD import boundaries`?**
  _High betweenness centrality (0.074) - this node is a cross-community bridge._
- **What connects `$schema`, `.agents/skills/`, `README.md` to the rest of the system?**
  _73 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Application bootstrapping` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._
- **Should `FSD architecture` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._
- **Should `FSD asset guidance` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._