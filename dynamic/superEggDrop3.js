/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var superEggDrop = function (k, n) {
  const dp = Array(k)
    .fill(0)
    .map(() => Array(n + 1).fill(Infinity))
  for (let i = 0; i < k; i++) dp[i][0] = 0
  for (let i = 1; i <= n; i++) dp[0][i] = i

  for (let i = 1; i <= n; i++) {
    for (let s = 1; s < k; s++) {
      for (let j = 1; j <= i; j++) {
        dp[s][i] = Math.min(dp[s][i], Math.max(dp[s - 1][j - 1], dp[s][i - j]) + 1)
      }
    }
  }
  return dp[k - 1][n]
}
