/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
  const len = costs.length
  if (len === 0) return 0

  const dp = Array(len).fill(0).map(() => Array(3).fill(0))
  dp[0][0] = costs[0][0]
  dp[0][1] = costs[0][1]
  dp[0][2] = costs[0][2]
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < 3; j++) {
      if (j === 0) {
        dp[i][j] = Math.min(dp[i - 1][1], dp[i - 1][2]) + costs[i][j]
      } else if (j === 1) {
        dp[i][j] = Math.min(dp[i - 1][0], dp[i - 1][2]) + costs[i][j]
      } else {
        dp[i][j] = Math.min(dp[i - 1][0], dp[i - 1][1]) + costs[i][j]
      }
    }
  }

  return Math.min(...dp[len - 1])
};