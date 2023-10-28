---
status: 已发布
sort: 210
urlname: raqyleng501h23p1
上次编辑时间: "2023-10-28T04:50:00.000Z"
catalog: 进阶玩法
tags: Elog-Docs
title: Front Matter
date: "2023-04-06 13:31:00"
updated: "2023-10-28 04:50:00"
---

# Front Matter

Elog 会将用户自定义的 `front matter` 和 **预定义属性**合并后，输出新的带有 `front matter` 的 Markdown 文档。 任何包含 `YAML front matter` 的 Markdown 文件都将由 [front-matter](https://www.npmjs.com/package/front-matter) 处理。`front matter` 必须是 Markdown 文件中的第一部分，Elog 只支持在三点划线之间书写的有效的 YAML。 这是一个基本的例子：

```text
---
title: Blogging with Elog
classify: 关于Elog
description: 描述
cover_img: https://example.com/test.jpg
tags:
- Blog
- CI/CD
---
```

如果需要生成的 markdown 文件具有 `front matter`，需要在配置文件中配置`deploy.local.format=matter-markdown`

> 手动在指定文档的 `YAML front matter` **适用于语雀和飞书**，Notion/FlowUs 可以直接添加数据库属性，不需要在文档中手动指定。

## 预定义属性

Elog 预设置了一些常用的属性，会在`matter-markdown`模式默认下生成包含这些属性的 markdown 文档。

| 属性    | 类型                | 说明             |
| ------- | ------------------- | ---------------- |
| title   | string              | 文章标题         |
| urlname | string              | url 名称         |
| author  | string              | 作者（仅限语雀） |
| date    | YYYY-MM-DD HH:mm:ss | 创建时间         |
| updated | YYYY-MM-DD HH:mm:ss | 更新时间         |

## 自定义输出 Front Matter

如需自定义输出文档的`Front Matter`，可以通过自定义文档处理适配器来处理，详见 [部署平台](/notion/deploy-platform#formatext-字段说明)
