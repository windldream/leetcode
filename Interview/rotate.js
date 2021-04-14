/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// var rotate = function (matrix) {
//   const n = matrix.length
//   const copy = Array(n)
//     .fill(0)
//     .map(() => Array(n).fill(0))
//   for (let j = 0; j < n; j++) {
//     for (let i = n - 1; i >= 0; i--) {
//       copy[j][n - i - 1] = matrix[i][j]
//     }
//   }

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       matrix[i][j] = copy[i][j]
//     }
//   }
// }

var rotate = function (matrix) {
  const n = matrix.length
  if (n === 0) return
  for (let i = 0; i < n >> 1; i++) {
    for (let j = i; j < n - i - 1; j++) {
      const tmp = matrix[i][j]
      matrix[i][j] = matrix[n - j - 1][i]
      matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1]
      matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1]
      matrix[j][n - i - 1] = tmp
    }
  }
}

rotate([
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16]
])
