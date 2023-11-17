module.exports = {
  write: {
    platform: 'feishu',
    feishu: {
      type: 'space', // 不填默认为从我的空间下载
      folderToken: process.env.FEISHU_FOLDER_TOKEN,
      appId: process.env.FEISHU_APP_ID,
      appSecret: process.env.FEISHU_APP_SECRET,
    },
  },
  deploy: {
    platform: 'local',
    local: {
      outputDir: './docs/feishu',
      filename: 'urlname',
      format: 'markdown',
      catalog: true,
      frontMatter: {
        enable: true,
        timeFormat: true,
      }
    }
  },
  image: {
    enable: true,
    platform: 'cos',
    cos: {
      secretId: process.env.COS_SECRET_ID,
      secretKey: process.env.COS_SECRET_KEY,
      bucket: process.env.COS_IMAGE_BUCKET,
      region: process.env.COS_IMAGE_REGION,
      host: process.env.COS_HOST,
      prefixKey: 'elog-docs-images',
      secretExt: '', // 可选
    }
  },
}
