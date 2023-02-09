---
classify: 进阶玩法
order: 3-1
title: Front Matter
urlname: raqyleng501h23p1
author: '1874'
date: '2023-02-09 03:31:45'
updated: '2023-02-09 14:38:12'
---
# Front Matter

任何包含 YAML front matter 的 Markdown 文件都将由 [front-matter ](https://www.npmjs.com/package/front-matter)处理。front matter 必须是 markdown 文件中的第一部分，并且必须采用在三点划线之间书写的有效的 YAML。 这是一个基本的例子：

```json
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

> 提示
> Elog 目前只支持使用三点划线来声明 front matter
> 如果需要生成的 markdown 文件具有 front matter，需要在部署平台配置的 `deploy.adapter` 指定为 `matter-markdown`

## 预定义属性

在 Elog 中预设置了一些常用的属性，Elog 也会在`matter-markdown`模式默认下生成这些属性。

| 属性    | 说明             |
| ------- | ---------------- |
| title   | 文章标题         |
| urlname | url 名称         |
| author  | 作者（仅限语雀） |
| date    | 创建时间         |
| updated | 更新时间         |
