/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const mapCount = new Map()
  for (const c of s) {
    if (!mapCount.has(c)) {
      mapCount.set(c, 0)
    }
    mapCount.set(c, mapCount.get(c) + 1)
  }

  const keys = []
  for (const key of mapCount.keys()) {
    keys.push(key)
  }
  keys.sort((a, b) => mapCount.get(b) - mapCount.get(a))

  let str = ''
  for (let key of keys) {
    str += key.repeat(mapCount.get(key))
  }
  return str
}
