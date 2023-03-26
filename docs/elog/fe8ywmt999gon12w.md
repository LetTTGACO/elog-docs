# 配置详情

## 目录结构

以 Hexo 的根目录为例：

```json
.
├── public
├── scaffolds
├── source
├── themes
├── .env								// Elog用于本地调试时的环境变量配置
├── .gitignore					// git忽略文件，请将.env文件加入，防止密码等信息误提交
├── _config.yml
├── elog-cache.json			// Elog的缓存文件，用于缓存上次同步的文件
├── elog-config.json		// Elog的配置文件
└── package.json
```

以下配置都是基于`elog-config.json`来说明

## 完整示例

### yuque-default

适用于写作平台为语雀，部署平台为 Hexo/Vitepress/HuGo 等

```json
{
  "writing": {
    "platform": "yuque",
    "login": "1874w",
    "repo": "yuque-hexo-demo",
    "token": "xxx",
    "onlyPublic": true,
    "onlyPublished": true
  },
  "deploy": {
    "platform": "default",
    "classify": "classify",
    "postPath": "source/_posts",
    "mdNameFormat": "title",
    "adapter": "matter-markdown"
  },
  "image": {
    "enable": true,
    "bed": "github",
    "user": "LetTTGACO",
    "token": "xxx",
    "repo": "image",
    "host": "js-driver",
    "prefixKey": "iblog-test"
  }
}
```

### notion-default

适用于写作平台为 Notion，部署平台为 Hexo/Vitepress/HuGo 等

```json
{
  "writing": {
    "platform": "notion",
    "token": "xxx",
    "database_id": "xxxxxxxxxxxx",
    "status": {
      "name": "status",
      "published": "已发布",
      "released": "待发布"
    }
  },
  "deploy": {
    "platform": "default",
    "classify": "classify",
    "postPath": "source/_posts",
    "mdNameFormat": "title",
    "adapter": "matter-markdown"
  },
  "image": {
    "enable": true,
    "bed": "cos",
    "secretId": "xxx",
    "secretKey": "xxx",
    "bucket": "LetTTGACO",
    "region": "image",
    "prefixKey": "eblog-test"
  }
}
```

### yuque-confluence

```json
{
  "writing": {
    "platform": "yuque",
    "login": "xxx",
    "repo": "xxx",
    "onlyPublic": false,
    "onlyPublished": false
  },
  "deploy": {
    "platform": "confluence",
    "adapter": "wiki",
    "confluence": {
      "baseUrl": "xxx",
      "spaceKey": "xxx",
      "rootPageId": "xxx"
    }
  },
  "image": {
    "enable": true,
    "bed": "oss",
    "bucket": "xxx",
    "region": "xxx",
    "prefixKey": "eblog-test"
  }
}
```

## 字段说明

| 字段    | 说明             |
| ------- | ---------------- |
| writing | 写作平台详细配置 |
| deploy  | 部署平台详细配置 |
| image   | 图床配置         |

### writing

写作平台配置，**不同的写作平台的配置字段可能不一致**

#### 语雀

| 字段          | 必填 | 说明                                 | 默认值                         |
| ------------- | ---- | ------------------------------------ | ------------------------------ |
| platform      | 是   | 写作平台，目前支持 yuque/notion      | -                              |
| baseUrl       | 否   | 语雀 API 请求的 Base Url             | <https://www.yuque.com/api/v2> |
| login         | 是   | 个人路径/空间 ID                     | -                              |
| repo          | 是   | 语雀仓库短名称，也称为语雀知识库路径 | -                              |
| **token**     | 是   | 语雀 Token                           | -                              |
| onlyPublic    | 否   | 只获取公开文章                       | false                          |
| onlyPublished | 否   | 只获取已发布文章                     | false                          |

> `baseUrl` 为语雀 API 请求路径，当同步个人知识库时，不用配置。当使用空间时，`baseUrl: https://空间id.yuque.com/api/v2`，`login: 空间id`，`repo: 空间中的语雀知识库路径`

#### Notion

| 字段             | 必填 | 说明                                         | 默认值 |
| ---------------- | ---- | -------------------------------------------- | ------ |
| platform         | 是   | 写作平台，目前支持 yuque/notion              | -      |
| **token**        | 是   | Notion Token                                 |        |
| databaseId       | 是   | notion 中的数据库 id                         | -      |
| status           | 否   | 状态字段                                     | -      |
| status.name      | 否   | notion database 状态字段的字段名，支持自定义 | status |
| status.published | 否   | notion database 文章已发布状态的字段值       | 已发布 |
| status.released  | 否   | notion database 文章待发布状态的字段值       | 待发布 |

