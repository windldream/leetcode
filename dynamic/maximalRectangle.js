/**
 * @param {character[][]} matrix
 * @return {number}
 */
// dp[i][j] 表示位置的最大宽度
var maximalRectangle = function(matrix) {
  if (matrix.length === 0) {
    return 0;
  }
  let row = matrix.length, col = matrix[0].length, dp = [], maxArea = 0;

  for (let i = 0; i < row; i++) {
    dp[i] = [];
    for (let j = 0; j < col; j++) {
      dp[i][j] = 0;
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] == 1) {
        dp[i][j] = j === 0 ? 1 : dp[i][j - 1] + 1;
        
        let width = dp[i][j];
        // 计算该位置满足一排都是1最大宽度
        for (let k = i; k >= 0; k--) {
          width = Math.min(width, dp[k][j]);
          maxArea = Math.max(maxArea, (i - k + 1) * width);
        }
      }
    }
  }

  return maxArea;
};

console.log(maximalRectangle([
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]))