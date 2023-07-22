module.exports = {
  write: {
    platform: 'notion',
    notion: {
      token: process.env.NOTION_TOKEN,
      databaseId: process.env.NOTION_DATABASE_ID,
      filter: {property: 'status', select: {equals: '已发布'}},
      sorts: true,
      catalog: false
    },
  },
  deploy: {
    platform: 'wordpress',
    wordpress: {
      username: process.env.WORDPRESS_USERNAME,
      password: process.env.WORDPRESS_PASSWORD,
      endpoint: process.env.WORDPRESS_ENDPOINT,
      keyMap: {
        categories: 'catalog',
      },
      formatExt: ''
    }
  }
}
