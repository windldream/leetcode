/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function (paths) {
  const map = new Map()
  const ans = []

  for (const path of paths) {
    const list = path.split(' ')
    const p = list[0]
    for (const item of list.slice(1)) {
      const index = item.indexOf('(')
      const name = item.substring(0, index)
      const content = item.substring(index + 1, item.length - 1)
      const val = p + '/' + name
      if (!map.has(content)) {
        map.set(content, [])
      }
      map.get(content).push(val)
    }
  }

  for (const val of map.values()) {
    if (val.length > 1) {
      ans.push(val)
    }
  }
  return ans
}
