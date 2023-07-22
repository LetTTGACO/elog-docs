---
cover: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/27cfd5d8-b9d1-4268-946e-ee9cd1bea24f/283449.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230722T175507Z&X-Amz-Expires=3600&X-Amz-Signature=fb93f467680d774635a6eabee11b387009c061359542d1165957427433aa5f45&X-Amz-SignedHeaders=host&x-id=GetObject"
status: 已发布
sort: 14
urlname: raqyleng501h23p1
上次编辑时间: "2023-07-22T17:46:00.000Z"
catalog: 进阶玩法
tags: Elog-Docs
title: Front Matter
date: "2023-04-06 13:31:00"
updated: "2023-07-22 17:46:00"
---

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

## 自定义输出 Front Matter

如需自定义输出文档的`Front Matter`，可以通过自定义文档处理适配器来处理。
