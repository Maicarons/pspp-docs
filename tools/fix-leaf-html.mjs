// fix-leaf-html.mjs
// GitHub Pages 路由修复（VitePress 专用）：
// VitePress 把「无子页的叶子页」生成为 X.html，而 GitHub Pages 对 /X/ 只会找 X/index.html，
// 导致硬刷新 / 直接链接 / 外部分享这些页面时 404（站内点击正常）。
// 本脚本在构建后，把每个叶子 X.html 原样复制为 X/index.html（同深度，相对资源路径不变），
// 让 GitHub Pages 能直接命中 index.html，彻底消除硬刷新 404。
// 同时保留原 X.html，两种 URL 均可访问。

import {
  readdirSync,
  statSync,
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
} from 'node:fs'
import { join, basename, extname, dirname } from 'node:path'

// 从仓库根目录（npm run 的 cwd）定位产物目录
const dist = join(process.cwd(), 'docs', '.vitepress', 'dist')

if (!existsSync(dist)) {
  console.error(`[fix-leaf-html] 未找到产物目录: ${dist}\n请先运行 vitepress build。`)
  process.exit(1)
}

// 第一遍：收集所有 .html（避免处理过程中新建目录被重复遍历）
const htmlFiles = []
function collect(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    const st = statSync(full)
    if (st.isDirectory()) {
      collect(full)
    } else if (extname(entry) === '.html') {
      htmlFiles.push(full)
    }
  }
}
collect(dist)

let created = 0
let skipped = 0
for (const file of htmlFiles) {
  const name = basename(file, '.html')
  // index.html（分卷首页）与 404.html 不需要再生成同级 index
  if (name === 'index' || name === '404') {
    skipped++
    continue
  }
  const targetDir = join(dirname(file), name)
  const target = join(targetDir, 'index.html')
  if (existsSync(target)) {
    skipped++
    continue
  }
  mkdirSync(targetDir, { recursive: true })
  writeFileSync(target, readFileSync(file))
  created++
}

console.log(
  `[fix-leaf-html] 完成：新建 ${created} 个 index.html，跳过 ${skipped} 个（index/404/已存在）。`
)
