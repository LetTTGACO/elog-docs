import { defineConfig } from "vitepress";
import { genFeiShuSideBar, genFlowUsSideBar, genNotionSideBar, genYuqueSideBar } from "../../utils/route";
import { FeiShuSVG, FlowUsSVG, NotionSVG, YuQueSVG } from "../../utils/assists";
import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { SitemapStream } from 'sitemap'
import mathjax3 from 'markdown-it-mathjax3';
const customElements = ['mjx-container'];
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const links: any[] = []

export default defineConfig({
  lang: "zh-CN",
  title: 'Elog',
  description: 'doc for elog',
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,
  head: [
    ['meta', { name: 'theme-color', content: '#2a9d8f' }],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'AZBRSFGG',
        'data-spa': 'auto',
        defer: ''
      }
    ],
    [
      'link', { rel: 'icon', href: '/favicon.ico' }
    ]
  ],
  markdown: {
    headers: {
      level: [0, 0]
    },
    config: (md) => {
      md.use(require('markdown-it-task-lists'))
      md.use(mathjax3);
    }
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },
  transformHtml: (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id))
      links.push({
        // you might need to change this if not using clean urls mode
        url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2'),
        lastmod: pageData.lastUpdated
      })
  },

  buildEnd: ({ outDir }) => {
    const sitemap = new SitemapStream({ hostname: 'https://elog.1874.cool/' })
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    sitemap.pipe(writeStream)
    links.forEach((link) => sitemap.write(link))
    sitemap.end()
  },
  themeConfig: {
    search: {
      provider: 'local'
    },
    outline: [2,6],
    nav: [
      { text: 'Notion 版', link: '/notion/start', activeMatch: '/notion/' },
      {
        text: '其他版本',
        items: [
          { text: '语雀版(帐号密码方式)', link: '/yuque-pwd/start', activeMatch: '/yuque-pwd/' },
          { text: '语雀版(Token方式)', link: '/yuque/start', activeMatch: '/yuque/' },
          { text: 'FlowUs示例', link: '/flowus/flowus-example', activeMatch: '/flowus/' },
          { text: '飞书示例', link: '/feishu/VULCdSLgxotcb1xLi1BcWwdPnVa', activeMatch: '/feishu/' },
          { text: 'Outline示例', link: '/outline/axK11IQrhd', activeMatch: '/outline/' },
          { text: 'WordPress站点示例', link: 'https://wordpress.1874.cool' },
          { text: 'Halo站点示例', link: 'https://halo.1874.cool' },
        ]
      },
      { text: 'Elog 开发计划', link: 'https://1874.notion.site/Elog-91dd2037c9c847e6bc90b712b124189c' },
      { text: 'Elog 示例模版', link: 'https://1874.notion.site/9bac25294abc46cc822042e4a3b550a6' },
      {
        text: 'V0.14.7',
        items: [
          {
            text: 'Changelog',
            link: 'https://github.com/LetTTGACO/elog/releases'
          }
        ]
      }
    ],
    siteTitle: 'Elog Docs', // 标题
    sidebar: {
      '/yuque/': genYuqueSideBar('/yuque'),
      '/yuque-pwd/': genYuqueSideBar('/yuque-pwd'),
      '/notion/': genNotionSideBar('/notion'),
      '/flowus/': genFlowUsSideBar('/flowus'),
      '/feishu/': genFeiShuSideBar('/feishu')
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    socialLinks: [
      { icon: { svg: YuQueSVG }, link: "https://www.yuque.com/1874w/elog-docs" },
      { icon: { svg: NotionSVG }, link: "https://1874.notion.site/0aa9217e5bcc46768bdae424fddcbc28" },
      { icon: { svg: FeiShuSVG }, link: "https://yi0dk0huz70.feishu.cn/drive/folder/Z4AZfkm29l5KWSdsHbncmbbmnvc" },
      { icon: { svg: FlowUsSVG }, link: "https://flowus.cn/1874/share/90398607-98f1-4ff0-873c-7c3ed526a55c" },
      { icon: 'github', link: "https://github.com/LetTTGACO/elog" },
    ],
    footer: {
      message: 'Powered by <a href="https://www.yuque.com/1874w/elog-docs" target="_blank">语雀</a> & <a href="https://1874.notion.site/0aa9217e5bcc46768bdae424fddcbc28?v=5d3ef173d4014115bb4c66601df8a8e5" target="_blank">Notion</a> & <a href="https://vitepress.dev" target="_blank">VitePress</a> with <a href="https://github.com/LetTTGACO/elog" target="_blank">Elog</a>',
      copyright: 'Copyright © 2022-present'
    },
  }
})


