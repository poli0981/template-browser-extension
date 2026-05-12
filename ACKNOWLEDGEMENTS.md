# Acknowledgements

This template stands on the shoulders of open-source projects and would not
exist without them.

## Runtime & language

- [Node.js](https://nodejs.org/) — JavaScript runtime
- [TypeScript](https://www.typescriptlang.org/) — typed JavaScript

## Build & tooling

- [Vite](https://vite.dev/) — frontend build tool
- [`@crxjs/vite-plugin`](https://github.com/crxjs/chrome-extension-tools) —
  MV3 bundling for Vite
- [Rolldown](https://rolldown.rs/) — Rust-based bundler powering Vite 8
- [pnpm](https://pnpm.io/) — fast, disk-efficient package manager
- [Corepack](https://github.com/nodejs/corepack) — Node's package-manager
  version manager

## Code quality

- [ESLint](https://eslint.org/) + [`typescript-eslint`](https://typescript-eslint.io/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/) — Git hooks
- [lint-staged](https://github.com/lint-staged/lint-staged) — run linters
  on staged files
- [commitlint](https://commitlint.js.org/) — Conventional Commits enforcement
- [EditorConfig](https://editorconfig.org/)

## Testing

- [Vitest](https://vitest.dev/) — Vite-native test runner

## CI/CD & security

- [GitHub Actions](https://github.com/features/actions)
- [CodeQL](https://codeql.github.com/) — semantic code analysis
- [Dependabot](https://github.com/dependabot) — dependency updates
- [release-please](https://github.com/googleapis/release-please) — automated
  releases from Conventional Commits
- [`actions/dependency-review-action`](https://github.com/actions/dependency-review-action)
- [`actions/labeler`](https://github.com/actions/labeler)
- [`actions/stale`](https://github.com/actions/stale)

## Browser extension references

- [Chrome Extensions documentation](https://developer.chrome.com/docs/extensions)
- [WebExtensions API on MDN](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions)

## Documentation conventions

- [Keep a Changelog](https://keepachangelog.com/)
- [Semantic Versioning](https://semver.org/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Contributor Covenant](https://www.contributor-covenant.org/) — Code of
  Conduct v2.1

## AI tooling acknowledgement

Drafts of this template's documentation, boilerplate code, and some
configuration files were prepared with the assistance of AI coding
assistants, including:

- [Claude Code](https://claude.com/claude-code) (Anthropic)
- [GitHub Copilot](https://github.com/features/copilot)
- Other AI assistants used by the maintainer for productivity

All AI-generated content was reviewed by the maintainer before commit.
Contributors are encouraged to disclose AI assistance in PR descriptions
when material portions of a PR are AI-drafted.

## Inspiration

- Public template repositories from the Chrome Extensions community
- The community of Chromium/Firefox extension developers documenting MV3
  migration paths since 2022
