import { defineConfig } from 'vitepress'
import { sidebarZh } from './sidebar-zh'
import { sidebarEn } from './sidebar-en'

// GitHub Pages 项目站点必须以仓库名为 base。
// 默认 'pspp-docs'：若你的仓库名不同，请修改此处（或构建时设置环境变量 VITEPRESS_BASE）。
const base = process.env.VITEPRESS_BASE || '/pspp-docs/'

// 入门教程章节（顺序固定）
const tutorialSidebar = [
  { text: '前言', link: '/tutorial/00-前言' },
  { text: '第一章 PSPP 概述', link: '/tutorial/01-第一章-PSPP概述' },
  { text: '第二章 安装与环境配置', link: '/tutorial/02-第二章-安装与环境配置' },
  { text: '第三章 数据管理', link: '/tutorial/03-第三章-数据管理' },
  { text: '第四章 描述性统计', link: '/tutorial/04-第四章-描述性统计' },
  { text: '第五章 假设检验', link: '/tutorial/05-第五章-假设检验' },
  { text: '第六章 方差分析', link: '/tutorial/06-第六章-方差分析' },
  { text: '第七章 回归分析', link: '/tutorial/07-第七章-回归分析' },
  { text: '第八章 图表制作', link: '/tutorial/08-第八章-图表制作' },
  { text: '附录', link: '/tutorial/09-附录' },
  { text: '📄 PDF 版教程', link: '/tutorial/pdf' },
  { text: '📦 下载与资源', link: '/downloads' },
]

export default defineConfig({
  base,
  title: 'PSPP 文档中心',
  description: 'GNU PSPP 中文参考手册、英文参考手册与中文入门教程',
  ignoreDeadLinks: true,
  lastUpdated: true,
  cleanUrls: true,

  // 关闭 markdown-it-attrs：手册中大量矩阵示例含花括号（如 {10; 20}），
  // 否则会被当成属性语法 {attr} 而破坏表格/正文。
  // html:false 让正文中偶发的 < > 一律转义，避免被当成 HTML 标签。
  markdown: {
    html: false,
    attrs: { disable: true },
  },

  themeConfig: {
    nav: [
      { text: '中文手册', link: '/manual-zh/' },
      { text: 'English', link: '/manual-en/' },
      { text: '入门教程', link: '/tutorial/' },
      { text: 'PDF', link: '/tutorial/pdf' },
      { text: '下载', link: '/downloads' },
    ],

    sidebar: {
      '/manual-zh/': sidebarZh,
      '/manual-en/': sidebarEn,
      '/tutorial/': tutorialSidebar,
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Maicarons/pspp-docs' },
    ],

    search: {
      provider: 'local',
    },

    footer: {
      message: '基于 GNU PSPP 2.0.1 手册与入门教程整理',
      copyright: '文档内容遵循原手册许可（GNU FDL）；本站点布局 © PSPP 文档中心',
    },

    outline: { label: '本页目录' },
    docFooter: { prev: '上一页', next: '下一页' },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '浅色模式',
    darkModeSwitchTitle: '深色模式',
  },
})
