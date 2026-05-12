# Architecture

## High level

```
┌─────────────────────────────────────────────────────────────┐
│  Browser (Chrome / Edge / Brave)                            │
│                                                             │
│   ┌──────────────┐    message    ┌─────────────────────┐   │
│   │  Popup UI    │ ───────────▶  │  Service worker     │   │
│   │ (popup.ts)   │ ◀───────────  │ (background)        │   │
│   └──────────────┘   response    └─────────────────────┘   │
│           │                              │                  │
│           │ chrome.storage.sync          │ chrome.storage   │
│           ▼                              ▼                  │
│   ┌──────────────┐                ┌─────────────────────┐   │
│   │ Options page │                │  Content script     │   │
│   │ (options.ts) │                │ (per-tab injection) │   │
│   └──────────────┘                └─────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

## Components

### `manifest.json`

Single source of truth for extension metadata, permissions, and entry
points. `@crxjs/vite-plugin` reads it at build time and emits the
necessary HTML/JS/CSS into `dist/`.

### Background service worker (`src/background/service-worker.ts`)

- Type: `service_worker` with `"type": "module"` → ES module imports work.
- Registers listeners at top level: `onInstalled`, `onStartup`, `onMessage`.
- Terminates on idle (~30s in Chrome); reactivates on event. Don't keep
  state in module scope.

### Popup (`src/popup/`)

Standard HTML + TS that ships as a small page rendered when the user clicks
the toolbar icon. The popup process is short-lived — closing it kills any
in-flight work. For long-running tasks, message the service worker.

### Options page (`src/options/`)

A full page opened in a tab (`open_in_tab: true` in manifest). Persistent
across navigation. Good for complex settings.

### Content script (`src/content/`)

Injected into matched pages (`<all_urls>` by default — narrow this for
production!). Runs at `document_idle`. Has access to the page DOM but
not to extension APIs requiring privileged context — those require
messaging the background.

### Shared lib (`src/lib/`)

Typed wrappers around `chrome.*` APIs. Right now: `storage.ts` →
`chrome.storage.sync` (get/set/remove/clear). Add wrappers here as you
need them so the rest of the code stays test-friendly.

## Build pipeline

```
manifest.json
      │
      ▼
Vite + @crxjs/vite-plugin
      │
      │  reads:  src/{popup,options,background,content}/*
      │          public/icons/*
      │          public/_locales/*
      │
      ▼
   dist/
   ├── manifest.json     (rewritten with hashed asset paths)
   ├── service-worker-*.js
   ├── src/popup/index.html
   ├── src/options/index.html
   ├── assets/
   ├── icons/
   └── _locales/
```

## Permissions model

The default `manifest.json` requests only `storage`. Add to `permissions`
and `host_permissions` only what you actually use:

- Every permission is shown to the user at install — minimum is best.
- Chrome Web Store rejects extensions requesting unused permissions.

## i18n

`public/_locales/{lang}/messages.json` files supply localized strings. In
`manifest.json`, the strings `"__MSG_extension_name__"` and
`"__MSG_extension_description__"` are replaced at runtime based on the
browser's UI language.

## Security boundary

- The service worker, popup, options page, and content script run in
  **separate JavaScript contexts**.
- Use `chrome.runtime.sendMessage` / `chrome.runtime.onMessage` to cross
  contexts. Validate every message's shape — content scripts run on
  untrusted pages.
- The manifest CSP forbids `eval` and remote script loading by default.
  Don't relax it.
