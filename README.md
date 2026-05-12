# Browser Extension Template

[![CI](https://github.com/poli0981/template-browser-extension/actions/workflows/ci.yml/badge.svg)](https://github.com/poli0981/template-browser-extension/actions/workflows/ci.yml)
[![CodeQL](https://github.com/poli0981/template-browser-extension/actions/workflows/codeql.yml/badge.svg)](https://github.com/poli0981/template-browser-extension/actions/workflows/codeql.yml)
[![Node](https://img.shields.io/badge/node-%3E%3D24.0.0-43853d?logo=node.js)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646cff?logo=vite)](https://vite.dev/)
[![Manifest V3](https://img.shields.io/badge/Manifest-V3-4285f4?logo=googlechrome)](https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3)
[![License](https://img.shields.io/badge/license-pending-lightgrey)](LICENSE)

> Production-grade GitHub **template** for cross-browser **Manifest V3**
> browser extensions (Chrome, Edge, Brave). 2026-ready stack: **TypeScript +
> Vite 8** on **Node 24 LTS**, with full CI/CD, CodeQL v4, Dependabot,
> auto-Discussions, EN/VI i18n docs, and Conventional-Commits release flow.

> 🇻🇳 Phiên bản tiếng Việt: [docs/i18n/vi/README.md](docs/i18n/vi/README.md)

---

## What this template is for

A starting point for building **browser extensions** that target
**Chromium-based browsers** (Chrome, Microsoft Edge, Brave) using
**Manifest V3** — the only manifest version Chrome accepts in 2026. The
template ships with:

- Service-worker background, popup UI, options page, content script,
  and a typed `chrome.storage` wrapper — wired together by
  `@crxjs/vite-plugin`.
- Strict TypeScript with type-aware ESLint, Prettier, and Vitest.
- Conventional-Commits → `release-please` auto-versioning + auto-changelog.
- A complete `.github/` set: PR template, three issue templates, FUNDING,
  Dependabot, CODEOWNERS, Discussion templates.
- 12 reusable workflows: CI, CodeQL v4, dependency review, release-please,
  auto-Discussion-on-release, security-alert-Discussion, stale, PR labeler,
  PR sizer, repo lint, manifest validation, lockfile check.

If you want a UI framework (React, Vue, Svelte, Solid), fork and add it —
the template intentionally stays vanilla.

## Stack pins (kept at 2026 latest to avoid Dependabot/CodeQL noise)

| Layer | Version | Reason |
| --- | --- | --- |
| Node.js | **24.x LTS** (active LTS until Apr 2028) | `setup-node@v6` runtime |
| TypeScript | **5.7** (ES2024 target) | Stable; TS 7 (Go-based) optional later |
| Vite | **8.x** (Rolldown) | Mar 2026 release; 10–30× faster builds |
| ESLint | **9.x** flat config | Default config style in 2026 |
| Prettier | **3.x** | — |
| Vitest | **2.x** | — |
| pnpm | **10.x** | `manage-package-manager-versions` |
| Manifest | **V3** | MV2 no longer accepted by Chrome |
| `actions/checkout` | **@v6** | Node 24 runtime |
| `actions/setup-node` | **@v6** | Node 24 deadline 2026-06-02 |
| `github/codeql-action` | **@v4** | v3 deprecated Dec 2026 |

## Quick start

```sh
# Option A — use this template via GitHub UI
#   Click "Use this template" → Create a new repository

# Option B — clone for local exploration
git clone https://github.com/poli0981/template-browser-extension.git
cd template-browser-extension

corepack enable
pnpm install

pnpm run typecheck
pnpm run lint
pnpm run build      # → dist/

# Load the unpacked extension:
#   1. Open chrome://extensions (or edge://extensions, brave://extensions)
#   2. Toggle "Developer mode"
#   3. Click "Load unpacked" and select the dist/ folder
```

For development with hot-reload:

```sh
pnpm run dev
```

## Project layout

```
.
├── manifest.json            # MV3 manifest (single source of truth)
├── src/
│   ├── background/          # Service worker
│   ├── popup/               # Toolbar action UI
│   ├── options/             # Options page
│   ├── content/             # Content script
│   ├── lib/                 # Typed chrome.* wrappers
│   └── types/               # Ambient types
├── public/
│   ├── icons/               # 16/32/48/128 PNGs (replace placeholders)
│   └── _locales/            # i18n for extension UI
├── docs/                    # English docs + docs/i18n/vi/ mirror
├── legal/                   # Privacy Policy, ToS
└── .github/                 # Workflows, templates, FUNDING, etc.
```

## Documentation

- [docs/INSTALLATION.md](docs/INSTALLATION.md)
- [docs/USAGE.md](docs/USAGE.md)
- [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md)
- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
- [docs/RELEASING.md](docs/RELEASING.md)
- [docs/pc_spec.md](docs/pc_spec.md) — maintainer's machine spec
- [docs/dev_env.md](docs/dev_env.md) — IDE + toolchains
- 🇻🇳 [docs/i18n/vi/](docs/i18n/vi/) — Vietnamese mirror

## Legal & policies

- [SECURITY.md](SECURITY.md) — vulnerability disclosure
- [DISCLAIMER.md](DISCLAIMER.md)
- [legal/PRIVACY_POLICY.md](legal/PRIVACY_POLICY.md)
- [legal/TERMS_OF_SERVICE.md](legal/TERMS_OF_SERVICE.md)
- [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) — Contributor Covenant 2.1
- [CONTRIBUTING.md](CONTRIBUTING.md)
- [ACKNOWLEDGEMENTS.md](ACKNOWLEDGEMENTS.md) — third-party + AI tools
- [CHANGELOG.md](CHANGELOG.md) — generated by release-please

## About the author

See [username.txt](username.txt) for public contact channels and the
[spec.txt](spec.txt) for the maintainer's hardware/toolchain spec. **Do
not** post the maintainer's Telegram User ID in public channels — see
[SECURITY.md](SECURITY.md) for private contact procedure.

## Related repositories using this template

- [free-steam-games-list](https://github.com/poli0981/free-steam-games-list)
- [free-games-itchio-list](https://github.com/poli0981/free-games-itchio-list)

## Funding

If this template saved you time, see [.github/FUNDING.yml](.github/FUNDING.yml)
for ways to support development.

## License

See [LICENSE](LICENSE). License pending — pick MIT, Apache 2.0, or GPL-3.0
when the template is consumed.
