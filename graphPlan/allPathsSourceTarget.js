/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const queue = [[0]]
  const ans = []

  while (queue.length) {
    const u = queue.shift()
    const last = u[u.length - 1]

    if (last === graph.length - 1) ans.push([...u])

    for (const v of graph[last]) {
      queue.push([...u, v])
    }
  }

  return ans
}
