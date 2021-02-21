/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  for (let i = 0; i < m; i++) {
    let r = i
    let c = 0
    let prev = matrix[r][c]
    while (r < m && c < n) {
      r++
      c++
      if (r < m && c < n) {
        if (matrix[r][c] !== prev) return false
        prev = matrix[r][c]
      }
    }
  }
  for (let i = 0; i < n; i++) {
    let r = 0
    let c = i
    let prev = matrix[r][c]
    while (r < m && c < n) {
      r++
      c++
      if (r < m && c < n) {
        if (matrix[r][c] !== prev) return false
        prev = matrix[r][c]
      }
    }
  }

  return true
}

//
