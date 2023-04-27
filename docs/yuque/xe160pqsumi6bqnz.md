# 按目录存放文档

## 适用场景

当在语雀/Notion 上管理文章时，需要在生成文档时按目录将文档存放在不同目录，方便部署平台按照目录渲染。
例如 Vitepress 一般是按照文件夹生成文档和目录。

## 如何配置

### 语雀

在配置文件中配置`deploy.local.catalog=true`，即可按照语雀目录生成文档。

### Notion

暂不支持按目录存储文档，如果需要在 Vitepress 中 按目录生成路由，可参考[Elog Docs 源码](https://github.com/LetTTGACO/elog-docs)。
