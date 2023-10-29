---
status: 已发布
sort: 50
urlname: qa
上次编辑时间: "2023-10-24T13:14:00.000Z"
catalog: 关于Elog
tags: Elog-Docs
title: 常见问题
date: "2023-07-23 03:37:00"
updated: "2023-10-24 21:14:00"
---

# 常见问题

**大部分问题都可以在文档中找到解决办法，请优先从** [快速开始](/notion/start) **阅读文档，再进行实际操作。**

如果还是运行报错，请在 Github 中提交 [Issues](https://github.com/LetTTGACO/elog/issues) 或加入 [elog 反馈交流群](/notion/la9toqncox96kfp8)

## 配置问题

`elog.config.js`为 Elog 的配置文件，其中以 `process.env`开头的不需要改动，且为**必填信息。**

例如 `process.env.YUQUE_TOKEN`为语雀账号相关敏感信息，用于本地同步时在`.elog.env`中指定`YUQUE_TOKEN=你的语雀 Token`，其他配置可根据实际需求改动。

## Elog 运行报缺少参数

1. 检查 `elog.config.js`中所有 `platform` 属性的值是否是你对应平台的值。例如如果想用语雀 Token 的方式同步语雀文档，则 `write.platform = yuque`；如果是使用语雀账号密码的方式，则`write.platform = yuque-pwd`
2. 检查`.elog.env`中是否填写账号信息。无论用哪种方式同步语雀，`.elog.env`中的`YUQUE_LOGIN`和`YUQUE_REPO`都是必填参数。其他必填参数请看本文档相关配置表格中的是否必填字段

## 如何重新全量同步文档

elog 默认为增量更新，只有该文档重新修改过，再次同步时，才会重新拉取该文档。如果想重新全量同步文档。有以下两种办法：

1. 运行 `elog clean`，Elog 将会自动清除所有文档、本地图片、缓存文件`(elog.cache.json)`
2. `elog.cache.json`为 Elog 增量同步的关键，可**手动删除**此文件，推荐同时手动删除所有文档、本地图片

## 如何同步多个知识库/数据表

在语雀中， Elog 是以知识库为维度进行同步，一次只能同步一个知识库。

如果想要同时同步多个知识库：

1. 复制`elog.config.js` 和`.elog.env`，并改名为`elog-xxx.config.js`和`.elog-xxx.env`；
2. 在`elog-xxx.config.js`配置文件中指定另外一个知识库的导出目录(`deploy.local.outputDir`)；
3. 在`.elog-xxx.env`指定另一个知识库的 `repo、login`等相关值。
4. 并在运行同步命令时指定相关参数：

   ```shell
   # 此命令表示，将使用.elog-xxx.env中的账号信息，
   # 指定读取elog-xxx.config.js中的配置，
   # 并将缓存文件命名为elog-xxx.cache.json
   elog sync -e .elog-xxx.env -a elog-xxx.cache.json -c elog-xxx.config.js
   ```

在 Notion 或其他写作平台也是如此，需要指定不同的配置文件`(elog.config.js)`、缓存文件`(elog.cache.json)`、本地环境变量文件`(.elog.env)`。

> 如果有使用 github，请不要将`.elog.env`配置文件上传到 github，需要在`.gitignore`中忽略此文件

具体可参考 本文档（Elog-Docs）源码：[https://github.com/LetTTGACO/elog-docs](https://github.com/LetTTGACO/elog-docs)

## elog 运行时找不到该命令

1. 检查是否[全局安装过 elog](/notion/start#cli-%E5%B7%A5%E5%85%B7%E5%AE%89%E8%A3%85)
2. 重启命令行工具，如果全局安装过也运行不了，大概率是命令行工具的配置的问题。可采用备用方案：将`elog`运行命令改为`npx @elog/cli`

```shell
# 初始化 elog 配置文件
npx @elog/cli init
# 本地同步命令
npx @elog/cli sync -e .elog.env
# 清除本地缓存
npx @elog/cli clean
```

## 同步时卡住不动

- 在 Github 自动化流程中同步卡住
- 本地同步运行时卡住
- 图片下载时卡住
- 文档下载时卡住

### 解决办法

在全量同步时，因为语雀/FlowUs 为国内平台，有时会在 Github 等国外环境运行时由于网络问卡住。此时可以在本地先手动运行一遍，提交缓存文件到 Github，后续的增量同步会快很多。相反用 Notion 在本地进行同步时，也有同样的问题，放在 Github 同步就会快很多。

还有一种可能是由于需要同步的文档中的新图片数量太多，所以每次都是新增上传图片到 CDN，会导致整体的流程变慢甚至失败。因为 Elog 会检测图片在 CDN 是否已经上传过，可以多试几次。

由于 Notion 的 API 在大部分情况下都很慢，甚至会下载文档失败。这是官方的问题，可以选择降低 Notion 下载文档时的并发数（默认为 3）。在 Elog 配置文件中设置`write.notion.limit=1`，降低文档下载并发数，也可多试几次。

## 同步时报超时错误

- 下载文档超时
- 下载图片超时

### 解决办法

默认超时时间为 60s，如果经常超时，可配置环境变量`process.env.REQUEST_TIMEOUT`，增加请求超时时间。

本地同步时，在.elog.env 文件新增`REQUEST_TIMEOUT=900000`，设置更大的超时时间

在 CI/CD 中，可在自动化平台注入同样的环境变量即可

如果遇到图片下载失败，可升级到 Elog 最新版`@elog/cli@0.7.2`及以上版本，Elog 会在上次同步时某文章存在图片下载失败时，第二次同步会重新尝试同步该文章

## Elog 主要功能是批量导出

Elog 在大部分场景下都只是一个批量导出`markdown`工具，不涉及部署、数据库等功能。

自动化部署、博客平台的路由配置、自定义属性等功能，都是需要各种软件/脚本辅助完成。

不可否认，配置 Elog，特别是一定的复杂场景，确实需要一定的代码基础知识，但 Elog 的其中一个目标也是尽可能地提供开箱即用的配置支持，降低配置的复杂度。

在 Elog 还没进化到这种程度之前，还是需要大家尽量熟悉 Elog 使用文档。如果有解决不了的问题，也可以加交流群讨论。
