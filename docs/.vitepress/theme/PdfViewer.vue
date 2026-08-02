<script setup>
const props = defineProps({
  // 相对于站点根目录的资源路径，例如 "assets/pspp-tutorial.pdf"
  src: { type: String, required: true },
  name: { type: String, default: '文档' },
})

// 自动拼接 base，兼容 GitHub Pages 项目站点
// 用 import.meta.env.BASE_URL（VitePress 构建期注入的站点 base，如 /pspp-docs/）
// 不要用 useData().site.base —— 那是 Ref，直接取 .base 会得到 undefined
const base = import.meta.env.BASE_URL || '/'
const url = base + props.src
</script>

<template>
  <div class="pdf-viewer">
    <div class="pdf-actions">
      <a :href="url" download class="pdf-btn">⬇ 下载 PDF（{{ name }}）</a>
      <a :href="url" target="_blank" rel="noopener" class="pdf-btn ghost">↗ 新标签页打开</a>
    </div>
    <iframe :src="url" width="100%" height="920" frameborder="0" title="PDF 预览"></iframe>
  </div>
</template>

<style scoped>
.pdf-viewer {
  margin: 1.25rem 0;
}
.pdf-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}
.pdf-btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 6px;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 600;
}
.pdf-btn:hover {
  background: var(--vp-c-brand-1);
  color: #fff;
}
.pdf-btn.ghost {
  border-color: var(--vp-c-divider);
  color: var(--vp-c-text-1);
}
.pdf-btn.ghost:hover {
  background: var(--vp-c-default-soft);
  color: var(--vp-c-text-1);
}
iframe {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: #fff;
  min-height: 920px;
}
</style>
