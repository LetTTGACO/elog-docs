---
status: 已发布
sort: 6
lastUpdated: "2023-04-22T07:00:00.000Z"
urlname: fe8ywmt999gon12w
date: "2023-04-22"
catalog: 入门指引
title: 配置详情
updated: "2023-04-22 15:00:00"
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
├── .gitignore					// git忽略文件，请将.env文件加入，防止密码等信息误提交
├── _config.yml
├── elog.cache.json			// Elog的缓存文件，用于缓存上次同步的文件
├── elog.config.js		  // Elog的配置文件
└── package.json
```

以下配置都是基于`elog.config.js`来说明 ## 完整示例

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
    notion: {
      token: process.env.NOTION_TOKEN,
      databaseId: process.env.NOTION_DATABASE_ID,
      filter: true, // {property: 'status', select: {equals: '已发布'}}
      sorts: true, // [{property: 'date', direction: 'descending'}],
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

### 语雀

| 字段          | 必填 | 说明                                 | 默认值                       |
| ------------- | ---- | ------------------------------------ | ---------------------------- |
| token         | 是   | 语雀 Token                           | -                            |
| baseUrl       | 否   | 语雀 API 请求的 Base Url             | https://www.yuque.com/api/v2 |
| login         | 是   | 个人路径/空间 ID                     | -                            |
| repo          | 是   | 语雀仓库短名称，也称为语雀知识库路径 | -                            |
| onlyPublic    | 否   | 是否只获取公开文章                   | false                        |
| onlyPublished | 否   | 是否只获取已发布文章                 | false                        |

> baseUrl 为语雀 API 请求路径  
> 当知识库类型为个人知识库时，无需配置。  
> 当知识库类型为团队知识库时，`baseUrl=https://空间id.yuque.com/api/v2`，`login=空间id`，`repo=空间中的语雀知识库路径`

### Notion

| 字段       | 必填 | 类型                       | 说明                 | 默认值 |
| ---------- | ---- | -------------------------- | -------------------- | ------ |
| token      | 是   | string                     | Notion Token         |        |
| databaseId | 是   | string                     | notion 中的数据库 id | -      |
| filter     | 否   | boolean ｜ any             | 过滤条件             | true   |
| sorts      | 否   | boolean ｜ string ｜ any[] | 排序条件             | true   |

**Filter 字段说明**

`filter`字段是为了筛选 Notion 数据库文档，表示哪些文章需要被 Elog 下载。

1. 默认值为 true ，即筛选数据库的`status`属性，且属性值为`已发布`，对应 Notion 的筛选规则为：

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

**Sorts 字段说明**

`sorts`字段是为了对 Notion 数据库文档进行排序，以便生成一定顺序的目录信息，**对文档的同步不影响。**

例如，使用 VitePress 部署文档时，需要对文档按照指定顺序和结构生成路由和 sidebar。

