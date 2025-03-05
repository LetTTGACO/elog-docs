module.exports = {
  write: {
    platform: 'outline',
    outline: {
      token: process.env.OUTLINE_TOKEN,
      collectionId: process.env.OUTLINE_COLLECTION_ID,
      isTemplate: false,
    },
  },
  deploy: {
    platform: 'local',
    local: {
      outputDir: './docs/outline',
      filename: 'urlname',
      format: 'markdown',
      frontMatter: {
        enable: true
      }
    }
  },
  image: {
    enable: true,
    platform: 'local',
    local: {
      outputDir: 'docs/outline/images',
      pathFollowDoc: true,
    }
  },
}
