// 解决 GitHub Pages 对叶子页直接链接 404 的问题。
//
// 背景：VitePress 把叶子页生成为 X.html；GitHub Pages 对 /X/ 只会找 X/index.html，
// 找不到就 404。但 VitePress 的站内 SPA 导航依赖 X.html（以及每页的 *.md.*.lean.js
// 数据模块），且 VitePress 是按「源文件目录的相对路径」解析 .md 交叉链接——若把 840
// 个 X.md 重命名为 X/index.md，1582 个兄弟相对链接会全部断裂，故不能重构源码。
//
// 本脚本采取「零风险 + 减半体积」方案：保留 X.html（真实内容，仅一份），并在同级生成
// X/index.html 作为【极小的重定向页】指向 ../X.html。
//   - 站内 SPA 导航：走 *.md.*.lean.js 模块，不经过 X/index.html，零跳转、瞬时。
//   - 直链 /X/（硬刷新 / 外链 / 搜索引擎）：GitHub Pages 返回 X/index.html（HTTP 200），
//     瞬时 meta-refresh + JS 跳到 ../X.html 加载真实页面，用户看不到 404。
//   - 体积：每个 X/index.html 仅 ~0.4KB，替代原先复制整页（~225KB），部署产物约减半。
//
// 用法（已接入 package.json 的 docs:build）：node tools/fix-leaf-html.mjs [distDir]

import {
  readdirSync,
  statSync,
  writeFileSync,
  mkdirSync,
  existsSync,
} from 'node:fs'
import { join, dirname, relative, basename, extname } from 'node:path'

const distDir = process.argv[2] || 'docs/.vitepress/dist'
let created = 0
let skipped = 0

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    const st = statSync(full)
    if (st.isDirectory()) {
      walk(full)
      continue
    }
    if (extname(full) !== '.html') continue
    const name = basename(full, '.html')
    // index.html / 404.html 是合法页面或错误页，跳过；只处理真正的叶子页 X.html
    if (name === 'index' || name === '404') {
      skipped++
      continue
    }
    const targetDir = join(dirname(full), name)
    const target = join(targetDir, 'index.html')
    if (existsSync(target)) {
      skipped++
      continue
    }
    mkdirSync(targetDir, { recursive: true })
    // 从 X/index.html 回到 X.html 的相对路径（跨平台统一为正斜杠）
    const rel = relative(targetDir, full).split('\\').join('/')
    const redirect = `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<title>正在跳转…</title>
<meta http-equiv="refresh" content="0; url=${rel}">
</head>
<body>
<p>正在跳转到 <a href="${rel}">文档页面</a>…</p>
<script>location.replace("${rel}")</script>
</body>
</html>
`
    writeFileSync(target, redirect)
    created++
  }
}

walk(distDir)
console.log(
  `[fix-leaf-html] 完成：新建 ${created} 个重定向 index.html（消除重复体积），跳过 ${skipped} 个（index/404/已存在）。`
)
