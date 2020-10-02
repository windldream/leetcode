/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const ans = []
  const n = graph.length
  const track = []
  track.push(0)
  dfs(0, graph, track)
  return ans

  function dfs(u, graph, track) {
    if (u === n - 1) {
      ans.push(track.slice())
      return
    }
    for (const next of graph[u]) {
      track.push(next)
      dfs(next, graph, track)
      track.pop()
    }
  }
}

allPathsSourceTarget([[1, 2], [3], [3], []])
