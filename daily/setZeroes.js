/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  const rowSet = new Set()
  const colSet = new Set()
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        rowSet.add(i)
        colSet.add(j)
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rowSet.has(i) || colSet.has(j)) matrix[i][j] = 0
    }
  }
}

//
