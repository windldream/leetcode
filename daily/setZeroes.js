/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  const queue = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) queue.push([i, j])
    }
  }

  for (const [r, c] of queue) {
    for (let k = 0; k < m; k++) {
      matrix[k][c] = 0
    }
    for (let k = 0; k < n; k++) {
      matrix[r][k] = 0
    }
  }
}

//
