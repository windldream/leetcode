/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  const mod = 10 ** 9 + 7
  const dp = Array(n + 1).fill(BigInt(0))
  dp[1] = BigInt(1)

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i >> 1; j++) {
      if (dp[i] < dp[i - j] * BigInt(j)) {
        dp[i] = dp[i - j] * BigInt(j)
      }
      if (dp[i] < BigInt((i - j) * j)) {
        dp[i] = BigInt((i - j) * j)
      }
    }
  }
  return dp[n] % BigInt(mod)
}

cuttingRope(996)
