/**
 * @param {number} n
 * @return {number}
 */
var findDerangement = function(n) {
  if (n === 1) return 0
  const mod = 10 ** 9 + 7
  const dp = Array(n + 1).fill(0)
  dp[1] = 0
  dp[2] = 1
  for (let i = 3; i <= n; i++) {
    dp[i] = (i - 1) * (dp[i - 1] + dp[i - 2]) % mod
  }
  return dp[n]
};