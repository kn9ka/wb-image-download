# Graph Report - wb-image-download  (2026-08-12)

## Corpus Check
- 36 files · ~96,274 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 198 nodes · 194 edges · 22 communities (16 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `02e98398`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- compilerOptions
- devDependencies
- dependencies
- scripts
- paths
- Feature-Sliced Design v2.1
- HomePage.tsx
- ignorePatterns
- What You Must Do When Invoked
- /graphify
- Asset locality
- Grill Me agent configuration
- Vite application entrypoint
- graphify reference: extra exports and benchmark
- graphify reference: query, path, explain
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native AGENTS.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- extraction-spec.md

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 19 edges
2. `What You Must Do When Invoked` - 12 edges
3. `/graphify` - 10 edges
4. `scripts` - 8 edges
5. `graphify reference: extra exports and benchmark` - 8 edges
6. `paths` - 7 edges
7. `Feature-Sliced Design v2.1` - 6 edges
8. `ignorePatterns` - 5 edges
9. `HomePage()` - 5 edges
10. `graphify reference: query, path, explain` - 5 edges

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

## Communities (22 total, 6 thin omitted)

### Community 0 - "compilerOptions"
Cohesion: 0.08
Nodes (25): DOM, DOM.Iterable, ES2022, node, src, vite.config.ts, compilerOptions, allowImportingTsExtensions (+17 more)

### Community 1 - "devDependencies"
Cohesion: 0.12
Nodes (17): oxfmt, oxlint, devDependencies, oxfmt, oxlint, @types/node, @types/react, @types/react-dom (+9 more)

### Community 2 - "dependencies"
Cohesion: 0.10
Nodes (21): @emotion/react, @emotion/styled, @mui/icons-material, @mui/material, dependencies, @emotion/react, @emotion/styled, @mui/icons-material (+13 more)

### Community 3 - "scripts"
Cohesion: 0.15
Nodes (12): name, private, scripts, build, dev, format, format:check, lint (+4 more)

### Community 4 - "paths"
Cohesion: 0.15
Nodes (13): ./src/app/*, ./src/entities/*, ./src/features/*, ./src/pages/*, ./src/shared/*, ./src/widgets/*, paths, @/app/* (+5 more)

### Community 5 - "Feature-Sliced Design v2.1"
Cohesion: 0.20
Nodes (10): WB Image Download project conventions, Cross-import resolution, Entities extraction threshold, FSD framework integration, FSD migration guidance, FSD practical examples, Feature-Sliced Design v2.1, FSD layer order (+2 more)

### Community 6 - "HomePage.tsx"
Cohesion: 0.13
Nodes (15): App(), root, AppProviders(), queryClient, allMediaIds, media, useMediaSelection(), articleIdSchema (+7 more)

### Community 7 - "ignorePatterns"
Cohesion: 0.29
Nodes (6): ignorePatterns, $schema, .agents/skills/, graphify-out/, README.md, skills-lock.json

### Community 8 - "What You Must Do When Invoked"
Cohesion: 0.13
Nodes (15): Part A - Structural extraction for code files, Part B - Semantic extraction (parallel subagents), Part C - Merge AST + semantic into final extraction, Step 0 - GitHub repos and multi-path merge (only if a URL or several paths), Step 1 - Ensure graphify is installed, Step 2.5 - Video and audio (only if video files detected), Step 2 - Detect files, Step 3 - Extract entities and relationships (+7 more)

### Community 9 - "/graphify"
Cohesion: 0.20
Nodes (9): For /graphify add and --watch, For /graphify query, For the commit hook and native AGENTS.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Usage (+1 more)

### Community 14 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 15 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 16 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 17 - "graphify reference: commit hook and native AGENTS.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native AGENTS.md integration, graphify reference: commit hook and native AGENTS.md integration

### Community 18 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

## Knowledge Gaps
- **121 isolated node(s):** `$schema`, `.agents/skills/`, `README.md`, `graphify-out/`, `skills-lock.json` (+116 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `dependencies` to `scripts`?**
  _High betweenness centrality (0.040) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `scripts`?**
  _High betweenness centrality (0.034) - this node is a cross-community bridge._
- **Why does `compilerOptions` connect `compilerOptions` to `paths`?**
  _High betweenness centrality (0.032) - this node is a cross-community bridge._
- **What connects `$schema`, `.agents/skills/`, `README.md` to the rest of the system?**
  _121 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.07692307692307693 - nodes in this community are weakly interconnected._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._