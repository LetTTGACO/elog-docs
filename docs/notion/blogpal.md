---
sort: 250
urlname: blogpal
catalog: 社区生态
tags: Elog-Docs
title: Blogpal 浏览器插件
date: '2024-01-23 20:25:00'
updated: '2024-02-05 22:29:00'
---

# Blogpal 浏览器插件


一般的自动化流程如下：当在写作平台写完文章后，**自动/手动触发 Github Actions流水线**，Elog 会从写作平台增量同步文档，部署到本地/站点。


![Untitled.png](https://image.1874.cool/elog-docs-images/eb226e2770d6125d87d45f598aaa461c.png)


整个流程的关键点就在于：**如何自动/手动触发 Github Actions流水线**


参考[持续集成](/notion/vy55q9xwlqlsfrvk#serverless-api)中的教程： 如果在项目`.github/workflows/main.yaml`中配置了外部 API 触发 Github Actions 事件，就可以在任何时候调用 API 触发流水线即可。


但由于语雀 Webhooks 目前需要专业会员，而 Notion 配合 Slack 和 Pipedream 配置又比较复杂，所以需要一个比较优雅的手动方式来触发此 API。


Blogpal 应运而生，在**网页版写作平台**完成写作后，就可以很方便触发指定仓库的 Github Actions 流水线。流程如下：


![Untitled.png](https://image.1874.cool/elog-docs-images/6df1220c86666811a3cffaaf25ad1947.png)


## 接口配置


![Untitled.png](https://image.1874.cool/elog-docs-images/1dc62708c4fbd0da5f749b5af150bcb8.png)


在插件设置页面，可以设置多个 URL触发流水线。


为了方便，Elog 提供了一个部署在Vercel的免费公用的[ServerlessAPI](https://github.com/elog-x/serverless-api)，当然你也可以 [fork](https://github.com/elog-x/serverless-api/fork) 后自行部署在 Vercel 上。


```bash
https://serverless-api-elog.vercel.app/api/github?user=xxx&repo=xxx&event_type=xxx&token=xxx
```


根据教程将相关参数补齐后填写在URL 中即可。


### 适用平台

- 语雀
- Notion
- FlowUs
- 飞书

设置后可在对应平台的网页版上展示一个同步图标，更方便点击同步


![Untitled.png](https://image.1874.cool/elog-docs-images/aee3a943bc644bbaabc978894aa0e88a.png)


## 如何下载


当前 Blogpal 已经发布到谷歌浏览器商店，[点击安装](https://chromewebstore.google.com/detail/blogpal/oafbfnbjohlejdhpljbgedpkdklcclmp)


其他浏览器暂未发布，可前往Elog 仓库 [Release](https://github.com/LetTTGACO/elog/releases/tag/v0.13.1) 中，自行选择对应浏览器压缩包下载后使用。

