/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const m = matrix.length
  if (m === 0) return
  const n = matrix[0].length
  if (n === 0) return

  const zeroes = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) zeroes.push([i, j])
    }
  }

  for (const [i, j] of zeroes) {
    for (let k = 0; k < m; k++) matrix[k][j] = 0
    for (let k = 0; k < n; k++) matrix[i][k] = 0
  }
}
