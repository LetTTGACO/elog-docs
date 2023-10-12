---
status: 已发布
sort: 6
urlname: fe8ywmt999gon12w
上次编辑时间: "2023-10-12T01:46:00.000Z"
catalog: 入门指引
tags: Elog-Docs
title: 配置详情
date: "2023-04-21 17:04:00"
updated: "2023-10-12 01:46:00"
---

# 配置详情

## 目录结构

以 Hexo 的根目录为例：

```text
.
├── public
├── scaffolds
├── source
├── themes
├── .elog.env						// Elog用于本地调试时的环境变量配置
├── .gitignore					// git忽略文件，请将.elog.env文件加入，防止密码等信息误提交
├── _config.yml
├── elog.cache.json			// Elog的缓存文件，用于缓存上次同步的文件
├── elog.config.js		  // Elog的配置文件
└── package.json
```

以下配置都是基于`elog.config.js`来说明

## 完整示例

```javascript
module.exports = {
  write: {
    platform: "yuque",
    yuque: {
      token: process.env.YUQUE_TOKEN,
      baseUrl: "",
      login: process.env.YUQUE_LOGIN,
      repo: process.env.YUQUE_REPO,
      onlyPublic: false,
      onlyPublished: true,
    },
    "yuque-pwd": {
      username: process.env.YUQUE_USERNAME,
      password: process.env.YUQUE_PWD,
      baseUrl: "",
      login: process.env.YUQUE_LOGIN,
      repo: process.env.YUQUE_REPO,
      linebreak: true,
    },
    feishu: {
      folderToken: process.env.FEISHU_FOLDER_TOKEN,
      appId: process.env.FEISHU_APP_ID,
      appSecret: process.env.FEISHU_APP_SECRET,
    },
    notion: {
      token: process.env.NOTION_TOKEN,
      databaseId: process.env.NOTION_DATABASE_ID,
      filter: false, // {property: 'status', select: {equals: '已发布'}}
      sorts: false, // [{timestamp: 'created_time', direction: 'descending'}],
      catalog: false,
    },
    flowus: {
      tablePageId: process.env.NOTION_DATABASE_ID,
      filter: false, // {property: 'status',value: '已发布'}
      sorts: false, // {property: 'createdAt', direction: "descending"},
      catalog: false,
    },
  },
  deploy: {
    platform: "local",
    local: {
      outputDir: "",
      filename: "",
      format: "",
      catalog: false,
      formatExt: "",
    },
    confluence: {
      user: process.env.CONFLUENCE_USER,
      password: process.env.CONFLUENCE_PASSWORD,
      baseUrl: process.env.CONFLUENCE_BASE_URL,
      spaceKey: process.env.CONFLUENCE_SPACE_KEY,
      rootPageId: process.env.CONFLUENCE_ROOT_PAGE_ID, // 可选
      formatExt: "", // 可选
    },
    wordpress: {
      username: process.env.WORDPRESS_USERNAME,
      password: process.env.WORDPRESS_PASSWORD,
      endpoint: process.env.WORDPRESS_ENDPOINT,
      keyMap: {
        tags: "tags",
        categories: "categories",
        urlname: "urlname",
        cover: "cover",
        description: "description",
      },
      formatExt: "", // 可选
    },
  },
  image: {
    enable: false,
    platform: "local",
    local: {
      outputDir: "",
      prefixKey: "",
    },
    oss: {
      secretId: process.env.OSS_SECRET_ID,
      secretKey: process.env.OSS_SECRET_KEY,
      bucket: process.env.OSS_BUCKET,
      region: process.env.OSS_REGION,
      host: process.env.OSS_HOST,
      prefixKey: "",
      secretExt: "", // 可选
    },
    cos: {
      secretId: process.env.COS_SECRET_ID,
      secretKey: process.env.COS_SECRET_KEY,
      bucket: process.env.COS_BUCKET,
      region: process.env.COS_REGION,
      host: process.env.COS_HOST,
      prefixKey: "",
      secretExt: "", // 可选
    },
    qiniu: {
      secretId: process.env.QINIU_SECRET_ID,
      secretKey: process.env.QINIU_SECRET_KEY,
      bucket: process.env.QINIU_BUCKET,
      region: process.env.QINIU_REGION,
      host: process.env.QINIU_HOST,
      prefixKey: "",
      secretExt: "", // 可选
    },
    upyun: {
      user: process.env.UPYUN_USER,
      password: process.env.UPYUN_PASSWORD,
      bucket: process.env.UPYUN_BUCKET,
      host: process.env.UPYUN_HOST,
      prefixKey: "",
      secretExt: "", // 可选
    },
    github: {
      user: process.env.GITHUB_USER,
      token: process.env.GITHUB_TOKEN,
      repo: process.env.GITHUB_REPO,
      branch: "",
      host: "",
      prefixKey: "",
      secretExt: "", // 可选
    },
  },
};
```

