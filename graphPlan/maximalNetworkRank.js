/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function (n, roads) {
  const g = Array(n)
    .fill(0)
    .map(() => new Set())

  for (const [u, v] of roads) {
    g[u].add(v)
    g[v].add(u)
  }

  let ans = 0

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const x = g[i].size
      const y = g[j].size
      ans = Math.max(ans, x + y - (g[i].has(j) ? 1 : 0))
    }
  }

  return ans
}
