import * as path from 'path'

// 文件根目录
const DIR_PATH = path.resolve(__dirname, '../docs/')

export const genSideBar = (pathname: string) => {
  // 我们把方法导出直接使用
  // 获取pathname的路径
  const dirPath = path.resolve(DIR_PATH, pathname)
  // 读取缓存文件elog-cache.json
  const articles = require('../elog-cache.json')
  // 读取pathname下的所有文件或者文件夹
  // const files = fs.readdirSync(dirPath)
  // 过滤掉
  // const items = intersections(files, WHITE_LIST)
  return getList(articles, pathname)
}

interface Properties {
  urlname: string
  title: string
  classify: string
  order?: string
}

interface Doc {
  properties: Properties
}

// elog/社区生态/最佳实践
const getList = (articles: Doc[], pathname: string) => {
  // 文件夹map
  const dirMap = new Map<string, any>()
  articles.map((article) => {
    // 检查文件夹Map是否存在
    const classify = article.properties.classify
    const order = article.properties.order
    if (classify) {
      const [dirOrder, articleOrder] = order.split('-')
      const articleConfig = {
        name: article.properties.title,
        link: `${pathname}/${classify}/${article.properties.title}`,
        order: Number(articleOrder)
      }
      // 如果存在
      if (dirMap.has(classify)) {
        const classifyConfig = dirMap.get(classify)
        classifyConfig.order = Number(dirOrder)
        classifyConfig.list.push(articleConfig)
      } else {
        // 不存在则存起来
        const classifyConfig = {
          name: classify,
          order: Number(dirOrder),
          list: [articleConfig]
        }
        dirMap.set(classify, classifyConfig)
      }
    } else {
      console.warn(`${article.properties.title}未指定目录，将渲染到根目录`)
      const noClassify = dirMap.get('NO_CLASSIFY')
      const articleConfig = {
        name: article.properties.title,
        link: `${pathname}/${article.properties.title}`,
        order: Number(order),
      }
      if (noClassify) {
        noClassify.order = Number(order)
        noClassify.list.push(articleConfig)
      } else {
        dirMap.set('NO_CLASSIFY', { order: Number(order), list: [articleConfig]})
      }
    }
  })
  // Map转对象数组
  // @ts-ignore
  const noOrderArticles = [...dirMap.values()]
  const orderArticles = noOrderArticles.map(item => {
    item.list = item.list.sort((a, b) => {
      return a.order - b.order
    })
    return item
  }).sort((a, b) => {
    return a.order - b.order
  })
  let res = []
  orderArticles.map((article) => {
    if (article.name) {
      res.push({
        text: article.name,
        collapsible: true,
        items: article.list.map(item => ({
          text: item.name,
          link: item.link,
        }))
      })
    } else {
      article.list.map(item => {
        res.push({
          text: item.name,
          link: item.link,
        })
      })
    }
  })
  return res
}


