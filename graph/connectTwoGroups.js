/**
 * @param {number[][]} cost
 * @return {number}
 */
var connectTwoGroups = function (cost) {
  const m = cost.length
  const n = cost[0].length
  const costMatrix = Array(m)
    .fill(0)
    .map(() => Array(1 << n).fill(0))
  for (let k = 0; k < m; k++) {
    for (let i = 0; i < 1 << n; i++) {
      let sum = 0
      for (let j = 0; j < n; j++) {
        if ((i & (1 << j)) > 0) {
          sum += cost[k][j]
        }
      }
      costMatrix[k][i] = sum
    }
  }

  const dp = Array(m)
    .fill(0)
    .map(() => Array(1 << n).fill(Infinity))
  dp[0] = costMatrix[0]
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < 1 << n; j++) {
      for (let k = 1; k < 1 << n; k++) {
        dp[i][j | k] = Math.min(dp[i][j | k], dp[i - 1][k] + costMatrix[i][j])
      }
    }
  }
  return dp[m - 1][(1 << n) - 1]
}
