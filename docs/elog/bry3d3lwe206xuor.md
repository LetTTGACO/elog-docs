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

| option   | alias | 说明              | 默认值            |
| -------- | ----- | ----------------- | ----------------- |
| --env    | -e    | 指定环境文件 path | -                 |
| --config | -c    | 指定配置文件 path | eblog-config.json |
| --cache  | -a    | 指定缓存文件 path | eblog-cache.json  |

## clean

清理文章、上次同步缓存、上次同步时间

```bash
elog clean [option] [value]
```

| option   | alias | 说明                                    | 默认值            |
| -------- | ----- | --------------------------------------- | ----------------- |
| --config | -c    | 指定配置文件 path，用于读取存储文章目录 | eblog-config.json |
| --cache  | -a    | 指定缓存文件 path                       | eblog-cache.json  |

## upgrade

更新全局 `elog` 版本到 `latest` 版本

> v0.0.5 以上版本支持。

```bash
elog upgrade
```
