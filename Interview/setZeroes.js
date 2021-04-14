/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// var setZeroes = function (matrix) {
//   const m = matrix.length
//   if (m === 0) return
//   const n = matrix[0].length
//   if (n === 0) return

//   const zeroes = []
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (matrix[i][j] === 0) zeroes.push([i, j])
//     }
//   }

//   for (const [i, j] of zeroes) {
//     for (let k = 0; k < m; k++) matrix[k][j] = 0
//     for (let k = 0; k < n; k++) matrix[i][k] = 0
//   }
// }

var setZeroes = function (matrix) {
  const m = matrix.length
  if (m === 0) return
  const n = matrix[0].length
  if (n === 0) return

  let row = false
  let col = false
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0
        matrix[i][0] = 0
        if (i === 0) row = true
        if (j === 0) col = true
      }
    }
  }

  for (let i = 1; i < m; i++) {
    if (matrix[i][0] === 0) {
      for (let j = 1; j < n; j++) matrix[i][j] = 0
    }
  }

  for (let j = 1; j < n; j++) {
    if (matrix[0][j] === 0) {
      for (let i = 1; i < m; i++) matrix[i][j] = 0
    }
  }

  if (row) {
    for (let j = 0; j < n; j++) matrix[0][j] = 0
  }

  if (col) {
    for (let i = 0; i < m; i++) matrix[i][0] = 0
  }
}
