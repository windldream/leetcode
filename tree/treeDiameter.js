/**
 * @param {number[][]} edges
 * @return {number}
 */
var treeDiameter = function (edges) {
  if (edges.length === 0) return 0
  let endPoint = -1
  let max = -Infinity
  const seen = new Set()
  const g = new Map()
  for (const [u, v] of edges) {
    if (!g.has(u)) {
      g.set(u, [])
    }
    g.get(u).push(v)

    if (!g.has(v)) {
      g.set(v, [])
    }
    g.get(v).push(u)
  }

  dfs(g, edges[0][0], seen, 0)
  seen.clear()
  dfs(g, endPoint, seen, 0)
  return max

  function dfs(map, start, seen, dis) {
    if (seen.has(start)) return
    seen.add(start)
    if (map.has(start)) {
      for (const next of map.get(start)) {
        if (seen.has(next)) continue
        dfs(map, next, seen, dis + 1)
      }
    }
    if (max < dis) {
      endPoint = start
      max = dis
    }
  }
}

treeDiameter([
  [0, 1],
  [1, 2],
  [2, 3],
  [1, 4],
  [4, 5]
])
