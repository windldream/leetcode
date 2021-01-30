/**
 * @param {string} leaves
 * @return {number}
 */
var minimumOperations = function (leaves) {
  const n = leaves.length
  const dp = Array(3)
    .fill(0)
    .map(() => Array(n).fill(0))
  for (let i = 0; i < n; i++) {
    if (i < 1) {
      dp[0][i] = leaves[i] === 'r' ? 0 : 1
    } else {
      dp[0][i] = dp[0][i - 1] + (leaves[i] === 'r' ? 0 : 1)
    }

    if (i < 1) {
      dp[1][i] = dp[0][i]
    } else {
      dp[1][i] = Math.min(dp[0][i - 1] + (leaves[i] === 'y' ? 0 : 1), dp[1][i - 1] + (leaves[i] === 'y' ? 0 : 1))
    }

    if (i < 2) {
      dp[2][i] = dp[1][i]
    } else {
      dp[2][i] = Math.min(dp[1][i - 1] + (leaves[i] === 'r' ? 0 : 1), dp[2][i - 1] + (leaves[i] === 'r' ? 0 : 1))
    }
  }
  return dp[2][n - 1]
}
