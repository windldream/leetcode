/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// var searchMatrix = function (matrix, target) {
//   const m = matrix.length
//   if (m === 0) return false
//   const n = matrix[0].length

//   let row = m - 1
//   let col = 0
//   while (row >= 0 && col < n) {
//     if (matrix[row][col] === target) return true
//     else if (matrix[row][col] < target) col++
//     else row--
//   }
//   return false
// }

// var searchMatrix = function (matrix, target) {
//   const m = matrix.length
//   const n = matrix[0].length
//   let l = 0
//   let r = m - 1
//   while (l < r) {
//     const mid = (l + r + 1) >> 1
//     if (matrix[mid][0] <= target) {
//       l = mid
//     } else {
//       r = mid - 1
//     }
//   }

//   let row = r
//   if (matrix[row][0] === target) return true
//   if (matrix[row][0] > target) return false

//   l = 0
//   r = n - 1
//   while (l < r) {
//     const mid = (l + r + 1) >> 1
//     if (matrix[row][mid] <= target) {
//       l = mid
//     } else {
//       r = mid - 1
//     }
//   }
//   return matrix[row][r] === target
// }

var searchMatrix = function (matrix, target) {
  const m = matrix.length
  const n = matrix[0].length
  let l = 0
  let r = m * n - 1
  while (l <= r) {
    const mid = (l + r) >> 1
    const val = matrix[~~(mid / n)][mid % n]
    if (val === target) return true
    else if (val > target) r = mid - 1
    else l = mid + 1
  }
  return false
}
