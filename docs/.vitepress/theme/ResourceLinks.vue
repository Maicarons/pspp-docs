<script setup>
import { useData } from 'vitepress'

// 自动拼接 base，兼容 GitHub Pages 项目站点
const { site } = useData()
const base = site.base

// 三个可下载资源（路径相对于站点根目录）
const files = [
  { label: '📘 下载教程 PDF', file: 'assets/pspp-tutorial.pdf', primary: true },
  { label: '📝 下载 DOCX 源文件', file: 'downloads/pspp-tutorial.docx' },
  { label: '📊 下载教学讲义 PPTX', file: 'downloads/pspp-teaching.pptx' },
]
</script>

<template>
  <div class="resource-row">
    <a
      v-for="f in files"
      :key="f.file"
      :href="base + f.file"
      download
      class="resource-btn"
      :class="{ primary: f.primary }"
    >{{ f.label }}</a>
  </div>
</template>

<style scoped>
.resource-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 16px 0;
}
.resource-btn {
  display: inline-block;
  padding: 10px 18px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  text-decoration: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  transition: all 0.15s ease;
}
.resource-btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
.resource-btn.primary {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-1);
  color: #fff;
}
.resource-btn.primary:hover {
  opacity: 0.92;
  color: #fff;
}
</style>
