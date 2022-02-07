/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
  const n = graph.length
  const colors = Array(n).fill(0)

  for (let i = 0; i < n; i++) {
    if (!dfs(graph, i, colors, 0)) return false
  }

  return true

  function dfs(graph, index, colors, lastColor) {
    if (colors[index]) return colors[index] !== lastColor
    colors[index] = lastColor === 1 ? 2 : 1

    for (const next of graph[index]) {
      if (!dfs(graph, next, colors, colors[index])) return false
    }

    return true
  }
}
