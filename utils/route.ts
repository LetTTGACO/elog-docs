function genYuqueRoute(arr, pathname) {
  function loop(parId) {
    return arr.reduce((acc, cur) => {
      if (cur.parent_uuid === parId) {
        // const parent = arr.find(item => item.uuid === parId)
        // cur.path = (parent?.path || '') + '/' + cur.title
        cur.path = '/' + cur.slug
        cur.items = loop(cur.uuid)
        let route
        if (cur.items.length) {
          route = {
            text: cur.title,
            collapsed: false,
            items: cur.items
          }
          acc.push(route)
        } else {
          if (cur.type === 'DOC') {
            route = {
              text: cur.title,
              link: `${pathname}${cur.path}`,
            }
            acc.push(route)
          }
        }
      }
      return acc
    }, [])
  }
  return loop('')
}

/**
 * 生成语雀导航
 * @param pathname
 */
export const genYuqueSideBar = (pathname: string) => {
  const cache = require('../elog.cache.yuque-token.json')
  const { catalog } = cache
 return genYuqueRoute(catalog, pathname)
  // console.log('res', res)
}

/**
 * 生成飞书导航
 * @param pathname
 */
export const genFeiShuSideBar = (pathname: string) => {
  const cache = require('../elog.cache.feishu.json')
  const { catalog } = cache
  return genYuqueRoute(catalog, pathname)
}

/**
 * 生成notion导航
 * @param pathname
 */
export const genNotionSideBar = (pathname: string) => {
  const cache = require('../elog.cache.notion.json')
  const { catalog } = cache
  return genNotionRoute(catalog, pathname)
}

/**
 * 生成flowus导航
 * @param pathname
 */
export const genFlowUsSideBar = (pathname: string) => {
  const cache = require('../elog.cache.flowus.json')
  const { catalog } = cache
  return genNotionRoute(catalog, pathname)
}


const genNotionRoute = (catalog: any[], pathname: string) => {
  let route = []
  let directory = {}
  catalog.forEach(item => {
    const dir = directory[item.properties.catalog]
    if (dir?.items?.length) {
      dir.items.push({
        text: item.properties.title,
        link: `${pathname}/${item.properties.urlname}`
      })
    } else {
      directory[item.properties.catalog] = {
        text: item.properties.catalog,
        collapsed: false,
        items: [{
          text: item.properties.title,
          link: `${pathname}/${item.properties.urlname}`
        }]
      }
      route.push(directory[item.properties.catalog])
    }
  })

  return route
  // // 获取结构目录
  // const catalogs = docs.map(item => item.properties).sort((a, b) => {
  //   const itema = a.catalog.split('-')[0]
  //   const itemb = b.catalog.split('-')[0]
  // })

}
