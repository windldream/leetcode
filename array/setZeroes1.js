/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const m = matrix.length
  if (m === 0) return
  const n = matrix[0].length
  const copy = Array(m)
    .fill(0)
    .map((val, index) => matrix[index].slice())

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        for (let r = 0; r < m; r++) {
          copy[r][j] = 0
        }
        for (let c = 0; c < n; c++) {
          copy[i][c] = 0
        }
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = copy[i][j]
    }
  }
}
