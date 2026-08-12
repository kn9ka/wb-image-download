# Graph Report - wb-image-download  (2026-08-12)

## Corpus Check
- 58 files · ~33,181 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 306 nodes · 344 edges · 35 communities (28 shown, 7 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `06eba954`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- compilerOptions
- devDependencies
- dependencies
- Q: давай теперь разберемся с home все ли файлы здесь на своих местах и нет ли смысла разнести хелперы модели и тп?
- paths
- Feature-Sliced Design v2.1
- MediaDownloadDialog.tsx
- ignorePatterns
- What You Must Do When Invoked
- HomePage.tsx
- Asset locality
- Grill Me agent configuration
- Vite application entrypoint
- vite.config.ts
- graphify reference: extra exports and benchmark
- graphify reference: query, path, explain
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native AGENTS.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- extraction-spec.md
- scripts
- getProductMedia.ts
- useForm.ts
- Q: @src/pages/home/ мне не нравится то как используются данные. давай не будем прокидывать их по пропсам, а сделаем контекст провайдер.
- Q: мне кажется в productMediaContext.tsx слишком много всего, можем как это исправить?
- Q: setProductMedia с await getProductMedia — это правильная работа, мы ничего не сломаем этим await?
- Q: Исправь MediaDownloadDialog.tsx: двойных кондишенов быть не должно
- Q: сделай блокировку повторного submit через isSubmitting
- Q: [getProductMedia.ts](src/pages/home/api/getProductMedia.ts) мне не нравится код в этом файле, что можем исправить?
- Q: проведи эксперимент, сможем ли мы миграцией на remix пофиксить проблему фетча // Mock for https://www.wildberries.ru/__internal/card/cards/v4/detail.
- WB video: MPEG-TS to MP4
- Q: окей, серверный прокси может подойти. покажи вариант реализации
- Q: окей, отлично. теперь давай закроем вопрос с перекодированием видео из .ts в mp4. какие у нас варианты?

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 19 edges
2. `What You Must Do When Invoked` - 12 edges
3. `/graphify` - 10 edges
4. `scripts` - 8 edges
5. `graphify reference: extra exports and benchmark` - 8 edges
6. `MediaDownloadDialog()` - 7 edges
7. `paths` - 7 edges
8. `ProductMedia` - 6 edges
9. `downloadMedia()` - 6 edges
10. `HomePage()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `WB Image Download project conventions` --semantically_similar_to--> `Ponytail`  [INFERRED] [semantically similar]
  AGENTS.md → .agents/skills/ponytail/SKILL.md
- `WB Image Download project conventions` --references--> `Feature-Sliced Design v2.1`  [EXTRACTED]
  AGENTS.md → .agents/skills/feature-sliced-design/SKILL.md
- `Vite application entrypoint` --conceptually_related_to--> `wb-image-download`  [INFERRED]
  index.html → README.md
- `HomePage()` --calls--> `getProductMedia()`  [EXTRACTED]
  src/pages/home/ui/HomePage.tsx → src/pages/home/api/getProductMedia.ts
- `HomePage()` --calls--> `useForm()`  [EXTRACTED]
  src/pages/home/ui/HomePage.tsx → src/pages/home/lib/useForm.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **FSD structure governance** — agents_skills_feature_sliced_design_skill_fsd_v21, agents_skills_feature_sliced_design_skill_layer_order, agents_skills_feature_sliced_design_skill_public_api [EXTRACTED 1.00]
- **Minimal extraction guidance** — agents_skills_feature_sliced_design_skill_fsd_v21, agents_skills_feature_sliced_design_references_excessive_entities_entities_threshold, agents_skills_ponytail_skill_ponytail [INFERRED 0.85]

## Communities (35 total, 7 thin omitted)

### Community 0 - "compilerOptions"
Cohesion: 0.08
Nodes (25): DOM, DOM.Iterable, ES2022, node, src, vite.config.ts, compilerOptions, allowImportingTsExtensions (+17 more)

### Community 1 - "devDependencies"
Cohesion: 0.12
Nodes (17): oxfmt, oxlint, devDependencies, oxfmt, oxlint, @types/node, @types/react, @types/react-dom (+9 more)

### Community 2 - "dependencies"
Cohesion: 0.08
Nodes (25): @emotion/react, @emotion/styled, mediabunny, @mui/icons-material, @mui/material, dependencies, @emotion/react, @emotion/styled (+17 more)

### Community 3 - "Q: давай теперь разберемся с home все ли файлы здесь на своих местах и нет ли смысла разнести хелперы модели и тп?"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: давай теперь разберемся с home все ли файлы здесь на своих местах и нет ли смысла разнести хелперы модели и тп?, Source Nodes

### Community 4 - "paths"
Cohesion: 0.15
Nodes (13): ./src/app/*, ./src/entities/*, ./src/features/*, ./src/pages/*, ./src/shared/*, ./src/widgets/*, paths, @/app/* (+5 more)

### Community 5 - "Feature-Sliced Design v2.1"
Cohesion: 0.20
Nodes (10): WB Image Download project conventions, Cross-import resolution, Entities extraction threshold, FSD framework integration, FSD migration guidance, FSD practical examples, Feature-Sliced Design v2.1, FSD layer order (+2 more)

### Community 6 - "MediaDownloadDialog.tsx"
Cohesion: 0.23
Nodes (12): getPhotoMedia(), getVideoMedia(), downloadMedia(), DownloadMediaParams, remuxVideo(), saveFile(), ProductMedia, ProductMediaType (+4 more)

### Community 7 - "ignorePatterns"
Cohesion: 0.29
Nodes (6): ignorePatterns, $schema, .agents/skills/, graphify-out/, README.md, skills-lock.json

### Community 8 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native AGENTS.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 9 - "HomePage.tsx"
Cohesion: 0.19
Nodes (10): App(), root, AppProviders(), queryClient, HomePage(), LoadedProductMedia, NotificationContext, NotificationContextValue (+2 more)

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

### Community 22 - "scripts"
Cohesion: 0.15
Nodes (12): name, private, scripts, build, dev, format, format:check, lint (+4 more)

### Community 23 - "getProductMedia.ts"
Cohesion: 0.22
Nodes (13): cardDetailSchema, cardInfoSchema, fetchJson(), getProductMedia(), hostsSchema, upstreamsSchema, getHost(), GetWildberriesCardInfoUrl (+5 more)

### Community 24 - "useForm.ts"
Cohesion: 0.17
Nodes (13): formSchema, defaultValues, getDefaultValues(), getFormOptions(), useForm(), UseFormArgs, useFormContext(), FormFieldKey (+5 more)

### Community 25 - "Q: @src/pages/home/ мне не нравится то как используются данные. давай не будем прокидывать их по пропсам, а сделаем контекст провайдер."
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: @src/pages/home/ мне не нравится то как используются данные. давай не будем прокидывать их по пропсам, а сделаем контекст провайдер., Source Nodes

### Community 26 - "Q: мне кажется в productMediaContext.tsx слишком много всего, можем как это исправить?"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: мне кажется в productMediaContext.tsx слишком много всего, можем как это исправить?, Source Nodes

### Community 27 - "Q: setProductMedia с await getProductMedia — это правильная работа, мы ничего не сломаем этим await?"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: setProductMedia с await getProductMedia — это правильная работа, мы ничего не сломаем этим await?, Source Nodes

### Community 28 - "Q: Исправь MediaDownloadDialog.tsx: двойных кондишенов быть не должно"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: Исправь MediaDownloadDialog.tsx: двойных кондишенов быть не должно, Source Nodes

### Community 29 - "Q: сделай блокировку повторного submit через isSubmitting"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: сделай блокировку повторного submit через isSubmitting, Source Nodes

### Community 30 - "Q: [getProductMedia.ts](src/pages/home/api/getProductMedia.ts) мне не нравится код в этом файле, что можем исправить?"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: [getProductMedia.ts](src/pages/home/api/getProductMedia.ts) мне не нравится код в этом файле, что можем исправить?, Source Nodes

### Community 31 - "Q: проведи эксперимент, сможем ли мы миграцией на remix пофиксить проблему фетча // Mock for https://www.wildberries.ru/__internal/card/cards/v4/detail."
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: проведи эксперимент, сможем ли мы миграцией на remix пофиксить проблему фетча // Mock for https://www.wildberries.ru/__internal/card/cards/v4/detail., Source Nodes

### Community 32 - "WB video: MPEG-TS to MP4"
Cohesion: 0.22
Nodes (8): Browser-only, Maintained browser alternatives, Options, Recommended implementation paths, Result, Server/BFF, Sources, WB video: MPEG-TS to MP4

### Community 33 - "Q: окей, серверный прокси может подойти. покажи вариант реализации"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: окей, серверный прокси может подойти. покажи вариант реализации, Source Nodes

### Community 34 - "Q: окей, отлично. теперь давай закроем вопрос с перекодированием видео из .ts в mp4. какие у нас варианты?"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: окей, отлично. теперь давай закроем вопрос с перекодированием видео из .ts в mp4. какие у нас варианты?, Source Nodes

## Knowledge Gaps
- **171 isolated node(s):** `$schema`, `.agents/skills/`, `README.md`, `graphify-out/`, `skills-lock.json` (+166 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Work-memory lessons

**Preferred sources** — corroborated by past sessions; start here.
- `getProductMedia()` (5× useful, score=4.997014005) _(code changed — re-verify)_
- `getProductMedia.ts` (4× useful, score=3.996983929) _(code changed — re-verify)_
- `HomePage()` (4× useful, score=3.996126173)
- `downloadMedia()` (2× useful, score=1.998757569) _(code changed — re-verify)_
- `useForm()` (2× useful, score=1.997889537)
- `MediaDownloadDialog()` (2× useful, score=1.997627054)
- `HomePage.tsx` (2× useful, score=1.997072959)
- `MediaDownloadDialog.tsx` (2× useful, score=1.997072959)

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `dependencies` to `scripts`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `scripts`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **Why does `compilerOptions` connect `compilerOptions` to `paths`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **What connects `$schema`, `.agents/skills/`, `README.md` to the rest of the system?**
  _171 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.07692307692307693 - nodes in this community are weakly interconnected._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._