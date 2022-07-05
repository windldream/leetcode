/**
 * @param {number[][]} graph
 * @return {number}
 */
var shortestPathLength = function (graph) {
  const n = graph.length
  const queue = []
  const seen = Array(n)
    .fill(0)
    .map(() => Array(1 << n).fill(false))

  for (let i = 0; i < n; i++) {
    queue.push([i, 1 << i, 0])
    seen[i][1 << i] = true
  }

  while (queue.length) {
    const [u, mask, dist] = queue.shift()

    if (mask === (1 << n) - 1) return dist

    for (const v of graph[u]) {
      const nextMask = mask | (1 << v)

      if (!seen[v][nextMask]) {
        queue.push([v, nextMask, dist + 1])
        seen[v][nextMask] = true
      }
    }
  }

  return -1
}
