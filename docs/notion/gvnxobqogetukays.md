---
status: 已发布
sort: 70
urlname: gvnxobqogetukays
上次编辑时间: "2023-10-13T05:52:00.000Z"
catalog: 入门指引
tags: Elog-Docs
title: 关键信息获取
date: "2023-04-06 13:31:00"
updated: "2023-10-13 05:52:00"
---

# 关键信息获取

## 语雀

### login

语雀个人路径。访问[工作台](https://www.yuque.com/dashboard) => 账户设置 => 账户设置 => 个人路径，设置语雀的简易的个人路径（建议），拿到个人路径。

![](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/277511285f7328c7c6dfc595e1a429c2.png)

### repo

语雀仓库短名称，也称为语雀知识库路径。访问需要作为博客文章的知识库 => 更多设置 => 知识库信息，拿到语雀知识库路径。

![](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/5cedeeb7cbcc5e8ed25f7efb8b510fb6.png)

![](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/61dce475fb779c1e9aaa039e423ab2f1.png)

### token

语雀 Token，访问[工作台](https://www.yuque.com/dashboard) => 账户设置 => Token => 新建 token 并配置好只读权限。Access Token 即为语雀 Token。

![](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/fa819f24b275c1a8598242c80082bbb1.png)

## Notion

### 配置流程

1. 使用 [Database 模板](https://1874.notion.site/09ff9e1e141744c6af0a1f69d2a3d834?v=a09065f9266446afa745b475044daca6) 创建一个数据库
2. 创建 Integration Token，具体请参考 [Notion 官方教程](https://developers.notion.com/docs/create-a-notion-integration#step-1-create-an-integration)
3. 将复制的数据库连接到刚创建的 Integration，具体请参考 [Notion 官方教程](https://developers.notion.com/docs/create-a-notion-integration#step-2-share-a-database-with-your-integration)
4. 获取数据库 DatabaseId

> 如果使用的是 NotionNext，只需要备份文档，可忽略步骤 1

### token

参考 [Notion 官方教程](https://developers.notion.com/docs/getting-started#step-1-create-an-integration)。登录 [Niton 网页版](https://www.notion.so/) => 访问 [My integrations](https://www.notion.so/my-integrations) => 创建应用 => 生成 Internal Integration Token

![](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/d12198b05c6aa36a19e45e619ba714c6.png)

### databaseId

![](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/9e9ccadd310997eb84cf399618d3140e.png)

## FlowUs

### 配置流程

1. 使用 [Database 模板](https://flowus.cn/1874/share/cc2a2086-9026-4f93-a8d7-e1fe365623c9) 创建一个多维表
2. 获取多维表的 tablePageId

### tablePageId

![](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/a2bcededdafa813cd537d32d96c5ec7d.png)

## 飞书

### 配置流程

1. 申请飞书个人版
2. 进入[飞书开发者后台](https://open.feishu.cn/app)
3. 创建企业自建应用，信息随意填写
4. 进入权限管理，云文档，至少开通以下权限
   1. 查看新版文档`docx:document:readonly`
   2. 查看、评论和下载云空间中所有文件`drive:drive:readonly`
5. 添加应用能力，开通机器人能力
6. 创建应用版本，并申请线上发布方可生效（或者创建测试版本）
7. 打开凭证与基础信息，获取 `App ID(appId)` 和 `App Secret(appSecret)`（区分测试/正式版本应用）
8. 打开飞书聊天软件，选择/新建一个群聊，在群设置中添加机器人，搜索你的应用并将其添加到群聊中

   ![](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/46ffd5ca3364cbbd4a13a6b8dad67826.png)

9. 打开飞书云文档，在【我的空间】下选择/新建一个目标文件夹用于 Elog 导出
10. 在目标文件夹页面的右侧点击分享，邀请协作者，将刚才新建的群聊邀请为协作者。如此，自建应用就拥有了该文件夹的访问权限

    ![](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/ac0754cbadd3e8c9b9f70b59eeccaac8.png)

### folderToken

文件夹的 URL 路径结尾即为`folderToken`

![](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/0cc398bbfe9034f68ece280ea5fcde83.png)

## WordPress

Notion 平台可复制 Notion 模版库 [Elog-WordPress 模板](https://1874.notion.site/3bd9c2da264f48bd88457bc9b9c68098)

其他平台可参考以上数据库属性

### endpoint

一般情况下为`站点地址/wp-json`即可，例如`http://your.site.com/wp-json`，但是需要先开启自己站点的`REST API`才行。先访问以上连接，如果返回 JSON 格式的站点信息，即表示成功开启，如果出现 404，见下文。

### 常见问题：

#### 访问/wp-json 路由报错 404

1. 修改 WordPress 的固定连接模式为【文章名】

   即`http://your.site.com/some-post`这种模式进行访问

2. 需要开启 WordPress 的伪静态模式

   需要根据站点的服务器进行设置，[参考文章](https://cloud.tencent.com/developer/article/1135108)。例如我使用的是宝塔一键安装，所以直接修改 nginx 配置即可。

3. 手动安装 Basic Authentication 插件

   [插件地址](https://github.com/WP-API/Basic-Auth)，手动下载 ZIP 源码包后，无需解压，直接上传到 WordPress 插件即可

## 图床

### Github

### token

Github 访问 Token。访问 [GIthub Token 配置](https://github.com/settings/tokens/) => Generate new token => 勾选必要的参数，生成 token。

![](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/67706173197658927288780acb5563e4.png)

### 腾讯云

### secretId/secretKey

进入 [访问管理](https://console.cloud.tencent.com/cam/overview) => [密钥管理](https://console.cloud.tencent.com/cam/capi) =>【新增密钥】=> 获取 SecretId 和 SecretKey。

![](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/c8868899f9eb3eeb15b6a2086f0d25a5.png)

### bucket/region

访问[腾讯云 COS 管理](https://console.cloud.tencent.com/cos/bucket)获取

### 阿里云

### secretId/secretKey

访问 [阿里云密钥管理](https://ram.console.aliyun.com/manage/ak) => 【创建 AccessKey】 => 获取 AccessKey ID 和 AccessKey Secret。

![](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/46d99a53d4869761e94939638b44c8bf.png)

### bucket

访问[阿里云 Bucket 管理](https://oss.console.aliyun.com/bucket) => 获取 bucket

### region

访问[阿里云 Bucket 管理](https://oss.console.aliyun.com/bucket) => 查看图床 Bucket 所在的地域 => 对照[常用 Region](https://help.aliyun.com/document_detail/140601.html) => 获取 Region Id

> 根据阿里云的开发文档，对象存储的 region 为 oss- 开头，所以需要给 region id 前面拼接上 oss- 才是完整的 region

![](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/f44f27683f0e2498456d53c3260c32f3.png)

### 七牛云

### secretId/secretKey

访问 [七牛云密钥管理](https://portal.qiniu.com/user/key) => 【创建密钥】 => 获取 AccessKey/SecretKey。

![](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/327edf7abb3387bfd2ede1568bbb6a07.png)

### bucket

存储空间名称。访问[七牛云空间管理](https://portal.qiniu.com/kodo/bucket)获取

### region

存储地域。[存储区域 - 七牛开发者中心](https://developer.qiniu.com/kodo/1671/region-endpoint-fq)

一般不需要填写，如需指定，目前只支持以下取值

- Zone_z0
- Zone_z1
- Zone_z2
- Zone_na0
- Zone_as0

### 又拍云

### user/password

访问 [又拍云操作员管理](https://console.upyun.com/account/operators/) => 【添加操作员】 => 获取 `user/password`。

![](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/36f7c4f43f20f4c5b0ab35e1945ad34c.png)

### bucket/region

又拍云没有 bucket 和 region 的概念，只有服务名。bucket = 服务名，region 不需要填写。访问[又拍云云存储](https://console.upyun.com/services/file/)获取服务名。
