---
status: 计划中
sort: 18
urlname: api-compare
上次编辑时间: "2023-04-27T05:36:00.000Z"
catalog: 功能和API适配情况
title: 语雀API和NotionAPI的区别
date: "2023-04-27 13:33:00"
updated: "2023-04-27 13:36:00"
---

# **语雀 API 和 NotionAPI 的区别**

## 语雀 API

- 语雀返回的 markdown 内容存在语雀专有的锚点`<a name=\".*?\"><\/a>`，需要单独处理

## Notion API

- 暂不支持子页面的渲染
- 暂不支持`webhooks`，网页版需要加载油猴插件或者谷歌插件，桌面版可以加载自定义的`js`，但是需要适配`mac/windows/linux`
- 国内直接调用`api`会存在超时的问题
