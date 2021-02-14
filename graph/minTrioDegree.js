/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var minTrioDegree = function (n, edges) {
  const g = new Map()
  const degree = Array(n + 1).fill(0)
  for (const [u, v] of edges) {
    if (!g.has(u)) g.set(u, new Set())
    if (!g.has(v)) g.set(v, new Set())
    g.get(u).add(v)
    g.get(v).add(u)
    degree[u]++
    degree[v]++
  }

  let ans = Infinity
  for (let i = 1; i <= n; i++) {
    if (degree[i] >= 2) {
      for (const u of g.get(i)) {
        if (degree[u] >= 2) {
          for (const v of g.get(u)) {
            if (degree[v] >= 2 && g.get(i).has(v)) {
              ans = Math.min(ans, degree[i] + degree[u] + degree[v] - 6)
            }
          }
        }
      }
    }
  }
  return ans === Infinity ? -1 : ans
}
