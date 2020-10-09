/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var numOfArrays = function (n, m, k) {
  const mod = 10 ** 9 + 7
  const dp = Array(n + 1)
    .fill(0)
    .map(() =>
      Array(m + 1)
        .fill(0)
        .map(() => Array(k + 1).fill(0))
    )

  for (let i = 1; i <= m; i++) {
    dp[1][i][1] = 1
  }

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      for (let cost = 1; cost <= k; cost++) {
        for (let s = 1; s <= j - 1; s++) {
          dp[i][j][cost] = dp[i][j][cost] + dp[i - 1][s][cost - 1]
        }
        dp[i][j][cost] = (dp[i - 1][j][cost] * j + dp[i][j][cost]) % mod
      }
    }
  }

  let ans = 0
  for (let i = 1; i <= m; i++) {
    ans = (ans + dp[n][i][k]) % mod
  }

  return ans
}
