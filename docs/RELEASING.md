# Releasing

This project uses **[release-please](https://github.com/googleapis/release-please)**
to automate version bumps, changelog generation, and GitHub Releases based
on [Conventional Commits](https://www.conventionalcommits.org/).

## How it works

1. You merge PRs to `main` using Conventional Commits (`feat:`, `fix:`,
   `feat!:`, etc.).
2. The `release-please.yml` workflow runs on every push to `main` and
   maintains a single open **release PR** titled something like
   `chore(main): release 1.2.0`.
3. That release PR contains:
   - Version bump in `package.json` and `manifest.json`
   - Regenerated `CHANGELOG.md` from Conventional Commits since last release
4. When you **merge the release PR**, the workflow tags the commit
   (`v1.2.0`) and creates a GitHub Release.
5. The `announce-release.yml` wrapper and `auto-discussion-release.yml`
   pick up the release event and post to Discord + create a Discussion.

## Semver bumps from Conventional Commits

| Commit | Bump |
| --- | --- |
| `fix:` or `perf:` | patch (1.2.3 → 1.2.4) |
| `feat:` | minor (1.2.3 → 1.3.0) |
| `feat!:` or `BREAKING CHANGE:` footer | major (1.2.3 → 2.0.0) |
| `docs:`, `style:`, `test:`, `chore:`, `ci:`, `build:`, `refactor:`, `revert:`, `security:` | no bump |

## Pre-release (alpha/beta)

For a pre-release, push to a branch named `next` or use `prerelease: true`
in `release-please-config.json` (not shipped by default; add when needed).

## Manual override

If you need to publish without waiting for the release PR:

```sh
gh workflow run release-please.yml
```

To force a specific version, edit the release PR directly before merging.

## Web Store publication

`release-please` does **not** publish to the Chrome Web Store, Edge Add-ons,
or Mozilla Add-ons. After a GitHub Release is created:

1. Download `dist.zip` from the release assets.
2. Upload via each store's developer dashboard.
3. (Optional) Automate this later with a `web-store-publish.yml` workflow
   using each store's API token stored as a GitHub secret.

## Rolling back

To roll back a bad release:

1. Mark the GitHub Release as **pre-release** to remove it from "latest".
2. Cut a new patch release with a `revert:` commit (Conventional Commits
   `revert:` doesn't bump version — pair with a `fix:` to bump patch).
3. Pull the bad version from each Web Store via the developer dashboard.
