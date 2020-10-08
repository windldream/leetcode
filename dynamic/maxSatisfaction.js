/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function (satisfaction) {
  satisfaction.sort((a, b) => a - b)
  const n = satisfaction.length
  if (satisfaction[n - 1] <= 0) return 0

  const dp = Array(n + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0))
  dp[1][0] = 0
  dp[1][1] = satisfaction[0]
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if (i === j) dp[i][j] = dp[i - 1][j - 1] + satisfaction[i - 1] * j
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] + satisfaction[i - 1] * j)
    }
  }

  return Math.max(...dp[n])
}

maxSatisfaction([-1, -8, 0, 5, -7])
