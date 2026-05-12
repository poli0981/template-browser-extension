<!--
Thanks for sending a PR! Please fill out this template completely so we
can review quickly. Delete sections that don't apply, but don't leave
empty headings.
-->

## Summary

<!-- One or two sentences. What changes, and why? -->

## Type of change

<!-- Check ONE box that best describes the primary intent. -->
- [ ] 🐛 Bug fix (`fix:`)
- [ ] ✨ New feature (`feat:`)
- [ ] ⚡ Performance (`perf:`)
- [ ] 🔥 Breaking change (`feat!:` / `fix!:` or `BREAKING CHANGE:` footer)
- [ ] 📝 Documentation (`docs:`)
- [ ] ♻️ Refactor (`refactor:`)
- [ ] 🧪 Tests (`test:`)
- [ ] 🏗️ Build / tooling (`build:` / `ci:`)
- [ ] 🔐 Security (`security:`)
- [ ] 🧹 Chore (`chore:`)

## Related issues

<!-- Link issues/Discussions this PR addresses. Use `Closes #N` for issues
that should auto-close on merge. -->
- Closes #
- Refs #

## How I tested

<!-- Reproducible steps. For UI changes, include screenshots/GIFs of before/after. -->

```sh
pnpm install
pnpm run lint
pnpm run typecheck
pnpm run test
pnpm run build
# Loaded dist/ as unpacked extension in Chrome XYZ, verified ...
```

### Browsers tested

- [ ] Chrome (Manifest V3)
- [ ] Microsoft Edge
- [ ] Brave
- [ ] Other: _____

## Screenshots / video (for UI changes)

<!-- Drag-drop here. Bonus: a short GIF of the new behavior. -->

## Checklist

- [ ] Commits use [Conventional Commits](https://www.conventionalcommits.org/)
- [ ] `pnpm run lint` passes
- [ ] `pnpm run typecheck` passes
- [ ] `pnpm run test` passes
- [ ] `pnpm run build` succeeds and the resulting `dist/` loads as an unpacked extension
- [ ] Added/updated tests where it makes sense
- [ ] Updated docs (README / `docs/` / `docs/i18n/vi/`)
- [ ] No new ESLint warnings (CI is `--max-warnings 0`)
- [ ] If permissions changed in `manifest.json`, updated
  [`legal/PRIVACY_POLICY.md`](../legal/PRIVACY_POLICY.md)
- [ ] If user-facing behavior changed, no follow-up needed in
  [`docs/USAGE.md`](../docs/USAGE.md) (or it's been updated)

## AI assistance disclosure (optional)

<!-- If a meaningful portion of this PR was AI-assisted, note the tool
and the parts. We don't penalize AI use — disclosure helps reviewers. -->
- [ ] I used AI assistance for this PR. Tool: _____  Scope: _____
