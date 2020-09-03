/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (matrix.length === 0) return false
  const m = matrix.length
  let n = matrix[0].length
  let r = 0
  let c = n - 1

  while (r < m && c >= 0) {
    if (matrix[r][c] < target) {
      r++
    } else if (matrix[r][c] > target) {
      c--
    } else {
      return true
    }
  }
  return false
}
