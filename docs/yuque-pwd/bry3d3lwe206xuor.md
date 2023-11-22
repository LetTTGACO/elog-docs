# CLI命令
## init
初始化Elog配置
```bash
elog init [option] [value]
```
| option | alias | 说明 | 默认值 |
| --- | --- | --- | --- |
| --config | -c | 自定义配置文件的名称 | elog.config.js |
| --env | -e | 自定义缓存文件的名称 | elog.cache.json |

## sync
同步文章
```bash
elog sync [option] [value]
```
| option | alias | 说明 | 默认值 |
| --- | --- | --- | --- |
| --env | -e | 指定环境文件path | - |
| --config | -c | 指定配置文件path | elog.config.js |
| --cache | -a | 指定缓存文件path | elog.cache.json |

## clean
清理文章、上次同步缓存、上次同步时间
```bash
elog clean [option] [value]
```
| option | alias | 说明 | 默认值 |
| --- | --- | --- | --- |
| --config | -c | 指定配置文件path，用于读取存储文章目录 | elog.config.js |
| --cache | -a | 指定缓存文件path | elog.cache.json |

## upgrade
更新全局 `elog` 版本到 `latest` 版本
> v0.0.5 以上版本支持。

```bash
elog upgrade
```
