---
status: 已发布
sort: 120
urlname: image-platform
上次编辑时间: "2023-10-13T15:14:00.000Z"
catalog: 配置详情
tags: Elog-Docs
title: 图床平台配置
date: "2023-10-13 05:24:00"
updated: "2023-10-13 15:14:00"
---

# 图床平台配置

图床关键信息获取及配置流程请移步 [关键信息获取](/notion/gvnxobqogetukays#图床) 页面。

## 本地存储（local）

| 字段      | 必填 | 说明             | 默认值 |
| --------- | ---- | ---------------- | ------ |
| outputDir | 是   | 图片输出目录     | -      |
| prefixKey | 否   | 图片资源统一前缀 | -      |

### PrefixKey 字段说明

1. 本地部署平台一般会有资源根目录，会将某个文件夹视为根目录，而`prefixKey`就是配置资源目录的前缀
2. 例如 Vitpress，如果`outputDir=./docs/asset/images`，则`prefixKey=/asset/images`

## 腾讯云（cos）/阿里云（oss）/七牛云（qiniu）

| 字段      | 必填 | 说明                       | 默认值 |
| --------- | ---- | -------------------------- | ------ |
| secretId  | 是   | 图床密钥 ID                | -      |
| secretKey | 是   | 图床密钥 KEY               | -      |
| bucket    | 是   | 桶名称/七牛云空间          | -      |
| region    | 是   | 存储区域，**七牛云可不填** | -      |
| host      | 否   | 指定域名，**七牛云必填**   | -      |
| prefixKey | 否   | 上传路径，默认上传到根路径 | -      |
| secretExt | 否   | 图床密钥拓展点             | -      |

## 又拍云（upyun）

| 字段      | 必填 | 说明                                                               | 默认值                             |
| --------- | ---- | ------------------------------------------------------------------ | ---------------------------------- |
| user      | 是   | 操作员账号                                                         | -                                  |
| password  | 是   | 操作员密码                                                         | -                                  |
| bucket    | 是   | 服务名                                                             | -                                  |
| host      | 否   | 指定域名，又拍云会默认提供 30 天的临时测试域名，建议配置自定义域名 | 临时域名：http://xxx.est.upcdn.net |
| prefixKey | 否   | 上传路径，默认上传到根路径                                         | -                                  |
| secretExt | 否   | 图床密钥拓展点                                                     | -                                  |

## Github 图床（github）

| 字段      | 必填 | 说明                            | 默认值 |
| --------- | ---- | ------------------------------- | ------ |
| token     | 是   | Github Token                    | -      |
| user      | 是   | 用户名                          | -      |
| repo      | 是   | 仓库名                          | -      |
| branch    | 否   | 分支                            | master |
| host      | 否   | 加速域名，取值 cdn.jsdelivr.net | -      |
| prefixKey | 否   | 上传路径，默认上传到根路径      | -      |
| secretExt | 否   | 图床密钥拓展点                  | -      |

### secretExt 字段说明

图床密钥拓展点路径，一般适用于不想直接配置 AK 到环境变量或者本地，而是通过异步接口获取

1. 目前只支持 Common Js 标准拓展点
2. 拓展点需要暴露一个**同步/异步**的 `getSecret` 的方法

   ```typescript
   const axios = require("axios");

   const getOssSts = async () => {
     return await axios.get("https://xxxx/oss/sts?directory=elog");
   };

   const getSecret = async () => {
     const res = await getOssSts();
     const {
       accessKeyId,
       accessKeySecret,
       securityToken,
       dir,
       region,
       bucket,
     } = res.data.data;
     return {
       secretId: accessKeyId,
       secretKey: accessKeySecret,
       stsToken: securityToken,
       secure: true,
       prefixKey: dir,
       region,
       bucket,
     };
   };

   module.exports = {
     getSecret,
   };
   ```

3. `getSecret` 返回的密钥信息需要符合图床实例 SDK 的字段要求，具体请参考对应图床 SDK/API

**马上就大功告成了，最后一步：点击** [下一篇](/notion/local-test) **继续配置图床平台**
