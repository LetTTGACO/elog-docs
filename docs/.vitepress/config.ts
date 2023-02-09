import { defineConfig } from "vitepress";
import { genSideBar } from "../../utils/route";

export default defineConfig({
  lang: "zh-CN",
  title: 'Elog',
  description: 'doc for elog',
  lastUpdated: true,
  head: [['meta', { name: 'theme-color', content: '#3c8772' }]],
  markdown: {
    headers: {
      level: [0, 0]
    }
  },
  themeConfig: {
    siteTitle: 'Elog Docs', // 标题
    sidebar: genSideBar('elog'),
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    socialLinks: [
      { icon: 'github', link: "https://github.com/LetTTGACO/elog" },
    ]
  }
})
