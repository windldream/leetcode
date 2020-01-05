/**
 * @param {number} num
 * @return {number[]}
 */
// 0 -> 00
// 1 -> 01
// 2 -> 10
// 3 -> 11
// 4 -> 100
// 5 -> 101
// 6 -> 110 
var countBits = function (num) {
  let dp = [];
  dp[0] = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 2) {
      dp[i] = dp[i - 1] + 1;
    } else {
      dp[i] = dp[i / 2];
    }
  }
  return dp;
};

console.log(countBits(5));