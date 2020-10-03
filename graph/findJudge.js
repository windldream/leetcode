/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
  if (N === 1 && trust.length === 0) return 1
  const map = new Map()
  const set = new Set()
  for (const [u, v] of trust) {
    if (!map.has(v)) {
      map.set(v, new Set())
    }
    map.get(v).add(u)
    set.add(u)
  }

  for (const [key, list] of map) {
    if (list.size === N - 1 && !set.has(key)) return key
  }

  return -1
}

findJudge(2, [[1, 2]])
