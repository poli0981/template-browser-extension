# Phát hành

Dự án dùng **[release-please](https://github.com/googleapis/release-please)**
để tự động bump version, sinh changelog, và tạo GitHub Release dựa trên
[Conventional Commits](https://www.conventionalcommits.org/).

## Cách hoạt động

1. Bạn merge PR vào `main` với Conventional Commits (`feat:`, `fix:`,
   `feat!:`, v.v.).
2. Workflow `release-please.yml` chạy mỗi lần push vào `main`, duy trì
   một **PR release** đơn (tiêu đề kiểu `chore(main): release 1.2.0`).
3. PR release chứa:
   - Bump version trong `package.json` và `manifest.json`
   - `CHANGELOG.md` sinh lại từ Conventional Commits kể từ release trước
4. Khi bạn **merge PR release**, workflow sẽ tag commit (`v1.2.0`) và
   tạo GitHub Release.
5. `announce-release.yml` và `auto-discussion-release.yml` bắt event
   release rồi post Discord + tạo Discussion.

## Bump semver từ Conventional Commits

| Commit | Bump |
| --- | --- |
| `fix:` hoặc `perf:` | patch (1.2.3 → 1.2.4) |
| `feat:` | minor (1.2.3 → 1.3.0) |
| `feat!:` hoặc footer `BREAKING CHANGE:` | major (1.2.3 → 2.0.0) |
| `docs:`, `style:`, `test:`, `chore:`, `ci:`, `build:`, `refactor:`, `revert:`, `security:` | không bump |

## Pre-release (alpha/beta)

Cho pre-release, push lên branch tên `next` hoặc dùng `prerelease: true`
trong `release-please-config.json` (chưa ship sẵn; thêm khi cần).

## Manual override

Cần publish ngay không chờ PR release:

```sh
gh workflow run release-please.yml
```

Muốn ép version cụ thể, sửa PR release trực tiếp trước khi merge.

## Publish lên Web Store

`release-please` KHÔNG publish lên Chrome Web Store, Edge Add-ons, hay
Mozilla Add-ons. Sau khi GitHub Release được tạo:

1. Tải `dist.zip` từ asset của release.
2. Upload qua developer dashboard của từng store.
3. (Tùy chọn) Tự động hóa sau bằng workflow `web-store-publish.yml`
   dùng API token của store lưu trong GitHub secrets.

## Rollback

Để rollback một release bị lỗi:

1. Mark GitHub Release là **pre-release** để gỡ khỏi "latest".
2. Cut release patch mới với commit `revert:` (Conventional Commits
   `revert:` không bump version — pair với `fix:` để bump patch).
3. Pull bản lỗi khỏi mỗi Web Store qua developer dashboard.
