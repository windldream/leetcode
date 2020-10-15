/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  const dp = Array(n + 1).fill(0)
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    const mid = i >> 1
    dp[i] = (i - mid) * mid
    for (let j = 1; j < i; j++) {
      dp[i] = Math.max(dp[i], dp[i - j] * j)
    }
  }
  return dp[n]
}

cuttingRope(6)
