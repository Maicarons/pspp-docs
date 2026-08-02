import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import PdfViewer from './PdfViewer.vue'
import ResourceLinks from './ResourceLinks.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('PdfViewer', PdfViewer)
    app.component('ResourceLinks', ResourceLinks)
  },
} satisfies Theme
