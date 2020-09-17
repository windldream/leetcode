/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const map = new Map()
  for (const n of arr) {
    if (!map.has(n)) {
      map.set(n, 0)
    }
    map.set(n, map.get(n) + 1)
  }
  const set = new Set()
  for (const val of map.values()) {
    if (set.has(val)) return false
    set.add(val)
  }
  return true
}
