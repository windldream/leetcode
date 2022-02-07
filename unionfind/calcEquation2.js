/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  const graph = new Map()
  const weight = Object.create(null)

  for (let i = 0; i < equations.length; i++) {
    const [u, v] = equations[i]
    initGraph(graph, u, v)
    initGraph(graph, v, u)
    weight[u + '/' + v] = values[i]
    weight[v + '/' + u] = 1 / values[i]
  }

  const ans = []

  for (const [u, v] of queries) {
    const val = dfs(u, v, new Set(), weight, graph)
    ans.push(val)
  }

  return ans

  function dfs(u, v, visited, weight, graph) {
    if (weight[u + '/' + v] !== undefined) return weight[u + '/' + v]
    if (!graph.has(u) || visited.has(u)) return -1.0
    visited.add(u)

    let val = -1.0
    for (const next of graph.get(u)) {
      val = dfs(next, v, visited, weight, graph)
      if (val !== -1.0) {
        val *= weight[u + '/' + next]
        weight[u + '/' + v] = val
        break
      }
    }

    visited.delete(u)

    return val
  }

  function initGraph(g, u, v) {
    if (!g.has(u)) g.set(u, new Set())
    g.get(u).add(v)
  }
}
