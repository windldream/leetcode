/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function (adjacentPairs) {
  const m = adjacentPairs.length
  if (m === 1) return adjacentPairs[0]

  const degree = new Map()
  const g = new Map()
  for (const [u, v] of adjacentPairs) {
    if (!g.has(u)) g.set(u, new Set())
    if (!g.has(v)) g.set(v, new Set())
    g.get(u).add(v)
    g.get(v).add(u)
    degree.set(u, (degree.get(u) || 0) + 1)
    degree.set(v, (degree.get(v) || 0) + 1)
  }

  let minDeg = Infinity
  let start = -1
  for (const [key, val] of degree) {
    if (val < minDeg) {
      minDeg = val
      start = key
    }
  }

  const ans = new Set()
  ans.add(start)
  while (ans.size <= m) {
    for (const next of g.get(start)) {
      if (!ans.has(next)) {
        start = next
        ans.add(start)
        break
      }
    }
  }
  return [...ans]
}
