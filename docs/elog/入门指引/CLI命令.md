---
classify: 入门指引
order: 2-4
title: CLI命令
urlname: bry3d3lwe206xuor
author: '1874'
date: '2023-02-07 14:16:56'
updated: '2023-02-11 05:19:32'
---
# CLI 命令

## init

初始化 Elog

```bash
elog init [option] [value]
```

| option | alias | 说明                   | 默认值           |
| ------ | ----- | ---------------------- | ---------------- |
| --name | -n    | 自定义 elog 配置的名称 | elog-config.json |

## sync

同步文章

```bash
elog sync [option] [value]
```

| option   | alias | 说明                | 默认值            |
| -------- | ----- | ------------------- | ----------------- |
| --env    | -e    | 指定环境文件 path   | -                 |
| --config | -c    | 指定配置文件 path   | iblog-config.json |
| --cache  | -a    | 指定缓存文件 path   | iblog-cache.json  |
| --time   | -t    | 指定 time 文件 path | iblog-time.txt    |

## clean

清理文章、上次同步缓存、上次同步时间

```bash
elog clean [option] [value]
```

| option      | alias | 说明                                    | 默认值            |
| ----------- | ----- | --------------------------------------- | ----------------- |
| --config    | -c    | 指定配置文件 path，用于读取存储文章目录 | iblog-config.json |
| --cache     | -a    | 指定缓存文件 path                       | iblog-cache.json  |
| --timestamp | -t    | 指定 time 文件 path                     | iblog-time.txt    |
