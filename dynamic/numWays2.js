/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const numWays = function(n, k) {
  const dp = Array(n + 1).fill(0)
  dp[1] = k
  dp[2] = k * k
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 2] * (k - 1) + dp[i - 1] * (k - 1)
  }
  return dp[n]
};