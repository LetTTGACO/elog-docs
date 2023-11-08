---
status: 已发布
sort: 120
urlname: image-platform
上次编辑时间: '2023-11-08T02:48:00.000Z'
catalog: 配置详情
tags: Elog-Docs
title: 图床平台配置
date: '2023-10-13 05:24:00'
updated: '2023-11-08 02:48:00'
---

# 图床平台配置


图床关键信息获取及配置流程请移步 [关键信息获取](/notion/gvnxobqogetukays#图床) 页面。


## 参数说明


| 字段       | 必填 | 类型           | 说明                                     | 默认值   |
| -------- | -- | ------------ | -------------------------------------- | ----- |
| enable   | 否  | boolean      | 是否启用图床                                 | false |
| platform | 否  | string       | 图床平台`local/cos/oss/github/qiniu/upyun` | local |
| plugin   | 否  | string｜class | 自定义图床插件配置                              | -     |


### plugin 字段说明


> `0.11.0-beta.0`及以上版本可用


plugin 参数为配置自定义图床插件时可选配置，可自行实现相关代码逻辑，将文档中的图片上传到任意图床。但是需要遵循以下插件开发规范：

1. 目前只支持 Common Js 标准，且不支持 TypeScript
2. 插件暴露出的实例需为**支持 new 关键字调用的 class 对象或函数**
3. 该实例需要实现两个方法`hasImage`和`uploadImg`，用于检测图床是否存在该图片和上传图片
4. Elog 在实例化该插件时，会传入 `elog.config.js`中的 `image` 图床配置，可根据需要取值
5. 使用`module.exports`导出

```typescript
// 上传图片到 COS 图床
const COS = require('cos-nodejs-sdk-v5')

/**
 * 腾讯云COS
 */
class CosClient {
  config
  imgClient
  constructor(config) {
    // 可从 elog.config.js中的 image 中取到参数
    // 也可自行构造相关参数
    this.config = config.cos
    // 初始化COS实例
    this.imgClient = new COS(this.config)
  }

  /**
   * 检查图床是否已经存在图片，存在则返回url,不存在返回undefined
   * @param fileName 图片文件名，包含拓展名
   */
  async hasImage(fileName) {
    try {
      await this.imgClient.headObject({
        Bucket: this.config.bucket, // 存储桶名字（必须）
        Region: this.config.region, // 存储桶所在地域，必须字段
        Key: `${this.config.prefixKey}${fileName}`, //  文件名  必须
      })
      if (this.config.host) {
        return `https://${this.config.host}/${this.config.prefixKey}${fileName}`
      }
      return `https://${this.config.bucket}.cos.${this.config.region}.myqcloud.com/${this.config.prefixKey}${fileName}`
    } catch (e) {
      // 图片不存在，可以不用处理，默认返回undefined即可
    }
  }

  /**
   * 上传图片到图床
   * @param imgBuffer 图片的 Buffer 流
   * @param fileName 图片文件名，包含拓展名
   */
  async uploadImg(imgBuffer, fileName) {
    if (!this.imgClient) {
      await this.initCos()
    }
    try {
      const res = await this.imgClient.putObject({
        Bucket: this.config.bucket, // 存储桶名字（必须）
        Region: this.config.region, // 存储桶所在地域，必须字段
        Key: `${this.config.prefixKey}/${fileName}`, //  文件名  必须
        StorageClass: 'STANDARD', // 上传模式（标准模式）
        Body: imgBuffer, // 上传文件对象
      })
      if (this.config.host) {
        return `https://${this.config.host}/${this.config.prefixKey}${fileName}`
      }
      return `https://${res.Location}`
    } catch (e) {
      // 上传失败时报错
      console.log(e.message)
    }
  }
}

module.exports = CosClient
```


```typescript
// elog.config.js
const cos = require('cos')

module.exports = {
  ... // 省略
  image: {
    enable: true,
    // 支持2种模式，本地插件路径或引入 npm 插件
    plugin: './cos.js', // 本地插件路径
    // plugin: cos, // npm 插件
    // plugin: require('cos'), // npm 插件
    // 插件需要用到的参数，会传入插件实例，也可在插件内部自行实现，推荐统一在elog.config.js中配置
    cos: {
      secretId: process.env.COS_SECRET_ID,
      secretKey: process.env.COS_SECRET_KEY,
      bucket: process.env.COS_IMAGE_BUCKET,
      region: process.env.COS_IMAGE_REGION,
      host: process.env.COS_HOST,
      prefixKey: 'elog-images-plugin',
    }
  },
}
```


## 本地存储（local）


| 字段            | 必填 | 类型      | 说明       | 默认值   |
| ------------- | -- | ------- | -------- | ----- |
| outputDir     | 是  | string  | 图片输出目录   | -     |
| prefixKey     | 否  | string  | 图片资源统一前缀 | -     |
| pathFollowDoc | 否  | boolean | 路径根据文档计算 | false |
| imagePathExt  | 否  | string  | 图片路径拓展点  | -     |


### prefixKey 字段说明


> 如果只是想把文档及图片下载到本地作为备份，应该优先考虑`pathFollowDoc`配置

1. 本地部署平台一般会有资源根目录，会将某个文件夹视为根目录，而`prefixKey`就是配置资源目录的前缀
2. 例如 Vitpress，如果`outputDir=./docs/asset/images`，则`prefixKey=/asset/images`

### pathFollowDoc 字段说明


> `0.9.0`及以上版本可用


图片路径会相对文档位置自动变化，`prefixKey`字段会自动失效。适用于多层级文档时图片能正常访问。


假如文档A 的存放路径为 `./docs/首页/文档 A.md`


图片**统一**输出目录(`outputDir`)为 `./docs/images`


则图片在文档 A 中的路径应为`../images/test.jpg`


### imagePathExt 字段说明


> `0.9.0`及以上版本可用


图片路径拓展点路径。一般适用于按自定义规则存放图片。例如可以**让所有图片按照文档标题为文件夹**存放。

1. 目前只支持 Common Js 标准拓展点
2. 拓展点需要暴露一个**同步**的 `getImagePath` 的方法
3. `getImagePath`需要返回处理后图片存放地址`dirPath`和文档中图片的前缀`prefixKey`

```javascript
const path = require("path");

