---
status: 已发布
sort: 8
urlname: bry3d3lwe206xuor
上次编辑时间: "2023-07-22T17:46:00.000Z"
catalog: 入门指引
tags: Elog-Docs
title: CLI 命令
date: "2023-04-06 21:31:00"
updated: "2023-07-23 01:46:00"
---

# CLI 命令

## init

初始化 Elog 配置

```shell
elog init [option] [value]
```

| option   | alias | 说明                 | 默认值          |
| -------- | ----- | -------------------- | --------------- |
| --config | -c    | 自定义配置文件的名称 | elog.config.js  |
| --env    | -e    | 自定义缓存文件的名称 | elog.cache.json |

## sync

同步文章

```shell
elog sync [option] [value]
```

| option       | alias | 说明              | 默认值          |
| ------------ | ----- | ----------------- | --------------- |
| --config     | -c    | 指定配置文件 path | elog.config.js  |
| --env        | -e    | 指定环境文件 path | -               |
| --cache      | -a    | 指定缓存文件 path | elog.cache.json |
| --debug      |       | 打印更多调试日志  |                 |
| --force      |       | 强制同步          |                 |
| --full-cache |       | 缓存文档全部信息  |                 |

### --force 说明

当需要写作平台的文档和本地文档保持一致时，可添加此命令行参数。例如在写作平台删除文档 A 后，可通过`--force`参数在本次同步文档时删除本地的文档 A。

使用前请注意以下事项：

- 只支持文档删除时强制同步，不支持文档改名后删除改名前的文档
- 你也可以通过`elog clean`直接清空本地文档后，重新同步文档

### --full-cache 说明

**请注意，使用此参数后，缓存文件的大小大约是原文档的 2-10 倍！**

常用于本地调试，`elog.cache.json`缓存文件是实现 Elog 增量同步的关键，一般情况下只会保存文档的一部份原始信息。

当需要对比原文档和 Elog 处理之后的文档时，可通过此命令行缓存文档处理过程中的所有信息。

## clean

清理文章、上次同步缓存、上次同步时间

```shell
elog clean [option] [value]
```

| option   | alias | 说明                                    | 默认值          |
| -------- | ----- | --------------------------------------- | --------------- |
| --config | -c    | 指定配置文件 path，用于读取存储文章目录 | elog.config.js  |
| --cache  | -a    | 指定缓存文件 path                       | elog.cache.json |

## upgrade

更新全局 `elog` 版本到 `latest` 版本

> v0.0.5 以上版本支持。

```shell
elog upgrade
```
