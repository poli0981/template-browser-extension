# Maintainer's PC spec

> This page is the **public-facing** version of `spec.txt` at the repo
> root. It documents the maintainer's primary development machine so that
> contributors and bug reporters can understand where reports are coming
> from. It is **not** a requirement for using this template.

## Primary developer machine

| Component | Details |
| --- | --- |
| OS | Windows 11 Pro 25H2 Insider Preview (Dev Channel) |
| Build | 26300.8376 |
| CPU | Intel Core i7-14700KF |
| GPU | NVIDIA GeForce RTX 5080 (16 GB VRAM) |
| RAM | 32 GB DDR5 |
| Storage | 1 TB SSD |
| IDE | JetBrains 2026.x (paid lineup) + VS Code |

## Mobile devices for cross-browser QA

| Device | OS | Browsers |
| --- | --- | --- |
| iPhone 14 Pro | iOS 26.x | Chrome, Brave |
| iPhone 13 Pro Max | iOS 26.x | Chrome, Brave |

Note: iOS Chrome / Brave use WKWebView under the hood, so extension support
is limited. The template targets desktop Chromium browsers — iOS is for
companion web-app testing.

## Toolchain versions (local installs)

The template's hard requirement is `engines.node >= 24.0.0`. These are the
maintainer's local versions, which may be ahead of the template's pin.

- Python 3.12.x, 3.14.x
- Node.js ≥ 25.8.1
- pnpm 10.x
- Rust stable (rustup)
- Git (recent), GPG signing on (`commit.gpgsign=true`)
- .NET 8.x / 9.x / 10.x / 11.x (PREVIEW)

## Related docs

- [`spec.txt`](../spec.txt) — raw machine-spec hint file
- [`dev_env.md`](dev_env.md) — IDE configuration and dev workflow
- [`i18n/vi/pc_spec.md`](i18n/vi/pc_spec.md) — Vietnamese version
