/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var countSubgraphsForEachDiameter = function (n, edges) {
  const dist = Array(n)
    .fill(0)
    .map(() => Array(n).fill(Infinity))
  for (let i = 0; i < n; i++) {
    dist[i][i] = 0
  }

  const dp = Array(1 << n).fill(0)
  for (const [u, v] of edges) {
    dist[u - 1][v - 1] = 1
    dist[v - 1][u - 1] = 1
    dp[(1 << (u - 1)) + (1 << (v - 1))] = 1
  }

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (dist[i][k] !== Infinity && dist[k][j] !== Infinity) {
          dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j])
        }
      }
    }
  }

  for (let j = 1; j < dp.length; j++) {
    if (dp[j] === 0) continue
    for (let i = 0; i < n; i++) {
      if (((1 << i) & j) !== 0 || dp[j + (1 << i)] !== 0) continue
      for (let k = 0; k < n; k++) {
        if (((1 << k) & j) !== 0 && dist[i][k] === 1) {
          dp[j + (1 << i)] = dp[j]
          break
        }
      }
      if (dp[j + (1 << i)] === 0) continue
      for (let k = 0; k < n; k++) {
        if (((1 << k) & j) !== 0) {
          dp[j + (1 << i)] = Math.max(dp[j + (1 << i)], dist[i][k])
        }
      }
    }
  }

  const ans = Array(n - 1).fill(0)
  for (let j = 0; j < dp.length; j++) {
    if (dp[j] !== 0) ans[dp[j] - 1]++
  }
  return ans
}