## 字段说明

| 字段   | 说明             |
| ------ | ---------------- |
| write  | 写作平台详细配置 |
| deploy | 部署平台详细配置 |
| image  | 图床平台详情配置 |

## 写作平台

### 语雀（Token 方式）

语雀关键信息获取及配置流程请移步 [关键信息获取](/notion/gvnxobqogetukays#语雀) 页面。

| 字段          | 必填 | 说明                                 | 默认值                       |
| ------------- | ---- | ------------------------------------ | ---------------------------- |
| token         | 是   | 语雀 Token                           | -                            |
| baseUrl       | 否   | 语雀 API 请求的 Base Url             | https://www.yuque.com/api/v2 |
| login         | 是   | 个人路径/空间 ID                     | -                            |
| repo          | 是   | 语雀仓库短名称，也称为语雀知识库路径 | -                            |
| onlyPublic    | 否   | 是否只获取公开文章                   | false                        |
| onlyPublished | 否   | 是否只获取已发布文章                 | false                        |
| limit         | 否   | 文档下载并发数                       | 3                            |

> baseUrl 为语雀 API 请求路径  
> 当知识库类型为个人知识库时，无需配置。  
> 当知识库类型为团队知识库时，`baseUrl=https://空间id.yuque.com/api/v2`，`login=空间id`，`repo=空间中的语雀知识库路径`

### 语雀（账号密码方式）

语雀关键信息获取及配置流程请移步 [关键信息获取](/notion/gvnxobqogetukays#语雀) 页面。

> 注意：在非国内 CI/CD 环境中使用此方式，例如 Github Workflow，会导致语雀后台登录设备中出现大量美国 IP，目前尚不清楚语雀是否会有安全限制措施，请谨慎使用。推荐本地同步时使用。

| 字段      | 必填 | 说明                                      | 默认值                |
| --------- | ---- | ----------------------------------------- | --------------------- |
| username  | 是   | 语雀帐号，一般是手机号                    | -                     |
| password  | 是   | 语雀密码，可在设置进行绑定                |                       |
| host      | 否   | 语雀域名/团队域名                         | https://www.yuque.com |
| login     | 是   | 个人路径/空间 ID                          | -                     |
| repo      | 是   | 语雀仓库短名称，也称为语雀知识库路径      | -                     |
| linebreak | 否   | 导出时是否保留语雀换行标签，即`<br/>`标签 | false                 |
| limit     | 否   | 文档下载并发数                            | 3                     |

> host 为语雀域名  
> 当知识库类型为个人知识库时，无需配置。  
> 当知识库类型为团队知识库时，`host=https://空间id.yuque.com`

### Notion

Notion 模版获取、关键信息获取及配置流程请移步 [关键信息获取](/notion/gvnxobqogetukays#notion) 页面。

| 字段       | 必填 | 类型                          | 说明                 | 默认值 |
| ---------- | ---- | ----------------------------- | -------------------- | ------ |
| token      | 是   | string                        | Notion Token         |        |
| databaseId | 是   | string                        | notion 中的数据库 id | -      |
| filter     | 否   | boolean ｜ object             | 过滤条件             | false  |
| sorts      | 否   | boolean ｜ string ｜ object[] | 排序条件             | false  |
| catalog    | 否   | boolean ｜ object             | 目录信息配置         | false  |
| limit      | 否   | number                        | 文档下载并发数       | 3      |

#### Filter 字段说明

`filter`字段是为了筛选 Notion 数据库文档，表示哪些文章需要被 Elog 下载。

1. 当 `filter=true` ，即筛选数据库的`status`属性，且属性值为`已发布`，对应 Notion 的筛选规则为：

   ```json
   {
     "property": "status",
     "select": {
       "equals": "已发布"
     }
   }
   ```

2. 当`filter = false`时，不进行筛选，默认下载数据库所有文档
3. 当需要自定义筛选时，需要按照 Notion 的筛选规则进行。具体请参考 [Notion API 文档 - Filter database entries](https://developers.notion.com/reference/post-database-query-filter)

#### Sorts 字段说明

`sorts`字段是为了对 Notion 数据库文档进行排序，以便生成一定顺序的目录信息，**对文档的同步不影响。**

例如，使用 VitePress 部署文档时，需要对文档按照指定顺序和结构生成路由和 sidebar。

详情见 [Elog Docs 文档源码](https://github.com/LetTTGACO/elog-docs)

1. Elog 提供了一些预设参数，如下。例如`sorts=sortDesc`即按照数据库的 sort 字段进行倒序排列

   ```typescript
   export const enum NotionSortPreset {
     /** 按自定义日期排序 */
     dateDesc = "dateDesc", // 倒序
     dateAsc = "dateAsc", // 升序
     /** 按创建时间排序 */
     createTimeDesc = "createTimeDesc", // 倒序
     createTimeAsc = "createTimeAsc", // 升序
     /** 按更新时间排序 */
     updateTimeDesc = "updateTimeDesc", // 倒序
     updateTimeAsc = "updateTimeAsc", // 升序
     /** 按数据库的sort字段进行排序 */
     sortDesc = "sortDesc", // 倒序
     sortAsc = "sortAsc", // 升序
   }
   ```

2. 当`sorts=true`或者不填时，默认按照文档创建时间倒序进行排序。
3. 当需要自定义排序时，需要按照 Notion 的筛选规则进行。具体请参考 [Notion API 文档 - Sort database entries](https://developers.notion.com/reference/post-database-query-sort)

#### Catalog 字段说明

`catalog`字段是为了配置文档的目录信息，如果需要按照指定目录分类下载时，则需要进行配置，**对文档的同步不影响。**

1. 默认值为`false`，即不记录文档的目录信息
2. 当`catalog=true`，则表示按照数据库的`catalog`字段进行记录
3. 当需要自定义属性时，则可按照以下格式进行配置

   ```javascript
   catalog = {
     enable: true,
     property: "自定义属性",
   };
   ```

4. 当需要配置`catalog`字段时，请保证数据库有相关属性存在（支持单选/多选）
5. `catalog`字段为单选时，只能生成一层目录
6. `catalog`字段为多选时，可生成多级目录，**但是需要保证标签的顺序**

> 对于 Notion 和 FlowUs，想要开启按指定目录分类下载，还需要开启`deploy.local.catalog=true`

### FlowUs（息流）

FlowUs 模版获取、关键信息获取及配置流程请移步 [关键信息获取](/notion/gvnxobqogetukays#flowus) 页面。

| 字段        | 必填 | 类型                          | 说明                   | 默认值 |
| ----------- | ---- | ----------------------------- | ---------------------- | ------ |
| tablePageId | 是   | string                        | flowus 中的多维表格 ID | -      |
| filter      | 否   | boolean ｜ object             | 过滤条件               | false  |
| sort        | 否   | boolean ｜ string ｜ object[] | 排序条件               | false  |
| catalog     | 否   | boolean ｜ object             | 目录信息配置           | false  |
| limit       | 否   | number                        | 文档下载并发数         | 3      |

#### Filter 字段说明

`filter`字段是为了筛选 FlowUs 多维表文档，表示哪些文章需要被 Elog 下载。

1. 默认值为`false`，即不过滤文档，全部下载
2. 如果设置为`true`，会按照以下规则进行过滤

   ```javascript
   // 表示将按照多维表中的【status】字段进行过滤，保留所有【已发布】的文档
   filter = {
     property: "status",
     value: "已发布",
   };
   ```

3. 如果想自定义过滤文档，可以指定多维表的属性名称和值进行过滤。目前只支持【**与】**逻辑，不支持【**或】**逻辑

   ```javascript
   // 表示将按照多维表中的【status】字段进行过滤，保留所有【已发布】的文档
   filter = {
     property: "status"
     value: "已发布"
   }
   // 表示将按照多维表中的【status】和【tag】字段进行过滤，保留所有status=已发布 且 tag=技术方案的文档
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

#### sort 字段说明

`sorts` 字段是为了对 FlowUs 多维表文档进行排序，以便生成一定顺序的目录信息，**对文档的同步不影响**。

例如，使用 VitePress 部署文档时，需要对文档按照指定顺序和结构生成路由和 sidebar。

1. 默认值为`false`，不进行排序
2. 当`sort=true`，会按照文档的创建时间倒序排列
3. Elog 提供了一些预设参数，如下。例如`sort=sortDesc`即按照多维表中的 sort 字段进行倒序排列

   ```typescript
   export enum FlowUsSortPresetEnum {
     /** 按自定义日期排序 */
     dateDesc = "dateDesc", // 倒序
     dateAsc = "dateAsc", // 正序
     /** 按创建时间排序 */
     createTimeDesc = "createTimeDesc", // 倒序
     createTimeAsc = "createTimeAsc", // 正序
     /** 按更新时间排序 */
     updateTimeDesc = "updateTimeDesc", // 倒序
     updateTimeAsc = "updateTimeAsc", // 正序
     /** 按sort字段排序 */
     sortDesc = "sortDesc", // 倒序
     sortAsc = "sortAsc", // 正序
   }
   ```

4. 如果需要自定义排序时，可以指定多维表的属性名称和值进行自定义排序。暂不支持多个排序条件

   ```typescript
   // 表示将按照多维表中的【sort】字段进行【倒序】排列
   sort = {
     property: "sort"
     direction: "descending" // descending：倒序， ascending：正序
   }
   ```

#### Catalog 字段说明

`catalog`字段是为了配置文档的目录信息，如果需要按照指定目录分类下载时，则需要进行配置，**对文档的同步不影响**。

1. 默认值为`false`，即不记录文档的目录信息
2. 当`catalog=true`，则表示按照数据库的`catalog`字段进行记录
3. 当需要自定义属性时，则可按照以下格式进行配置

   ```typescript
   catalog = {
     enable: true,
     property: "自定义属性",
   };
   ```

4. 当需要配置`catalog`字段时，请保证数据库有相关属性存在（支持单选/多选）
5. `catalog`字段为单选时，只能生成一层目录
6. `catalog`字段为多选时，可生成多级目录，**但是需要保证标签的顺序**

> 对于 Notion 和 FlowUs，想要开启按指定目录分类下载，还需要开启`deploy.local.catalog=true`

### 飞书

飞书关键信息获取及配置流程请移步 [关键信息获取](/notion/gvnxobqogetukays#飞书) 页面。

| 字段        | 必填 | 说明                   | 默认值 |
| ----------- | ---- | ---------------------- | ------ |
| folderToken | 是   | 目标文件夹 token       | -      |
| appId       | 是   | 飞书自建应用 appId     | -      |
| appSecret   | 是   | 飞书自建应用 appSecret | -      |
| limit       | 否   | 文档下载并发数         | 3      |

## 部署平台

### 本地部署（local）

适用于所有类似 Hexo 的框架：通过向指定目录存放 markdown 文档来进行渲染的博客平台

| 字段      | 必填 | 类型    | 说明                                                     | 默认值   |
| --------- | ---- | ------- | -------------------------------------------------------- | -------- |
| outputDir | 否   | string  | 文档输出目录                                             | -        |
| filename  | 否   | string  | 生成文档的命名格式，取值 urlname ｜ title                | title    |
| format    | 否   | string  | 适配器，取值 markdown ｜ matter-markdown ｜ wiki ｜ html | markdown |
| catalog   | 否   | boolean | 是否按照目录生成文档                                     | false    |
| formatExt | 否   | string  | 自定义文档处理适配器路径                                 | -        |

#### FormatExt 字段说明

自定义文档处理适配器`.js`文件路径，当需要对文档进一步处理时，可配置此选项

1. 目前只支持 Common Js 标准的处理器
2. 处理器需要暴露一个**同步**的 `format` 的方法，**不支持异步方法**
3. 返回类型为**字符串**

   ```javascript
   // 如果需要返回带有front-matter的md字符串，则需要安装并引入此库
   const { matterMarkdownAdapter } = require("@elog/plugin-adapter");

   /**
    * 自定义文档处理器
    * @param {DocDetail} doc doc的类型定义为 DocDetail
    * @return {string} 返回处理后的文档内容字符串
    */
   const format = (doc) => {
     doc.body = process(body);
     // 直接返回md内容字符串
     return doc.body;
     // 返回带有front-matter的md字符串
     // return matterMarkdownAdapter(doc);
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
     body: string;
     /** 原始markdown文档字符串 */
     body_original: string;
     /** 部署到wiki时会存在 */
     body_wiki?: string;
     /** html字符串 */
     body_html?: string;
     /** 文章属性 */
     properties: DocProperties;
     /** 语雀文章目录路径， Notion暂不支持 */
     catalog?: YuqueCatalog[];
   }

   export interface BaseDoc {
     /** 文章唯一ID */
     id: string;
     /** 文章ID */
     doc_id: string;
     /** 更新时间，冗余字段 */
     updated: number;
   }

   /** 文章属性 */
   export interface DocProperties {
     urlname: string;
     title: string;
     date: string;
     updated: string;
     [key: string]: any;
   }

   /** 语雀知识库目录 */
   export interface YuqueCatalog {
     /** 类型：文章/分组 */
     type: "DOC" | "TITLE";
     title: string;
     uuid: string;
     child_uuid: string;
     parent_uuid: string;
     slug: string;
     depth: number;
     level: number;
   }
   ```

### Confluence

| 字段       | 必填 | 说明                                                   | 默认值 |
| ---------- | ---- | ------------------------------------------------------ | ------ |
| baseUrl    | 是   | Confluence API 请求 Base Url                           | -      |
| spaceKey   | 是   | 空间 Key                                               | -      |
| rootPageId | 是   | 根页面 ID，Elog 会把文档统一存到此目录下               | -      |
| user       | 是   | Confluence 账号                                        | -      |
| password   | 是   | Confluence 密码                                        | -      |
| formatExt  | 否   | 自定义文档处理适配器路径，需要符合 Confluence 格式要求 | -      |

### WordPress

WordPress 模版获取、关键信息获取及配置流程请移步 [关键信息获取](/notion/gvnxobqogetukays#wordpres) 页面。

| 字段      | 必填 | 说明                                             | 默认值 |
| --------- | ---- | ------------------------------------------------ | ------ |
| username  | 是   | WordPress 用户名                                 | -      |
| password  | 是   | WordPress 密码                                   | -      |
| endpoint  | 是   | WordPress 站点，例如http://your.site.com/wp-json | -      |
| keyMap    | 否   | 属性映射                                         | -      |
| formatExt | 否   | 自定义文档处理适配器路径，需要符合 HTML 格式要求 | -      |

#### keyMap 字段说明

| 属性        | 必填 | 映射字段说明               | 字段值类型         | 默认值      |
| ----------- | ---- | -------------------------- | ------------------ | ----------- |
| tags        | 否   | 标签字段映射               | string ｜ string[] | tags        |
| categories  | 否   | 分类字段映射               | string ｜ string[] | categories  |
| urlname     | 否   | 页面路径字段映射           | string             | urlname     |
| cover       | 否   | 特色图片（封面图）字段映射 | string，图片 url   | cover       |
| description |      | 简介字段映射               | string             | description |

一般不需要修改，只要保证文章属性`front-matter`中有以上字段，即可在上传到 WordPress 时正确携带，只有字段冲突或者想自定义为中文等情况下才需要进行映射。

语雀需要自行在文章头部添加`front-matter`，并填写以下值，Notion/FlowUs 可直接新增/修改为以上字段即可。

## 图床平台

图床关键信息获取及配置流程请移步 [关键信息获取](/notion/gvnxobqogetukays#图床) 页面。

### 本地存储（local）

| 字段      | 必填 | 说明             | 默认值 |
| --------- | ---- | ---------------- | ------ |
| outputDir | 是   | 图片输出目录     | -      |
| prefixKey | 否   | 图片资源统一前缀 | -      |

#### PrefixKey 字段说明

1. 本地部署平台一般会有资源根目录，会将某个文件夹视为根目录，而`prefixKey`就是配置资源目录的前缀
2. 例如 Vitpress，如果`outputDir=./docs/asset/images`，则`prefixKey=/asset/images`

### 腾讯云（cos）/阿里云（oss）/七牛云（qiniu）

| 字段      | 必填 | 说明                       | 默认值 |
| --------- | ---- | -------------------------- | ------ |
| secretId  | 是   | 图床密钥 ID                | -      |
| secretKey | 是   | 图床密钥 KEY               | -      |
| bucket    | 是   | 桶名称/七牛云空间          | -      |
| region    | 是   | 存储区域，**七牛云可不填** | -      |
| host      | 否   | 指定域名，**七牛云必填**   | -      |
| prefixKey | 否   | 上传路径，默认上传到根路径 | -      |
| secretExt | 否   | 图床密钥拓展点             | -      |

### 又拍云（upyun）

| 字段      | 必填 | 说明                                                               | 默认值                             |
| --------- | ---- | ------------------------------------------------------------------ | ---------------------------------- |
| user      | 是   | 操作员账号                                                         | -                                  |
| password  | 是   | 操作员密码                                                         | -                                  |
| bucket    | 是   | 服务名                                                             | -                                  |
| host      | 否   | 指定域名，又拍云会默认提供 30 天的临时测试域名，建议配置自定义域名 | 临时域名：http://xxx.est.upcdn.net |
| prefixKey | 否   | 上传路径，默认上传到根路径                                         | -                                  |
| secretExt | 否   | 图床密钥拓展点                                                     | -                                  |

### Github 图床（github）

| 字段      | 必填 | 说明                            | 默认值 |
| --------- | ---- | ------------------------------- | ------ |
| token     | 是   | Github Token                    | -      |
| user      | 是   | 用户名                          | -      |
| repo      | 是   | 仓库名                          | -      |
| branch    | 否   | 分支                            | master |
| host      | 否   | 加速域名，取值 cdn.jsdelivr.net | -      |
| prefixKey | 否   | 上传路径，默认上传到根路径      | -      |
| secretExt | 否   | 图床密钥拓展点                  | -      |

### secretExt 字段说明

图床密钥拓展点路径，一般适用于不想直接配置 AK 到环境变量或者本地，而是通过异步接口获取

1. 目前只支持 Common Js 标准拓展点
2. 拓展点需要暴露一个**同步/异步**的 `getSecret` 的方法

   ```typescript
   const axios = require("axios");

   const getOssSts = async () => {
     return await axios.get("https://xxxx/oss/sts?directory=elog");
   };

   const getSecret = async () => {
     const res = await getOssSts();
     const {
       accessKeyId,
       accessKeySecret,
       securityToken,
       dir,
       region,
       bucket,
     } = res.data.data;
     return {
       secretId: accessKeyId,
       secretKey: accessKeySecret,
       stsToken: securityToken,
       secure: true,
       prefixKey: dir,
       region,
       bucket,
     };
   };

   module.exports = {
     getSecret,
   };
   ```

3. `getSecret` 返回的密钥信息需要符合图床实例 SDK 的字段要求，具体请参考对应图床 SDK/API

### 环境变量配置

1. 当 Elog 配置文件为 Js 类型时，可在配置文件中通过`process.env.xxx`自定义环境变量。
2. 当 ELog 配置文件为 Json 类型时，Elog 会优先从配置文件中获取，如果获取不到，则会从环境变量中获取。Elog 默认只会读取以下环境变量值：

   | Key              | Value                          |
   | ---------------- | ------------------------------ |
   | YUQUE_TOKEN      | 语雀 Token                     |
   | NOTION_TOKEN     | Notion Token                   |
   | CONFLUENCE_USER  | Confluence 账号                |
   | CONFLUENCE_PWD   | Confluence 密码                |
   | GITHUB_TOKEN     | Github Token                   |
   | COS_SECRET_ID    | 腾讯云 COS 的 secretId         |
   | COS_SECRET_KEY   | 腾讯云 COS 的 secretKey        |
   | OSS_SECRET_ID    | 阿里云 OSS 的 AccessKey ID     |
   | OSS_SECRET_KEY   | 阿里云 OSS 的 AccessKey Secret |
   | QINIU_SECRET_ID  | 七牛云的 AccessKey             |
   | QINIU_SECRET_KEY | 七牛云的 SecretKey             |
   | UPYUN_SECRET_ID  | 又拍云的操作员账号             |
   | UPYUN_SECRET_KEY | 又拍云的操作员密码             |

> ⚠️ 为了安全，在实际配置中请不要将敏感信息写在配置文件中，Elog 提供了更优雅的本地调试方式。

## 本地调试

为了方便本地调试，Elog 支持从本地文件中获取环境变量。只需要在部署平台根目录新增`.elog.env`文件，将用到的配置写入，然后在执行同步命令时指定环境变量文件即可。

```shell
elog sync -e .elog.env
```

```shell
# 语雀（Token方式）
YUQUE_TOKEN=
# 语雀（帐号密码方式）
YUQUE_USERNAME=
YUQUE_PWD=
YUQUE_LOGIN=
YUQUE_REPO=

# Notion
NOTION_TOKEN=
NOTION_DATABASE_ID=

# FlowUs
FLOWUS_TABLE_PAGE_ID=

# Confluence
CONFLUENCE_BASE_URL=
CONFLUENCE_USER=
CONFLUENCE_PASSWORD=
CONFLUENCE_SPACE_KEY=
CONFLUENCE_ROOT_PAGE_ID=

#WordPress
WORDPRESS_USERNAME=
WORDPRESS_PASSWORD=
WORDPRESS_ENDPOINT=

# 腾讯云
COS_SECRET_ID=
COS_SECRET_KEY=
COS_BUCKET=
COS_REGION=
COS_HOST=

# 阿里云
OSS_SECRET_ID=
OSS_SECRET_KEY=
OSS_BUCKET=
OSS_REGION=
OSS_HOST=

# 七牛云
QINIU_SECRET_ID=
QINIU_SECRET_KEY=
QINIU_BUCKET=
QINIU_REGION=
QINIU_HOST=

# 又拍云
UPYUN_USER=
UPYUN_PASSWORD=
UPYUN_BUCKET=
UPYUN_HOST=

# Github
GITHUB_USER=
GITHUB_TOKEN=
GITHUB_REPO=
```

> ⚠️ 注意：请将`.elog.env`文件加入 `.gitignore`，防止误提交到 git 仓库

## 线上部署

线上部署时，需要提前将以上用到的信息配置到环境变量上。 以 Github 为例，可以在仓库的`设置-Secrets and variables-Actions-Secrets`中进行配置，然后在流水线中注入即可。
