module.exports = {
  write: {
    platform: 'wolai',
    wolai: {
      token: process.env.WOLAI_TOKEN,
      pageId: process.env.WOLAI_PAGE_ID,
    },
  },
  deploy: {
    platform: 'local',
    local: {
      outputDir: './docs/wolai',
      filename: 'urlname',
      format: 'markdown',
      frontMatter: {
        enable: true
      }
    }
  },
  image: {
    enable: false,
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
