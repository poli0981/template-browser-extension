# Cài đặt

## Cài đặt cho người dùng cuối (từ Web Store)

> Thay phần này khi extension đã lên Web Store chính thức.

| Trình duyệt | Store |
| --- | --- |
| Chrome | _Sắp có — Chrome Web Store_ |
| Edge | _Sắp có — Edge Add-ons_ |
| Brave | Cài qua Chrome Web Store (Brave hỗ trợ Chromium MV3) |

## Cài đặt dạng unpacked (cho developer)

Đây là cách side-load extension khi đang phát triển.

### Yêu cầu

- **Node.js ≥ 24.0.0** (LTS)
- **pnpm ≥ 10** (qua Corepack: `corepack enable && corepack prepare pnpm@latest --activate`)
- Git

### Các bước

```sh
git clone https://github.com/poli0981/template-browser-extension.git
cd template-browser-extension
corepack enable
pnpm install
pnpm run build
```

Lệnh trên tạo ra thư mục `dist/`. Cài như unpacked extension:

1. Mở `chrome://extensions` (hoặc `edge://extensions`, `brave://extensions`).
2. Bật **Chế độ nhà phát triển** ở góc trên bên phải.
3. Bấm **Tải tiện ích đã giải nén** (Load unpacked).
4. Chọn thư mục `dist/` vừa tạo.

Icon của extension sẽ xuất hiện trên thanh công cụ. Bấm vào để mở popup.

## Kiểm tra cài đặt

Mở popup, bấm **Ping background**. Nếu nhận về JSON dạng
`{ "type": "PONG", "timestamp": ... }` là OK. Nếu lỗi, vào
`chrome://extensions`, bấm **Errors** dưới extension để xem stack trace,
copy vào [bug report](https://github.com/poli0981/template-browser-extension/issues/new/choose).

## Cập nhật

Với bản unpacked: chạy lại `pnpm run build`, rồi bấm icon refresh trên
`chrome://extensions`.

Với bản Web Store: tự động cập nhật theo lịch của store.
