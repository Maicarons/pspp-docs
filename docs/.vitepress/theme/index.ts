import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import PdfViewer from './PdfViewer.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('PdfViewer', PdfViewer)
  },
} satisfies Theme
