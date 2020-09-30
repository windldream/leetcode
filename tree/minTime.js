/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function (n, edges, hasApple) {
  const g = new Map()
  for (const [u, v] of edges) {
    if (!g.has(u)) {
      g.set(u, new Set())
    }
    if (!g.has(v)) {
      g.set(v, new Set())
    }
    g.get(u).add(v)
    g.get(v).add(u)
  }

  const reverseEdges = Array(n).fill(-1)
  buildReverseEdges(g, 0)
  const visited = Array(n).fill(false)
  visited[0] = true
  let ans = 0

  for (let i = 0; i < n; i++) {
    if (hasApple[i]) {
      dfs(i)
    }
  }
  return ans * 2

  function dfs(to) {
    if (!visited[to]) {
      visited[to] = true
      ans++
      dfs(reverseEdges[to])
    }
  }

  function buildReverseEdges(map, val) {
    if (!map.has(val)) return
    for (const next of map.get(val)) {
      if (next !== 0 && reverseEdges[next] === -1) {
        reverseEdges[next] = val
        buildReverseEdges(map, next)
      }
    }
  }
}
