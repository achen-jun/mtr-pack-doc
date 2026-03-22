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
      { text: 'Home', link: 'mtr-pack-doc/' },
      { text: '简介', link: 'mtr-pack-doc/docs/introduction' },
      { text: '下载', link: 'mtr-pack-doc/docs/downloads' },
      { text: '项目列表', link: 'mtr-pack-doc/docs/project-list' },
      { text: '更新日志', link: 'mtr-pack-doc/docs/changelog' },
      { text: '开发', link: 'mtr-pack-doc/docs/development' },
      { text: '关于', link: 'mtr-pack-doc/about' }

    ],
    // 侧边栏
    sidebar: {
      "mtr-pack-doc/docs/introduction": set_sidebar("mtr-pack-doc/docs/introduction"),
      "mtr-pack-doc/docs/downloads": set_sidebar("mtr-pack-doc/docs/downloads"),
      "mtr-pack-doc/docs/project-list": set_sidebar("mtr-pack-doc/docs/project-list"),
      "mtr-pack-doc/docs/changelog": set_sidebar("mtr-pack-doc/docs/changelog"),
      "mtr-pack-doc/docs/development": set_sidebar("mtr-pack-doc/docs/development"),
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
