---
sort: 70
urlname: gvnxobqogetukays
catalog: 入门指引
tags: Elog-Docs
title: 关键信息获取
date: '2023-04-06 21:31:00'
updated: '2025-03-05 22:14:00'
---

# 关键信息获取


## 语雀


### login


语雀个人路径。访问[工作台](https://www.yuque.com/dashboard) => 账户设置 => 账户设置 => 个人路径，设置语雀的简易的个人路径（建议），拿到个人路径。例如 `1874w` 才是 `login` 取值

> 使用语雀团队知识库时，`login` 为团队路径，不是个人路径  
> 假设这是你的语雀团队的某个知识库地址：`https://aaaa.yuque.com/bbbb/cccc`  
> `host = https://aaaa.yuque.com`（账号密码模式）  
> `baseUrl=https://aaaa.yuque.com/api/v2`（Token 模式）  
> `login=bbbb`  
> `repo=cccc`

![name=image.png](https://image.1874.cool/elog-docs-images/277511285f7328c7c6dfc595e1a429c2.png)


### repo


语雀仓库短名称，也称为语雀知识库路径。访问需要作为博客文章的知识库 => 更多设置 => 知识库信息，拿到语雀知识库路径。


![name=image.png](https://image.1874.cool/elog-docs-images/5cedeeb7cbcc5e8ed25f7efb8b510fb6.png)


![name=image.png](https://image.1874.cool/elog-docs-images/61dce475fb779c1e9aaa039e423ab2f1.png)


### token


语雀 Token，访问[工作台](https://www.yuque.com/dashboard) => 账户设置 => Token => 新建 token 并配置好只读权限。Access Token 即为语雀 Token。


![name=image.png](https://image.1874.cool/elog-docs-images/fa819f24b275c1a8598242c80082bbb1.png)


## Notion


### 配置流程

1. 使用 [Database 模板](https://1874.notion.site/09ff9e1e141744c6af0a1f69d2a3d834?v=a09065f9266446afa745b475044daca6) 创建数据库副本或增加必要属性到已有 Notion 数据库
	1. 博客平台为Hexo时，可参考[elog-hexo-template](https://1874.notion.site/867486af567f4a8897427b15ffd10b3c?v=a25aec8e27d5415e8605e43034f822bd&pvs=4) 创建数据库副本或增加必要属性到已有 Notion 数据库
	2. 博客平台为 VitePress 时，可参考[elog-vitepress-template](https://1874.notion.site/260f012f7223416b82088d3e061dae9f?v=2385a58a18cd45d6b2e8abb3aa3d82a2&pvs=4) 创建数据库副本或增加必要属性到已有 Notion 数据库
	3. 博客平台为 Halo 时，可参考[notion-halo](https://1874.notion.site/b061632fc7d644eaa12f3e0f095938fb?v=7491fbb2415c43cf9752a7e4ad9f41a5) 创建数据库副本或增加必要属性到已有 Notion 数据库
	4. 如果使用的是 NotionNext ，可根据配置文档保证必要的数据库字段即可
2. 创建 Integration Token，具体请参考 [Notion 官方教程](https://developers.notion.com/docs/create-a-notion-integration#create-your-integration-in-notion)
3. 将复制的数据库连接到刚创建的 Integration，具体请参考 [Notion 官方教程](https://developers.notion.com/docs/create-a-notion-integration#give-your-integration-page-permissions)
4. 获取数据库 DatabaseId

### token


参考 [Notion 官方教程](https://developers.notion.com/docs/getting-started#step-1-create-an-integration)。登录 [Niton 网页版](https://www.notion.so/) => 访问 [My integrations](https://www.notion.so/my-integrations) => 创建应用 => 生成 Internal Integration Token


![name=image.png](https://image.1874.cool/elog-docs-images/d12198b05c6aa36a19e45e619ba714c6.png)


### databaseId


![name=image.png](https://image.1874.cool/elog-docs-images/9e9ccadd310997eb84cf399618d3140e.png)


## FlowUs


### 配置流程

1. 使用 [Database 模板](https://flowus.cn/1874/share/cc2a2086-9026-4f93-a8d7-e1fe365623c9) 创建一个多维表
2. 获取多维表的 tablePageId

### tablePageId


![Untitled.png](https://image.1874.cool/elog-docs-images/ebb6c1646a35ff433ca7a5978d583481.png)


## wolai


### 配置流程

1. 创建一个表格页面。目前暂无示例，根据自身需求创建即可，表格属性可参考上面的 notion/flowus 表格创建
2. 获取账号 token
3. 获取表格 页面的 pageId

### token


此 token 并非官方开发者文档中的 token，而是网页端请求头中 cookie 中所含的 token。而 elog 就是利用此 token 模拟 wolai 网页端的请求，从而获取到 md 文档。

1. 打开 wolai 网页端
2. F12 打开开发者模式
3. 随便选择一个接口，点击标头
4. 从请求标头中的 Cookie 中拿到当前账号的 token

![Untitled.png](https://image.1874.cool/elog-docs-images/1d4a0bfde7c654de2f68275cb79e429a.png)


### pageId


当前表格的 URL 中的页面 ID


![Untitled.png](https://image.1874.cool/elog-docs-images/d89fe38a8ec8fc2e2d349a5d74cd999b.png)


## 飞书


### 配置流程

1. 申请飞书个人版
2. 进入[飞书开发者后台](https://open.feishu.cn/app)
3. 创建企业自建应用，信息随意填写
4. 进入权限管理，云文档，至少开通以下权限
	1. 查看新版文档`docx:document:readonly`
	2. 查看、评论和下载云空间中所有文件`drive:drive:readonly`
	3. 查看、编辑和管理知识库`wiki:wiki`
5. 添加应用能力，开通机器人能力
6. 创建应用版本，并申请线上发布方可生效（或者创建测试版本）
7. 打开凭证与基础信息，获取 `App ID(appId)` 和 `App Secret(appSecret)`（区分测试/正式版本应用）
8. 打开飞书聊天软件，选择/新建一个群聊，在群设置中添加机器人，搜索你的应用并将其添加到群聊中

	![Untitled.png](https://image.1874.cool/elog-docs-images/46ffd5ca3364cbbd4a13a6b8dad67826.png)

9. 【可选一】打开飞书云文档，在【我的空间】下选择/新建一个目标文件夹用于Elog导出
10. 在目标文件夹页面的右侧点击分享，邀请协作者，将刚才新建的群聊邀请为协作者。如此，自建应用就拥有了该文件夹的访问权限

	![Untitled.png](https://image.1874.cool/elog-docs-images/ac0754cbadd3e8c9b9f70b59eeccaac8.png)

11. 【可选二】打开飞书云文档，在【知识库】下选择/新建一个知识库用于Elog导出
12. 在知识库空间设置-成员设置中将刚才新建的群聊添加为成员/管理员。如此，自建应用就拥有了该知识库的访问权限

### folderToken


我的空间文件夹的URL路径结尾即为`folderToken`，在知识库中也是类似，文档URL路径结尾


![Untitled.png](https://image.1874.cool/elog-docs-images/0cc398bbfe9034f68ece280ea5fcde83.png)


### wikiId


知识库 ID，进入知识库空间设置时URL 路径结尾即为 `wikiId`


![Untitled.png](https://image.1874.cool/elog-docs-images/32db6b04a9bb2d9680d5fb1ef6ea9a18.png)


## Halo


FlowUs平台可复制FlowUs模版库 [elog-halo 模板](https://flowus.cn/1874/share/e4e1e6dc-403b-45e6-b4cd-b3d8e6ae79b1) ，其他写作平台请参考此模版库进行配置。语雀/飞书可手动在文档头部指定 Front Matter 进行文档字段配置


### endpoint


Halo 站点地址，例如 `http://halo.1874.orb.local`，区分 `http/https`


### token


Halo 个人令牌，可前往个人中心中创建，需要以下权限

- 附件管理
- 文章管理

### policyName


Halo 的存储策略，可前往附件管理中，F12 打开浏览器开发者控制台，刷新后查看`/apis/storage.halo.run/v1alpha1/policies`接口，找到返回的`metadata.name`字段值，默认请设置`default-policy`


![Untitled.png](https://image.1874.cool/elog-docs-images/557709eaba58629f4fc6f23924b996c4.png)


## WordPress


Notion平台可复制Notion模版库 [Elog-WordPress 模板](https://1874.notion.site/3bd9c2da264f48bd88457bc9b9c68098) 


其他平台可参考以上数据库属性


### endpoint


一般情况下为`站点地址/wp-json`即可，例如`http://your.site.com/wp-json`，但是需要先开启自己站点的`REST API`才行。先访问以上连接，如果返回JSON格式的站点信息，即表示成功开启，如果出现404，见下文。


### 常见问题：


#### 访问/wp-json路由报错404

1. 修改WordPress的固定连接模式为【文章名】

	即`http://your.site.com/some-post`这种模式进行访问

2. 需要开启WordPress的伪静态模式

	需要根据站点的服务器进行设置，[参考文章](https://cloud.tencent.com/developer/article/1135108)。例如我使用的是宝塔一键安装，所以直接修改nginx配置即可。

3. 手动安装Basic Authentication插件

	[插件地址](https://github.com/WP-API/Basic-Auth)，手动下载ZIP源码包后，无需解压，直接上传到WordPress插件即可


## Outline


### token


在偏好设置中新增 API 密钥即可，创建时作用域字段留空即可


![image.png](https://image.1874.cool/elog-docs-images/d3d75edd13e31382ba8468542e9151cd.png)


### collectionId


打开 outline API 文档，可以在线调试获取文档集 ID

> ⚠️ 注意，文档集 ID 为 uuid，不是浏览器 URL 中的后缀 ID

![image.png](https://image.1874.cool/elog-docs-images/6a103dcf6761324db4dce9797974f7a8.png)


### userId


![image.png](https://image.1874.cool/elog-docs-images/7a569a39a30535b08256ae1316e73c8a.png)


### parentDocumentId

> ⚠️ 注意，文档 ID 为 uuid，不是浏览器 URL 中的后缀 `urlId`
1. 在浏览器打开目标文档，浏览器 URL 最后即为当前文档的 `urlId`。可以根据此方法找到你需要的父文档的 `urlId`

```javascript
https://your-name.getoutline.com/doc/56s123455pah56ug-Bz12345S9Y

56s123455pah56ug-Bz12345S9Y  即为文档 urlId
```

1. 然后在 API 调试中找到父文档的真正的文档 ID

![image.png](https://image.1874.cool/elog-docs-images/7f9b43c3506afb96962a174a2c8184ec.png)


## 图床


### Github


### token


Github 访问 Token。访问 [GIthub Token 配置](https://github.com/settings/tokens/) => Generate new token => 勾选必要的参数，生成 token。


![name=image.png](https://image.1874.cool/elog-docs-images/67706173197658927288780acb5563e4.png)


### 腾讯云


### secretId/secretKey


进入 [访问管理](https://console.cloud.tencent.com/cam/overview) => [密钥管理](https://console.cloud.tencent.com/cam/capi) =>【新增密钥】=> 获取 SecretId 和 SecretKey。


![name=image.png](https://image.1874.cool/elog-docs-images/c8868899f9eb3eeb15b6a2086f0d25a5.png)


### bucket/region


访问[腾讯云 COS 管理](https://console.cloud.tencent.com/cos/bucket)获取


### 阿里云


### secretId/secretKey


访问 [阿里云密钥管理](https://ram.console.aliyun.com/manage/ak) => 【创建 AccessKey】 => 获取 AccessKey ID 和 AccessKey Secret。


![name=image.png](https://image.1874.cool/elog-docs-images/46d99a53d4869761e94939638b44c8bf.png)


### bucket


访问[阿里云 Bucket 管理](https://oss.console.aliyun.com/bucket) => 获取 bucket


### region


访问[阿里云 Bucket 管理](https://oss.console.aliyun.com/bucket) => 查看图床 Bucket 所在的地域 => 对照[常用 Region](https://help.aliyun.com/document_detail/140601.html) => 获取 Region Id

> 根据阿里云的开发文档，对象存储的 region 为 oss- 开头，所以需要给 region id 前面拼接上 oss- 才是完整的 region

![name=image.png](https://image.1874.cool/elog-docs-images/f44f27683f0e2498456d53c3260c32f3.png)


### 七牛云


### secretId/secretKey


访问 [七牛云密钥管理](https://portal.qiniu.com/user/key) => 【创建密钥】 => 获取 AccessKey/SecretKey。


![name=image.png](https://image.1874.cool/elog-docs-images/327edf7abb3387bfd2ede1568bbb6a07.png)


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


![name=image.png](https://image.1874.cool/elog-docs-images/36f7c4f43f20f4c5b0ab35e1945ad34c.png)


### bucket/region


又拍云没有 bucket 和 region 的概念，只有服务名。bucket = 服务名，region 不需要填写。访问[又拍云云存储](https://console.upyun.com/services/file/)获取服务名。

