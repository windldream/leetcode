/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  const row = matrix.length
  const col = matrix[0].length
  for (let i = 0; i < row; i++) {
    let r = i
    let c = 0
    while (r < row && c < col) {
      if (r + 1 < row && c + 1 < col) {
        if (matrix[r + 1][c + 1] !== matrix[r][c]) {
          return false
        }
      }
      r++
      c++
    }
  }

  for (let i = 0; i < col; i++) {
    let r = 0
    let c = i
    while (r < row && c < col) {
      if (r + 1 < row && c + 1 < col) {
        if (matrix[r + 1][c + 1] !== matrix[r][c]) {
          return false
        }
      }
      r++
      c++
    }
  }

  return true
}
