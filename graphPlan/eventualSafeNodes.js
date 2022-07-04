/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
  const n = graph.length
  const color = Array(n).fill(0)
  const ans = []

  for (let i = 0; i < n; i++) {
    if (safeNode(graph, color, i)) ans.push(i)
  }

  return ans

  function safeNode(graph, color, node) {
    if (color[node]) return color[node] === 2

    color[node] = 1

    for (const next of graph[node]) {
      if (!safeNode(graph, color, next)) return false
    }

    color[node] = 2

    return true
  }
}
