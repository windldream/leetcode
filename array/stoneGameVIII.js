/**
 * @param {number[]} stones
 * @return {number}
 */
var stoneGameVIII = function (stones) {
  const n = stones.length
  const sum = Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    sum[i + 1] = sum[i] + stones[i]
  }

  const dp = Array(n + 1).fill(0)
  dp[n] = sum[n]

  for (let i = n - 1; i >= 2; i--) {
    dp[i] = Math.max(dp[i + 1], sum[i] - dp[i + 1])
  }
  return dp[2]
}
