/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
// dp[i][j] = dp[]
var uniquePathsWithObstacles = function (obstacleGrid) {
  let row = obstacleGrid.length,
    col = obstacleGrid[0].length,
    dp = [];

  if (obstacleGrid[row - 1][col - 1] || obstacleGrid[0][0]) {
    return 0;
  }

  for (let i = 0; i < row; i++) {
    dp[i] = [];
    for (let j = 0; j < col; j++) {
      if (i === 0 || j === 0) {
        if (obstacleGrid[i][j]) {
          dp[i][j] = 0;
        } else {
          if (i === 0 && j === 0) {
            dp[i][j] = 1;
          } else {
            dp[i][j] = i === 0 ? dp[i][j - 1] : dp[i - 1][j];
          }
        }
      } else {
        if (obstacleGrid[i][j]) {
          dp[i][j] = 0;
        } else {
          dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
      }
    }
  }

  return dp[row - 1][col - 1];
};

console.log(uniquePathsWithObstacles([
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
]));