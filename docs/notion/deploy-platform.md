---
sort: 110
urlname: deploy-platform
catalog: 配置详情
tags: Elog-Docs
title: 部署平台配置
date: '2023-10-13 13:21:00'
updated: '2024-09-02 23:59:00'
---

# 部署平台配置


## 本地部署（local）


适用于所有类似 Hexo 的框架：通过向指定目录存放 markdown 文档来进行渲染的博客平台


| 字段          | 必填 | 类型          | 说明                         | 默认值      |
| ----------- | -- | ----------- | -------------------------- | -------- |
| outputDir   | 否  | string      | 文档输出目录                     | -        |
| filename    | 否  | string      | 生成文档的命名格式，取值 urlname｜title | title    |
| format      | 否  | string      | 适配器，取值 markdown｜wiki｜html  | markdown |
| frontMatter | 否  | FrontMatter | FrontMatter相关配置            | -        |
| catalog     | 否  | boolean     | 是否按照目录生成文档                 | false    |
| formatExt   | 否  | string      | 自定义文档处理适配器路径               | -        |


### Format 字段说明


`format`字段表示该文档内容的格式，常用的例如`markdown`或适用于 Confluence 的 `wiki`，适用于 Wordpress的 `html`


### FrontMatter 字段说明


> `0.12.0`及以上版本支持


| 字段      | 必填 | 类型       | 说明                     | 默认值   |
| ------- | -- | -------- | ---------------------- | ----- |
| enable  | 否  | boolean  | 是否启用 FrontMatter       | false |
| include | 否  | string[] | 只输出数组中存在的字段，数据库的其他字段忽略 | -     |
| exclude | 否  | string[] | 忽略数组中存在的字段，输出数据库的其他字段  | -     |


> 在 `0.12.0` 版本之前启用 FrontMatter 可设置 `local.format=matter-markdown`


### FormatExt 字段说明


自定义文档处理适配器`.js`文件路径，当需要对文档进一步处理时，可配置此选项

1. 目前只支持 Common Js 标准的处理器
2. 处理器需要暴露一个**同步/异步**的 `format` 的方法，在 `0.12.0` 之前版本**仅支持同步方法**，`0.12.0` 及以上版本可支持**异步方法或 npm 库**
3. 在 `0.12.0` 之前版本返回类型为**字符串，**`0.12.0` 及以上版本返回**传入的** **doc 文档对象**

	```javascript
	// 0.12.0之前的版本用法
	// 如果需要返回带有front-matter的md字符串，则需要安装并引入此库
	// const { matterMarkdownAdapter } = require('@elog/cli')
	
	/**
	 * 自定义文档处理器
	 * @param {DocDetail} doc doc的类型定义为 DocDetail
	 * @return {string} 返回处理后的文档内容字符串
	 */
	const format = (doc) => {
	  doc.body = process(body)
		// 直接返回md内容字符串
		return doc.body
		// 返回带有front-matter的md字符串
	  // return matterMarkdownAdapter(doc);
	};
	
	module.exports = {
	  format,
	};
	```


	```javascript
	// 0.12.0及以上版本用法
	const { matterMarkdownAdapter } = require('@elog/cli')
	
	/**
	 * 自定义文档插件
	 * @param {DocDetail} doc doc的类型定义为 DocDetail
	 * @param {ImageClient} imageClient 图床下载器，可用于图片上传
	 * @return {Promise<DocDetail>} 返回处理后的文档对象
	 */
	const format = async (doc, imageClient) => {
	  const cover = doc.properties.cover
	  // 将 cover 字段中的 notion 图片下载到本地
	  if (imageClient)  {
	    // 只有启用图床平台image.enable=true时，imageClient才能用，否则请自行实现图片上传
	    const url = await imageClient.uploadImageFromUrl(cover, doc)
	    // cover链接替换为本地图片
	    doc.properties.cover = url
	  }
	  doc.body = matterMarkdownAdapter(doc);
	  return doc;
	};
	
	module.exports = {
	  format,
	};
	```


	**DocDetail 类型定义如下：**


	```typescript
	/** 文章详情 */
	export interface DocDetail extends BaseDoc {
	  /** 实际部署时的markdown文档字符串 */
	  body: string
	  /** 原始markdown文档字符串 */
	  body_original: string
	  /** 部署到wiki时会存在 */
	  body_wiki?: string
	  /** html字符串 */
	  body_html?: string
	  /** 文章属性 */
	  properties: DocProperties
	  /** 目录路径 */
	  catalog?: any[]
	}
	
	export interface BaseDoc {
	  /** 文章唯一ID */
	  id: string
	  /** 文章ID */
	  doc_id: string
	  /** 更新时间，冗余字段 */
	  updated: number
	}
	
	/** 文章属性 */
	export interface DocProperties {
	  urlname: string
	  title: string
	  date: string
	  updated: string
	  [key: string]: any
	}
	```


## Halo


