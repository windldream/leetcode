/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  const g = new Map()
  for (const [u, v] of edges) {
    if (!g.has(u)) g.set(u, new Set())
    g.get(u).add(v)
    if (!g.has(v)) g.set(v, new Set())
    g.get(v).add(u)
  }

  for (const [key, set] of g) {
    if (set.size === edges.length) return key
  }
  return -1
}
