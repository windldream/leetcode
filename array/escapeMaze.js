/**
 * @param {string[][]} maze
 * @return {boolean}
 */
var escapeMaze = function (maze) {
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [0, 0]
  ]
  const T = maze.length
  const m = maze[0].length
  const n = maze[0][0].length
  const dp = Array(T)
    .fill(0)
    .map(() =>
      Array(m)
        .fill(0)
        .map(() =>
          Array(n)
            .fill(0)
            .map(() => Array(4).fill(0))
        )
    )
  const can = Array(m)
    .fill(0)
    .map(() =>
      Array(n)
        .fill(0)
        .map(() => Array(2).fill(0))
    )

  for (let t = 0; t < T; t++) {
    for (let k = 0; k < 4; k++) {
      dp[t][m - 1][n - 1][k] = 1
    }
  }
  can[m - 1][n - 1][0] = can[m - 1][n - 1][1] = 1

  for (let t = T - 2; t >= 0; t--) {
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        for (let k = 0; k < 4; k++) {
          const u1 = k & 1
          const u2 = k & 2
          for (const [dx, dy] of dirs) {
            const x = dx + i
            const y = dy + j
            if (x >= 0 && x < m && y >= 0 && y < n) {
              if (maze[t + 1][x][y] === '.') {
                dp[t][i][j][k] |= dp[t + 1][x][y][k]
              } else {
                if (u1 === 0) {
                  dp[t][i][j][k] |= dp[t + 1][x][y][k | 1]
                }
                if (u2 === 0) {
                  dp[t][i][j][k] |= can[x][y][u1]
                }
              }
            }
          }
        }
      }
    }
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        // 使用临时消除
        can[i][j][0] |= dp[t][i][j][2]
        // 使用永久消除
        can[i][j][1] |= dp[t][i][j][3]
      }
    }
  }

  return dp[0][0][0][0] === 1
}