### deploy

部署平台配置

| 字段         | 必填 | 说明                                           | 默认值   |
| ------------ | ---- | ---------------------------------------------- | -------- |
| platform     | 是   | 部署平台，取值 default/confluence              | default  |
| postPath     | 否   | 文章输出目录                                   | -        |
| mdNameFormat | 否   | 生成的文章的命名格式，支持 urlname/title       | title    |
| adapter      | 是   | 适配器，目前支持 matter-markdown/markdown/wiki | markdown |
| classify     | 否   | 分类字段名，按目录存储文档时需要               | classify |
| confluence   | 否   | confluence 相关配置                            | -        |

#### confluence

| 字段       | 必填 | 说明                                    | 默认值 |
| ---------- | ---- | --------------------------------------- | ------ |
| baseUrl    | 是   | API 请求链接                            |
|  |
| spaceKey   | 是   | 空间 Key                                |
|  |
| rootPageId | 是   | rootPage，Elog 将把文章统一存到此目录下 |        |
| user       | 是   | 账号                                    |        |
| password   | 是   | 密码                                    |        |

> 部署平台 default：即所有类似 Hexo 的框架，通过向指定目录存放 md 文档来进行渲染的方式的博客平台。

### image

图床设置，**不同的图床配置字段可能不一致**

#### 通用字段

| 字段      | 必填 | 说明                                  | 默认值 |
| --------- | ---- | ------------------------------------- | ------ |
| enable    | 是   | 是否启用图床                          | false  |
| bed       | 是   | 图床，取值 cos/oss/github/qiniu/upyun | github |
| prefixKey | 否   | 上传路径                              |        |
| host      | 否   | 指定域名                              |        |

#### 本地存储（local）

| 字段      | 必填 | 说明             | 默认值 |
| --------- | ---- | ---------------- | ------ |
| output    | 是   | 图片输出目录     | -      |
| prefixKey | 否   | 图片资源统一前缀 | /      |

> vitepress/hexo 等一般会有资源根目录，会将某个文件夹视为根目录，而 prefixKey 就是配置资源目录的前缀
> 例如 vitpress 可以将图片放在 docs 下的 images 中，则 output: './docs/images', prefixKey: '/images'

#### 腾讯云（cos）/阿里云（oss）/七牛云（qiniu）

| 字段          | 必填 | 说明         | 默认值 |
| ------------- | ---- | ------------ | ------ |
| **secretId**  | 是   | 图床密钥 ID  | -      |
| **secretKey** | 是   | 图床密钥 KEY | -      |
| bucket        | 是   | 桶名称       | -      |
| region        | 是   | 地区         | -      |

#### 又拍云（upyun）

| 字段         | 必填 | 说明       | 默认值 |
| ------------ | ---- | ---------- | ------ |
| **user**     | 是   | 操作员账号 | -      |
| **password** | 是   | 操作员密码 | -      |
| bucket       | 是   | 地区       | -      |

#### Github 图床（github）

| 字段      | 必填 | 说明                                                             | 默认值 |
| --------- | ---- | ---------------------------------------------------------------- | ------ |
| **token** | 是   | Github Token                                                     | -      |
| user      | 是   | Github 用户名                                                    | -      |
| repo      | 是   | Github 图床仓库名                                                | -      |
| host      | 否   | 当图床设置为 Github 时，host 表示加速域名，取值 cdn.jsdelivr.net | -      |

#### 环境变量配置

对于以上配置中**标红**的敏感信息字段，Elog 会优先从配置文件（elog-config.json）中获取，如果获取不到，则会从环境变量中获取。
⚠️ 为了安全，在实际配置中请不要将以上信息写在配置文件中，Elog 提供了更优雅的配置方式。

## 本地调试

为了方便本地调试，Elog 支持从本地文件中获取配置。只需要在部署平台根目录新增`.env`文件，将用到的配置写入，然后在执行同步命令时指定环境变量文件即可。

```bash
elog sync -e .env
```

> ⚠️ **注意：请将.env 文件加入.gitignore，防止误提交到 git 仓库**

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

## 线上部署

线上部署时，只需要提前将以上用到的信息配置到环境变量上即可。
以 Github 为例，可以在仓库的设置-Secrets and variables-Actions-Secrets 中进行配置。
