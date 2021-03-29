/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const m = matrix.length
  if (m === 0) return false
  const n = matrix[0].length

  let row = m - 1
  let col = 0
  while (row >= 0 && col < n) {
    if (matrix[row][col] === target) return true
    else if (matrix[row][col] < target) col++
    else row--
  }
  return false
}
