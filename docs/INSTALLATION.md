# Installation

## End-user installation (from a Web Store)

> Replace this section with your published listing once your extension is
> live on a Web Store.

| Browser | Store |
| --- | --- |
| Chrome | _Coming soon — Chrome Web Store link_ |
| Edge | _Coming soon — Edge Add-ons link_ |
| Brave | Install via Chrome Web Store (Brave supports Chromium MV3) |

## Developer / unpacked installation

This is the path you'll use during development or to side-load a build.

### Prerequisites

- **Node.js ≥ 24.0.0** (LTS)
- **pnpm ≥ 10** (via Corepack: `corepack enable && corepack prepare pnpm@latest --activate`)
- Git

### Steps

```sh
git clone https://github.com/poli0981/template-browser-extension.git
cd template-browser-extension
corepack enable
pnpm install
pnpm run build
```

This produces a `dist/` folder. Load it as an unpacked extension:

1. Open `chrome://extensions` (or `edge://extensions`, `brave://extensions`).
2. Toggle **Developer mode** in the top right.
3. Click **Load unpacked**.
4. Select the `dist/` folder produced above.

The extension's toolbar icon should appear. Click it to open the popup.

## Verifying installation

Open the popup and click **Ping background**. You should see a JSON
response with `{ "type": "PONG", "timestamp": ... }`. If you see an error,
open `chrome://extensions`, click **Errors** under your extension, and
copy the stack trace into a [bug report](https://github.com/poli0981/template-browser-extension/issues/new/choose).

## Updating

For unpacked installs: rebuild with `pnpm run build` and click the refresh
icon next to your extension on `chrome://extensions`.

For Web Store installs: updates roll out automatically per the store's
schedule.
