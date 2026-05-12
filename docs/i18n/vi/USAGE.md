# Sử dụng

> Trang này mô tả tương tác mặc định với **UI stub** đi kèm template.
> Hãy thay thế khi bạn đã tùy biến extension cho dự án của mình.

## Mở popup

Bấm icon của extension trên thanh công cụ (nếu chưa pin, bấm icon mảnh
ghép). Popup hiện nút "Ping background" và một vùng hiển thị JSON.

## Mở trang Options

Chuột phải vào icon → **Options**. Hoặc vào `chrome://extensions`, tìm
extension này, bấm **Details** → **Extension options**.

Trang options stub lưu một text field vào `chrome.storage.sync` và load
lại khi mở lần sau.

## Hành vi mặc định của template

- **Popup → background**: bấm nút popup gửi message `PING` cho service
  worker, nhận về `PONG` kèm timestamp.
- **Options page**: ghi/đọc 1 setting mẫu qua `chrome.storage.sync`.
- **Content script**: log `[content-script] loaded on <url>` ra console
  của trang ở thời điểm `document_idle`.
- **i18n**: đổi ngôn ngữ trình duyệt sang tiếng Việt thì tên và mô tả
  extension cũng đổi theo (xem `public/_locales/`).

## Tùy biến cho extension của bạn

Sửa:

- `manifest.json` — permissions, host permissions, content script matches
- `public/_locales/*/messages.json` — chuỗi đa ngôn ngữ
- `src/popup/` — UI popup
- `src/options/` — trang options
- `src/background/service-worker.ts` — logic background
- `src/content/content-script.ts` — hành vi inject vào trang web

Xem [DEVELOPMENT.md](DEVELOPMENT.md) để biết quy trình dev.
