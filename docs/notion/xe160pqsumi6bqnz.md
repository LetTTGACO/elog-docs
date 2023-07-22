---
cover: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/44abb547-86fe-46f1-a163-e57dd17aa0fb/291637.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230722T175507Z&X-Amz-Expires=3600&X-Amz-Signature=4ce6c4c68777c220d2c1c9058d268cdeaaa4f1484eb4c6169ee32d1c17e3f02e&X-Amz-SignedHeaders=host&x-id=GetObject"
status: 已发布
sort: 15
urlname: xe160pqsumi6bqnz
上次编辑时间: "2023-07-22T17:46:00.000Z"
catalog: 进阶玩法
tags: Elog-Docs
title: 按目录存放文档
date: "2023-04-06 13:31:00"
updated: "2023-07-22 17:46:00"
---

# 按目录存放文档

## 适用场景

当在语雀/Notion 上管理文章时，需要在生成文档时按目录将文档存放在不同目录，方便部署平台按照目录渲染。
例如 Vitepress 一般是按照文件夹生成文档和目录。

## 如何配置

### 语雀

在配置文件中配置`deploy.local.catalog=true`，即可按照语雀目录生成文档。

### Notion

1. 在 Notion 数据库新增`catalog`字段（单选/多选），设置每篇文档的所在目录信息标签。单选标签下，只能生成一层目录；多选标签下，可生成多级目录，但是需要保证标签的顺序
2. 在 Notion 写作平台配置项中配置`write.notion.catalog=true`
3. 在部署平台配置项中配置`deploy.local.catalog=true`

如果想自定义字段，不使用默认的`catalog`字段，则需要设置`write.notion.catalog`为以下格式

```javascript
notion: {
  token: process.env.NOTION_TOKEN,
  databaseId: process.env.NOTION_DATABASE_ID,
  filter: true,
  sorts: true,
  catalog: {
		enable: true,
		property: "自定义属性"
	}
}

```

> 你也可以不开启按目录存放文档的相关属性，但是依然在 Vitepress 中按目录生成路由，可参考 [Elog Docs 源码](https://github.com/LetTTGACO/elog-docs)。
