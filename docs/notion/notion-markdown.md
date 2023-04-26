---
status: 已发布
sort: 12
urlname: notion-markdown
上次编辑时间: "2023-04-26T13:54:00.000Z"
catalog: 功能和API适配情况
title: Notion-Markdown
date: "2023-04-06 13:31:00"
updated: "2023-04-26 13:54:00"
---

# Notion-Markdown

## 行内样式

- [x] Blod（加粗）
- [x] Italicize（斜体）
- [x] Underline（中划线）
- [ ] Strike-Through（删除线）返回`<u>`包裹的文本
- [x] Mark as code（行内代码块）
- [ ] Inline equation（行内公式）直接返回公式文本，部分博客平台可能会报错，推荐使用块级公式
- [ ] Text Color（文字颜色）
- [ ] Background Color（背景颜色）

## Basic block（基本块）

- [x] Text（文本）
- [ ] Page （页面）返回超链接，但是地址不完整
- [x] To-do list（TODO）部分博客平台需要安装插件支持，例如 Vitepress
- [x] Heading（标题）Notion 写作时最多显示 3 级标题，但是可以直接用`####`语法支持在支持更多级别的博客平台展示
- [x] Table（表格）
- [x] Bulleted list（无序列表）
- [x] Numbered list（有序列表）
- [x] Toggle list（折叠块）返回为`<detail>` Html 标签，在部分博客平台受支持
- [x] Quote（引用）
- [x] Divider（分割线）
- [ ] Link to page（链接到页面）返回完整超链接，但是地址不完整
- [x] Callout（标注）同 Quote（引用）

## Media（媒体）

- [x] Image（图片）
- [x] Web bookmark（网页书签）返回完整超链接
- [ ] VIdeo（视频）返回完整超链接
- [ ] Audio（音频）不返回
- [x] Code（代码）
- [ ] File（文件）返回完整超链接

## DataBase（数据库）

返回数据库的超链接地址，但不完整

## AI block

API 不支持，会报错`Block type ai_block is not supported via the API.`

- [ ] Summary（摘要）
- [ ] Action items（待办事项）
- [ ] Custom AI Block（内容块）

## Advanced block（高级块）

- [ ] Table of contents（目录）不返回
- [x] Block equation（公式）返回代码块，部分博客平台支持
- [ ] Button（按钮）不返回
- [ ] Breadcrumb（导航栏）不返回
- [x] Synced block（同步块）
- [ ] Toggle heading（折叠标题）返回标题样式
- [ ] columns（分栏）
- [x] Code（mermaid 代码，用于流程图等）部分博客平台需安装插件支持
- [ ] Mention a person（提及人员）
- [x] Mention a page（提及页面）返回 Notion 完整超链接
- [x] Date or reminder（日期或提醒）返回日期值
- [x] Emoji（表情）
- [ ] Inline equation（行内公式）返回公式文本，部分博客平台可能会报错，谨慎使用

## Embeds（嵌入）

返回为超链接
