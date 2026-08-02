# PSPP 文档中心

基于 [VitePress](https://vitepress.dev/) 构建的 GNU PSPP 文档站点，包含：

- **中文参考手册**（`docs/manual-zh/`，源自 `pspp-zh.md`）
- **英文参考手册**（`docs/manual-en/`，源自 `pspp.md`）
- **中文入门教程**（`docs/tutorial/`，源自 `pspp-tutorial`，共 10 章）
- **PDF 版教程**：`docs/public/assets/pspp-tutorial.pdf`，可在网页内预览并下载

> 文档内容基于 GNU PSPP 2.0.1（gff8d3d）手册与入门教程整理。

## 目录结构

```
.
├── docs/                     # VitePress 内容根目录（srcDir）
│   ├── .vitepress/
│   │   ├── config.ts         # 站点配置（nav / sidebar / base）
│   │   ├── sidebar-zh.ts     # 由 index.md 自动生成的侧边栏
│   │   ├── sidebar-en.ts
│   │   └── theme/            # 自定义主题（PdfViewer 组件）
│   ├── index.md              # 首页
│   ├── manual-zh/            # 中文手册（417 个节点）
│   ├── manual-en/            # 英文手册
│   ├── tutorial/             # 入门教程（10 章 + pdf 页）
│   └── public/assets/        # 静态资源（含 pspp-tutorial.pdf）
├── tools/                    # 重新生成文档的脚本（transform / sidebar）
├── _source/                  # 原始源文档（本地保留，已 gitignore，不进仓库）
├── package.json
└── README.md
```
```

## 本地开发

```bash
npm install        # 安装依赖
npm run docs:dev    # 本地预览 http://localhost:5173/pspp-docs/
```

> 本地访问路径含 `/pspp-docs/` 前缀，由 `docs/.vitepress/config.ts` 中的 `base` 决定。

## 构建

```bash
npm run docs:build      # 输出到 docs/.vitepress/dist
npm run docs:preview    # 本地预览构建产物
```

## 重新生成内容（可选）

若更新了 `_source/` 下的源文档，可重新生成站点内容：

```bash
python tools/transform_docs.py     # 复制/整理到 docs/
python tools/generate_sidebar.py   # 由 index.md 重新生成侧边栏
```

## 部署到 GitHub Pages（GitHub Actions 自动部署）

本仓库采用 **GitHub Actions 自动部署**：每次向 `main` 分支推送，工作流
`.github/workflows/deploy.yml` 会自动构建 VitePress 站点并把产物发布到 GitHub Pages，
无需手动推送 `gh-pages` 分支（旧的分支式部署已弃用，该分支不再被读取）。

仓库名 `pspp-docs`，站点 `base` 为 `/pspp-docs/`，线上地址
`https://<你的用户名>.github.io/pspp-docs/`。

1. **（可选）修改 base**：若部署到别的仓库名，编辑 `docs/.vitepress/config.ts` 顶部的
   `base`，改为 `/你的仓库名/`（结尾斜杠不可省略）。
2. **启用 Pages（一次性）**：仓库 `Settings → Pages → Build and deployment → Source`
   选择 **GitHub Actions**。
3. **自动部署**：推送到 `main` 即触发构建与发布；也可在仓库
   `Actions → Deploy PSPP Docs to GitHub Pages → Run workflow` 手动触发。
4. **本地预览**（不部署）：

   ```bash
   npm run docs:build
   npm run docs:preview   # 默认 http://localhost:4173
   ```

> 要求 `gh` / Git 使用的 token 具备 `workflow` scope（用于推送 `.github/workflows/*.yml`）。

> 说明：本仓库的 `_source/` 目录与 `tools/pspp-tutorial-src.docx` 已被 `.gitignore` 忽略，
> 不会推送到远程；如需把原始源文档也纳入版本管理，可从 `.gitignore` 中移除 `_source/`。
