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
    const red = leaves[i] === 'r' ? 0 : 1
    const yellow = leaves[i] === 'y' ? 0 : 1
    if (i < 1) {
      dp[0][i] = red
    } else {
      dp[0][i] = dp[0][i - 1] + red
    }

    if (i < 1) {
      dp[1][i] = dp[0][i]
    } else {
      dp[1][i] = Math.min(dp[0][i - 1] + yellow, dp[1][i - 1] + yellow)
    }

    if (i < 2) {
      dp[2][i] = dp[1][i]
    } else {
      dp[2][i] = Math.min(dp[1][i - 1] + red, dp[2][i - 1] + red)
    }
  }
  return dp[2][n - 1]
}
