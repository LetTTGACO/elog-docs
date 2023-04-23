---
status: 已发布
sort: 7
urlname: gvnxobqogetukays
catalog: 入门指引
title: 关键信息获取
date: "2023-04-06 21:31:00"
updated: "2023-04-24 00:10:00"
---

# 关键信息获取

## 语雀

### login

语雀个人路径。访问[工作台](https://www.yuque.com/dashboard) => 账户设置 => 账户设置 => 个人路径，设置语雀的简易的个人路径（建议），拿到个人路径。

![](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/FhMY9t92b1JTC5O6FwiAa06b8JJ4.png)

### repo

语雀仓库短名称，也称为语雀知识库路径。访问需要作为博客文章的知识库 => 更多设置 => 知识库信息，拿到语雀知识库路径。

![](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/FvluGqHQCYKfVpxy8knMs5ceEHBX.png)

![](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/FjBYSP_Et4_TgKXEb5H9cEg2a6Q8.png)

### token

语雀 Token，访问[工作台](https://www.yuque.com/dashboard) => 账户设置 => Token => 新建 token 并配置好只读权限。Access Token 即为语雀 Token。

![](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/FpsTzZbTlRETvTBg2Lti-we0uPav.png)

## Notion

### 模版

使用 [Database 模板](https://1874.notion.site/09ff9e1e141744c6af0a1f69d2a3d834?v=a09065f9266446afa745b475044daca6) 创建一个数据库

1. 获取 Token
2. 将之前创建好的页面连接到刚刚创建的应用，[Notion 官方教程](https://developers.notion.com/docs/getting-started#step-1-create-an-integration)

### token

参考 [Notion 官方教程](https://developers.notion.com/docs/getting-started#step-1-create-an-integration)。登录 [Niton 网页版](https://www.notion.so/) => 访问 [My integrations](https://www.notion.so/my-integrations) => 创建应用 => 生成 Internal Integration Token

![](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/FnSP2i4-uBE3r7N_SNLy_GQEpQim.png)

### databaseId

![](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/Fvy6P1yIcoXOaX2BNItTVSaip1g0.png)

## 图床

### Github

### token

Github 访问 Token。访问 [GIthub Token 配置](https://github.com/settings/tokens/) => Generate new token => 勾选必要的参数，生成 token。

![](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/FpUtRBRjJ-UO24Hdfjn8Vk-6Sx2F.png)

### 腾讯云

### secretId/secretKey

进入 [访问管理](https://console.cloud.tencent.com/cam/overview) => [密钥管理](https://console.cloud.tencent.com/cam/capi) =>【新增密钥】=> 获取 SecretId 和 SecretKey。

![](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/FjqwrLEV_PQmOJ9xK4wWuzATSrDs.png)

### bucket/region

访问[腾讯云 COS 管理](https://console.cloud.tencent.com/cos/bucket)获取

### 阿里云

### secretId/secretKey

访问 [阿里云密钥管理](https://ram.console.aliyun.com/manage/ak) => 【创建 AccessKey】 => 获取 AccessKey ID 和 AccessKey Secret。

![](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/FqWXD2-3ncS8UdShQl6VFjU-24Cx.png)

### bucket

访问[阿里云 Bucket 管理](https://oss.console.aliyun.com/bucket) => 获取 bucket

### region

访问[阿里云 Bucket 管理](https://oss.console.aliyun.com/bucket) => 查看图床 Bucket 所在的地域 => 对照[常用 Region](https://help.aliyun.com/document_detail/140601.html) => 获取 Region Id

> 根据阿里云的开发文档，对象存储的 region 为 oss- 开头，所以需要给 region id 前面拼接上 oss- 才是完整的 region

![](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/FuhcnG3agCL7EGTzYTIfNVkWQ_AG.png)

### 七牛云

### secretId/secretKey

访问 [七牛云密钥管理](https://portal.qiniu.com/user/key) => 【创建密钥】 => 获取 AccessKey/SecretKey。

![](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/FsSapULtlysBQrTkRV5OyI5Q7OH3.png)

### bucket

存储空间名称。访问[七牛云空间管理](https://portal.qiniu.com/kodo/bucket)获取

### region

存储地域。[存储区域 - 七牛开发者中心](https://developer.qiniu.com/kodo/1671/region-endpoint-fq)

### 又拍云

### user/password

访问 [又拍云操作员管理](https://console.upyun.com/account/operators/) => 【添加操作员】 => 获取 `user/password`。

![](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/Fp7_BHrGD1CXi4sqmOycM8LAde6V.png)

### bucket/region

又拍云没有 bucket 和 region 的概念，只有服务名。bucket = 服务名，region 不需要填写。访问[又拍云云存储](https://console.upyun.com/services/file/)获取服务名。
