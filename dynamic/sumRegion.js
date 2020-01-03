/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  if (matrix.length === 0) {
    return;
  }
  if (matrix.length && matrix[0].length === 0) {
    return;
  }
  if (matrix.length && matrix[0].length && matrix[0][0].length === 0) {
    return;
  }
  this.sum = [];
  let row = matrix.length, col = matrix[0].length;
  for (let i = 0; i < row; i++) {
    this.sum[i] = [];
    this.sum[i][0] = 0;
    for (j = 0; j < col; j++) {
      this.sum[i][j + 1] = this.sum[i][j] + matrix[i][j];
    }
  }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  let sum = 0;
  for (let i = row1; i <= row2; i++) {
    sum += this.sum[i][col2 + 1] - this.sum[i][col1] ;
  }
  return sum;
};

let obj = new NumMatrix([[[]]]);

console.log(obj.sumRegion(2, 1, 4, 3))

