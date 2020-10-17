/**
 * @param {number} n
 * @return {number}
 */
var waysToChange = function (n) {
  const mod = 10 ** 9 + 7
  const coins = [25, 10, 5, 1]
  const dp = Array(n + 1).fill(0)
  dp[0] = 1
  for (const coin of coins) {
    for (let i = coin; i <= n; i++) {
      dp[i] = (dp[i] + dp[i - coin]) % mod
    }
  }
  return dp[n]
}

waysToChange(10)
