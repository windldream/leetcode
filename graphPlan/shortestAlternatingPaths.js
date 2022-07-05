/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function (n, redEdges, blueEdges) {
  const redGraph = buildGraph(redEdges, n)
  const blueGraph = buildGraph(blueEdges, n)
  const ans = Array(n).fill(-1)
  bfs(redGraph, blueGraph, ans, 0)
  bfs(redGraph, blueGraph, ans, 1)

  return ans

  function bfs(redGraph, blueGraph, ans, color) {
    const queue = [[0, color]]
    const redVisited = new Set()
    const blueVisited = new Set()

    if (color === 0) redVisited.add(0)
    else blueVisited.add(0)

    let step = 0

    while (queue.length) {
      for (let i = 0, len = queue.length; i < len; i++) {
        const [node, color] = queue.shift()
        const nextGraph = color === 0 ? redGraph : blueGraph
        const nextColor = color ^ 1
        const nextVisited = color === 0 ? blueVisited : redVisited

        if (ans[node] === -1) {
          ans[node] = step
        } else {
          ans[node] = Math.min(ans[node], step)
        }

        for (const nextNode of nextGraph[node]) {
          if (!nextVisited.has(nextNode)) {
            queue.push([nextNode, nextColor])
            nextVisited.add(nextNode)
          }
        }
      }

      step++
    }
  }

  function buildGraph(edges, n) {
    const graph = Array(n)
      .fill(0)
      .map(() => new Set())

    for (const [u, v] of edges) {
      graph[u].add(v)
    }

    return graph
  }
}
