/**
 * @param {number[][]} graph
 * @return {number}
 */
var shortestPathLength = function (graph) {
  const n = graph.length
  const queue = []
  const visited = Array(n)
    .fill(0)
    .map(() => Array(1 << n).fill(false))

  for (let i = 0; i < n; i++) {
    queue.push([i, 1 << i, 0])
    visited[i][1 << i] = true
  }

  while (queue.length) {
    const [cur, mask, dist] = queue.shift()
    if (mask === (1 << n) - 1) return dist

    for (const next of graph[cur]) {
      const nextMask = mask | (1 << next)

      if (!visited[next][nextMask]) {
        visited[next][nextMask] = true
        queue.push([next, nextMask, dist + 1])
      }
    }
  }

  return 0
}
