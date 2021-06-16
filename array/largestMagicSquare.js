/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestMagicSquare = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const sum1 = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 2).fill(0))
  const sum2 = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 2).fill(0))
  const sum3 = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 2).fill(0))
  const sum4 = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 2).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      sum1[i + 1][j + 1] = sum1[i + 1][j] + grid[i][j] // 行
      sum2[i + 1][j + 1] = sum2[i][j + 1] + grid[i][j] // 列
      sum3[i + 1][j + 1] = sum3[i][j] + grid[i][j] // \
      sum4[i + 1][j + 1] = sum4[i][j + 2] + grid[i][j] // /
    }
  }

  let ans = 1
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 1; i + k < m && j + k < n; k++) {
        if (check(i, j, i + k, j + k)) {
          ans = Math.max(ans, k + 1)
        }
      }
    }
  }
  return ans

  function check(x1, y1, x2, y2) {
    const num = sum3[x2 + 1][y2 + 1] - sum3[x1][y1] // \
    if (num !== sum4[x2 + 1][y1 + 1] - sum4[x1][y2 + 2]) return false // /
    for (let i = x1 + 1; i <= x2; i++) {
      if (num !== sum1[i + 1][y2 + 1] - sum1[i + 1][y1]) return false
    }
    for (let i = y1 + 1; i <= y2; i++) {
      if (num !== sum2[x2 + 1][i + 1] - sum2[x1][i + 1]) return false
    }
    return true
  }
}

largestMagicSquare([
  [1, 3, 1],
  [1, 1, 3],
  [3, 1, 3]
])
