/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var leadsToDestination = function (n, edges, source, destination) {
  if (source === destination && edges.length === 0) return true
  const g = new Map()
  for (const [u, v] of edges) {
    if (!g.has(u)) {
      g.set(u, new Set())
    }
    g.get(u).add(v)
  }

  if (!g.has(source)) return false

  for (const next of g.get(source)) {
    const visited = new Set()
    if (!dfs(next, destination, visited)) return false
  }
  return true

  function dfs(source, dest, visited) {
    if (source === dest && !g.has(source)) return true
    if (!g.has(source)) return false
    visited.add(source)
    if (g.has(source)) {
      for (const next of g.get(source)) {
        if (next === source) return false
        if (g.has(next) && g.get(next).has(source)) return false
        if (visited.has(next)) continue
        if (!dfs(next, dest, visited)) return false
      }
    }
    return true
  }
}

leadsToDestination(
  4,
  [
    [0, 1],
    [0, 3],
    [1, 2],
    [2, 1]
  ],
  0,
  3
)
