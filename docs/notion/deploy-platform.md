---
status: 已发布
sort: 110
urlname: deploy-platform
上次编辑时间: "2023-10-13T13:41:00.000Z"
catalog: 配置详情
tags: Elog-Docs
title: 部署平台配置
date: "2023-10-13 05:21:00"
updated: "2023-10-13 13:41:00"
---

# 部署平台配置

## 本地部署（local）

适用于所有类似 Hexo 的框架：通过向指定目录存放 markdown 文档来进行渲染的博客平台

| 字段      | 必填 | 类型    | 说明                                                     | 默认值   |
| --------- | ---- | ------- | -------------------------------------------------------- | -------- |
| outputDir | 否   | string  | 文档输出目录                                             | -        |
| filename  | 否   | string  | 生成文档的命名格式，取值 urlname ｜ title                | title    |
| format    | 否   | string  | 适配器，取值 markdown ｜ matter-markdown ｜ wiki ｜ html | markdown |
| catalog   | 否   | boolean | 是否按照目录生成文档                                     | false    |
| formatExt | 否   | string  | 自定义文档处理适配器路径                                 | -        |

### FormatExt 字段说明

自定义文档处理适配器`.js`文件路径，当需要对文档进一步处理时，可配置此选项

1. 目前只支持 Common Js 标准的处理器
2. 处理器需要暴露一个**同步**的 `format` 的方法，**不支持异步方法**
3. 返回类型为**字符串**

   ```javascript
   // 如果需要返回带有front-matter的md字符串，则需要安装并引入此库
   // const { matterMarkdownAdapter } = require('@elog/plugin-adapter')

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

## Confluence

| 字段       | 必填 | 说明                                                   | 默认值 |
| ---------- | ---- | ------------------------------------------------------ | ------ |
| baseUrl    | 是   | Confluence API 请求 Base Url                           | -      |
| spaceKey   | 是   | 空间 Key                                               | -      |
| rootPageId | 是   | 根页面 ID，Elog 会把文档统一存到此目录下               | -      |
| user       | 是   | Confluence 账号                                        | -      |
| password   | 是   | Confluence 密码                                        | -      |
| formatExt  | 否   | 自定义文档处理适配器路径，需要符合 Confluence 格式要求 | -      |

## WordPress

WordPress 模版获取、关键信息获取及配置流程请移步 [关键信息获取](/notion/gvnxobqogetukays#wordpres) 页面。

| 字段      | 必填 | 说明                                             | 默认值 |
| --------- | ---- | ------------------------------------------------ | ------ |
| username  | 是   | WordPress 用户名                                 | -      |
| password  | 是   | WordPress 密码                                   | -      |
| endpoint  | 是   | WordPress 站点，例如http://your.site.com/wp-json | -      |
| keyMap    | 否   | 属性映射                                         | -      |
| formatExt | 否   | 自定义文档处理适配器路径，需要符合 HTML 格式要求 | -      |

### keyMap 字段说明

| 属性        | 必填 | 映射字段说明               | 字段值类型         | 默认值      |
| ----------- | ---- | -------------------------- | ------------------ | ----------- |
| tags        | 否   | 标签字段映射               | string ｜ string[] | tags        |
| categories  | 否   | 分类字段映射               | string ｜ string[] | categories  |
| urlname     | 否   | 页面路径字段映射           | string             | urlname     |
| cover       | 否   | 特色图片（封面图）字段映射 | string，图片 url   | cover       |
| description |      | 简介字段映射               | string             | description |

一般不需要修改，只要保证文章属性`front-matter`中有以上字段，即可在上传到 WordPress 时正确携带，只有字段冲突或者想自定义为中文等情况下才需要进行映射。

语雀需要自行在文章头部添加`front-matter`，并填写以下值，Notion/FlowUs 可直接新增/修改为以上字段即可。

**点击【下一篇】继续配置图床平台**
