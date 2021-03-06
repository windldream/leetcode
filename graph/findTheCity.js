/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function (n, edges, distanceThreshold) {
  const cost = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0))
  for (const [u, v, w] of edges) {
    cost[u][v] = w
    cost[v][u] = w
  }

  let min = Infinity
  let ans = -1
  for (let i = n - 1; i >= 0; i--) {
    const count = dijkstra(cost, i).filter((val) => val <= distanceThreshold).length
    if (count < min) {
      min = count
      ans = i
    }
  }
  return ans

  function dijkstra(graph, src) {
    const len = graph.length
    const dist = Array(len).fill(Infinity)
    const visited = Array(len).fill(false)

    dist[src] = 0
    for (let i = 0; i < len - 1; i++) {
      const u = minDistance(dist, visited)
      if (u === -1) {
        break
      }
      visited[u] = true
      for (let v = 0; v < len; v++) {
        if (!visited[v] && graph[u][v] !== 0 && dist[u] !== Infinity && dist[u] + graph[u][v] < dist[v]) {
          dist[v] = dist[u] + graph[u][v]
        }
      }
    }
    return dist
  }

  function minDistance(dist, visited) {
    let min = Infinity
    let minIndex = -1
    for (let i = 0; i < dist.length; i++) {
      if (!visited[i] && dist[i] < min) {
        min = dist[i]
        minIndex = i
      }
    }
    return minIndex
  }
}
