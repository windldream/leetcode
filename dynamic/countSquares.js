/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
  const row = matrix.length,
    col = matrix[0].length;
  const dp = Array(row)
    .fill(0)
    .map(() => Array(col).fill(0));

  let res = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      for (let len = 1; len <= Math.min(row - i, col - j); len++) {
        if (len === 1) {
          if (matrix[i][j] === 1) {
            res += 1;
          }
        } else {
          if (isAllOne(i, j, i + len, j + len)) {
            res += 1;
          }
        }
      }
    }
  }

  return res;

  function isAllOne(r1, c1, r, c) {
    for (let i = r1; i < r; i++) {
      for (let j = c1; j < c; j++) {
        if (matrix[i][j] === 0) {
          return false;
        }
      }
    }
    return true;
  }
};
