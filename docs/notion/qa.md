---
sort: 50
urlname: qa
catalog: 关于Elog
tags: Elog-Docs
title: 常见问题
date: '2023-07-23 03:37:00'
updated: '2023-12-05 13:05:00'
---

# 常见问题


**大部分问题都可以在文档中找到解决办法，请优先从** [快速开始](/notion/start) **阅读文档，再进行实际操作。**


如果还是运行报错，请 [提交 issue](https://github.com/LetTTGACO/elog/issues/new/choose) 或在 [discussions 中留言](https://github.com/LetTTGACO/elog/discussions/categories/q-a)


## 配置问题


`elog.config.js`为 Elog 的配置文件，其中以 `process.env`开头的不需要改动，且为**必填信息。**


例如 `process.env.YUQUE_TOKEN`为语雀账号相关敏感信息，用于本地同步时在`.elog.env`中指定`YUQUE_TOKEN=你的语雀 Token`，其他配置可根据实际需求改动。


## Elog 运行报缺少参数

1. 检查 `elog.config.js`中所有 `platform` 属性的值是否是你对应平台的值。例如如果想用语雀 Token 的方式同步语雀文档，则 `write.platform = yuque`；如果是使用语雀账号密码的方式，则`write.platform = yuque-pwd`
2. 检查`.elog.env`中是否填写账号信息。无论用哪种方式同步语雀，`.elog.env`中的`YUQUE_LOGIN`和`YUQUE_REPO`都是必填参数。其他必填参数请看本文档相关配置表格中的是否必填字段

## 如何重新全量同步文档


elog 默认为增量更新，只有该文档重新修改过，再次同步时，才会重新拉取该文档。如果想重新全量同步文档。有以下两种办法：

1. 运行同步命令时，增加禁用缓存标识：`elog sync —disable-cache`
2. 运行 `elog clean`，Elog 将会自动清除所有文档、本地图片、缓存文件`(elog.cache.json)`
3. `elog.cache.json`为 Elog 增量同步的关键，可**手动删除**此文件，推荐同时手动删除所有文档、本地图片

## 语雀/飞书子目录没有导出


默认是没有按目录导出的，可通过配置开启：[按目录存放文档](/notion/xe160pqsumi6bqnz) 


## 如何升级 Elog 到指定版本

1. 运行`elog upgrade`更新全局 Elog 版本到最新正式版本
2. 如果你是通过包管理工具（`npm/yarn/pnpm`）全局安装的 Elog，则重新安装并指定版本号

	```shell
	npm install @elog/cli@0.9.1 -g
	# 也可以指定测试版本号
	npm install @elog/cli@0.9.1-beta.4 -g
	```

3. 如果你是将 Elog安装在 `package.json` 中，则修改`package.json`中的`@elog/cli`版本号

## 全局安装和局部安装 Elog 的区别


### 全局安装 Elog


**全局安装**指的是为电脑的全局环境安装，安装后可以在任意文件夹使用 Elog 相关命令。全局安装时需要指定 `-g` 参数，例如


```shell
# 全局安装 elog 最新正式版本
npm install @elog/cli -g
# 也可以指定测试版本号全局安装
npm install @elog/cli@0.11.0-beta.1 -g

# 查看当前 elog 版本
elog --version

# 运行同步
elog sync -e .elog.env
```


全局安装一般适用于本地同步时使用，如果想结合 Github Actions 实现自动化文档同步，建议采取**局部安装**的方式


### 局部安装 Elog


**局部安装**指的是为指定文件夹下的环境安装Elog，需要结合 [npm 相关知识点](https://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)，将 Elog 安装在`package.json`中。局部安装不需要指定`-g`参数，例如


```shell
# 局部安装 elog 最新正式版本
npm install @elog/cli
# 也可以指定测试版本号局部安装
npm install @elog/cli@0.11.0-beta.1
```


安装在 `package.json`中的 Elog 在使用时需要提前在`npm scripts`中指定相关运行命令，例如


```json
// package.json
{
	"scripts": {
    "build": "vitepress or hexo 或者其他自定义的命令，具体以自己的工具为准", // 构建文档
    "sync:local": "elog sync -e .elog.env", // 本地同步时需要从env中取值
    "sync": "elog sync", // 进行同步
    "clean": "elog clean"
  }
}
```


然后就可以命令行下使用`npm run`命令，执行提前定义的脚本


```shell
npm run sync:local
# 命令等同于执行
elog sync -e .elog.env
```


> `npm run`执行时会使用安装在 `package.json`中的 Elog 版本。而直接使用`elog sync -e .elog.env`使用的是安装在电脑全局环境的 Elog，需要注意区分。  
> 如果你两种方式都安装了，尽量保证全局 Elog 版本和`package.json`中的 Elog 版本保持一致


局部安装 Elog 的好处在于，如果你使用的是`vitepress/hexo` 等基于 JavaScript 的博客平台，那么他们天然会有 `package.json`文件。你只需要`npm install @elog/cli`局部安装 Elog，然后配置相关命令脚本，`npm run`运行同步命令即可。而使用 Github Actions 也不用额外全局安装 `@elog/cli` 了


总之，如果你不准备使用 Github Actions，则全局安装 Elog 即可。


如果你需要结合 Github Actions实现文档自动化更新，请先阅读[阮一峰的npm scripts 使用指南](https://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)，再进行实践，并结合大家的最佳实践来操作。


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


## elog运行时找不到该命令

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

- 在Github自动化流程中同步卡住
- 本地同步运行时卡住
- 图片下载时卡住
- 文档下载时卡住

### 解决办法


在全量同步时，因为语雀/FlowUs为国内平台，有时会在Github等国外环境运行时由于网络问题卡住。此时可以在本地先手动运行一遍，提交缓存文件到Github，后续的增量同步会快很多。相反用Notion在本地进行同步时，也有同样的问题，放在Github同步就会快很多。


还有一种可能是由于需要同步的文档中的新图片数量太多，所以每次都是新增上传图片到CDN，会导致整体的流程变慢甚至失败。因为Elog会检测图片在CDN是否已经上传过，可以多试几次。


由于Notion的API在大部分情况下都很慢，甚至会下载文档失败。这是官方的问题，可以选择降低Notion下载文档时的并发数（默认为3）。在Elog配置文件中设置`write.notion.limit=1`，降低文档下载并发数，也可多试几次。


## 同步时报超时错误

- 下载文档超时
- 下载图片超时

### 解决办法


默认超时时间为60s，如果经常超时，可配置环境变量`process.env.REQUEST_TIMEOUT`，增加请求超时时间。


本地同步时，在.elog.env文件新增`REQUEST_TIMEOUT=900000`，设置更大的超时时间


在CI/CD中，可在自动化平台注入同样的环境变量即可


如果遇到图片下载失败，可升级到Elog最新版`@elog/cli@0.7.2`及以上版本，Elog会在上次同步时某文章存在图片下载失败时，第二次同步会重新尝试同步该文章


## Elog主要功能是批量导出


Elog在大部分场景下都只是一个批量导出`markdown`工具，不涉及部署、数据库等功能。


自动化部署、博客平台的路由配置、自定义属性等功能，都是需要各种软件/脚本辅助完成。


不可否认，配置Elog，特别是一定的复杂场景，确实需要一定的代码基础知识，但Elog的其中一个目标也是尽可能地提供开箱即用的配置支持，降低配置的复杂度。


在Elog还没进化到这种程度之前，还是需要大家尽量熟悉Elog使用文档。

