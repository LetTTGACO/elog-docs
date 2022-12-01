---
title: yuque-hexo插件语雀图片防盗链的解决方案
urlname: acw9m0
date: '2022-02-17 22:00:36'
updated: '2022-11-11 00:29:45'
author: '1874'
top: true
cover: true
summary: 解决yuque-hexo同步语雀文章到hexo博客后，由于防盗链导致图片无法显示的问题
categories: 技术分享
tags:
  - Hexo
---
# 引言

---

在使用[yuque-hexo](https://github.com/x-cold/yuque-hexo)同步文章到博客后，由于语雀的图片由有防盗链的限制，会导致部署后，博客网站显示图片异常。
处理办法有两种：
![image.png](https://raw.githubusercontent.com/LetTTGACO/image/master/iblog-test1/FioacWCiuPFjNteg-vR3cLc1WLxS.png)

2. 为了不破坏语雀编辑器的体验，我修改了`yuque-hexo`的源代码，发布了`yuqe-hexo-with-cdn`插件。适配了将语雀中的图片上传到腾讯云 COS 图床后，将原有的语雀图片链接替换掉。

# yuqe-hexo-with-cdn 插件

使用文档说明：[yuqe-hexo-with-cdn](https://github.com/LetTTGACO/yuque-hexo-with-cdn)

> **目前 x-code 已经将我的方案合并到主分支了，可以直接使用**[**yuque-hexo**](https://github.com/x-cold/yuque-hexo)**进行配置**

## 改造思路

### 原 yuque-hexo 生成.md 文章简易流程

![](https://raw.githubusercontent.com/LetTTGACO/image/master/iblog-test1/FvbBK8CcTjuw-otaGM04maJnn5bL.jpeg)
