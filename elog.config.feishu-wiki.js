module.exports = {
  write: {
    platform: 'feishu',
    feishu: {
      type: 'wiki',
      wikiId: process.env.FEISHU_WIKI_ID,
      appId: process.env.FEISHU_APP_ID,
      appSecret: process.env.FEISHU_APP_SECRET,
      disableParentDoc: true
    },
  },
  deploy: {
    platform: 'local',
    local: {
      outputDir: './docs/feishu-wiki/docs',
      filename: 'title',
      format: 'markdown',
      catalog: true,
      frontMatter: {
        enable: true,
      }
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
