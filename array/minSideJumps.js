/**
 * @param {number[]} obstacles
 * @return {number}
 */
var minSideJumps = function (obstacles) {
  const n = obstacles.length
  const dp = Array(n)
    .fill(0)
    .map(() => Array(3).fill(Infinity))
  dp[0][1] = 0
  dp[0][0] = 1
  dp[0][2] = 1
  for (let i = 1; i < n; i++) {
    const o = obstacles[i]
    if (o !== 1) dp[i][0] = dp[i - 1][0]
    if (o !== 2) dp[i][1] = dp[i - 1][1]
    if (o !== 3) dp[i][2] = dp[i - 1][2]
    if (o !== 1) dp[i][0] = Math.min(dp[i][0], dp[i][1] + 1, dp[i][2] + 1)
    if (o !== 2) dp[i][1] = Math.min(dp[i][1], dp[i][0] + 1, dp[i][2] + 1)
    if (o !== 3) dp[i][2] = Math.min(dp[i][2], dp[i][0] + 1, dp[i][1] + 1)
  }

  return Math.min(...dp[n - 1])
}

minSideJumps([0, 1, 2, 3, 0])
