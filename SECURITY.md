# Security Policy

## Supported versions

This is a template repository — security updates are applied to the `main`
branch only. Downstream consumers are responsible for their own supported
versions.

| Version | Supported |
| --- | --- |
| `main` (HEAD) | ✅ |
| Tagged releases | Latest only |
| Older tags | ❌ |

## Reporting a vulnerability

**Please do not open a public GitHub issue for security reports.**

### Preferred — GitHub private advisory

Open a private advisory at
**[github.com/poli0981/template-browser-extension/security/advisories/new](https://github.com/poli0981/template-browser-extension/security/advisories/new)**.
This is the fastest path; the maintainer is notified and can collaborate on
a fix in private before public disclosure.

### Alternative — email

Send a PGP-encrypted email (or plaintext if PGP is impractical) to
**`lopop05905@proton.me`** with the subject prefix `[SECURITY]`. Include:

- Affected file/component/version
- Reproduction steps or PoC
- Suspected impact (data leak, RCE, privilege escalation, etc.)
- Your preferred credit name (or "anonymous")

### Do NOT send via public Telegram

Per maintainer policy: **the maintainer's Telegram User ID must never be
posted in public channels or public issues.** If you have the User ID via a
prior private channel, you may use it for private DM — but never paste it
into a public report, screenshot, or GitHub comment. Use the advisory link
or email above instead.

## Response targets

| Step | Target |
| --- | --- |
| Initial acknowledgement | within 72 hours |
| Triage + severity assessment | within 7 days |
| Fix or mitigation | severity-dependent (critical: ≤14 days) |
| Public advisory | after fix is released and consumers have had time to update |

## Scope

In-scope:

- This repository's source code, build configuration, workflows.
- Supply-chain risks in declared `dependencies` / `devDependencies`.
- Workflow permissions that could enable token/secret exfiltration.

Out-of-scope:

- Vulnerabilities in browsers themselves — report to the browser vendor.
- Vulnerabilities in downstream forks — report to that fork's maintainer.
- Social-engineering of maintainers.

## Automation

This repository runs:

- **CodeQL v4** (`javascript-typescript`, security-extended queries)
- **Dependabot** (npm + github-actions, weekly)
- **`actions/dependency-review-action@v4`** on PRs
- Auto-Discussion on critical security advisories

See [.github/workflows/](.github/workflows/) for the wired automations.
