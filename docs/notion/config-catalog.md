---
status: 已发布
sort: 90
urlname: config-catalog
上次编辑时间: "2023-10-13T13:41:00.000Z"
catalog: 配置详情
tags: Elog-Docs
title: 目录结构
date: "2023-10-13 05:12:00"
updated: "2023-10-13 13:41:00"
---

# 目录结构

## 目录结构

以 Hexo 的根目录为例：

```text
.
├── public
├── scaffolds
├── source
├── themes
├── .elog.env // Elog用于本地调试时的环境变量配置
├── .gitignore // git忽略文件，请将.elog.env文件加入，防止密码等信息误提交
├── _config.yml
├── elog.cache.json // Elog的缓存文件，用于缓存上次同步的文件
├── elog.config.js // Elog的配置文件
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

各个平台的`platform`字段和对应的平台配置字段都需要正确配置，例如使用语雀 + Hexo + 腾讯云 Cos 图床，则需要设置为

```javascript
module.exports = {
  write: {
    platform: "yuque",
    // 字段要对应上
    yuque: {
      token: process.env.YUQUE_TOKEN,
      baseUrl: "",
      login: process.env.YUQUE_LOGIN,
      repo: process.env.YUQUE_REPO,
      onlyPublic: false,
      onlyPublished: true,
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
  },
  image: {
    enable: true, // 是否启用图片替换
    platform: "cos",
    cos: {
      secretId: process.env.COS_SECRET_ID,
      secretKey: process.env.COS_SECRET_KEY,
      bucket: process.env.COS_BUCKET,
      region: process.env.COS_REGION,
      host: process.env.COS_HOST,
      prefixKey: "",
      secretExt: "", // 可选
    },
  },
};
```

**点击【下一篇】继续配置写作平台**
