/**
 * @param {number} n
 * @return {number}
 */
// 7 = 3 + 4 = 2 + 5 = 12
// 8 = 2 + 2 + 2 + 2 = 2 + 3 + 3
// 9 = 3 + 3 + 3 = 2 + 3 + 4 = 27
// f(3) = f(1) + f(2) = 
var integerBreak = function (n) {
  let dp = [];
  dp[0] = 0;
  dp[1] = 0;
  dp[2] = 1;
  dp[3] = 2;

  if (n <= 3) {
    return dp[n];
  }

  dp[2] = 2;
  dp[3] = 3;
  for (let i = 4; i <= n; i++) {
    if (i - 3 > 1) {
      dp[i] = dp[i - 3] * 3;
    } else if (i - 2 > 1) {
      dp[i] = dp[i - 2] * 2;
    }
  }

  return dp[n];
};

console.log(integerBreak(6));