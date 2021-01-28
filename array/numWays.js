/**
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
var numWays = function (n, relation, k) {
  const g = new Map()
  for (const [u, v] of relation) {
    if (!g.has(u)) g.set(u, new Set())
    g.get(u).add(v)
  }

  const dp = Array(k + 1)
    .fill(0)
    .map(() => Array(n).fill(0))
  for (const next of g.get(0)) {
    dp[1][next] = 1
  }

  for (let i = 2; i <= k; i++) {
    for (let j = 0; j < n; j++) {
      for (let s = 0; s < n; s++) {
        if (s === j) continue
        if (g.has(s) && g.get(s).has(j)) {
          dp[i][j] += dp[i - 1][s]
        }
      }
    }
  }
  return dp[k][n - 1]
}

numWays(
  5,
  [
    [0, 2],
    [2, 1],
    [3, 4],
    [2, 3],
    [1, 4],
    [2, 0],
    [0, 4]
  ],
  3
)
