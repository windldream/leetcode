/**
 * @param {number[]} stones
 * @return {number}
 */
const stoneGameVII = function (stones) {
  const len = stones.length
  const prefixSum = Array(len + 1).fill(0)
  for (let i = 0; i < len; i++) {
    prefixSum[i + 1] = prefixSum[i] + stones[i]
  }
  const dp = Array(len)
    .fill(0)
    .map(() => Array(len).fill(0))
  for (let n = 1; n <= len; n++) {
    for (let i = 0; i + n <= len; i++) {
      const j = n + i - 1
      if (i === j) {
        dp[i][j] = 0
      } else if (j - i === 1) {
        dp[i][j] = Math.max(stones[i], stones[j])
      } else {
        dp[i][j] = Math.max(
          prefixSum[j + 1] - prefixSum[i + 1] - dp[i + 1][j],
          prefixSum[j] - prefixSum[i] - dp[i][j - 1]
        )
      }
    }
  }

  return dp[0][len - 1]
}

stoneGameVII([5, 3, 1, 4, 2])
