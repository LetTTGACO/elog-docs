---
sort: 210
urlname: raqyleng501h23p1
catalog: 进阶玩法
tags: Elog-Docs
title: Front Matter
date: '2023-04-06 21:31:00'
updated: '2024-02-23 11:09:00'
---

# Front Matter


Elog 会将用户自定义的 `front matter` 和 **预定义属性**合并后，输出新的带有 `front matter` 的 Markdown 文档。 任何包含 `YAML front matter` 的 Markdown 文件都将由 [front-matter](https://www.npmjs.com/package/front-matter) 处理。`front matter` 必须是 Markdown 文件中的第一部分，Elog只支持在三点划线之间书写的有效的 YAML。 这是一个基本的例子：


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


如果需要生成的 markdown 文件具有 `front matter`，需要在配置文件中配置`deploy.local.frontMatter.enable=true`


```javascript
deploy: {
    platform: 'local',
    local: {
      outputDir: './docs/feishu',
      filename: 'title',
      format: 'markdown',
      frontMatter: {
        enable: true,
        include: [], // 只输出include包含的属性
        exclude: [], // 不输出exclude包含的属性
      }
    }
  },
```


> 手动在指定文档的 `YAML front matter` **适用于语雀和飞书**，Notion/FlowUs 可以直接添加数据库属性，不需要在文档中手动指定。


## 预定义属性


Elog 预设置了一些常用的属性，会在启用`front matter` 时默认下生成包含这些属性的 `markdown` 文档。


### 语雀预设


> 可通过在文档顶部指定`YAML front matter`来覆盖原有属性或增加你想要的属性


| 属性          | 类型                  | 说明                                                  |
| ----------- | ------------------- | --------------------------------------------------- |
| title       | string              | 文章标题                                                |
| urlname     | string              | 语雀 slug                                             |
| date        | YYYY-MM-DD HH:mm:ss | 创建时间                                                |
| updated     | YYYY-MM-DD HH:mm:ss | 更新时间                                                |
| cover       | string              | 封面图，可在语雀文档设置中配置。**但由于语雀防盗链，不一定能正常访问，可通过自定义文档处理器解决** |
| tags        | string[]            | 标签，可在语雀文档设置中配置                                      |
| description | string              | 文章摘要，可在语雀文档设置中配置                                    |


### 飞书预设


> 可通过在文档顶部指定`YAML front matter`来覆盖原有属性或增加你想要的属性


| 属性      | 类型                  | 说明     |
| ------- | ------------------- | ------ |
| title   | string              | 文章标题   |
| urlname | string              | url 名称 |
| date    | YYYY-MM-DD HH:mm:ss | 创建时间   |
| updated | YYYY-MM-DD HH:mm:ss | 更新时间   |


### Notion 预设


> 可通过在数据库新增字段来覆盖原有属性或增加你想要的属性


| 属性      | 类型                  | 说明                                                    |
| ------- | ------------------- | ----------------------------------------------------- |
| title   | string              | 文章标题                                                  |
| urlname | string              | url 名称                                                |
| date    | YYYY-MM-DD HH:mm:ss | 创建时间                                                  |
| updated | YYYY-MM-DD HH:mm:ss | 更新时间                                                  |
| cover   | string              | 文档头部封面图，**但由于Notion 图片存在有效期，过期后不能正常展示，可通过自定义文档处理器解决** |


### FlowUs 预设


> 可通过在数据库新增字段来覆盖原有属性或增加你想要的属性


| 属性      | 类型                  | 说明                                             |
| ------- | ------------------- | ---------------------------------------------- |
| title   | string              | 文章标题                                           |
| urlname | string              | url 名称                                         |
| date    | YYYY-MM-DD HH:mm:ss | 创建时间                                           |
| updated | YYYY-MM-DD HH:mm:ss | 更新时间                                           |
| cover   | string              | 文档头部封面图，**但由于FlowUs防盗链， 不能正常访问，可通过自定义文档处理器解决** |


### cover 字段说明


以上写作平台，如果配置了封面图，虽然都默认返回了 cover 字段，但基本都不能正常使用。


Elog 返回 `cover` 字段的意义在于：用户可以通过自定义文档适配器，将其下载到本地/上传到图床后使用。


如果你不需要这个字段，可在通过 `exclude` 字段进行屏蔽，例如：


```javascript
deploy: {
  platform: 'local',
  local: {
    outputDir: './docs/flowus',
    filename: 'urlname',
    format: 'markdown',
    formatExt: '',
    frontMatter: {
      enable: true,
      exclude: ['cover'] // 文档属性排除 cover 字段
    }
  }
},
```


## 自定义输出 Front Matter


如需自定义输出文档的`Front Matter`，例如将文档属性中的图片上传到图床，或下载到本地后对其进行路径替换。


你可以通过自定义文档处理适配器来处理类似问题，详见 [部署平台](/notion/deploy-platform#formatext-字段说明)


示例如下：


利用`imageClient`实例将图片上传到图床，但它不一定有值，需要满足以下条件，二选一即可

- 开启图床，Elog 配置文件中`image.enable=true`
- 不开启图床，但配置文件中`image.enablForExt=true`

```javascript
const { matterMarkdownAdapter } = require('@elog/cli')

/**
 * 自定义文档插件
 * @param {DocDetail} doc doc的类型定义为 DocDetail
 * @param {ImageClient} imageClient 图床下载器，可用于图片上传
 * @return {Promise<DocDetail>} 返回处理后的文档对象
 */
const format = async (doc, imageClient) => {
  const cover = doc.properties.cover
  // 将 cover 字段中的 notion 图片下载到本地
  if (imageClient)  {
    // 只有启用图床平台image.enable=true时或image.enablForExt=true，imageClient才能用，否则请自行实现图片上传
    const url = await imageClient.uploadImageFromUrl(cover, doc)
    // cover链接替换为本地图片
    doc.properties.cover = url
  }
  doc.body = matterMarkdownAdapter(doc);
  return doc;
};

module.exports = {
  format,
};
```

