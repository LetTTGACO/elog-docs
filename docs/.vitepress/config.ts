import { defineConfig } from "vitepress";
import { genSideBar } from "../../utils/route";
import { YuQueSVG } from "../../utils/assists";

export default defineConfig({
  lang: "zh-CN",
  title: 'Elog',
  description: 'doc for elog',
  lastUpdated: true,
  srcDir: './elog',
  cleanUrls: true,
  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    [
      'link', { rel: 'icon', href: '/favicon.ico' }
    ]
  ],
  markdown: {
    headers: {
      level: [0, 0]
    }
  },
  themeConfig: {
    siteTitle: 'Elog Docs', // 标题
    sidebar: genSideBar(''),
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    socialLinks: [
      { icon: { svg: YuQueSVG }, link: "https://www.yuque.com/1874w/elog-docs" },
      { icon: 'github', link: "https://github.com/LetTTGACO/elog" },
    ],
    footer: {
      message: 'Powered by <a href="https://www.yuque.com/1874w/elog-docs" target="_blank">语雀</a> & VitePress with Elog',
      copyright: 'Copyright © 2023-present'
    },
  }
})
