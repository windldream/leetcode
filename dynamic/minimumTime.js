/**
 * @param {number} n
 * @param {number[][]} relations
 * @param {number[]} time
 * @return {number}
 */
var minimumTime = function (n, relations, time) {
  const g = new Map()
  const deg = Array(n + 1).fill(0)

  for (const [u, v] of relations) {
    if (!g.has(u)) g.set(u, new Set())
    g.get(u).add(v)
    deg[v] += 1
  }

  const queue = []
  const dist = Array(n + 1).fill(0)
  let ans = 0

  for (let i = 1; i <= n; i++) {
    if (deg[i] === 0) queue.push(i)
    dist[i] = time[i - 1]
    ans = Math.max(ans, dist[i])
  }

  while (queue.length) {
    const u = queue.shift()

    if (g.has(u)) {
      for (const v of g.get(u)) {
        dist[v] = Math.max(dist[v], dist[u] + time[v - 1])
        ans = Math.max(ans, dist[v])
        deg[v] -= 1
        if (deg[v] === 0) queue.push(v)
      }
    }
  }

  return ans
}
