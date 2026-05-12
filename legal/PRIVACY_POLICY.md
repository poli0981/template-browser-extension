# Privacy Policy

> **TEMPLATE — fill in jurisdiction-specific details before publishing.**
>
> This document is boilerplate orientation, **not legal advice**. Consult
> a qualified attorney in your jurisdiction before publishing an extension
> that processes user data. See [DISCLAIMER.md](../DISCLAIMER.md).

**Effective date:** _YYYY-MM-DD_ (set when you publish)

## Who we are

The Browser Extension Template (the "Extension") is published by
**SkullMute** (the "Maintainer"), reachable at `lopop05905@proton.me`.

## Data we collect

**As shipped, this template collects no personal data.** It does not phone
home, does not include analytics, and does not transmit any data to any
server controlled by the Maintainer.

Specifically:

- **`chrome.storage.sync`**: settings you enter on the options page are
  stored using the browser's storage API. Storage syncs across your
  signed-in browser profile via Google's own infrastructure — see
  [Google's Privacy Policy](https://policies.google.com/privacy) for that
  layer.
- **`chrome.storage.session`**: not used by default.
- **Telemetry / analytics**: none.
- **Crash reports**: none — the browser may surface uncaught errors to
  Google/Microsoft per its own settings; that is outside our control.

If you fork this template and add data collection, **you must update this
document** before publishing.

## Permissions we request and why

| Permission | Purpose |
| --- | --- |
| `storage` | Persist user-visible options across browser sessions. |

Host permissions: **none by default.** If you add host permissions in
`manifest.json`, list each one here with a one-line justification.

## Data we share

Nothing. We have nothing to share.

## Third-party services

The shipped template does not integrate with any third-party service.

If you fork and integrate a service (e.g. an API your extension calls),
add a row here:

| Service | Data sent | Purpose | Provider's Privacy Policy |
| --- | --- | --- | --- |
| _Example: Steam Store API_ | _Public Steam app IDs only_ | _Look up game metadata_ | _<https://store.steampowered.com/privacy_agreement/>_ |

## Children

The Extension is not directed at children under 13 (or the equivalent age
in your jurisdiction). If you are a parent or guardian and become aware
that a child has provided data, contact us.

## Your rights

Depending on jurisdiction (GDPR / CCPA / PIPL / LGPD / etc.), you may have
rights to access, correct, or delete data. Because the shipped Extension
holds no personal data on the Maintainer's side, there is nothing to
request — but you may clear local data at any time via
`chrome://extensions` → this Extension → **Remove** (uninstalls and clears
storage) or **Site settings** → **Clear data**.

## Changes to this Policy

We will update this Policy when material changes occur. The "Effective
date" at the top will reflect the date of the change. Significant changes
will also be announced in the repository [Discussions](https://github.com/poli0981/template-browser-extension/discussions).

## Contact

Privacy questions: `lopop05905@proton.me` with subject `[PRIVACY]`.
Security issues: see [SECURITY.md](../SECURITY.md).
