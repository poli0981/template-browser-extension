# Development environment

> What the maintainer uses day-to-day for this template. Not a requirement
> for contributors — anything with Node 24 LTS and a modern editor works.

## Editors

### JetBrains IDEs (2026.x, paid lineup)

- **WebStorm** — primary for this template (TypeScript + Vite)
- **PyCharm** — Python utilities and scripts
- **RustRover** — Rust-based companions
- **Rider** — .NET tooling

Plugins commonly enabled: ESLint, Prettier, Conventional Commit, .editorconfig,
GitToolBox, GitHub Copilot.

### VS Code

The repo's [`.devcontainer/devcontainer.json`](../.devcontainer/devcontainer.json)
preloads the matching extension set:

- `dbaeumer.vscode-eslint`
- `esbenp.prettier-vscode`
- `EditorConfig.EditorConfig`
- `GitHub.vscode-github-actions`
- `GitHub.vscode-pull-request-github`
- `redhat.vscode-yaml`
- `tamasfe.even-better-toml`
- `yzhang.markdown-all-in-one`
- `streetsidesoftware.code-spell-checker`

## Toolchains

| Tool | Version |
| --- | --- |
| Node.js | ≥ 24.0.0 (LTS) |
| pnpm | ≥ 10 (via Corepack) |
| Git | recent — GPG signing **on** (`commit.gpgsign=true`) |
| TypeScript | 5.7 (template pin) |

## Dev workflow

1. `git checkout -b feat/your-thing`
2. `pnpm run dev` in one terminal, `chrome://extensions` open with `dist/`
   loaded
3. Edit code → Vite hot-reloads → background service worker may need a
   manual refresh from `chrome://extensions`
4. `pnpm run lint && pnpm run typecheck && pnpm run test` before commit
5. Commit using Conventional Commits — Husky hooks gate the commit
6. Push, open a PR using the repo's PR template
7. Wait for CI green + review
8. Merge — release-please opens or updates the release PR

## Companion repositories using this template

- [free-steam-games-list](https://github.com/poli0981/free-steam-games-list)
- [free-games-itchio-list](https://github.com/poli0981/free-games-itchio-list)

## Related docs

- [`username.txt`](../username.txt) — public author contact channels
- [`pc_spec.md`](pc_spec.md) — hardware spec
- [`i18n/vi/dev_env.md`](i18n/vi/dev_env.md) — Vietnamese version
