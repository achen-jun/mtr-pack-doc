import { defineConfig } from 'vitepress'
import { set_sidebar } from "./utils/auto_sidebar.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "阿晨君的MTR-Pack",
  description: "阿晨君的MTR-Pack",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // 目录
    outlineTitle: "文章目录",
    outline: [1,6],
    // 头部导航栏
    nav: [
      { text: 'Home', link: '/' },
      { text: '简介', link: '/docs/introduction' },
      { text: '下载', link: 'docs/downloads' },
      { text: '项目列表', link: 'docs/project-list' },
      { text: '更新日志', link: 'docs/changelog' },
      { text: '开发', link: 'docs/development' },
      { text: '关于', link: '/about' }

    ],
    // 侧边栏
    sidebar: {
      "docs/introduction": set_sidebar("docs/introduction"),
      "docs/downloads": set_sidebar("docs/downloads"),
      "docs/project-list": set_sidebar("docs/project-list"),
      "docs/changelog": set_sidebar("docs/changelog"),
      "docs/development": set_sidebar("docs/development"),
    },
    // 搜索框
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/achen-jun' }
    ]
  }
})
