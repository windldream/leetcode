/**
 * @param {number[][]} grid
 * @return {number}
 */
const countCornerRectangles = function (grid) {
  const n = grid.length
  if (n <= 1) return 0
  const m = grid[0].length
  const dp = Array(n)
    .fill(0)
    .map(() => Array(m).fill(0))
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1]
      if (grid[i][j] === 1) {
        const rows = []
        for (let k = 0; k < i; k++) {
          if (grid[k][j] === 1) rows.push(k)
        }

        const cols = []
        for (let k = 0; k < j; k++) {
          if (grid[i][k] === 1) cols.push(k)
        }

        let count = 0
        for (const row of rows) {
          for (const col of cols) {
            if (grid[row][col] === 1) count++
          }
        }

        dp[i][j] += count
      }
    }
  }

  return dp[n - 1][m - 1]
}

countCornerRectangles([
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1]
])
