/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  if (matrix.length === 0) {
    return 0;
  }
  let row = matrix.length, col = matrix[0].length, dp = [], max = 0;

  for (let i = 0; i < row; i++) {
    dp[i] = [];
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] == 1) {
        dp[i][j] = (dp[i][j - 1] === undefined ? 0 : dp[i][j - 1]) + 1;

        let width = dp[i][j];
        for (let k = i; k >= 0; k--) {
          width = Math.min(dp[k][j], width);
          if (width === i - k + 1) {
            max = Math.max(max, width * width);
          }
        }
      } else {
        dp[i][j] = 0;
      }
    }
  }

  return max;
};

console.log(maximalSquare([
  [1, 0, 1, 0, 0],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0]
]))