Halo 关键信息获取及配置流程请移步 [关键信息获取](/notion/gvnxobqogetukays#halo) 页面。


> `0.13.0`及以上版本支持


| 字段              | 必填 | 说明                        | 默认值            |
| --------------- | -- | ------------------------- | -------------- |
| endpoint        | 是  | 站点地址，区分 http/https        | -              |
| token           | 是  | Halo 个人令牌                 | -              |
| policyName      | 否  | 存储策略                      | default-policy |
| rowType         | 否  | 源文档格式，取值 html/markdown    | html           |
| needUploadImage | 否  | 是否将文档图片上传到 Halo           | false          |
| formatExt       | 否  | 自定义文档处理适配器路径，需要符合HTML格式要求 | -              |


### rowType 字段说明


**如果使用 Elog 进行同步，建议不要在 Halo 后台编辑文档，文档的编辑应该交给写作平台来处理**


[根据 Halo 社区说明](https://github.com/halo-dev/halo/issues/4936#issuecomment-1830199955)：


Halo 的默认编辑器是富文本编辑器，`rawType` 为 `html`，`rawType` 的意义在于让 Halo 知道文章应该用什么源格式的编辑器进行编辑。


Halo 本身没有自带 Markdown 编辑器，需要用户自行安装，所有的编辑器插件可以在 [Halo插件市场](https://www.halo.run/store/apps?type=PLUGIN) 中找到。


此外，在 `rawType` 设置为 `markdown` 且系统中并没有 `markdown` 类型的编辑器时，进入文章编辑会给出提示：


![Untitled.png](https://image.1874.cool/elog-docs-images/41c42ad20e6a991276ff2cdb6786c521.png)


### needUploadImage 字段说明


是否将文档图片上传到 Halo中存储。此外，建议该设置与图床设置，二选一即可。如果你开启了图床，将文档图片上传到 oss 之类的图床上，就没必要开启 Halo 图片上传，再从 oss 上传图片到 Halo。


### FormatExt 字段说明


自定义文档处理适配器`.js`文件路径，当需要对文档进一步处理时，可配置此选项

1. 目前只支持 Common Js 标准的处理器
2. 处理器需要暴露一个**同步/异步**的 `format` 的方法或 npm 库
3. 需要返回**传入的** **doc 文档对象**

```javascript
const { htmlAdapter } = require('@elog/cli')

/**
 * 自定义文档插件
 * @param {DocDetail} doc doc的类型定义为 DocDetail
 * @param {ImageClient} imageClient 图床下载器，可用于图片上传
 * @return {Promise<DocDetail>} 返回处理后的文档对象
 */
const format = async (doc, imageClient) => {
  const cover = doc.properties.cover
  // 将 cover 字段中的 notion 图片下载到本地
  if (imageClient)  {
    // 只有启用图床平台image.enable=true时，imageClient才能用，否则请自行实现图片上传
    const url = await imageClient.uploadImageFromUrl(cover, doc)
    // cover链接替换为本地图片
    doc.properties.cover = url
  }
  doc.body = htmlAdapter(doc);
  return doc;
};

module.exports = {
  format,
};
```


## Confluence


| 字段         | 必填 | 说明                              | 默认值 |
| ---------- | -- | ------------------------------- | --- |
| baseUrl    | 是  | Confluence API 请求 Base Url      | -   |
| spaceKey   | 是  | 空间Key                           | -   |
| rootPageId | 是  | 根页面ID，Elog会把文档统一存到此目录下          | -   |
| user       | 是  | Confluence账号                    | -   |
| password   | 是  | Confluence密码                    | -   |
| formatExt  | 否  | 自定义文档处理适配器路径，需要符合Confluence格式要求 | -   |


## WordPress


WordPress 模版获取、关键信息获取及配置流程请移步 [关键信息获取](/notion/gvnxobqogetukays#wordpres) 页面。


| 字段        | 必填 | 说明                                          | 默认值 |
| --------- | -- | ------------------------------------------- | --- |
| username  | 是  | WordPress 用户名                               | -   |
| password  | 是  | WordPress 密码                                | -   |
| endpoint  | 是  | WordPress 站点，例如http://your.site.com/wp-json | -   |
| keyMap    | 否  | 属性映射                                        | -   |
| formatExt | 否  | 自定义文档处理适配器路径，需要符合HTML格式要求                   | -   |


### keyMap 字段说明


| 属性          | 必填 | 映射字段说明        | 字段值类型             | 默认值         |
| ----------- | -- | ------------- | ----------------- | ----------- |
| tags        | 否  | 标签字段映射        | string ｜ string[] | tags        |
| categories  | 否  | 分类字段映射        | string ｜ string[] | categories  |
| urlname     | 否  | 页面路径字段映射      | string            | urlname     |
| cover       | 否  | 特色图片（封面图）字段映射 | string，图片url      | cover       |
| description |    | 简介字段映射        | string            | description |


一般不需要修改，只要保证文章属性`front-matter`中有以上字段，即可在上传到WordPress时正确携带，只有字段冲突或者想自定义为中文等情况下才需要进行映射。


语雀需要自行在文章头部添加`front-matter`，并填写以下值，Notion/FlowUs可直接新增/修改为以上字段即可。


## 下一步


**点击** [下一篇](/notion/image-platform) **继续配置图床平台**

