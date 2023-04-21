# Front Matter

Elog 会将用户自定义的 front matter 和 预定义属性合并后，输出新的带有 front matter 的 markdown 文档。 任何包含 YAML front matter 的 Markdown 文件都将由 [front-matter](https://www.npmjs.com/package/front-matter)处理。front matter 必须是 markdown 文件中的第一部分，并且必须采用在三点划线之间书写的有效的 YAML。 这是一个基本的例子：

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

> 手动指定文档的 `front matter` 只适用于语雀，Notion 可以直接添加数据库属性，不需要手动指定`front matter`。  
> 由于语雀 API 的问题，Elog 目前只支持使用三点划线来声明 `front matter。`  
> 如果需要生成的 markdown 文件具有 `front matter`，需要在配置文件中配置`deploy.local.format=matter-markdown`

## 预定义属性

Elog 预设置了一些常用的属性，会在`matter-markdown`模式默认下生成包含这些属性的 markdown 文档。

| 属性    | 说明             |
| ------- | ---------------- |
| title   | 文章标题         |
| urlname | url 名称         |
| author  | 作者（仅限语雀） |
| date    | 创建时间         |
| updated | 更新时间         |
