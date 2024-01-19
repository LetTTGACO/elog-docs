
# 关键信息获取

## 语雀

### login
语雀个人路径。访问[工作台](https://www.yuque.com/dashboard) => 账户设置 => 账户设置 => 个人路径，设置语雀的简易的个人路径（建议），拿到个人路径。
![image.png](https://image.1874.cool/elog-docs-images/a00f2424a5d05a2e0f99b9a0a0e29736.png)

### repo
语雀仓库短名称，也称为语雀知识库路径。访问需要作为博客文章的知识库 => 更多设置 => 知识库信息，拿到语雀知识库路径。
![image.png](https://image.1874.cool/elog-docs-images/d3a7faac015e02c0a440b939664902e9.png)
![image.png](https://image.1874.cool/elog-docs-images/0a3c3af657d460cf8ab344c971c17843.png)

### token
语雀Token，访问[工作台](https://www.yuque.com/dashboard) => 账户设置 => Token => 新建token并配置好只读权限。Access Token即为语雀Token。
![image.png](https://image.1874.cool/elog-docs-images/888b460d2ca7213b756740407bd59ce5.png)

## Notion

### 配置流程

1. 使用 [Database 模板](https://1874.notion.site/09ff9e1e141744c6af0a1f69d2a3d834?v=a09065f9266446afa745b475044daca6) 创建一个数据库
2. 创建 Integration Token，具体请参考 [Notion 官方教程](https://developers.notion.com/docs/create-a-notion-integration#step-1-create-an-integration)
3. 将复制的数据库连接到刚创建的 Integration，具体请参考 [Notion 官方教程](https://developers.notion.com/docs/create-a-notion-integration#step-2-share-a-database-with-your-integration)
4. 获取数据库 DatabaseId

### token
参考 [Notion 官方教程](https://developers.notion.com/docs/getting-started#step-1-create-an-integration) 。登录 [Niton网页版](https://www.notion.so/) => 访问 [My integrations](https://www.notion.so/my-integrations) => 创建应用 => 生成 Internal Integration Token
![image.png](https://image.1874.cool/elog-docs-images/4222b6361b7a627e6ac38f10cdf7f167.png)

### databaseId
![image.png](https://image.1874.cool/elog-docs-images/f6631e8a748b1202e723cd8f9cdf9c06.png)

## 图床

### Github

#### token
Github访问Token。访问 [GIthub Token配置](https://github.com/settings/tokens/) => Generate new token => 勾选必要的参数，生成token。
![image.png](https://image.1874.cool/elog-docs-images/81af1900e42a23183b112a0de2d7c5df.png)

### 腾讯云

#### secretId/secretKey
进入[访问管理](https://console.cloud.tencent.com/cam/overview) => [密钥管理](https://console.cloud.tencent.com/cam/capi) =>【新增密钥】=> 获取 SecretId 和 SecretKey
![image.png](https://image.1874.cool/elog-docs-images/6c35b4db2eaba31e1fd0c338624028c3.png)

#### bucket/region
访问[腾讯云COS管理](https://console.cloud.tencent.com/cos/bucket)获取

### 阿里云

#### secretId/secretKey
访问[阿里云密钥管理](https://ram.console.aliyun.com/manage/ak) => 【创建AccessKey】 => 获取 AccessKey ID 和AccessKey	Secret
![image.png](https://image.1874.cool/elog-docs-images/25c64065a3b840cad72ed574c5584d8e.png)

#### bucket
访问[阿里云Bucket管理](https://oss.console.aliyun.com/bucket) => 获取 bucket

#### region
访问[阿里云Bucket管理](https://oss.console.aliyun.com/bucket) => 查看图床Bucket所在的地域 => 对照[常用Region](https://help.aliyun.com/document_detail/140601.html) => 获取Region Id
> 根据[阿里云的开发文档](https://help.aliyun.com/document_detail/111265.htm#concept-uxl-2vb-dhb)，对象存储的region为 oss- 开头，所以需要给region id前面拼接上 oss- 才是完整的region

![image.png](https://image.1874.cool/elog-docs-images/f79e4bc0865e716219ad8f96c3ea3f7a.png)

### 七牛云

#### secretId/secretKey
访问[七牛云密钥管理](https://portal.qiniu.com/user/key) => 【创建密钥】 => 获取 AccessKey/SecretKey
![image.png](https://image.1874.cool/elog-docs-images/0347a8f7154d3a78cbf37b9389887eeb.png)

#### bucket
存储空间名称。访问[七牛云空间管理](https://portal.qiniu.com/kodo/bucket)获取

#### region
存储地域。[存储区域 - 七牛开发者中心](https://developer.qiniu.com/kodo/1671/region-endpoint-fq)

### 又拍云

#### user/password
访问[又拍云操作员管理](https://console.upyun.com/account/operators/) => 【添加操作员】 => 获取 user/password
![image.png](https://image.1874.cool/elog-docs-images/6aaa6100c85d0a02b3d18b2baa736305.png)

#### bucket/region
又拍云没有bucket和region的概念，只有服务名。bucket = 服务名，region不需要填写。访问[又拍云云存储](https://console.upyun.com/services/file/)获取服务名


