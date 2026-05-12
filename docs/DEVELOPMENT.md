# Development

## Setup

See [INSTALLATION.md](INSTALLATION.md) for prerequisites. TL;DR:

```sh
corepack enable
pnpm install
```

## Scripts

| Script | Purpose |
| --- | --- |
| `pnpm run dev` | Vite dev server with hot-reload (load `dist/` first time, then HMR) |
| `pnpm run build` | Production build → `dist/` |
| `pnpm run preview` | Preview the production build |
| `pnpm run typecheck` | `tsc --noEmit` with strict mode |
| `pnpm run lint` | ESLint flat config, fails on any warning |
| `pnpm run lint:fix` | ESLint auto-fix |
| `pnpm run format` | Prettier write |
| `pnpm run format:check` | Prettier check (CI) |
| `pnpm run test` | Vitest single run |
| `pnpm run test:watch` | Vitest watch mode |

## Local dev loop

```sh
pnpm run dev
```

`@crxjs/vite-plugin` watches `manifest.json` and `src/` and rebuilds into
`dist/` on save. The first time, load `dist/` as unpacked. After that,
most changes hot-reload — but background service worker changes require
clicking the refresh icon on `chrome://extensions`.

## Commit hygiene

Conventional Commits are enforced by `commitlint` via the `commit-msg`
Husky hook. Allowed types:

```
feat | fix | perf | refactor | docs | style | test | build | ci | chore | revert | security
```

Append `!` (e.g. `feat(api)!: rename method`) or add a `BREAKING CHANGE:`
footer for a breaking change. `release-please` will infer the semver bump.

Pre-commit runs `lint-staged` (ESLint --fix + Prettier --write) on staged
files only.

## TypeScript

Strict mode is on, including `noUncheckedIndexedAccess` and
`exactOptionalPropertyTypes`. Type-aware ESLint rules (`no-floating-promises`,
`no-misused-promises`) are enabled. **Fix the type, don't silence the
rule.**

Use the `@/` alias for `src/` imports:

```ts
import { getSetting } from '@/lib/storage';
```

## MV3 service worker gotchas

- The service worker is **event-driven** and terminates when idle. Don't
  store state in module scope expecting it to survive.
- Register listeners at **top level** so they reattach on worker wake.
- Use `chrome.storage.session` for short-lived state, `chrome.storage.sync`
  (8 KB / item, 100 KB total) or `chrome.storage.local` (10 MB) for persistence.
- No remote code: `manifest.json` CSP forbids loading remote scripts. Bundle
  everything via Vite.

## Testing

Vitest is configured but no tests ship. Add tests under `src/**/*.test.ts`.
For chrome.* API mocking, install `@types/chrome` plus a manual mock or use
[`vitest-chrome`](https://github.com/extend-chrome/vitest-chrome).

## CI

Every push and PR triggers:

- `ci.yml` — lint, typecheck, build, test (Node 22 + 24 matrix)
- `codeql.yml` — security scan
- `repo-lint.yml` — markdown / YAML / actionlint
- `dependency-review.yml` (PRs only) — fails on high-severity vulns

See `.github/workflows/` for the full list.
