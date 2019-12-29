/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  let row = triangle.length, dp = [];
  
  for (let i = 0; i < row; i++) {
    dp[i] = [];
    for (let j = 0; j < triangle[i].length; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = triangle[i][j]; 
      } else if (j === 0) {
        dp[i][j] = dp[i - 1][j] + triangle[i][j];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], (dp[i - 1][j] !== undefined) ? dp[i - 1][j] : dp[i - 1][j - 1]) + triangle[i][j]
      }
    }
  }

  return Math.min(...dp[row - 1]);
};

console.log(minimumTotal([[7],[-5,9],[6,5,2],[-8,-2,-7,3],[-2,6,-6,-1,4]]));