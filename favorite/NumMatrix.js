/**
 * @param {number[][]} matrix
 */
const NumMatrix = function (matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) return

  this.matrix = matrix
  this.row = matrix.length
  this.col = matrix[0].length
  this.rowSum = Array(this.row)
    .fill(0)
    .map(() => Array(this.col).fill(0))
  for (let i = 0; i < this.row; i++) {
    this.rowSum[i][0] = matrix[i][0]
    for (let j = 1; j < this.col; j++) {
      this.rowSum[i][j] = this.rowSum[i][j - 1] + matrix[i][j]
    }
  }
}

/**
 * @param {number} row
 * @param {number} col
 * @param {number} val
 * @return {void}
 */
NumMatrix.prototype.update = function (row, col, val) {
  this.matrix[row][col] = val
  let fromCol = col
  if (col === 0) {
    this.rowSum[row][col] = val
    fromCol += 1
  }
  for (let j = fromCol; j < this.col; j++) {
    this.rowSum[row][j] = this.rowSum[row][j - 1] + this.matrix[row][j]
  }
}

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  let sum = 0
  for (let i = row1; i <= row2; i++) {
    sum += col1 === 0 ? this.rowSum[i][col2] : this.rowSum[i][col2] - this.rowSum[i][col1 - 1]
  }
  return sum
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * obj.update(row,col,val)
 * var param_2 = obj.sumRegion(row1,col1,row2,col2)
 */
