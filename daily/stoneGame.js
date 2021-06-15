/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function (piles) {
  const n = piles.length
  const dp = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0))
  // 只有一颗石子的时候
  for (let i = 0; i < n; i++) {
    dp[i][i] = piles[i]
  }
  for (let len = 1; len < n; len++) {
    for (let i = 0; i < n - len; i++) {
      dp[i][i + len] = Math.max(piles[i] - dp[i + 1][i + len], piles[i + len] - dp[i][i + len - 1])
    }
  }
  return dp[0][n - 1]
}
