/**
 * @param {number} n
 * @return {number}
 */
var countOrders = function (n) {
  const mod = 10 ** 9 + 7
  const dp = Array(n + 1).fill(0)
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    const num = 2 * (i - 1) + 1
    dp[i] = (dp[i - 1] * ((num * (num - 1)) / 2 + num)) % mod
  }
  return dp[n]
}
