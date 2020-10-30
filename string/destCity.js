/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  const map = new Map()
  for (const [u, v] of paths) {
    if (!map.has(u)) {
      map.set(u, new Set())
    }
    if (!map.has(v)) {
      map.set(v, new Set())
    }
    map.get(u).add(v)
  }

  for (const [key, list] of map) {
    if (list.size === 0) return key
  }
}
