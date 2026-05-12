# Usage

> This page describes how end-users interact with the **template's
> built-in stub UI**. Replace it once you've customized the extension.

## Opening the popup

Click the extension's toolbar icon (puzzle piece menu in Chrome if it isn't
pinned). The popup shows a "Ping background" button and a JSON response
area.

## Opening the options page

Right-click the extension's toolbar icon → **Options**. Or go to
`chrome://extensions`, find this extension, click **Details** → **Extension
options**.

The stub options page persists a single text field to `chrome.storage.sync`
and loads it back on next open.

## What the template does out of the box

- **Popup → background**: clicking the popup button sends a `PING` message
  to the service worker, which replies with `PONG` plus a timestamp.
- **Options page**: writes/reads one example setting via `chrome.storage.sync`.
- **Content script**: logs `[content-script] loaded on <url>` to the page's
  console on every page load (idle timing).
- **Locales**: switching the browser locale to Vietnamese changes the
  extension's name and description (see `public/_locales/`).

## Customising for your extension

Edit:

- `manifest.json` — permissions, host permissions, content script matches
- `public/_locales/*/messages.json` — localized strings
- `src/popup/` — the popup UI
- `src/options/` — the options page
- `src/background/service-worker.ts` — background logic
- `src/content/content-script.ts` — page-injected behavior

See [DEVELOPMENT.md](DEVELOPMENT.md) for the dev workflow.
