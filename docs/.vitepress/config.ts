import { resolve } from 'path'
import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import { defaultSidebar } from './defaultSidebar'
import { generateFileSidebar } from './file-sidebar'
// import { SearchPlugin } from 'vitepress-plugin-search'
const r = (p: string) => resolve(__dirname, p)

// generateFileSidebar(r('../useForm'))

export default defineConfig({
  base: '/yujin/',
  title: 'Frontend',
  description: 'composition api form validator for vue',
  // appearance: false,
  lastUpdated: true,

  markdown: {
    // TODO
    anchor: {},
    toc: { level: [1, 2, 3] },
    theme: {
      light: 'min-dark',
      dark: 'one-dark-pro'
    },
    lineNumbers: true
  },

  themeConfig: {
    outline: [1, 3],
    sidebar: defaultSidebar,
    nav: [
      // {
      //   text: 'Playground',
      //   link: 'https://mini-anything-play.netlify.app/'
      // }
      ...defaultSidebar.slice(1, 6)
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/jinshao-han/yujin.git' }],
    footer: {
      copyright: 'Copyright © 2023-present yujin'
    },
    editLink: {
      pattern: 'https://github.com/jinshao-han/yujin.git',
      text: 'Edit this page on Gitlab'
    },
    lastUpdatedText: 'Last Updated',
    localeLinks: {
      text: 'English',
      items: [{ text: '简体中文', link: 'https://netlify.app' }]
    },
    algolia: {
      apiKey: 'a2f6792dabedc283904eea5a88222fbf',
      indexName: 'yujin',
      // 如果 Algolia 没有为你提供 `appId` ，使用 `BH4D9OD16A` 或者移除该配置项
      appId: 'UOJ67VEO8S'
    }
  }

})
