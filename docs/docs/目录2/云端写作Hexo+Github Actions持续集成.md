---
date: '2022-11-11 00:30:29'
updated: '2022-11-30 14:06:59'
author: '1874'
img: null
top: false
cover: false
coverImg: null
summary: 利用github actions自动化发布npm
categories: 技术分享
classify: 目录2
tags:
  - npm
  - Github Actions
title: 云端写作Hexo+Github Actions持续集成
urlname: ddcuuw
---
# 引言

---

在没有遇到[yuque-hexo](https://github.com/x-cold/yuque-hexo)之前，我博客是 Hexo+Github Pages 的部署方式：

- 本地配置 Hexo 源码
- 利用本地的 markdown 编辑器书写文章
- Hexo 部署到 Github Pages/Coding Pages 上

缺点也很明显：

<div style="background: #FFFBE6;padding:10px;border: 1px solid #C3C3C3;border-radius:5px;margin-bottom:5px;">
- 本地配置Hexo源码
- 利用本地的markdown编辑器书写文章
- Hexo部署到Github Pages/Coding Pages上</div>

- 本地编辑器鱼龙混杂，使用手感一言难尽
- 代码存储在本地不方便
- GitHub Pages 国内访问速度令人堪忧（有段时间我还双重部署在了 Coding Pages 上，但是太不稳定了）

本地的编辑器我是挑了又挑，总算找到一个手感还不错的[Typora](https://typora.io/)，但还是限于本地编辑的局限性和不方便，就懒的在本地写博客了。
在试用了语雀之后，发现语雀的编辑器太好用了，功能齐全，速度也快。后来我就一直在语雀上记录各种文章，但是并没有同步到博客。所在公司团队也用语雀来记录各种技术方案等文档。就这样我的博客几乎停更了一年。

---

直到我遇到了[yuque-hexo](https://github.com/x-cold/yuque-hexo)，突然就引起了我的兴趣。结合推荐的最佳实践文章，我没日没夜搞了好几天，终于搭建好了我的[新博客](https://1874.cool)。

# 准备工作

## 环境相关

- node 环境的安装
- hexo-cli 的的初始化
- hexo 主题安装
- yuque-hexo 安装
- dotenv -cli 安装

### node 环境的安装

### hexo-cli 的的初始化

```bash
npx hexo-cli init blog-test
```

### hexo 主题安装

```bash
git clone https://github.com/theme-next/hexo-theme-next themes/next
```

> 注意将 next 也添加到 git 中

### yuque-hexo 安装

```bash
npm i yuque-hexo
```

### dotenv -cli 安装

```bash
npm i dotenv-cli
```

## 语雀相关

- 新建语雀仓库
- 语雀 Token 申请
- 语雀知识库前缀

### 新建语雀仓库

[https://www.yuque.com/dashboard](https://www.yuque.com/dashboard)

### 语雀 Token 申请

[设置 · 语雀](https://www.yuque.com/settings/tokens?view=doc_embed)

### 语雀知识库前缀

[https://www.yuque.com/1874w/yuque-hexo-demo/settings/basic](https://www.yuque.com/1874w/yuque-hexo-demo/settings/basic)

## GIthub 相关

- github 源码仓库
- github 图床仓库
- GithubPages 仓库
- GITHUB_TOKEN 
- SSH_PRIVATE_KEY  私钥
- 配置源码仓库的 screct 环境变量

### github 源码仓库

[yuque-hexo-demo](https://github.com/LetTTGACO/yuque-hexo-demo2)

### github 图床仓库

[https://github.com/LetTTGACO/image](https://github.com/LetTTGACO/image)

### GithubPages 仓库

[https://github.com/LetTTGACO/LetTTGACO.github.io](https://github.com/LetTTGACO/LetTTGACO.github.io)

### GITHUB_TOKEN  申请

[https://github.com/settings/tokens](https://github.com/settings/tokens)

### SSH_PRIVATE_KEY  私钥

```bash
ssh-keygen -t rsa -b 2048 -C "1225751694@qq.com"


cat ~/.ssh/id_rsa
```

![image.png](https://cdn.nlark.com/yuque/0/2022/png/417081/1668100786997-6e5c591e-8525-40fc-a82d-6c3f554549a7.png#averageHue=%23d1b67e&clientId=u6a06634e-4607-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=854&id=u48902167&margin=%5Bobject%20Object%5D&name=image.png&originHeight=854&originWidth=1768&originalType=binary&ratio=1&rotation=0&showTitle=false&size=139435&status=done&style=none&taskId=u3db96e65-5e81-4c83-9a5e-93d69052aaf&title=&width=1768)

### 配置源码仓库的 screct 环境变量

- SECRET_ID
- SECRET_KEY
- YUQUE_TOKEN
- SSH_PRIVATE_KEY

# 站点配置

## 新建.env 配置

```bash
YUQUE_TOKEN=xxx
SECRET_ID=LetTTGACO
SECRET_KEY=xxx

```

## package.json

```bash
{
  "name": "hexo-site",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "build": "hexo generate",
    "clean": "hexo clean",
    "deploy": "hexo deploy",
    "server": "hexo server --debug",
    "sync:local": "dotenv -e .env yuque-hexo sync",
    "sync:deploy": "yuque-hexo sync",
    "yuque:clean": "yuque-hexo clean"
  },
  "hexo": {
    "version": "6.3.0"
  },
  "dependencies": {
    "dotenv-cli": "^6.0.0",
    "hexo": "^6.3.0",
    "hexo-generator-archive": "^2.0.0",
    "hexo-generator-category": "^2.0.0",
    "hexo-generator-index": "^3.0.0",
    "hexo-generator-tag": "^2.0.0",
    "hexo-renderer-ejs": "^2.0.0",
    "hexo-renderer-marked": "^6.0.0",
    "hexo-renderer-stylus": "^2.1.0",
    "hexo-server": "^3.0.0",
    "hexo-theme-landscape": "^0.0.3",
    "yuque-hexo": "^1.9.5"
  },
  "yuqueConfig": {
    "postPath": "source/_posts",
    "baseUrl": "https://www.yuque.com/api/v2",
    "login": "1874w",
    "repo": "yuque-hexo-demo",
    "onlyPublished": true,
    "onlyPublic": true,
    "imgCdn": {
      "concurrency": 1,
      "imageBed": "github",
      "enabled": true,
      "bucket": "image",
      "host": "cdn.jsdelivr.net",
      "prefixKey": "blog-images12"
    }
  }
}

```

## ./github/workflows/main.yml

```yaml
name: Deplo To COS

on:
  # 允许手动push触发
  push:
    branches:
      - master
  # 允许外部仓库事件触发
  repository_dispatch:
    types:
      - start

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: 检查分支
        uses: actions/checkout@master

      - name: 安装node环境
        uses: actions/setup-node@master
        with:
          node-version: "12.x"

      - name: 缓存依赖
        uses: actions/cache@v1
        id: cache
        with:
          path: node_modules
          key: ${{runner.OS}}-${{hashFiles('**/package-lock.json')}}

      - name: 安装依赖
        if: steps.cache.outputs.cache-hit != 'true'
        run: |
          export TZ='Asia/Shanghai'
          npm install

      - name: 拉取语雀的文章
        env:
          YUQUE_TOKEN: ${{ secrets.YUQUE_TOKEN }}
          SECRET_ID: ${{ secrets.SECRET_ID }}
          SECRET_KEY: ${{ secrets.SECRET_KEY }}
        run: |
          npm run sync:deploy

      - name: 配置Git用户名邮箱
        run: |
          git config --global user.name "1874"
          git config --global user.email "1225751694@qq.com"

      - name: 提交yuque拉取的文章到GitHub仓库
        run: |
          echo `date +"%Y-%m-%d %H:%M:%S"` begin > time.txt
          git add .
          git commit -m "Refresh yuque json" -a

      - name: 推送文章到仓库
        uses: ad-m/github-push-action@master
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}

      - name: 生成静态文件
        run: |
          npm run clean
          npm run build

      - name: 上传文章到GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          deploy_key: ${{ secrets.SSH_PRIVATE_KEY }}
          external_repository: LetTTGACO/LetTTGACO.github.io
          publish_branch: master
          publish_dir: ./public
          commit_message: ${{ github.event.head_commit.message }}
```

# 语雀 hooks 实现自动部署

# 大功告成
