/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  const mod = 10 ** 9 + 7
  const dp = Array(n).fill(0)
  dp[0] = 1
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % mod
  }
  return dp[n]
}
