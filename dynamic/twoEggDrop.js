/**
 * @param {number} n
 * @return {number}
 */
var twoEggDrop = function (n) {
  const dp = Array(2)
    .fill(0)
    .map(() => Array(n + 1).fill(Infinity))

  dp[0][0] = dp[1][0] = 0
  for (let i = 1; i <= n; i++) dp[0][i] = i
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[1][i] = Math.min(Math.max(dp[0][j - 1], dp[1][i - j]) + 1, dp[1][i])
    }
  }
  return dp[1][n]
}
