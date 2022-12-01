---
title: yuqe-hexo-with-cdn插件支持多图床
urlname: box1qz
date: '2022-02-17 22:00:29'
updated: '2022-11-11 00:26:54'
author: '1874'
top: true
cover: true
summary: yuqe-hexo-with-cdn插件支持多图床，腾讯云/阿里云/七牛云
categories: 技术分享
tags:
  - Hexo
---
# 引言

---

前端时间写了[yuque-hexo 插件语雀图片防盗链的解决方案](https://www.yuque.com/1874w/1874.cool/osar7h)，当时是用的腾讯云图床，后面考虑到可以支持更多的图床选择。这次的改造新增了阿里云图床和七牛云图床。

## 阿里云图床

阿里云图床目前各大公司也都在用，技术成熟稳定，但也和腾讯云图床一样，是收费的。但是作为个人博客图床的话，腾讯云 COS 和阿里云 OSS 的费用都相当的便宜，一个月的费用大概都在几分钱到几毛钱的范围。

## 七牛云图床

七牛云图床为个人提供 10G 的免费存储空间和完全够用的免费读写流量，用来作为博客图床再合适不过了。缺点就是七牛云图床默认使用 CDN 域名进行外链访问，而且是 30 天的临时域名，所以建议绑定一个备案域名作为永久 CND 域名进行访问。

# 改造思路

由于各大图床的 API 使用方式不尽相同，所以需要抽离出一个适配层进行接口调用的统一，通过不同的配置获取不同的图床实例进行 API 操作。
![](https://raw.githubusercontent.com/LetTTGACO/image/master/iblog-test1/Fhhlf0McPMjB-ly-QqWXkn9W3tG-.jpeg)

# 具体实现

##
