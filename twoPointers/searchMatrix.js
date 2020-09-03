/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (matrix.length === 0) return false
  const m = matrix.length
  const n = matrix[0].length
  let l = 0,
    r = m * n - 1
  while (l <= r) {
    const mid = (l + r) >> 1
    const num = matrix[Math.floor(mid / n)][mid % n]
    if (num < target) {
      l = mid + 1
    } else if (num > target) {
      r = mid - 1
    } else {
      return true
    }
  }

  return false
}
