/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxProductPath = function (grid) {
  const mod = 10 ** 9 + 7
  const m = grid.length
  const n = grid[0].length
  const dp = Array(m)
    .fill(0)
    .map(() =>
      Array(n)
        .fill(0)
        .map(() => [1, 1])
    )

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        dp[i][j][0] = grid[i][j]
        dp[i][j][1] = grid[i][j]
      } else if (i === 0) {
        dp[i][j][0] = dp[i][j - 1][0] * grid[i][j]
        dp[i][j][1] = dp[i][j - 1][1] * grid[i][j]
      } else if (j === 0) {
        dp[i][j][0] = dp[i - 1][j][0] * grid[i][j]
        dp[i][j][1] = dp[i - 1][j][1] * grid[i][j]
      } else {
        dp[i][j][0] = Math.max(
          dp[i][j - 1][0] * grid[i][j],
          dp[i][j - 1][1] * grid[i][j],
          dp[i - 1][j][0] * grid[i][j],
          dp[i - 1][j][1] * grid[i][j]
        )
        dp[i][j][1] = Math.min(
          dp[i][j - 1][0] * grid[i][j],
          dp[i][j - 1][1] * grid[i][j],
          dp[i - 1][j][0] * grid[i][j],
          dp[i - 1][j][1] * grid[i][j]
        )
      }
    }
  }

  return dp[m - 1][n - 1][0] >= 0 ? dp[m - 1][n - 1][0] % mod : -1
}

maxProductPath([
  [-1, -2, -3],
  [-2, -3, -3],
  [-3, -3, -2]
])
