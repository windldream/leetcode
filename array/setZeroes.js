/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const m = matrix.length
  if (m === 0) return
  const n = matrix[0].length
  if (n === 0) return

  const indexs = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        indexs.push([i, j])
      }
    }
  }

  for (const [row, col] of indexs) {
    for (let c = 0; c < n; c++) {
      matrix[row][c] = 0
    }
    for (let r = 0; r < m; r++) {
      matrix[r][col] = 0
    }
  }
}
