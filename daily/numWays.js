/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
var numWays = function (steps, arrLen) {
  const mod = 1e9 + 7
  const min = Math.min(arrLen - 1, steps)
  const dp = Array(steps + 1)
    .fill(0)
    .map(() => Array(min + 1).fill(0))

  dp[0][0] = 1
  for (let i = 1; i <= steps; ++i) {
    for (let j = 0; j <= min; ++j) {
      dp[i][j] = dp[i - 1][j]
      if (j - 1 >= 0) {
        dp[i][j] = (dp[i][j] + dp[i - 1][j - 1]) % mod
      }
      if (j + 1 <= min) {
        dp[i][j] = (dp[i][j] + dp[i - 1][j + 1]) % mod
      }
    }
  }

  return dp[steps][0]
}

numWays(4, 2)
