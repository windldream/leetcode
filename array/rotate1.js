/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const m = matrix.length
  if (m === 0) return
  const r = (m >> 1) - 1
  const c = (m - 1) >> 1
  for (let i = r; i >= 0; i--) {
    for (let j = c; j >= 0; j--) {
      ;[matrix[i][j], matrix[j][m - i - 1]] = [matrix[j][m - i - 1], matrix[i][j]]
      ;[matrix[i][j], matrix[m - i - 1][m - j - 1]] = [matrix[m - i - 1][m - j - 1], matrix[i][j]]
      ;[matrix[i][j], matrix[m - j - 1][i]] = [matrix[m - j - 1][i], matrix[i][j]]
    }
  }
}
