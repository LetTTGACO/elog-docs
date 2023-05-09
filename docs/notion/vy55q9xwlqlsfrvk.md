---
status: 已发布
sort: 16
urlname: vy55q9xwlqlsfrvk
上次编辑时间: "2023-05-09T14:18:00.000Z"
catalog: 进阶玩法
title: 持续集成
date: "2023-04-06 13:31:00"
updated: "2023-05-09 14:18:00"
---

# 持续集成

## 自动化流程

![](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/Fr3Yyq0BKjLO-ixEjBvFhrE7V3ry.png)

## 语雀示例

**语雀 + webhooks + serverless api + GitHub Actions + Github Pages 持续集成**

### 语雀 webhooks

在语雀知识库 - 更多设置 - 消息推送中可配置语雀 webhooks，填写一个支持 POST 请求的 APi 链接即可（这里以 serverless api 为例）。当文档更新时，语雀会调用这个 API 进行推送

> 令人遗憾的是，语雀将 webhooks 收费了  
> 未开通会员的语雀小伙伴可直接手动调用 API 触发 Github Actions 进行自动化构建&部署

![](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/Fn0PyfH-NcFZDclUl63z5lYMNJKD.png)

### **serverless api**

为了方便，这里提供一个免费的公用的[ServerlessAPI](https://github.com/LetTTGACO/serverless-api)

## Notion 示例

**Notion + Slack + pipedream + serverless api + GitHub actions + Github Pages 持续集成**

##
