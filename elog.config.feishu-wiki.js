module.exports = {
  write: {
    platform: 'feishu',
    feishu: {
      type: 'wiki',
      wikiId: process.env.FEISHU_WIKI_ID,
      appId: process.env.FEISHU_APP_ID,
      appSecret: process.env.FEISHU_APP_SECRET,
    },
  },
  deploy: {
    platform: 'local',
    local: {
      outputDir: './docs/feishu-wiki/docs',
      filename: 'title',
      format: 'matter-markdown',
      catalog: true,
    }
  },
  image: {
    enable: true,
    platform: 'local',
    local: {
      outputDir: 'docs/feishu-wiki/images',
      imagePathExt: './elog.format-image.js'
    }
  },
}
