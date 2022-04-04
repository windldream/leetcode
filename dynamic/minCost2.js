/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function (costs) {
  const n = costs.length
  const dp = Array(n)
    .fill(0)
    .map(() => Array(3).fill(0))

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      dp[i][0] = costs[i][0]
      dp[i][1] = costs[i][1]
      dp[i][2] = costs[i][2]
    } else {
      dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + costs[i][0]
      dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + costs[i][1]
      dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + costs[i][2]
    }
  }

  return Math.min(...dp[n - 1])
}
