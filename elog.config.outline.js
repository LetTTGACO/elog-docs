module.exports = {
  write: {
    platform: 'outline',
    outline: {
      token: process.env.OUTLINE_TOKEN,
      isTemplate: false,
      collectionId: 'ffde68d5-d2b3-422f-87ed-762c98976ee0',
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
