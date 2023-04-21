# 快速开始

## 环境准备

Elog 项目基于 node，请确保已具备较新的 node 环境（>=12.0.0），推荐使用 node 版本管理工具 [nvm](https://github.com/creationix/nvm) 来管理 node，这样不仅可以很方便地切换 node 版本，而且全局安装时候也不用加 sudo 了。

## CLI 工具安装

首先，你需要使用 npm / yarn / pnpm 全局安装`@elog/cli`

```bash
# 使用 npm 安装 CLI
npm install @elog/cli -g

# 使用 yarn 安装 CLI
yarn global add @elog/cli

# 使用 pnpm 安装 CLI
pnpm install @elog/cli -g
```

## 初始化

你需要拥有一个 Hexo/Vitepress/HuGo 的项目，进入部署平台根目录下，这里以 Hexo 举例，使用命令进行初始化：

```bash
elog init
```

根据提示初始化成功后，会在根目录生成一份`elog.config.js` 配置文件。你需要修改一些配置才能进行下一步，详情移步 [配置详情](/yuque/fe8ywmt999gon12w) 页面

## 开始同步

在根目录下，执行同步命令：

```bash
elog sync
```

![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/Flm8w1xQjM7_RKtrI8PO3K80hO-T.png)