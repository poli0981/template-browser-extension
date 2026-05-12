# Kiến trúc

## Tổng quan

```
┌─────────────────────────────────────────────────────────────┐
│  Trình duyệt (Chrome / Edge / Brave)                        │
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
│   │ (options.ts) │                │ (inject mỗi tab)    │   │
│   └──────────────┘                └─────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

## Các thành phần

### `manifest.json`

Nguồn sự thật duy nhất cho metadata, permissions, và entry points.
`@crxjs/vite-plugin` đọc file này lúc build và emit HTML/JS/CSS cần thiết
vào `dist/`.

### Background service worker (`src/background/service-worker.ts`)

- Type: `service_worker` + `"type": "module"` → ES module import hoạt động.
- Đăng ký listener ở top-level: `onInstalled`, `onStartup`, `onMessage`.
- Terminate khi idle (~30s ở Chrome); reactivate theo event. Không giữ
  state trong module scope.

### Popup (`src/popup/`)

HTML + TS tiêu chuẩn, render khi user bấm icon. Popup process ngắn —
đóng popup là kill mọi work đang chạy. Cho task dài, message tới service
worker.

### Options page (`src/options/`)

Trang đầy đủ mở trong tab (`open_in_tab: true` trong manifest). Tồn tại
qua navigation. Phù hợp cho settings phức tạp.

### Content script (`src/content/`)

Inject vào trang web theo match (mặc định `<all_urls>` — **thu hẹp** ở
production!). Chạy ở `document_idle`. Truy cập DOM của trang nhưng KHÔNG
truy cập extension API privileged — phải message tới background.

### Shared lib (`src/lib/`)

Typed wrapper quanh `chrome.*` API. Hiện tại: `storage.ts` →
`chrome.storage.sync`. Thêm wrapper ở đây để code phía trên dễ test.

## Build pipeline

```
manifest.json
      │
      ▼
Vite + @crxjs/vite-plugin
      │
      │  đọc:    src/{popup,options,background,content}/*
      │          public/icons/*
      │          public/_locales/*
      │
      ▼
   dist/
   ├── manifest.json     (path asset đã hash lại)
   ├── service-worker-*.js
   ├── src/popup/index.html
   ├── src/options/index.html
   ├── assets/
   ├── icons/
   └── _locales/
```

## Mô hình permissions

`manifest.json` mặc định chỉ xin `storage`. Chỉ thêm vào `permissions` và
`host_permissions` những gì THỰC SỰ dùng:

- Mỗi permission hiển thị với user lúc cài — tối thiểu là tốt nhất.
- Chrome Web Store reject extension xin permission không dùng.

## i18n

`public/_locales/{lang}/messages.json` cung cấp chuỗi đa ngôn ngữ. Trong
`manifest.json`, các chuỗi `"__MSG_extension_name__"` và
`"__MSG_extension_description__"` được thay tại runtime theo ngôn ngữ UI
của trình duyệt.

## Ranh giới bảo mật

- Service worker, popup, options page, content script chạy trong **các
  context JavaScript riêng biệt**.
- Dùng `chrome.runtime.sendMessage` / `chrome.runtime.onMessage` để giao
  tiếp giữa các context. **Validate shape của mọi message** — content
  script chạy trên trang không tin cậy.
- CSP của manifest chặn `eval` và load remote script mặc định.
  Đừng nới lỏng.
