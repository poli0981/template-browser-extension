# Contributing

Thanks for considering a contribution! This document covers PRs, issues, and
direct contact for things that don't fit either.

## Before you start

1. Read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
2. Search [open issues](https://github.com/poli0981/template-browser-extension/issues)
   and [Discussions](https://github.com/poli0981/template-browser-extension/discussions)
   — your idea may already be tracked.
3. For non-trivial changes, open a Discussion first to validate the direction
   before writing code.

## Development setup

Prerequisites: **Node.js ≥ 24.0.0**, **pnpm ≥ 10**, Git.

```sh
corepack enable
pnpm install
pnpm run dev          # Vite dev server with hot-reload
```

To build and load as an unpacked extension:

```sh
pnpm run build
# chrome://extensions → Developer mode → Load unpacked → select dist/
```

The repo also ships a [Dev Container](.devcontainer/devcontainer.json) — open
in VS Code or GitHub Codespaces for a preconfigured Node 24 environment.

## Workflow

1. Fork the repo, create a topic branch from `main`:
   `git checkout -b feat/short-description`
2. Make your change. Keep PRs focused — one concern per PR.
3. Run the local checks:
   ```sh
   pnpm run lint
   pnpm run typecheck
   pnpm run test
   pnpm run build
   ```
4. Commit using [Conventional Commits](https://www.conventionalcommits.org/)
   (enforced by commitlint via the `commit-msg` Husky hook):
   ```
   feat(popup): add ping button
   fix(storage): clear() should reset all keys
   docs(readme): update Node version pin
   ```
5. Push and open a PR against `main`. Fill out the PR template completely.
6. CI must be green and at least one maintainer must approve before merge.

## Commit types

`feat`, `fix`, `perf`, `refactor`, `docs`, `style`, `test`, `build`, `ci`,
`chore`, `revert`, `security`. Append `!` (or add `BREAKING CHANGE:` footer)
for breaking changes. release-please uses these to determine semver bumps.

## Issues

Use the YAML form templates under
**[New Issue](https://github.com/poli0981/template-browser-extension/issues/new/choose)**:

- 🐛 **Bug report** — reproducible defect
- ✨ **Feature request** — new capability
- 💬 **Feedback** — general thoughts, not necessarily actionable

Security issues: **do not** open a public issue. See
[SECURITY.md](SECURITY.md).

## Contact maintainer beyond PR/issue

Sometimes you need to reach the maintainer about something that doesn't fit
a public PR or issue — sensitive feedback, sponsorship questions, license
questions, takedown requests, etc.

Public channels:

- Email: `lopop05905@proton.me`
- Discord (repo server): <https://discord.gg/2aNR3aVt> — open a thread in
  `#general` or DM a moderator
- X / Twitter: [@SkullMute0011](https://x.com/SkullMute0011)
- Bluesky: [@skullmute0011.bsky.social](https://bsky.app/profile/skullmute0011.bsky.social)
- Mastodon: [@skullmute1122@mastodon.social](https://mastodon.social/@skullmute1122)

> ⚠️ **Telegram contact**: The maintainer's Telegram User ID is **not posted
> publicly**. If you have it from a prior private channel, you may DM
> directly — but do not paste the User ID anywhere public (issues, PRs,
> Discussions, social posts). See [SECURITY.md](SECURITY.md).

## License of contributions

By submitting a contribution, you agree that it will be licensed under the
same license as the project (see [LICENSE](LICENSE)).
