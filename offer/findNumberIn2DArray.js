/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// var findNumberIn2DArray = function (matrix, target) {
//   const n = matrix.length
//   if (n === 0) return false
//   const m = matrix[0].length
//   for (let i = 0; i < n; i++) {
//     let l = 0
//     let r = m - 1
//     while (l <= r) {
//       const mid = (l + r) >> 1
//       const val = matrix[i][mid]
//       if (val === target) return true
//       else if (val > target) r = mid - 1
//       else l = mid + 1
//     }
//   }
//   return false
// }

var findNumberIn2DArray = function (matrix, target) {
  const n = matrix.length
  if (n === 0) return false
  const m = matrix[0].length
  let row = n - 1
  let col = 0
  while (row >= 0 && col < m) {
    if (matrix[row][col] === target) return true
    else if (matrix[row][col] < target) col++
    else row--
  }
  return false
}
