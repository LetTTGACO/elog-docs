# 按目录存放文档

## 适用场景

当在语雀/Notion 上管理文章时，需要在生成文档时按目录将文档存放在不同目录，方便部署平台按照目录渲染。
例如 Vitepress 一般是按照文件夹生成文档和目录。

## 如何配置

### 语雀

在配置文件中配置`deploy.local.catalog=true`，即可按照语雀目录生成文档。

### Notion

1.  在 Notion 数据库新增`catalog`字段（单选/多选），设置每篇文档的所在目录信息标签。单选标签下，只能生成一层目录；多选标签下，可生成多级目录，但是需要保证标签的顺序
2.  在 Notion 写作平台配置项中配置`write.notion.catalog=true`
3.  在部署平台配置项中配置`deploy.local.catalog=true`

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
