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
    let n = Math.floor(Math.log2(i));
    if (i - Math.pow(2, n) === 0) {
      dp[i] = 1;
    } else {
      dp[i] = dp[i - Math.pow(2, n)] + 1;
    }
  }
  return dp;
};

console.log(countBits(5));