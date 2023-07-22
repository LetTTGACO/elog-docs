module.exports = {
  write: {
    platform: 'flowus',
    flowus: {
      tablePageId: process.env.FLOWUS_TABLE_PAGE_ID,
      filter: false,
      sort: true,
      catalog: false
    },
  },
  deploy: {
    platform: 'local',
    local: {
      outputDir: './docs/flowus',
      filename: 'urlname',
      format: 'matter-markdown',
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
