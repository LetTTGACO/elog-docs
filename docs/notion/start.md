# 快速开始

## 环境准备

Elog 项目基于 node，请确保已具备较新的 node 环境（>=12.0.0），推荐使用 node 版本管理工具 [nvm](https://github.com/creationix/nvm) 来管理 node，这样不仅可以很方便地切换 node 版本，而且全局安装时候也不用加 sudo 了。

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

根据提示初始化成功后，会在根目录生成一份 `elog.config.js` 配置文件。你需要修改一些配置才能进行下一步，详情移步 [**配置详情**](https://elog.1874.cool/notion/fe8ywmt999gon12w) 页面

## 开始同步

在根目录下，执行同步命令：

```shell
elog sync
```

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/aac179a3-e1f3-4d35-9c81-8dd4b2c38700/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230421T192055Z&X-Amz-Expires=3600&X-Amz-Signature=eabb09f8176607b734c816a5f16f6ed2d83935c31b0fa8061f805d98db7bf87a&X-Amz-SignedHeaders=host&x-id=GetObject)
