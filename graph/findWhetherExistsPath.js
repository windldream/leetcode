/**
 * @param {number} n
 * @param {number[][]} graph
 * @param {number} start
 * @param {number} target
 * @return {boolean}
 */
var findWhetherExistsPath = function (n, graph, start, target) {
  const g = Array(n)
    .fill(0)
    .map(() => new Set())
  for (const [u, v] of graph) {
    g[u].add(v)
  }

  const visited = new Set()
  return isReachable(g, start, target, visited)

  function isReachable(g, start, target, visited) {
    if (start === target) return true
    if (visited.has(start)) return false
    visited.add(start)
    for (const next of g[start]) {
      if (isReachable(g, next, target, visited)) return true
    }
    return false
  }
}
