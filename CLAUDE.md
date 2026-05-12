# CLAUDE.md

This file mirrors [AGENTS.md](AGENTS.md) for Claude Code's automatic
project-context loading. The canonical source is `AGENTS.md` — keep both
files in sync if you edit one.

## TL;DR for Claude

- **Stack**: Cross-browser MV3 extension. TypeScript 5.7 + Vite 8 + pnpm 10
  on Node 24 LTS. Target Chromium (Chrome/Edge/Brave).
- **Build**: `pnpm install && pnpm run build` → `dist/`. Load via
  `chrome://extensions` → Developer mode → Load unpacked.
- **Commits**: Conventional Commits, enforced by commitlint. `release-please`
  bumps versions.
- **Style**: Prettier owns formatting. ESLint flat config is type-aware —
  fix the type, don't silence the rule.
- **MV3 gotchas**: Service worker is event-driven and re-instantiated; keep
  listeners at module top-level and persist state in `chrome.storage`.

## Don'ts

- Don't add MV2 features.
- Don't introduce a UI framework on this branch (template stays vanilla).
- Don't commit `dist/`, secrets, or maintainer's Telegram User ID
  (see [SECURITY.md](SECURITY.md)).

Refer to [AGENTS.md](AGENTS.md) for full guidance.
