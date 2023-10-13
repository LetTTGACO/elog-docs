---
status: 已发布
sort: 130
urlname: local-test
上次编辑时间: "2023-10-13T06:47:00.000Z"
catalog: 配置详情
tags: Elog-Docs
title: 本地调试
date: "2023-10-13 05:27:00"
updated: "2023-10-13 06:47:00"
---

# 本地调试

## 环境变量配置

Elog 配置文件默认为`elog.config.js`，可在配置文件中通过`process.env.xxx`根据需要自定义环境变量，一般不需要改动，只有当环境变量冲突时才需要变更。

> ⚠️ 为了安全，在实际配置中请不要将敏感信息直接写在配置文件中，Elog 提供了更优雅的本地调试方式。

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

## 本地调试

为了方便本地调试，Elog 支持从本地文件中获取环境变量。只需要在`.elog.env`文件中将用到的配置写入，然后在执行同步命令时指定环境变量文件即可。

> ⚠️ 注意：请将`.elog.env`文件加入 `.gitignore`，防止误提交到 git 仓库

```shell
elog sync -e .elog.env
```

```yaml
# .elog.env

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

# 飞书
FEISHU_APP_ID=
FEISHU_APP_SECRET=
FEISHU_FOLDER_TOKEN=

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

## 自动化配置

自动化时，需要提前将以上`.elog.env`中用到的变量信息配置到环境变量上。 以 Github 为例，可以在仓库的`设置-Secrets and variables-Actions-Secrets`中进行配置，然后在流水线中注入即可。

> 记得在仓库的`设置-Action-Workflow permissions`中开启读写权限

详细的自动化配置请移步 [持续集成](/notion/vy55q9xwlqlsfrvk) 页面。
