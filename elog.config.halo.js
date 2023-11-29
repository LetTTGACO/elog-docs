module.exports = {
  write: {
    platform: 'flowus',
    flowus: {
      tablePageId: process.env.FLOWUS_TEMPLATE_TABLE_PAGE_ID,
    }
  },
  deploy: {
    platform: 'halo',
    halo: {
      endpoint: process.env.HALO_ENDPOINT,
      token: process.env.HALO_TOKEN,
      policyName: process.env.HALO_POLICY_NAME,
      rowType: 'markdown',
      needUploadImage: true
    }
  },
  image: {
    enable: false
  },
}
