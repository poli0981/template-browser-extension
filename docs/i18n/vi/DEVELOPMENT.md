# Phát triển

## Cài đặt

Xem [INSTALLATION.md](INSTALLATION.md) cho yêu cầu. Tóm tắt:

```sh
corepack enable
pnpm install
```

## Các script

| Script | Mục đích |
| --- | --- |
| `pnpm run dev` | Vite dev server với hot-reload |
| `pnpm run build` | Build production → `dist/` |
| `pnpm run preview` | Preview bản build production |
| `pnpm run typecheck` | `tsc --noEmit` chế độ strict |
| `pnpm run lint` | ESLint flat config, fail nếu có warning |
| `pnpm run lint:fix` | ESLint auto-fix |
| `pnpm run format` | Prettier write |
| `pnpm run format:check` | Prettier check (CI) |
| `pnpm run test` | Vitest chạy 1 lần |
| `pnpm run test:watch` | Vitest watch mode |

## Vòng lặp dev local

```sh
pnpm run dev
```

`@crxjs/vite-plugin` watch `manifest.json` và `src/` rồi rebuild vào
`dist/` mỗi khi save. Lần đầu, load `dist/` dưới dạng unpacked. Sau đó
hầu hết thay đổi sẽ hot-reload — nhưng thay đổi ở service worker
background cần bấm icon refresh trên `chrome://extensions`.

## Quy ước commit

Conventional Commits được enforce bởi `commitlint` qua Husky hook
`commit-msg`. Các type hợp lệ:

```
feat | fix | perf | refactor | docs | style | test | build | ci | chore | revert | security
```

Thêm `!` (ví dụ `feat(api)!: rename method`) hoặc footer `BREAKING CHANGE:`
khi có breaking change. `release-please` sẽ tự tính bump semver.

Pre-commit chạy `lint-staged` (ESLint --fix + Prettier --write) chỉ trên
file đã staged.

## TypeScript

Strict mode bật, bao gồm `noUncheckedIndexedAccess` và
`exactOptionalPropertyTypes`. Các rule type-aware (`no-floating-promises`,
`no-misused-promises`) được bật. **Fix type, đừng silence rule.**

Dùng alias `@/` cho import từ `src/`:

```ts
import { getSetting } from '@/lib/storage';
```

## MV3 service worker — các "gotcha"

- Service worker **theo sự kiện** và terminate khi idle. Đừng giữ state
  trong module scope.
- Đăng ký listener ở **top-level** để reattach khi worker wake.
- Dùng `chrome.storage.session` cho state ngắn, `chrome.storage.sync`
  (8 KB / item, tổng 100 KB) hoặc `chrome.storage.local` (10 MB) cho persist.
- Không remote code: CSP trong `manifest.json` chặn load script từ xa.
  Bundle hết qua Vite.

## Test

Vitest đã cấu hình nhưng template chưa có test. Thêm test ở
`src/**/*.test.ts`. Để mock `chrome.*`, dùng `@types/chrome` + manual mock,
hoặc [`vitest-chrome`](https://github.com/extend-chrome/vitest-chrome).

## CI

Mỗi push và PR sẽ trigger:

- `ci.yml` — lint, typecheck, build, test (matrix Node 22 + 24)
- `codeql.yml` — quét bảo mật
- `repo-lint.yml` — markdown / YAML / actionlint
- `dependency-review.yml` (chỉ PR) — fail nếu có vuln high-severity

Xem `.github/workflows/` cho danh sách đầy đủ.
