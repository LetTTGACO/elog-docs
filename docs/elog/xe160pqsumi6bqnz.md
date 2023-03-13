# 按分类存放文档

## 适用场景

当你在语雀/Notion 上分类管理文章时，需要在生成文档时按分类将文档存放在不同目录，方便部署平台按照目录渲染。
例如 Vitepress 一般是按照文件夹生成文档和目录。

## 如何配置

### 语雀

在语雀的文章头部加上 front matter，并指定 classify 的值为某个分类，在同步阶段，就会按照 classify 属性来存放文档

```json
---
classify: 关于Elog
---
```

### Notion

在 Notion 给文章设置 classify 属性即可

## deploy.classify

在同步阶段，默认是用`classify`字段来分类文章，当然你也可以指定别的的字段。
在配置文件（elog-config.json）的部署平台配置中的指定`classify`属性为别的字段，若如此做，在同步阶段，Elog 将会按照指定的字段来分类文章

```json
{
  "classify": "directory"
}
```