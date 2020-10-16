/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const dp = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dp[i][j] = Math.max(i > 0 ? dp[i - 1][j] : 0, j > 0 ? dp[i][j - 1] : 0) + grid[i][j]
    }
  }
  return dp[m - 1][n - 1]
}

maxValue([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
])
