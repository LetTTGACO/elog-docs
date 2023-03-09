const YuqueClient = require("@elog/sdk-yuque")
const { awaitSync } = require("@kaciras/deasync")
const fs = require("fs")

/**
 * List 转Tree List
 * @param arr
 * @param pathname
 */
function genRoute(arr, pathname) {
  function loop(parId) {
    return arr.reduce((acc, cur) => {
      if (cur.parent_uuid === parId) {
        const parent = arr.find(item => item.uuid === parId)
        cur.path = (parent?.path || '') + '/' + cur.title
        cur.items = loop(cur.uuid)
        let route
        if (cur.items.length) {
          route = {
            text: cur.title,
            collapsible: true,
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


const yuque = new YuqueClient.default({ login: '1874w', repo: 'elog-docs', token: process.env.YUQUE_TOKEN })
const toc = awaitSync(yuque.ctx.getToc())
const router = genRoute(toc, 'elog')
fs.writeFileSync('./router.json', JSON.stringify(router) )
