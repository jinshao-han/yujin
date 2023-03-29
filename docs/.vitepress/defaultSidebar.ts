import { DefaultTheme } from 'vitepress'
import vueConfig from './vue'
import engineerConfig from './engineer'
import reactConfig from './react'
import hcConfig from './hc'

export const defaultSidebar: DefaultTheme.Sidebar = [
  {
    text: 'Introduction',
    collapsible: true,
    items: [
      // {
      //   text: 'Getting Started',
      //   link: '/getting-started'
      // }
    ]
  },
  {
    text: 'JavaScript',
    collapsible: true,
    items: [
      {
        text: 'JavaScript',
        link: '/js/'
      },
      {
        text: '异步处理',
        link: '/js/异步处理'
      },
      {
        text: '代理与反射',
        link: '/js/代理与反射'
      },
      {
        text: '迭代器和生成器',
        link: '/js/迭代器和生成器'
      },
      {
        text: '防抖',
        link: '/js/防抖'
      },
      {
        text: '节流',
        link: '/js/节流'
      }
    ]
  },
  {
    text: 'TypeScript',
    items: [
      {
        text: 'TypeScript OnePage',
        link: '/ts/TypeScript-onePage'
      }
    ]
  },

  {
    text: '前端工程化',
    collapsible: true,
    items: engineerConfig
  },

  {
    text: `Vuejs ${vueConfig.length}篇`,
    collapsed: true,
    collapsible: true,
    items: vueConfig
  },
  {
    text: `React ${reactConfig.length}篇`,
    collapsible: true,
    collapsed: true,
    items: reactConfig
  },
  {
    text: '前端工具',
    items: [
      {
        text: '前端 JavaScript 必会工具库合集',
        link: '/fe-utils/js工具库'
      },
      {
        text: '你的前端开发小助手',
        link: '/fe-utils/你的前端开发小助手'
      },
      {
        text: '专业前端工程师的浏览器收藏夹',
        link: '/fe-utils/专业前端工程师的浏览器收藏夹'
      }
    ]
  },
  {
    text: 'algorithm',
    collapsible: true,
    items: [
      {
        text: '🔥刷题之探索最优解',
        link: '/algorithm/🔥刷题之探索最优解'
      },
      {
        text: '虚拟列表&大量数据渲染',
        link: '/algorithm/虚拟列表&大量数据渲染'
      },
      {
        text: '浏览器过程',
        link: '/algorithm/浏览器过程'
      },
      {
        text: '鉴权-前端路由 VS 鉴权-动态路由',
        link: '/algorithm/鉴权-前端路由 VS 鉴权-动态路由'
      },
      {
        text: 'AST',
        link: '/algorithm/AST'
      }
    ]
  },
  {
    text: 'interview',
    collapsible: true,
    items: [
      {
        text: '面试官：你还有问题要问我吗',
        link: '/interview/面试官：你还有问题要问我吗'
      },
      {
        text: '算法笔试',
        link: '/interview/算法笔试'
      },
      {
        text: '遇到的问题',
        link: '/interview/遇到的问题'
      },
      {
        text: 'Flex 弹性布局',
        link: '/interview/Flex 弹性布局'
      }
    ]
  },
  {
    text: `HTML-CSS ${hcConfig.length}篇`,
    collapsed: true,
    collapsible: true,
    items: hcConfig
  },
  {
    text: 'Git',
    collapsible: true,
    items: [
      {
        text: 'Git分支操作',
        link: '/Git/Git分支操作'
      }
    ]
  }
]
