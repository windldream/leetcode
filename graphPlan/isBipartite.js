/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
  const n = graph.length
  const colors = Array(n).fill(0)

  for (let i = 0; i < n; i++) {
    if (colors[i] === 0) {
      if (!dfs(graph, colors, i, 0)) return false
    }
  }

  return true

  function dfs(graph, colors, i, lastColor) {
    if (colors[i]) return colors[i] !== lastColor

    colors[i] = lastColor === 1 ? 2 : 1

    for (const next of graph[i]) {
      if (!dfs(graph, colors, next, colors[i])) return false
    }

    return true
  }
}
