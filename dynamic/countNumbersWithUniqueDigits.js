/**
 * @param {number} n
 * @return {number}
 */
// 个位数有10种表示方法
// 二位数有9 * 9种表示方法 因为第一位数可以去1到9 第二位数取0-9之间除去第一位的数
var countNumbersWithUniqueDigits = function (n) {
  let dp = [],
    res = [];

  dp[0] = 1;
  dp[1] = 10;
  for (let i = 2; i <= n; i++) {
    if (i === 2) {
      res[i] = 9 * (9 - i + 2);
      dp[i] = res[i] + dp[i - 1];
      continue;
    }
    res[i] = (9 - i + 2) * res[i - 1];
    dp[i] = res[i] + dp[i - 1];
  }

  return dp[n];
};

console.log(countNumbersWithUniqueDigits(3));