# Môi trường phát triển

> Cái mà maintainer dùng hàng ngày cho template. Không phải yêu cầu cho
> contributor — bất kỳ máy nào có Node 24 LTS và editor hiện đại đều OK.

## Editor

### JetBrains IDEs (2026.x, bản trả phí)

- **WebStorm** — chính cho template này (TypeScript + Vite)
- **PyCharm** — utility và script Python
- **RustRover** — companion Rust
- **Rider** — tooling .NET

Plugin hay bật: ESLint, Prettier, Conventional Commit, .editorconfig,
GitToolBox, GitHub Copilot.

### VS Code

[`.devcontainer/devcontainer.json`](../../../.devcontainer/devcontainer.json)
trong repo đã preload set extension tương ứng:

- `dbaeumer.vscode-eslint`
- `esbenp.prettier-vscode`
- `EditorConfig.EditorConfig`
- `GitHub.vscode-github-actions`
- `GitHub.vscode-pull-request-github`
- `redhat.vscode-yaml`
- `tamasfe.even-better-toml`
- `yzhang.markdown-all-in-one`
- `streetsidesoftware.code-spell-checker`

## Toolchain

| Tool | Version |
| --- | --- |
| Node.js | ≥ 24.0.0 (LTS) |
| pnpm | ≥ 10 (qua Corepack) |
| Git | recent — GPG signing **bật** (`commit.gpgsign=true`) |
| TypeScript | 5.7 (pin trong template) |

## Workflow dev

1. `git checkout -b feat/your-thing`
2. `pnpm run dev` trong 1 terminal, `chrome://extensions` mở sẵn với
   `dist/` đã load
3. Sửa code → Vite hot-reload → service worker background có thể cần
   refresh thủ công trên `chrome://extensions`
4. `pnpm run lint && pnpm run typecheck && pnpm run test` trước khi commit
5. Commit với Conventional Commits — Husky hook gate commit
6. Push, mở PR dùng template PR của repo
7. Chờ CI xanh + review
8. Merge — release-please tạo hoặc cập nhật PR release

## Các repository sử dụng template này

- [free-steam-games-list](https://github.com/poli0981/free-steam-games-list)
- [free-games-itchio-list](https://github.com/poli0981/free-games-itchio-list)

## Tài liệu liên quan

- [`username.txt`](../../../username.txt) — kênh liên hệ public của tác giả
- [`pc_spec.md`](pc_spec.md) — cấu hình phần cứng
- [`../../dev_env.md`](../../dev_env.md) — bản tiếng Anh