/**
 * 自定义图片路径处理器
 * @param {DocDetail} doc doc的类型定义为 DocDetail
 * @param {string} outputDir 配置文件中图片的存放位置
 * @return {dirPath: string, prefixKey: string} 返回处理后图片存放地址dirPath和文档中图片的前缀prefixKey
 */
const getImagePath = (doc, outputDir) => {
  // 当前文档的存在路径，例如：docs/yuque
  const docPath = doc.docPath
  // 当前文档标题
  const title = doc.properties.title
  // 当前文档其他属性
  // 具体可查看elog.cache.json文件docs中的结构
  const properties = doc.properties
  // 根据自己的计算，返回该文档中图片的存放位置
  // 图片存放根目录outputDir为：docs/images
  // 假设文档标题为【标题1】，文档存放路径docPath为: docs/yuque
  // 那么图片存放位置dirPath为: docs/images/标题1
  // 文档图片前缀prefixKey为: ./images/标题1

  // 假设文档标题为【标题2】，文档存放路径docPath为: docs/yuque/一级文件夹
  // 那么图片存放位置dirPath为: docs/images/标题2/
  // 文档图片前缀prefixKey为: ../images/标题2
  const dirPath = path.join(outputDir, title)
  const prefixKey = path.relative(docPath, dirPath)
  // 必须返回这两个字段
  return {
    dirPath,
    prefixKey
  }
};

module.exports = {
  getImagePath,
};
```


## 腾讯云（cos）/阿里云（oss）/七牛云（qiniu）


| 字段        | 必填 | 说明              | 默认值 |
| --------- | -- | --------------- | --- |
| secretId  | 是  | 图床密钥ID          | -   |
| secretKey | 是  | 图床密钥KEY         | -   |
| bucket    | 是  | 桶名称/七牛云空间       | -   |
| region    | 是  | 存储区域，**七牛云可不填** | -   |
| host      | 否  | 指定域名，**七牛云必填**  | -   |
| prefixKey | 否  | 上传路径，默认上传到根路径   | -   |
| secretExt | 否  | 图床密钥拓展点         | -   |


## 又拍云（upyun）


| 字段        | 必填 | 说明                                | 默认值                           |
| --------- | -- | --------------------------------- | ----------------------------- |
| user      | 是  | 操作员账号                             | -                             |
| password  | 是  | 操作员密码                             | -                             |
| bucket    | 是  | 服务名                               | -                             |
| host      | 否  | 指定域名，又拍云会默认提供30天的临时测试域名，建议配置自定义域名 | 临时域名：http://xxx.est.upcdn.net |
| prefixKey | 否  | 上传路径，默认上传到根路径                     | -                             |
| secretExt | 否  | 图床密钥拓展点                           | -                             |


## Github图床（github）


| 字段        | 必填 | 说明                       | 默认值    |
| --------- | -- | ------------------------ | ------ |
| token     | 是  | Github Token             | -      |
| user      | 是  | 用户名                      | -      |
| repo      | 是  | 仓库名                      | -      |
| branch    | 否  | 分支                       | master |
| host      | 否  | 加速域名，取值 cdn.jsdelivr.net | -      |
| prefixKey | 否  | 上传路径，默认上传到根路径            | -      |
| secretExt | 否  | 图床密钥拓展点                  | -      |


### secretExt 字段说明


图床密钥拓展点路径，一般适用于不想直接配置AK到环境变量或者本地，而是通过异步接口获取

1. 目前只支持 Common Js 标准拓展点
2. 拓展点需要暴露一个**同步/异步**的 `getSecret` 的方法

	```typescript
	const axios = require('axios');
	
	const getOssSts = async () => {
	  return await axios.get('https://xxxx/oss/sts?directory=elog')
	}
	
	const getSecret = async () => {
	  const res = await getOssSts()
	  const { accessKeyId, accessKeySecret, securityToken, dir, region, bucket } = res.data.data
	  return {
	    secretId: accessKeyId,
	    secretKey: accessKeySecret,
	    stsToken: securityToken,
	    secure: true,
	    prefixKey: dir,
	    region,
	    bucket,
	  }
	}
	
	module.exports = {
	  getSecret,
	}
	```

3. `getSecret` 返回的密钥信息需要符合图床实例SDK的字段要求，具体请参考对应图床 SDK/API

## 下一步


**马上就大功告成了，最后一步：点击** [下一篇](/notion/local-test) **继续配置本地调试环境**

