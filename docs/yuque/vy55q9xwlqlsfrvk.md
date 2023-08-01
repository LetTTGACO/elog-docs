# 持续集成

## 自动化流程

![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/1552a42c17e0286b8df50cda9826a05f.png)

## 语雀示例

**语雀 + webhooks + serverless api + GitHub Actions + Github Pages 持续集成**
![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/39a31239945bc9632dfa9c862b24209c.png)

### 语雀 webhooks

在语雀知识库 - 更多设置 - 消息推送中可配置语雀 webhooks，填写一个支持 POST 请求的 APi 链接即可（这里以 serverless api 为例）。当文档更新时，语雀会调用这个 API 进行推送

> 令人遗憾的是，语雀将 webhooks 收费了
> 未开通会员的语雀小伙伴可直接手动调用 API 触发 Github Actions 进行自动化构建&部署
> ⚠️ 知识库配置了「自动发布」功能后，文档的 更新/发布 操作暂不会发送 webhooks

![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/21aa774671484590fe816c2a38e14a9a.png)

### **serverless api**

为了方便，这里提供一个部署在 Vercel 的免费公用的[ServerlessAPI](https://github.com/LetTTGACO/serverless-api)
将其填入语雀 Webhooks 中即可

> 未开通会员的语雀小伙伴可直接手动调用此 API 触发 Github Actions 进行自动化构建&部署

```javascript
https://serverless-api-elog.vercel.app/api/github?user=xxx&repo=xxx&event_type=xxx&token=xxx
```

### 配置 package.json

```json
{
  "scripts": {
    "dev": "vitepress dev docs",
    "build": "vitepress build docs", // 构建文档
    "serve": "vitepress serve docs",
    "elog:init": "elog init",
    "sync:local": "elog sync -e .elog.env", // 本地同步时需要从env中取值
    "sync:": "elog sync", // 进行同步
    "clean": "elog clean"
  }
}
```

### Github Actions

1. 在仓库的`设置-Secrets and variables-Actions-Secrets`中进行配置需要用到的环境变量
2. 在仓库根目录创建`.github/workflows/main.yaml`文件，并按照以下流程配置

```yaml
name: Deplo To Github Pages

on:
  # 允许手动push触发
  push:
    branches:
      - master
  # 允许外部仓库事件触发
  repository_dispatch:
    types:
      - deploy # api中的event_type就是这个

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: 检查分支
        uses: actions/checkout@master

      - name: 安装node环境
        uses: actions/setup-node@master
        with:
          node-version: "16.x"

      - name: 安装pnpm
        run: |
          export TZ='Asia/Shanghai'
          npm install pnpm@7.9.5 -g

      - name: 安装依赖
        run: |
          export TZ='Asia/Shanghai'
          pnpm install --prod

      - name: 拉取语雀/Notion的文章
        env:
          # 语雀相关环境变量
          YUQUE_TOKEN: ${{ secrets.YUQUE_TOKEN }}
          YUQUE_LOGIN: ${{ secrets.YUQUE_LOGIN }}
          YUQUE_REPO: ${{ secrets.YUQUE_REPO }}
          # Notion相关环境变量
					NOTION_TOKEN: ${{ secrets.NOTION_TOKEN }}
          NOTION_DATABASE_ID: ${{ secrets.NOTION_DATABASE_ID }}
          # 图床相关环境变量，以腾讯云COS为例
          COS_SECRET_ID: ${{ secrets.COS_SECRET_ID }}
          COS_SECRET_KEY: ${{ secrets.COS_SECRET_KEY }}
          COS_IMAGE_BUCKET: ${{ secrets.COS_IMAGE_BUCKET }}
          COS_IMAGE_REGION: ${{ secrets.COS_IMAGE_REGION }}
        run: |
          # 对应package.json中的script.sync
          pnpm sync

      - name: 配置Git用户名邮箱
        run: |
          git config --global user.name "xxxx"
          git config --global user.email "xxxx"

      - name: 提交yuque拉取的文章到GitHub仓库
        run: |
          echo `date +"%Y-%m-%d %H:%M:%S"` begin > time.txt
          git add .
          git commit -m "更新文档" -a

      - name: 推送文章到仓库
        uses: ad-m/github-push-action@master
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}

      - name: 生成静态文件
        run: |
          # 对应package.json中的script.build
          pnpm build

      - name: 部署到Github Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          # github_token和personal_token适用于推送到当前仓库
          # 也就是你的Github Pages仓库（xxxx/xxxx.github.io）
          # 一般都不直接在Github Pages仓库开发，所以推荐使用deploy_key
          # github_token: ${{ secrets.GITHUB_TOKEN }}
          # personal_token: ${{ secrets.PERSONAL_TOKEN }}
          # deploy_key可以推送到别的仓库, SSH_PRIVATE_KEY 为自己电脑的ssh私钥
          deploy_key: ${{ secrets.SSH_PRIVATE_KEY }}
          publish_dir: docs/.vitepress/dist
          external_repository: xxxx/xxxx.github.io
          publish_branch: master
          commit_message: ${{ github.event.head_commit.message }}
```

## Notion 示例

**Notion + Slack + pipedream + serverless api + GitHub actions + Github Pages 持续集成**
![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/8fca86a5a136064864289ca46d750620.png)

### 配置数据表 **Slack notifications**

设置数据表文档字段被扭转到某个状态时向 Slack 发送消息
![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/68ecd96d9ff85bcd88bdc491ce08c85b.png)

### 注册 Slack 账号并授权给 Notion

当 Notion 数据表的文档字段被扭转到某个状态时向 Slack 发送消息，此时 Slack 收到消息提醒
![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/4a9b45b0dc5e293409a6f0e4b0d1faae.png)

### **serverless api**

为了方便，这里提供一个部署在 Vercel 的免费公用的[ServerlessAPI](https://github.com/LetTTGACO/serverless-api)

```javascript
https://serverless-api-elog.vercel.app/api/github?user=xxx&repo=xxx&event_type=xxx&token=xxx
```

### 注册**pipedream 并配置 WorkFlow**

#### 第一步：选择 Channels 为 Notion 应用

> 你也可以在 Notion 中配置发送消息到某个频道，然后在 pipedream 选择所选频道的 Channel。支持多选 Channels

![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/884ea1fc84d11e2127d7978cd7d2327a.png)

#### 第二步：收到 Notion 消息后发送自定义 Http 请求

将调用 Github Actions 的 serverless api 填入即可
![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/eb8bd89a65f89d20c8c091179ec5feca.png)

### 配置 package.json

```json
{
  "scripts": {
    "dev": "vitepress dev docs",
    "build": "vitepress build docs", // 构建文档
    "serve": "vitepress serve docs",
    "elog:init": "elog init",
    "sync:local": "elog sync -e .elog.env", // 本地同步时需要从env中取值
    "sync:": "elog sync", // 进行同步
    "clean": "elog clean"
  }
}
```

### Github Actions

1. 在仓库的`设置-Secrets and variables-Actions-Secrets`中进行配置需要用到的环境变量
2. 在仓库根目录创建`.github/workflows/main.yaml`文件，并按照以下流程配置

```yaml
name: Deplo To Github Pages

on:
  # 允许手动push触发
  push:
    branches:
      - master
  # 允许外部仓库事件触发
  repository_dispatch:
    types:
      - deploy # api中的event_type就是这个

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: 检查分支
        uses: actions/checkout@master

      - name: 安装node环境
        uses: actions/setup-node@master
        with:
          node-version: "16.x"

      - name: 安装pnpm
        run: |
          export TZ='Asia/Shanghai'
          npm install pnpm@7.9.5 -g

      - name: 安装依赖
        run: |
          export TZ='Asia/Shanghai'
          pnpm install --prod

      - name: 拉取语雀/Notion的文章
        env:
          # 语雀相关环境变量
          YUQUE_TOKEN: ${{ secrets.YUQUE_TOKEN }}
          YUQUE_LOGIN: ${{ secrets.YUQUE_LOGIN }}
          YUQUE_REPO: ${{ secrets.YUQUE_REPO }}
          # Notion相关环境变量
					NOTION_TOKEN: ${{ secrets.NOTION_TOKEN }}
          NOTION_DATABASE_ID: ${{ secrets.NOTION_DATABASE_ID }}
          # 图床相关环境变量，以腾讯云COS为例
          COS_SECRET_ID: ${{ secrets.COS_SECRET_ID }}
          COS_SECRET_KEY: ${{ secrets.COS_SECRET_KEY }}
          COS_IMAGE_BUCKET: ${{ secrets.COS_IMAGE_BUCKET }}
          COS_IMAGE_REGION: ${{ secrets.COS_IMAGE_REGION }}
        run: |
          # 对应package.json中的script.sync
          pnpm sync

      - name: 配置Git用户名邮箱
        run: |
          git config --global user.name "xxxx"
          git config --global user.email "xxxx"

      - name: 提交yuque拉取的文章到GitHub仓库
        run: |
          echo `date +"%Y-%m-%d %H:%M:%S"` begin > time.txt
          git add .
          git commit -m "更新文档" -a

      - name: 推送文章到仓库
        uses: ad-m/github-push-action@master
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}

      - name: 生成静态文件
        run: |
          # 对应package.json中的script.build
          pnpm build

      - name: 部署到Github Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          # github_token和personal_token适用于推送到当前仓库
          # 也就是你的Github Pages仓库（xxxx/xxxx.github.io）
          # 一般都不直接在Github Pages仓库开发，所以推荐使用deploy_key
          # github_token: ${{ secrets.GITHUB_TOKEN }}
          # personal_token: ${{ secrets.PERSONAL_TOKEN }}
          # deploy_key可以推送到别的仓库, SSH_PRIVATE_KEY 为自己电脑的ssh私钥
          deploy_key: ${{ secrets.SSH_PRIVATE_KEY }}
          publish_dir: docs/.vitepress/dist
          external_repository: xxxx/xxxx.github.io
          publish_branch: master
          commit_message: ${{ github.event.head_commit.message }}
```
