/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  const matrixSum = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0))

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      matrixSum[i + 1][j + 1] = matrixSum[i][j + 1] + matrixSum[i + 1][j] - matrixSum[i][j] + matrix[i][j]
    }
  }

  this.matrixSum = matrixSum
}

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  return (
    this.matrixSum[row2 + 1][col2 + 1] -
    this.matrixSum[row1][col2 + 1] -
    this.matrixSum[row2 + 1][col1] +
    this.matrixSum[row1][col1]
  )
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
