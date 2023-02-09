import * as path from 'path'
import * as fs from 'fs'

// 文件根目录
const DIR_PATH = path.resolve(__dirname, '../docs/')
// 白名单,过滤不是文章的文件和文件夹
const WHITE_LIST = ['index.md', '.vitepress']

// 判断是否是文件夹
const isDirectory = (path: string): boolean => fs.lstatSync(path).isDirectory()

// 取差值
const intersections = (arr1: any, arr2: any) =>
  Array.from<string>(new Set(arr1.filter((item: string) => !new Set(arr2).has(item))))

const getList = (params: string[], pathdir: string, pathname: string): any[] => {
  // 存放结果
  const res = []
  // 开始遍历params
  for (let index in params) {
    // 拼接目录
    const dir = path.resolve(pathdir, params[index])
    // 判断是否是文件夹
    const isDir = isDirectory(dir)
    if (isDir) {
      // 如果是文件夹,读取之后作为下一次递归参数
      const files = fs.readdirSync(dir)
      res.push({
        text: params[index],
        collapsible: true,
        items: getList(files, dir, `${pathname}/${params[index]}`),
      })
    } else {
      // 获取名字
      const name = params[index].split('.')[0]
      res.push({
        text: name,
        link: `${pathname}/${name}`,
      })
    }
  }
  return res
}

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
  const list = getList1(articles, pathname)
  console.log('list', list)
  return list
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
const getList1 = (articles: Doc[], pathname: string) => {
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
  console.log('orderArticles', orderArticles)
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


