/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var superEggDrop = function (k, n) {
  const dp = Array(n + 1)
    .fill(0)
    .map((val, idx) => Array(k + 1).fill(idx))

  for (let j = 0; j <= k; j++) dp[0][j] = 0

  dp[1][0] = 0

  for (let j = 1; j <= k; j++) dp[1][j] = 1

  for (let i = 0; i <= n; i++) {
    dp[i][0] = 0
    dp[i][1] = i
  }

  for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= k; j++) {
      for (let s = 1; s <= i; s++) {
        dp[i][j] = Math.min(dp[i][j], Math.max(dp[s - 1][j - 1], dp[i - s][j]) + 1)
      }
    }
  }

  return dp[n][k]
}
