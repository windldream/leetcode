/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const numberOfSets = function (n, k) {
  const mod = 10 ** 9 + 7
  const dp = Array(n)
    .fill(0)
    .map(() =>
      Array(k + 1)
        .fill(0)
        .map(() => Array(2).fill(0))
    )
  dp[0][0][0] = 1
  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= k; j++) {
      // 不包含第 i 个点
      dp[i][j][0] = (dp[i - 1][j][0] + dp[i - 1][j][1]) % mod
      // 包含第 i 个点
      dp[i][j][1] = dp[i - 1][j][1]
      if (j > 0) {
        dp[i][j][1] += dp[i - 1][j - 1][0]
        dp[i][j][1] %= mod
        dp[i][j][1] += dp[i - 1][j - 1][1]
        dp[i][j][1] %= mod
      }
    }
  }

  return (dp[n - 1][k][0] + dp[n - 1][k][1]) % mod
}
