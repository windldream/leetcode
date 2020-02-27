/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
  const r = matrix.length,
    c = matrix[0].length;

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (matrix[i][j] === 1) {
        matrix[i][j] = r + c;
      }
      if (i > 0) {
        matrix[i][j] = Math.min(matrix[i][j], matrix[i - 1][j] + 1);
      }
      if (j > 0) {
        matrix[i][j] = Math.min(matrix[i][j], matrix[i][j - 1] + 1);
      }
    }
  }

  for (let i = r - 1; i >= 0; i--) {
    for (let j = c - 1; j >= 0; j--) {
      if (i < r - 1) {
        matrix[i][j] = Math.min(matrix[i][j], matrix[i + 1][j]);
      }
      if (j < c - 1) {
        matrix[i][j] = Math.min(matrix[i][j], matrix[i][j + 1]);
      }
    }
  }

  return matrix;
};
