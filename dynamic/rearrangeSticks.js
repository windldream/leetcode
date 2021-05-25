/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var rearrangeSticks = function (n, k) {
  const mod = 1e9 + 7
  const dp = Array(n + 1)
    .fill(0)
    .map(() => Array(k + 1).fill(0))
  dp[1][1] = 1
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= Math.min(i, k); j++) {
      dp[i][j] = (dp[i - 1][j] * (i - 1) + dp[i - 1][j - 1]) % mod
    }
  }
  return dp[n][k]
}

// 1 2 -> 1 3 2
// 1 2 -> 1 4 2
