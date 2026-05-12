# AGENTS.md

Context file for AI coding assistants (Claude Code, Cursor, GitHub Copilot,
Codex, Gemini, etc.) working in this repository. `CLAUDE.md` mirrors this file
for Claude-specific tooling.

## Project overview

Cross-browser Manifest V3 extension built with TypeScript + Vite 8. Target
browsers: **Chrome, Edge, Brave** (Chromium MV3). This repo is a GitHub
**template** — when consumed downstream, the package name, icons, locales,
and `manifest.json` metadata must be updated by the consumer.

## Tech stack (2026)

| Layer | Choice | Pin |
| --- | --- | --- |
| Runtime | Node.js | `>=24.0.0` LTS |
| Language | TypeScript | `^5.7` (ES2024 target) |
| Bundler | Vite | `^8.0` (Rolldown) |
| Extension plugin | `@crxjs/vite-plugin` | `^2.0` |
| Linter | ESLint | `^9` (flat config) |
| Formatter | Prettier | `^3` |
| Test runner | Vitest | `^2.1` |
| Package manager | pnpm | `^10` |
| Manifest | MV3 | `manifest_version: 3` |

GitHub Actions: `actions/checkout@v6`, `actions/setup-node@v6`,
`github/codeql-action@v4`.

## Repository layout

```
.
├── manifest.json          # MV3 manifest (single source of truth)
├── vite.config.ts         # crxjs plugin wires manifest → build
├── src/
│   ├── background/        # MV3 service worker (event-driven)
│   ├── popup/             # Browser action popup
│   ├── options/           # Options page
│   ├── content/           # Content scripts injected into web pages
│   ├── lib/               # Shared utilities (storage wrapper, etc.)
│   └── types/             # Ambient type declarations
├── public/
│   ├── icons/             # Icon PNGs (16/32/48/128)
│   └── _locales/          # i18n for extension UI (en/, vi/)
├── docs/                  # Project documentation (EN + VI mirror)
├── legal/                 # Privacy Policy, ToS
└── .github/               # Templates, workflows, FUNDING.yml
```

## Conventions

### Commits

Conventional Commits, enforced by `commitlint` + `.husky/commit-msg`.
Allowed types: `feat | fix | perf | refactor | docs | style | test | build |
ci | chore | revert | security`. Breaking change → `feat!:` or `BREAKING
CHANGE:` footer. `release-please` reads these to bump versions.

### Code style

- Prettier handles formatting — don't bikeshed indent/quotes.
- ESLint flat config (`eslint.config.js`) is type-aware; rules use
  `recommended-type-checked` + `stylistic-type-checked`.
- Prefer `chrome.*` APIs over MV2 polyfills since target is Chromium-only.

### MV3 patterns

- **Service worker idle**: do not keep state in module scope expecting it
  to survive. Use `chrome.storage` for persistence.
- **Listeners at top level**: registering `chrome.runtime.onMessage` inside a
  function won't re-register on worker re-instantiation.
- **No remote code**: `manifest.json` content security policy forbids
  loading remote scripts. Bundle everything via Vite.
- **Permissions are user-visible**: every entry in `permissions` and
  `host_permissions` is shown at install. Keep minimal.

### Testing & build

```sh
pnpm install
pnpm run typecheck   # tsc --noEmit, strict
pnpm run lint        # eslint --max-warnings 0
pnpm run test        # vitest
pnpm run build       # → dist/, loadable as unpacked extension
```

## Things to avoid

- **Do not** disable type-checked ESLint rules to make code compile —
  fix the type instead.
- **Do not** add MV2 features (`background.scripts`, `webRequestBlocking`).
- **Do not** introduce a UI framework (React/Vue/Svelte) on this branch —
  the template stays vanilla. Downstream forks may add one.
- **Do not** commit `dist/` or generated icons.
- **Do not** publish maintainer's Telegram User ID, see [SECURITY.md](SECURITY.md).

## When in doubt

Open an issue or read [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md) and
[docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).
