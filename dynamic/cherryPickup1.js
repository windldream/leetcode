/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const dp = Array(m)
    .fill(0)
    .map(() =>
      Array(n)
        .fill(0)
        .map(() => Array(n).fill(-1))
    )
  const dir = [-1, 0, 1]
  dp[0][0][n - 1] = grid[0][0] + grid[0][n - 1]
  let ans = dp[0][0][n - 1]

  for (let i = 1; i < m; i++) {
    for (let l = 0; l < n; l++) {
      for (let r = l + 1; r < n; r++) {
        for (let k = 0; k < dir.length; k++) {
          for (let j = 0; j < dir.length; j++) {
            const x1 = l + dir[k]
            const x2 = r + dir[j]
            // x1 >= x2 机器人2走过的路 机器人1不能再走
            if (x1 >= x2 || x1 < 0 || x1 >= n || x2 < 0 || x2 >= n) continue
            if (dp[i - 1][x1][x2] === -1) continue
            dp[i][l][r] = Math.max(dp[i][l][r], dp[i - 1][x1][x2] + grid[i][l] + grid[i][r])
          }
        }
        ans = Math.max(ans, dp[i][l][r])
      }
    }
  }
  return ans
}
