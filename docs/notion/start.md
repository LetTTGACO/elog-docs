---
status: 已发布
sort: 60
urlname: start
上次编辑时间: "2023-10-30T11:00:00.000Z"
catalog: 入门指引
tags: Elog-Docs
title: 快速开始
date: "2023-04-06 13:31:00"
updated: "2023-10-30 11:00:00"
---

# 快速开始

## 环境准备

Elog 项目基于 Node，请确保已具备较新的 Node 环境（>=12.0.0）

## CLI 工具安装

首先，你需要使用 npm / yarn / pnpm 全局安装`@elog/cli`

```shell
# 使用 npm 安装 CLI
npm install @elog/cli -g

# 使用 yarn 安装 CLI
yarn global add @elog/cli

# 使用 pnpm 安装 CLI
pnpm install @elog/cli -g

# 安装指定版本
npm install @elog/cli@0.9.0 -g

# 也可使用 npx 运行 elog 的所有命令：将本文档使用 elog 命令的地方换成 npx @elog/cli
# 例如
# 初始化 elog 配置文件
npx @elog/cli init
# 本地同步命令
npx @elog/cli sync -e .elog.env
# 清除本地缓存
npx @elog/cli clean
```

## 初始化

如果你的博客是 Hexo/Vitepress/HuGo 等，进入其根目录下，这里以 Hexo 举例，使用命令进行初始化：

> 如果只是想用 Elog 进行写作平台备份的话，可以在任意文件夹中初始化使用。

```shell
elog init
```

根据提示初始化成功后，会在根目录生成一份 `elog.config.js` 配置文件和本地调试用的`.elog.env`环境变量配置文件。

## 配置 Elog

你需要修改一些配置才能进行同步，详情移步左侧导航栏 [配置详情](/notion/config-catalog)

## 开始同步

配置完成后在根目录下，执行本地同步命令：

```shell
elog sync -e .elog.env
```

![](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/0851e0076e8ab0aea9a403825dc37d7c.png)
