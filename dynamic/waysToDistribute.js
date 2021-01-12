/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const waysToDistribute = function (n, k) {
  const mod = 10 ** 9 + 7
  const dp = Array(n + 1)
    .fill(0)
    .map(() => Array(k + 1).fill(0))
  for (let i = 1; i <= n; i++) {
    dp[i][1] = 1
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 2; j <= k; j++) {
      if (i === j) {
        dp[i][j] = 1
      } else {
        dp[i][j] = (((dp[i - 1][j] * j) % mod) + dp[i - 1][j - 1]) % mod
      }
    }
  }

  return dp[n][k]
}
