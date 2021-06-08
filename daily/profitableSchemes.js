/**
 * @param {number} n
 * @param {number} minProfit
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 */
var profitableSchemes = function (n, minProfit, group, profit) {
  const mod = 1e9 + 7
  const m = group.length
  const dp = Array(n + 1)
    .fill(0)
    .map(() => Array(minProfit + 1).fill(0))
  for (let j = 0; j <= n; j++) dp[j][0] = 1

  for (let i = 1; i <= m; i++) {
    const g = group[i - 1]
    const p = profit[i - 1]
    for (let j = n; j >= g; j--) {
      for (let k = minProfit; k >= 0; k--) {
        dp[j][k] = (dp[j][k] + dp[j - g][Math.max(k - p, 0)]) % mod
      }
    }
  }
  return dp[n][minProfit]
}
