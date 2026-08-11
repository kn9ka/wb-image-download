# WB Image Download

## Project

- Use npm with React, TypeScript, Vite, MUI, and TanStack Query.
- Keep ESM modules and strict TypeScript. Reuse the root `tsconfig.json` unless a tool or runtime genuinely requires different settings.
- Use functional React components with hooks.
- Prefer arrow functions assigned to `const` over function declarations.
- Prefer `type` aliases over `interface` declarations.

## Dependencies and documentation

- Check `package.json` and prefer platform capabilities or installed packages before adding a dependency.
- Ask for approval before adding any dependency.
- When work depends on current third-party API behavior, use Context7 if available; otherwise use the primary official documentation.

## Architecture

Follow Feature-Sliced Design. For structure, placement, or import-boundary decisions, read `.agents/skills/feature-sliced-design/SKILL.md` and treat it as the source of truth.

### Structure

- Start with `app` and `pages`; add another FSD layer only for a current need.
- Keep app-wide providers in `src/app/providers/`.
- Keep assets next to the code that owns them. Use `public/` only for files that require a stable URL and must be served as-is.

### Imports

- Use relative imports within a slice and `@/` imports across slices or layers.
- Across FSD layers, import only downward. Avoid same-layer slice imports.
- Consume another slice through its `index.ts` public API. For an unavoidable entity cross-import, first consider merging the entities; otherwise expose only the required contract through `@x/<consumer>` and document the exception. Never use `@x` in features or widgets.

## UI

- Reuse MUI components before creating custom UI.
- Keep interactive UI semantic, keyboard-accessible, and correctly focused.

## Skills

- When a task matches an installed skill, read its `SKILL.md` before acting and follow it.
- Project skills are pinned in `skills-lock.json`; do not edit copied skill files manually.

## Graphify

Use the graph at `graphify-out/` to orient structural codebase work: dependencies, ownership, architecture, and execution or data flow.

- When explicitly invoked (`/graphify` or `$graphify`), read the installed Graphify skill before other codebase exploration.
- If `graphify-out/graph.json` exists, start structural or cross-file questions with `graphify query "<question>"`; use `graphify explain "<concept>"` for one concept and `graphify path "<A>" "<B>"` for two known concepts. Skip Graphify for trivial file-local work.
- Treat graph output as a map, not the source of truth: inspect identified source files before editing, and verify `INFERRED` or `AMBIGUOUS` relationships. Prefer `EXTRACTED` relationships when available.
- For broad navigation, prefer `graphify-out/wiki/index.md` when present. Use `graphify-out/GRAPH_REPORT.md` only for broad architecture review or when scoped commands are insufficient; then fall back to targeted source search and file reads.
- Dirty files under `graphify-out/` alone do not invalidate the graph.
- After code changes, run `graphify update .` unless `graphify watch` or an installed Git hook already keeps it current.

## Validation

After completing code or configuration changes, run:

```bash
npm run format
npm run lint
npm run typecheck
```

- Review changed imports for FSD layer direction, public API, and cross-import violations.
- Do not run a production build unless the task specifically requires it.