详情见 [Elog Docs 文档源码](https://github.com/LetTTGACO/elog-docs)

1. elog 提供了一些预设参数，如下。例如`sorts=sortDesc`即按照数据库的 sort 字段进行倒序排列

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

## 部署平台

### 本地部署（local）

适用于所有类似 Hexo 的框架：通过向指定目录存放 markdown 文档来进行渲染的博客平台

| 字段      | 必填 | 说明                                                     | 默认值   |
| --------- | ---- | -------------------------------------------------------- | -------- |
| outputDir | 否   | 文档输出目录                                             | -        |
| filename  | 否   | 生成文档的命名格式，取值 urlname ｜ title                | title    |
| format    | 否   | 适配器，取值 markdown ｜ matter-markdown ｜ wiki ｜ html | markdown |
| catalog   | 否   | 是否按照目录生成文档（暂只支持语雀）                     | false    |
| formatExt | 否   | 自定义文档处理适配器路径                                 | -        |

**FormatExt 字段说明**

自定义文档处理适配器`.js`文件路径，当需要对文档进一步处理时，可配置此选项

1. 目前只支持 Common Js 标准的处理器。
2. 处理器需要暴露一个**同步**的 `format` 的方法，**不支持异步方法。**

   ```javascript
   // 自定义文档处理器
   // doc的类型定义为 DocDetail，详情见下方 DocDetail 类型定义
   const format = (doc) => {
     // ...对文档进行处理
     const newPost = xxx;
     return newPost;
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

## 图床平台

### 通用字段

| 字段      | 必填 | 说明                                              | 默认值 |
| --------- | ---- | ------------------------------------------------- | ------ |
| enable    | 是   | 是否启用图床                                      | false  |
| bed       | 是   | 图床，取值 cos ｜ oss ｜ github ｜ qiniu ｜ upyun | github |
| prefixKey | 否   | 上传路径                                          |        |
| host      | 否   | 指定域名                                          |        |

### 本地存储（local）

| 字段      | 必填 | 说明             | 默认值 |
| --------- | ---- | ---------------- | ------ |
| outputDir | 是   | 图片输出目录     | -      |
| prefixKey | 否   | 图片资源统一前缀 | -      |

P**refixKey 字段说明**

1. 本地部署平台一般会有资源根目录，会将某个文件夹视为根目录，而`prefixKey`就是配置资源目录的前缀
2. 例如 Vitpress，如果`outputDir=./docs/asset/images`，则`prefixKey=/asset/images`

### 腾讯云（cos）/阿里云（oss）/七牛云（qiniu）

| 字段      | 必填 | 说明                       | 默认值 |
| --------- | ---- | -------------------------- | ------ |
| secretId  | 是   | 图床密钥 ID                | -      |
| secretKey | 是   | 图床密钥 KEY               | -      |
| bucket    | 是   | 桶名称/七牛云空间          | -      |
| region    | 是   | 存储区域                   | -      |
| host      | 否   | 指定域名，**七牛云必填**   | -      |
| prefixKey | 否   | 上传路径，默认上传到根路径 | -      |
| secretExt | 否   | 图床密钥拓展点             | -      |

### 又拍云（upyun）

| 字段      | 必填 | 说明                                                               | 默认值                                   |
| --------- | ---- | ------------------------------------------------------------------ | ---------------------------------------- |
| user      | 是   | 操作员账号                                                         | -                                        |
| password  | 是   | 操作员密码                                                         | -                                        |
| bucket    | 是   | 地区                                                               | -                                        |
| host      | 否   | 指定域名，又拍云会默认提供 30 天的临时测试域名，建议配置自定义域名 | 临时域名：http://${bucket}.est.upcdn.net |
| prefixKey | 否   | 上传路径，默认上传到根路径                                         | -                                        |
| secretExt | 否   | 图床密钥拓展点                                                     | -                                        |

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

1. 目前只支持 Common Js 标准拓展点。
2. 拓展点需要暴露一个**同步/异步**的 `getSecret` 的方法**。**

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
# 语雀
YUQUE_TOKEN=
YUQUE_LOGIN=
YUQUE_REPO=

# Notion
NOTION_TOKEN=
NOTION_DATABASE_ID=

# Confluence
CONFLUENCE_BASE_URL=
CONFLUENCE_USER=
CONFLUENCE_PASSWORD=
CONFLUENCE_SPACE_KEY=
CONFLUENCE_ROOT_PAGE_ID=

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
UPYUN_HOST=xxx.xx.upaiyun.com

# Github
GITHUB_USER=
GITHUB_TOKEN=
GITHUB_REPO=
```

> ⚠️ 注意：请将`.elog.env`文件加入 `.gitignore`，防止误提交到 git 仓库

## 线上部署

线上部署时，只需要提前将以上用到的信息配置到环境变量上即可。 以 Github 为例，可以在仓库的`设置-Secrets and variables-Actions-Secrets`中进行配置。
