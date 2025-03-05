---
sort: 100
urlname: write-platform
catalog: 配置详情
tags: Elog-Docs
title: 写作平台配置
date: '2023-10-13 13:14:00'
updated: '2025-03-05 22:47:00'
---

# 写作平台配置


## 语雀（Token方式）

> 注意：根据语雀定价调整，此方式需要语雀高级会员可用，以前生成过`token`的账户依旧可用

语雀关键信息获取及配置流程请移步 [关键信息获取](/notion/gvnxobqogetukays#语雀) 页面。


| 字段            | 必填 | 说明                 | 默认值                          |
| ------------- | -- | ------------------ | ---------------------------- |
| token         | 是  | 语雀Token            | -                            |
| baseUrl       | 否  | 语雀API请求的Base Url   | https://www.yuque.com/api/v2 |
| login         | 是  | 个人路径/空间ID          | -                            |
| repo          | 是  | 语雀仓库短名称，也称为语雀知识库路径 | -                            |
| onlyPublic    | 否  | 是否只获取公开文章          | false                        |
| onlyPublished | 否  | 是否只获取已发布文章         | false                        |
| limit         | 否  | 文档下载并发数            | 3                            |

> `baseUrl` 为语雀 API 请求路径  
> 当知识库类型为个人知识库时，无需配置。   
> 当知识库类型为团队知识库时，`baseUrl=https://空间id.yuque.com/api/v2`，`login=空间id`，`repo=空间中的语雀知识库路径`

## 语雀（账号密码方式）

> 此方式无需语雀会员也可用  
> 注意：在非国内CI/CD环境中使用此方式，例如Github Workflow，会导致语雀后台登录设备中出现大量美国IP，目前尚不清楚语雀是否会有安全限制措施，请谨慎使用。推荐本地同步时使用。

语雀关键信息获取及配置流程请移步 [关键信息获取](/notion/gvnxobqogetukays#语雀) 页面。


| 字段            | 必填 | 说明                     | 默认值                   |
| ------------- | -- | ---------------------- | --------------------- |
| username      | 是  | 语雀帐号，一般是手机号            | -                     |
| password      | 是  | 语雀密码，可在设置进行绑定          |                       |
| host          | 否  | 语雀域名/团队域名              | https://www.yuque.com |
| login         | 是  | 个人路径/空间ID              | -                     |
| repo          | 是  | 语雀仓库短名称，也称为语雀知识库路径     | -                     |
| linebreak     | 否  | 是否保持语雀的换行              | false                 |
| latexCode     | 否  | 是否保留latex 公式语法，否则输出为图片 | false                 |
| onlyPublic    | 否  | 是否只获取公开文章              | false                 |
| onlyPublished | 否  | 是否只获取已发布文章             | false                 |
| limit         | 否  | 文档下载并发数                | 3                     |

> host 为语雀域名  
> 当知识库类型为个人知识库时，无需配置。   
> 当知识库类型为团队知识库时，`host=https://空间id.yuque.com`

## Notion


Notion 模版获取、关键信息获取及配置流程请移步 [关键信息获取](/notion/gvnxobqogetukays#notion) 页面。


| 字段          | 必填 | 类型                      | 说明              | 默认值   |
| ----------- | -- | ----------------------- | --------------- | ----- |
| token       | 是  | string                  | Notion Token    |       |
| databaseId  | 是  | string                  | notion 中的数据库 id | -     |
| filter      | 否  | boolean｜object          | 过滤条件            | false |
| sorts       | 否  | boolean｜string｜object[] | 排序条件            | false |
| imgToBase64 | 否  | boolean                 | 文档图片转 Base64    | false |
| catalog     | 否  | boolean｜object          | 目录信息配置          | false |
| limit       | 否  | number                  | 文档下载并发数         | 3     |


### Filter 字段说明


`filter`字段是为了筛选 Notion 数据库文档，表示哪些文章需要被 Elog 下载。

1. 当 `filter=true` ，即筛选数据库的`status`属性，且属性值为`已发布`，对应 Notion 的筛选规则为：

	```json
	{ 
	  property: 'status',
	  select: {
	  	equals: '已发布'
		}
	}
	```

2. 当`filter = false`时，不进行筛选，默认下载数据库所有文档
3. 当需要自定义筛选时，需要按照Notion的筛选规则进行。具体请参考 [Notion API文档 - Filter database entries](https://developers.notion.com/reference/post-database-query-filter)

### Sorts 字段说明


 `sorts`字段是为了对 Notion 数据库文档进行排序，以便生成一定顺序的目录信息，**对文档的同步不影响。** 


例如，使用 VitePress 部署文档时，需要对文档按照指定顺序和结构生成路由和 sidebar。 


详情见 [Elog Docs 文档源码](https://github.com/LetTTGACO/elog-docs)

1. Elog 提供了一些预设参数，如下。例如`sorts=sortDesc`即按照数据库的 sort 字段进行倒序排列

	```typescript
	export const enum NotionSortPreset {
	  /** 按自定义日期排序 */
	  dateDesc = 'dateDesc', // 倒序
	  dateAsc = 'dateAsc', // 升序
	  /** 按创建时间排序 */
	  createTimeDesc = 'createTimeDesc', // 倒序
	  createTimeAsc = 'createTimeAsc', // 升序
	  /** 按更新时间排序 */
	  updateTimeDesc = 'updateTimeDesc', // 倒序
	  updateTimeAsc = 'updateTimeAsc', // 升序
	  /** 按数据库的sort字段进行排序 */
	  sortDesc = 'sortDesc', // 倒序
	  sortAsc = 'sortAsc', // 升序
	}
	```

2. 当`sorts=true`或者不填时，默认按照文档创建时间倒序进行排序。
3. 当需要自定义排序时，需要按照Notion的筛选规则进行。具体请参考 [Notion API文档 - Sort database entries](https://developers.notion.com/reference/post-database-query-sort)

### Catalog 字段说明


`catalog`字段是为了配置文档的目录信息，如果需要按照指定目录分类下载时，则需要进行配置，**对文档的同步不影响。** 

1. 默认值为`false`，即不记录文档的目录信息
2. 当`catalog=true`，则表示按照数据库的`catalog`字段进行记录
3. 当需要自定义属性时，则可按照以下格式进行配置

	```javascript
	catalog = {
	  enable: true,
	  property: "自定义属性"
	}
	```

4. 当需要配置`catalog`字段时，请保证数据库有相关属性存在（支持单选/多选）
5. `catalog`字段为单选时，只能生成一层目录
6. `catalog`字段为多选时，可生成多级目录，**但是需要保证标签的顺序**
> 注意：对于Notion和FlowUs，想要开启按指定目录分类下载，还需要开启`deploy.local.catalog=true`

### imgToBase64 字段说明

> `0.10.0`及以上版本可用

请**谨慎开启**，开启后，Notion 文档的所有图片将以 Base64 格式输出到 markdown 文档中，但有以下问题值得注意：

1. 本地/博客平台的Markdown 渲染器并未广泛支持 Base64 格式，请自行确认
2. markdown 文档将变大很多，文档可读性变差，特别是图片较多的情况下
3. 一般适用于在博客平台的渲染，而不是本地备份时使用，本地备份请优先下载图片到本地或上传到图床

## FlowUs（息流）


FlowUs 模版获取、关键信息获取及配置流程请移步 [关键信息获取](/notion/gvnxobqogetukays#flowus) 页面。


| 字段          | 必填 | 类型                      | 说明              | 默认值   |
| ----------- | -- | ----------------------- | --------------- | ----- |
| tablePageId | 是  | string                  | flowus 中的多维表格ID | -     |
| filter      | 否  | boolean｜object          | 过滤条件            | false |
| sort        | 否  | boolean｜string｜object[] | 排序条件            | false |
| catalog     | 否  | boolean｜object          | 目录信息配置          | false |
| limit       | 否  | number                  | 文档下载并发数         | 3     |


### Filter 字段说明


`filter`字段是为了筛选文档，表示哪些文章需要被 Elog 下载。

1. 默认值为`false`，即不过滤文档，全部下载
2. 如果设置为`true`，会按照以下规则进行过滤

	```javascript
	// 表示将按照表中的【status】字段进行过滤，保留所有【已发布】的文档
	filter = {
	  property: 'status',
	  value: '已发布',
	}
	```

3. 如果想自定义过滤文档，可以指定多维表的属性名称和值进行过滤。目前只支持**与**逻辑，不支持**或**逻辑

	```javascript
	// 表示将按照表中的【status】字段进行过滤，保留所有【已发布】的文档
	filter = {
	  property: "status"
	  value: "已发布"
	}
	// 表示将按照表中的【status】和【tag】字段进行过滤，保留所有status=已发布 且 tag=技术方案的文档
	filter = [
		{
		  property: "status"
		  value: "已发布"
		}, {
		  property: "tag"
		  value: "技术方案"
		}
	]
	```


### sort 字段说明


`sorts` 字段是为了对文档进行排序，以便生成一定顺序的目录信息，**对文档的同步不影响**。 


例如，使用 VitePress 部署文档时，需要对文档按照指定顺序和结构生成路由和 sidebar。 

1. 默认值为`false`，不进行排序
2. 当`sort=true`，会按照文档的创建时间倒序排列
3. Elog 提供了一些预设参数，如下。例如`sort=sortDesc`即按照表中的 sort 字段进行倒序排列

	```typescript
	export enum SortPresetEnum {
	  /** 按自定义日期排序 */
	  dateDesc = 'dateDesc', // 倒序
	  dateAsc = 'dateAsc', // 正序
	  /** 按创建时间排序 */
	  createTimeDesc = 'createTimeDesc', // 倒序
	  createTimeAsc = 'createTimeAsc', // 正序
	  /** 按更新时间排序 */
	  updateTimeDesc = 'updateTimeDesc', // 倒序
	  updateTimeAsc = 'updateTimeAsc', // 正序
	  /** 按sort字段排序 */
	  sortDesc = 'sortDesc', // 倒序
	  sortAsc = 'sortAsc', // 正序
	}
	```

4. 如果需要自定义排序时，可以指定多维表的属性名称和值进行自定义排序。暂不支持多个排序条件

	```typescript
	// 表示将按照表中的【sort】字段进行【倒序】排列
	sort = {
	  property: "sort"
	  direction: "descending" // descending：倒序， ascending：正序
	}
	```


### Catalog 字段说明


`catalog`字段是为了配置文档的目录信息，如果需要按照指定目录分类下载时，则需要进行配置，**对文档的同步不影响**。 

1. 默认值为`false`，即不记录文档的目录信息
2. 当`catalog=true`，则表示按照数据库的`catalog`字段进行记录
3. 当需要自定义属性时，则可按照以下格式进行配置

	```typescript
	catalog = {
	  enable: true,
	  property: "自定义属性"
	}
	```

4. 当需要配置`catalog`字段时，请保证数据库有相关属性存在（支持单选/多选）
5. `catalog`字段为单选时，只能生成一层目录
6. `catalog`字段为多选时，可生成多级目录，**但是需要保证标签的顺序**
> 注意：对于Notion/FlowUs/wolai，想要开启按指定目录分类下载，还需要开启`deploy.local.catalog=true`

## 飞书

> `0.9.0`及以上版本支持知识库导出

飞书关键信息获取及配置流程请移步 [关键信息获取](/notion/gvnxobqogetukays#飞书) 页面。


| 字段               | 必填 | 说明                                                                  | 默认值                              |
| ---------------- | -- | ------------------------------------------------------------------- | -------------------------------- |
| type             | 否  | 从知识库下载(wiki)/我的空间(space)下载文档                                        | space                            |
| wikiId           | 否  | 知识库ID                                                               | -                                |
| folderToken      | 否  | 目标文件夹token                                                          | -                                |
| appId            | 是  | 飞书自建应用appId                                                         | -                                |
| appSecret        | 是  | 飞书自建应用appSecret                                                     | -                                |
| baseUrl          | 否  |  飞书 api 请求地址，国内飞书无须配置，国际版飞书可配置为https://open.larksuite.com/open-apis | https://open.feishu.cn/open-apis |
| disableParentDoc | 否  | 是否忽略存在子文档的父文档，将其视作文件夹。`0.12.1` 及以上版本可用                              | false                            |
| limit            | 否  | 文档下载并发数                                                             | 3                                |


### 字段说明

> 当 `type` 为 `space`（我的空间）时，`folderToken`为必填，表示从「我的空间」中的指定文件夹内下载文档。  
>   
> 当 `type` 为 `wiki`（知识库）时，wikiId 为必填，`folderToken`可选，表示从指定知识库中的指定目录内下载文档，`folderToken`不填时，默认下载整个知识库。  
>   
>  `type` 不填时，默认为从我的空间下载，`folderToken`为必填字段

### 知识库与我的空间区别


「我的空间」中**存在**文件夹，文档可以放置在文件夹之下


「知识库」中**不存在**文件夹，但文档本身可以当做文件夹，文档下可以继续放置文档


当开启[**按目录存放文档**](/notion/xe160pqsumi6bqnz) 时，因为知识库中不存在文件夹概念，如果父文档下有子文档，会在本地生成父文档的同时，创建和父文档同名的文件夹，子文档会放在该文件夹之下。


`0.12.1`及以上版本可设置 `disableParentDoc` 属性，用来控制：当父文档下存在文档时，父文档是否作为文件夹使用  


![Untitled.png](https://image.1874.cool/elog-docs-images/56a52870c6d2bcfaa9381129dff0ad98.png)


例如：当`disableParentDoc=false`或不设置时，默认是将以上 6 个文档全部下载，会在本地生成父文档的同时，创建和父文档同名的文件夹，子文档会放在该文件夹之下。  


当`disableParentDoc=true`时，则只会下载「测试」和「四级文档」两篇文档。其他文档因为其`children`存在文档，会将其作为文件夹，下载到本地的「四级文档」会被放置在文件夹之中。


## wolai

> 内测阶段，`0.14.0-beta.0`及以上版本可用

wolai 模版获取、关键信息获取及配置流程请移步 [关键信息获取](/notion/gvnxobqogetukays#wolai) 页面。


| 字段      | 必填 | 类型                      | 说明                       | 默认值   |
| ------- | -- | ----------------------- | ------------------------ | ----- |
| token   | 是  | string                  | wolai 请求头cookie 中的 token | -     |
| pageId  | 否  | string                  |  页面 ID                   | -     |
| catalog | 否  | boolean｜object          | 目录信息配置                   | false |
| limit   | 否  | number                  | 文档下载并发数                  | 3     |
| sort    | 否  | boolean｜string｜object[] | 排序条件                     | false |
| catalog | 否  | boolean｜object          | 目录信息配置                   | false |


### Filter 字段说明


`filter`字段是为了筛选文档，表示哪些文章需要被 Elog 下载。

1. 默认值为`false`，即不过滤文档，全部下载
2. 如果设置为`true`，会按照以下规则进行过滤

	```javascript
	// 表示将按照表中的【status】字段进行过滤，保留所有【已发布】的文档
	filter = {
	  property: 'status',
	  value: '已发布',
	}
	```

3. 如果想自定义过滤文档，可以指定多维表的属性名称和值进行过滤。目前只支持**与**逻辑，不支持**或**逻辑

	```javascript
	// 表示将按照表中的【status】字段进行过滤，保留所有【已发布】的文档
	filter = {
	  property: "status"
	  value: "已发布"
	}
	// 表示将按照表中的【status】和【tag】字段进行过滤，保留所有status=已发布 且 tag=技术方案的文档
	filter = [
		{
		  property: "status"
		  value: "已发布"
		}, {
		  property: "tag"
		  value: "技术方案"
		}
	]
	```


### sort 字段说明


`sorts` 字段是为了对文档进行排序，以便生成一定顺序的目录信息，**对文档的同步不影响**。 


例如，使用 VitePress 部署文档时，需要对文档按照指定顺序和结构生成路由和 sidebar。 

1. 默认值为`false`，不进行排序
2. 当`sort=true`，会按照文档的创建时间倒序排列
3. Elog 提供了一些预设参数，如下。例如`sort=sortDesc`即按照表中的 sort 字段进行倒序排列

	```typescript
	export enum SortPresetEnum {
	  /** 按自定义日期排序 */
	  dateDesc = 'dateDesc', // 倒序
	  dateAsc = 'dateAsc', // 正序
	  /** 按创建时间排序 */
	  createTimeDesc = 'createTimeDesc', // 倒序
	  createTimeAsc = 'createTimeAsc', // 正序
	  /** 按更新时间排序 */
	  updateTimeDesc = 'updateTimeDesc', // 倒序
	  updateTimeAsc = 'updateTimeAsc', // 正序
	  /** 按sort字段排序 */
	  sortDesc = 'sortDesc', // 倒序
	  sortAsc = 'sortAsc', // 正序
	}
	```

4. 如果需要自定义排序时，可以指定多维表的属性名称和值进行自定义排序。暂不支持多个排序条件

	```typescript
	// 表示将按照表中的【sort】字段进行【倒序】排列
	sort = {
	  property: "sort"
	  direction: "descending" // descending：倒序， ascending：正序
	}
	```


### Catalog 字段说明


`catalog`字段是为了配置文档的目录信息，如果需要按照指定目录分类下载时，则需要进行配置，**对文档的同步不影响**。 

1. 默认值为`false`，即不记录文档的目录信息
2. 当`catalog=true`，则表示按照数据库的`catalog`字段进行记录
3. 当需要自定义属性时，则可按照以下格式进行配置

	```typescript
	catalog = {
	  enable: true,
	  property: "自定义属性"
	}
	```

4. 当需要配置`catalog`字段时，请保证数据库有相关属性存在（支持单选/多选）
5. `catalog`字段为单选时，只能生成一层目录
6. `catalog`字段为多选时，可生成多级目录，**但是需要保证标签的顺序**
> 注意：对于Notion/FlowUs/wolai，想要开启按指定目录分类下载，还需要开启`deploy.local.catalog=true`

## outline

> 内测阶段，`0.15.0-beta.0`及以上版本可用

outline 关键信息获取及配置流程请移步 [关键信息获取](/notion/gvnxobqogetukays#outline) 页面。


| 字段                 | 必填 | 类型      | 说明                                            | 默认值 |
| ------------------ | -- | ------- | --------------------------------------------- | --- |
| token              | 是  | string  | API 密钥                                        | -   |
| baseUrl            | 否  | string  |  API 路径，自部署才需要配置                              | -   |
| collectionId       | 否  | string  | 文档集 ID                                        | -   |
| userId             | 否  | string  | 用户 ID                                         | -   |
| backlinkDocumentId | 否  | string  | 反向链接文档编号                                      | -   |
| parentDocumentId   | 否  | string  |  父文档 ID                                       | -   |
| isTemplate         | 否  | boolean | 是否下载模板文档， true 为只下载模版文件，false 为不下载模板文件，不填则都下载 | -   |


## 下一步


**点击** [下一篇](/notion/deploy-platform) **继续配置部署平台**

