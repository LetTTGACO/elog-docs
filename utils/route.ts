function genRoute(arr, pathname) {
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


export const genSideBar = (pathname: string) => {
  const cache = require('../elog-cache.json')
  const { catalog } = cache
  return genRoute(catalog, pathname)
}

