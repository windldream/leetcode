/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  const dirs = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0]
  ]
  const f = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0))
  const list = []

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      list.push([matrix[i][j], i, j])
    }
  }

  list.sort((a, b) => a[0] - b[0])
  let ans = 1

  for (const [val, i, j] of list) {
    f[i][j] = 1
    for (const [di, dj] of dirs) {
      const r = di + i
      const c = dj + j

      if (r >= 0 && c >= 0 && r < m && c < n && matrix[r][c] < val) {
        f[i][j] = Math.max(f[i][j], f[r][c] + 1)
        ans = Math.max(ans, f[i][j])
      }
    }
  }

  return ans
}

longestIncreasingPath([
  [0, 1, 2, 3],
  [0, 0, 5, 4]
])
