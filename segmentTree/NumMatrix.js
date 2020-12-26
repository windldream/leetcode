/**
 * @param {number[][]} matrix
 */
const NumMatrix = function(matrix) {
  this.matrix = matrix
};

/**
 * @param {number} row
 * @param {number} col
 * @param {number} val
 * @return {void}
 */
NumMatrix.prototype.update = function(row, col, val) {
  this.matrix[row][col] = val
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  if (this.matrix.length === 0 || this.matrix[0].length === 0) return 0
  if (row1 < 0 || row2 >= this.matrix.length || col1 < 0 || col2 >= this.matrix[0].length) return 0
  let ans = 0
  for (let i = row1; i <= row2; i++) {
    for (let j = col1; j <= col2; j++) {
      ans += this.matrix[i][j]
    }
  }
  return ans
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * obj.update(row,col,val)
 * var param_2 = obj.sumRegion(row1,col1,row2,col2)
 */