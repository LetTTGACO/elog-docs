# 快速开始

## 环境准备

Elog 项目基于 node，请确保已具备较新的 node 环境（>=12.0.0），推荐使用 node 版本管理工具 [nvm](https://github.com/creationix/nvm) 来管理 node，这样不仅可以很方便地切换 node 版本，而且全局安装时候也不用加 sudo 了。

## CLI 工具安装

首先，你需要使用 npm / yarn / pnpm 全局安装`@elog/cli`，或者直接使用 [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b):

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

![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/FmGLy-wYhbW0ZWirPz_4bQ-lts8x.png#averageHue=%2370c8c7&clientId=ucbf80922-3f89-4&from=paste&height=570&id=ue188e9f3&name=image.png&originHeight=1140&originWidth=1554&originalType=binary&ratio=2&rotation=0&showTitle=false&size=280905&status=done&style=none&taskId=uc49be259-79ed-4e85-8ca2-2d0438c5835&title=&width=777)
根据提示初始化成功后，会在根目录生成一份`elog-config.json`配置文件。你需要修改一些配置才能进行下一步，详情移步**配置详情**页面

## 开始同步

在根目录下，执行同步命令：

```bash
elog sync
```

![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/Flm8w1xQjM7_RKtrI8PO3K80hO-T.png#averageHue=%2351b082&clientId=ucbf80922-3f89-4&from=paste&height=757&id=u502be399&name=image.png&originHeight=1514&originWidth=2290&originalType=binary&ratio=2&rotation=0&showTitle=false&size=831768&status=done&style=none&taskId=u783c3b6f-25d9-42b3-a046-1454e949330&title=&width=1145)
