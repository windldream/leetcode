/**
 * @param {number} n
 * @return {number}
 */
const totalMoney = function(n) {
  const dp = Array(n + 1).fill(0)
  let ans = 0
  for (let i = 1; i <= n; i++) {
    if (i % 7 === 1) {
      dp[i] = (i > 7 ? dp[i - 7] : 0) + 1
    } else {
      dp[i] = dp[i - 1] + 1
    }
    ans += dp[i]
  }
  return ans
};