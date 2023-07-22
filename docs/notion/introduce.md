---
cover: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0c26a958-4e3c-4e0e-9a1c-69a2ba8d64dd/01.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230722T175507Z&X-Amz-Expires=3600&X-Amz-Signature=83283b6323041019bee5057597032d38e1b8a1303dc8e0f6df657a5370670539&X-Amz-SignedHeaders=host&x-id=GetObject"
status: 已发布
sort: 1
urlname: introduce
上次编辑时间: "2023-07-22T17:46:00.000Z"
catalog: 关于Elog
tags: Elog-Docs
title: Elog 能干什么
date: "2023-04-06 13:31:00"
updated: "2023-07-22 17:46:00"
---

# Elog 能干什么

## 介绍

`Elog`名为 `Easy Blogging`，简单、轻松的书写&部署博客

## 前言

在遇到 Elog 之前，你的博客可能是

- 本地编辑器书写 + Hexo/Hugo/Vitepress 部署
- 语雀记录
- Notion 记录和发布
- WordPress 在线书写和发布
- Github 记录
- 掘金/知乎等在线平台记录

可以发现，大部分博客平台要么自己提供在线编辑器，要么就让用户本地书写再进行进行部署。 可惜目前好用的编辑器大都都不是博客平台自己提供的，而是一些第三方编辑器，例如

- Notion：出色的数据库设计，灵活度非常高
- 语雀：阿里出品，笔者觉得很不错的一款在线编辑器，涵盖日常个人、工作所需要的各种场景，够用
- Typora：一款出色的本地编辑器，支持实时预览和流程书写，可惜新版本收费了

> 语雀最近限制了【互联网公开】的权限，需要会员才能使用，所以对于一些想直接把语雀当成博客站点的用户变得不太友好。好在 API 目前还不受限制，可以稳定使用。

而博客平台一般分为两类，一种是轻量化的，只负责渲染文档不提供编辑器，代表产品：

- Hexo
- Vitepress
- HuGo

一种是内容管理系统软件，相对上面这些比较重，初期涉及到数据库和手动部署，拥有自己的编辑器，代表产品

- WordPress
- GHost

## Elog

如果我既想用最熟悉、最舒适的编辑器，又想用主流的博客平台，怎么办呢？ Elog 就是为了解决这个问题而诞生的。 Elog 将这些平台揉合在一起，你可以随意组合写作平台和博客平台，目前支持

**写作平台：**

- [x] Notion
- [x] 语雀

**博客平台：**

- [x] Hexo
- [x] Vitepress
- [x] HuGo
- [x] Docusaurus
- [x] Docz
- [x] Confluence

> 博客平台目前支持所有类似 Hexo 的框架：通过向指定目录存放 markdown 文档来进行渲染的方式

## 图床功能

和很多在线平台一样，Notion 和语雀也同样存在图片防盗链的问题，直接将写作平台的图片链接放到其他站点的话，会加载不出来。 为了解决这个问题，Elog 支持了在生成 MD 文件之前，将扫描到的图片上传到图床上，并对文档中的图片链接进行替换。 当前支持的图床有

- [x] 腾讯云 COS
- [x] 阿里云 OSS
- [x] Github 图床
- [x] 七牛云
- [x] 又拍云
