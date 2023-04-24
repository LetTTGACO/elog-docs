---
status: 已发布
sort: 8
urlname: bry3d3lwe206xuor
catalog: 入门指引
title: CLI 命令
date: "2023-04-06 21:31:00"
updated: "2023-04-24 00:46:00"
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

| option   | alias | 说明              | 默认值          |
| -------- | ----- | ----------------- | --------------- |
| --config | -c    | 指定配置文件 path | elog.config.js  |
| --env    | -e    | 指定环境文件 path | -               |
| --cache  | -a    | 指定缓存文件 path | elog.cache.json |

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
