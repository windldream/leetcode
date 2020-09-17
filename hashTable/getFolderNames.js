/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function (names) {
  const res = []
  const map = new Map()
  for (const name of names) {
    if (!map.has(name)) {
      res.push(name)
      map.set(name, 1)
    } else {
      let count = map.get(name)
      while (map.has(`${name}(${count})`)) {
        count++
      }
      map.set(name, count)
      res.push(`${name}(${count})`)
      map.set(`${name}(${count})`, 1)
    }
  }
  return res
}

getFolderNames(['kaido', 'kaido(1)', 'kaido', 'kaido(1)', 'kaido(2)'])
