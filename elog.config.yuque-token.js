module.exports = {
  write: {
    platform: 'yuque',
    yuque: {
      token: process.env.YUQUE_TOKEN,
      baseUrl: '',
      login: process.env.YUQUE_LOGIN,
      repo: process.env.YUQUE_REPO,
      onlyPublic: false,
      onlyPublished: true,
    }
  },
  deploy: {
    platform: 'local',
    local: {
      outputDir: './docs/yuque',
      filename: 'urlname',
      format: 'markdown',
      catalog: false,
      formatExt: '',
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
