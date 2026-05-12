# Cấu hình PC của maintainer

> Trang này là bản **public-facing** của `spec.txt` ở root. Tài liệu mô
> tả máy phát triển chính của maintainer để contributor và người báo lỗi
> hiểu bối cảnh. **Không phải** yêu cầu để dùng template.

## Máy phát triển chính

| Thành phần | Chi tiết |
| --- | --- |
| OS | Windows 11 Pro 25H2 Insider Preview (Dev Channel) |
| Build | 26300.8376 |
| CPU | Intel Core i7-14700KF |
| GPU | NVIDIA GeForce RTX 5080 (16 GB VRAM) |
| RAM | 32 GB DDR5 |
| Storage | SSD 1 TB |
| IDE | JetBrains 2026.x (bản trả phí) + VS Code |

## Thiết bị di động để QA cross-browser

| Thiết bị | OS | Trình duyệt |
| --- | --- | --- |
| iPhone 14 Pro | iOS 26.x | Chrome, Brave |
| iPhone 13 Pro Max | iOS 26.x | Chrome, Brave |

Lưu ý: Chrome/Brave trên iOS dùng WKWebView nên hỗ trợ extension hạn
chế. Template này nhắm tới desktop Chromium — iOS chủ yếu để test
companion web-app.

## Phiên bản toolchain (cài local)

Yêu cầu cứng của template là `engines.node >= 24.0.0`. Phiên bản local
của maintainer có thể cao hơn pin trong template.

- Python 3.12.x, 3.14.x
- Node.js ≥ 25.8.1
- pnpm 10.x
- Rust stable (rustup)
- Git (mới), GPG signing on (`commit.gpgsign=true`)
- .NET 8.x / 9.x / 10.x / 11.x (PREVIEW)

## Tài liệu liên quan

- [`spec.txt`](../../../spec.txt) — file hint thô về máy
- [`dev_env.md`](dev_env.md) — IDE và workflow dev
- [`../../pc_spec.md`](../../pc_spec.md) — bản tiếng Anh
