---
status: 已发布
sort: 5
urlname: start
catalog: 入门指引
title: 快速开始
date: "2023-04-06 21:31:00"
updated: "2023-04-23 23:58:00"
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
```

## 初始化

你需要拥有一个 Hexo/Vitepress/HuGo 的项目，进入部署平台根目录下，这里以 Hexo 举例，使用命令进行初始化：

```shell
elog init
```

根据提示初始化成功后，会在根目录生成一份 `elog.config.js` 配置文件和本本地调试用的`.elog.env`环境变量配置文件。你需要修改一些配置才能进行下一步，详情移步 [配置详情](/notion/fe8ywmt999gon12w) 页面

## 开始同步

在根目录下，执行同步命令：

```shell
elog sync
```

![](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/Fjaaxpnqigk1Wwdt9p2nc1FJdZcy.png)
