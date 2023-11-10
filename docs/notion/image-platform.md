---
status: 已发布
sort: 120
urlname: image-platform
上次编辑时间: '2023-11-09T13:21:00.000Z'
catalog: 配置详情
tags: Elog-Docs
title: 图床平台配置
date: '2023-10-13 05:24:00'
updated: '2023-11-09 13:21:00'
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


> `0.11.0-beta.1`及以上版本可用


plugin 参数为配置自定义图床插件时可选配置，可自行实现相关代码逻辑，将文档中的图片上传到任意图床。但是需要遵循以下插件开发规范：

1. 目前只支持 Common Js 标准，且不支持 TypeScript
2. 插件暴露出的实例需为**支持 new 关键字调用的 class 对象或函数**
3. 该实例需要实现两个方法`hasImage`和`uploadImg`，用于检测图床是否存在该图片和上传图片
4. Elog 在实例化该插件时，会传入 `elog.config.js`中的 `image` 图床配置，可根据需要取值
5. 使用`module.exports`导出

示例：上传图片到 cloudflare 的 R2 图床


```typescript
// package.json中 自行安装 @aws-sdk/client-s3 依赖
const { S3Client, PutObjectCommand, HeadObjectCommand } = require("@aws-sdk/client-s3");

/**
 * 处理前缀，结尾自动加上/
 * @param prefix
 * @return {*|string}
 */
const formattedPrefix = (prefix) => {
  // 如果没传，则默认为空
  if (!prefix) return ''
  let _prefix = prefix
  // 如果开头无需/
  if (_prefix.startsWith('/')) {
    _prefix = _prefix.slice(1)
  }
  // 如果结尾需要/
  if (!_prefix.endsWith('/')) {
    _prefix = `${_prefix}/`
  }
  return _prefix
}

/**
 * 上传到cloudflare的 R2图床
 */
class R2Uploader {
  constructor(config) {
    // 推荐从 elog.config.js中的 image.r2中获取 R2 相关账号参数
    // 插件本地测试时，可在写死相关账号参数
    this.config = config.r2
    this.config.prefixKey = formattedPrefix(this.config.prefixKey)
    this.s3Client = new S3Client({
      region: this.config.region || "auto",
      endpoint: this.config.endpoint,
      credentials: {
        accessKeyId: this.config.accessKeyId,
        secretAccessKey: this.config.secretAccessKey,
      },
    });
  }

  async hasImage(fileName) {
    try {
      await this.s3Client.send(new HeadObjectCommand({ Bucket: this.config.bucket, Key: this.config.prefixKey + fileName }));
      return `https://${this.config.host}/${this.config.prefixKey + fileName}`;
    } catch (err) {
      if (err.name === "NotFound") {
        return undefined;
      }
      console.error('错误', err.message)
    }
  }

  async uploadImg(imgBuffer, fileName) {
    try {
      const params = {
        Bucket: this.config.bucket,
        Key: this.config.prefixKey + fileName,
        Body: imgBuffer,
      };
      await this.s3Client.send(new PutObjectCommand(params));
      return `https://${this.config.host}/${this.config.prefixKey + fileName}`;
    } catch (err) {
      console.error('上传出错', err.message)
    }
  }
}

module.exports = R2Uploader;
```


```typescript
// elog.config.js
// 可以自行上传自己的 npm 图床插件包
// 我已经将 以上 R2 图床插件制作为 npm 包，可直接引入使用
const r2 = require('@elog/plugin-img-r2')

module.exports = {
  ... // 省略
  image: {
    enable: true,
    // 支持2种模式，本地插件路径或引入 npm 插件
    plugin: './r2.js', // 使用自己的本地插件路径，放置在和elog.config.js同级目录
    // plugin: r2, // 使用 npm 插件
    // plugin: require('r2'), // 使用 npm 插件
    // 插件需要用到的参数，会传入插件实例
    // 也可在插件内部自行实现，推荐统一在elog.config.js中配置
    r2: {
      accessKeyId: process.env.R2_ACCESSKEYID,
      secretAccessKey: process.env.R2_SECRET_ACCESSKEY,
      bucket: process.env.R2_BUCKET,
      endpoint: process.env.R2_ENDPOINT,
      host: process.env.R2_HOST,
      prefixKey: 'elog-image-plugin-test'
    }
  },
}
```


```yaml
# .elog.env 配置R2 相关账号参数
#R2
# 访问密钥 ID
R2_ACCESSKEYID=
# 机密访问密钥
R2_SECRET_ACCESSKEY=
R2_ENDPOINT=
# R2 需要使r2.dev子域供网络访问或者绑定自己的域名
R2_HOST=
R2_BUCKET=
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

