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

## 部署到 GitHub Pages（gh-pages 分支）

本仓库采用 **gh-pages 分支部署**：把构建产物直接推到 `gh-pages` 分支根目录，Pages 源设为该分支，
无需 GitHub Actions 工作流（因此也不要求 token 具备 `workflow` scope）。

仓库已初始化并提交在 `main` 分支，仓库名 `pspp-docs`，站点 `base` 为 `/pspp-docs/`。

1. **（可选）修改 base**：若部署到别的仓库名，编辑 `docs/.vitepress/config.ts` 顶部的
   `base`，改为 `/你的仓库名/`（结尾斜杠不可省略）。
2. **推送源码到 main**（首次）：

   ```bash
   git remote add origin https://github.com/<你的用户名>/pspp-docs.git
   git push -u origin main
   ```

3. **构建并推送到 gh-pages**：

   ```bash
   npm run docs:build
   cd docs/.vitepress/dist
   git init -b gh-pages
   git add -A
   git commit -m "deploy: gh-pages"
   git push --force https://github.com/<你的用户名>/pspp-docs.git gh-pages
   rm -rf .git
   cd ../../..
   ```

4. **启用 Pages**：仓库 `Settings → Pages → Build and deployment → Source` 选择
   **Deploy from a branch**，分支选 `gh-pages`、目录选 `/ (root)`，保存后访问
   `https://<你的用户名>.github.io/pspp-docs/`。

> 改用 GitHub Actions 自动部署：本仓库保留了示例工作流
> `docs/.vitepress/deploy.workflow.example.yml`。若你的 token 具备 `workflow` scope，
> 把它复制为 `.github/workflows/deploy.yml` 并推送即可改为自动部署。

> 说明：本仓库的 `_source/` 目录与 `tools/pspp-tutorial-src.docx` 已被 `.gitignore` 忽略，
> 不会推送到远程；如需把原始源文档也纳入版本管理，可从 `.gitignore` 中移除 `_source/`。
