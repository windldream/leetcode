/**
 * @param {number} n
 * @return {number}
 */
var nthPersonGetsNthSeat = function(n) {
  const dp = [0, 1];
  // 如果第一个人坐对位置 则第 n 个人能坐对位置
  // 否则 如果第 n 个人 取决与 第 n - 1 个人能否坐对位置
  for (let i = 2; i <= n; i++) {
    dp[i] = 1 / i + dp[i - 1] * ((i - 2) / i);
  }
  return dp[n];
};
