/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const n = matrix.length
  if (n === 0) return false
  const m = matrix[0].length
  if (m === 0) return false

  let row = n - 1
  let col = 0
  while (row >= 0 && col < m) {
    if (matrix[row][col] === target) return true
    if (matrix[row][col] > target) {
      row--
    } else if (matrix[row][col] < target) {
      col++
    }
  }
  return false
}
