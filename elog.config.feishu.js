module.exports = {
  write: {
    platform: 'feishu',
    feishu: {
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
      format: 'matter-markdown',
      catalog: true,
    }
  },
  image: {
    enable: true,
    platform: 'github',
    github: {
      user: process.env.GITHUB_USER,
      token: process.env.GITHUB_TOKEN,
      repo: process.env.GITHUB_REPO,
      branch: "",
      host: "",
      prefixKey: "/feishu",
      secretExt: "", // 可选
    },
  },
}
