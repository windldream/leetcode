/**
 * @param {number[][]} obstacleGrid
 * @return {number[][]}
 */
var pathWithObstacles = function (obstacleGrid) {
  const n = obstacleGrid.length
  if (n === 0 || obstacleGrid[0].length === 0 || obstacleGrid[0][0] === 1) return []
  const m = obstacleGrid[0].length
  const dp = Array(n)
    .fill(0)
    .map(() => Array(m).fill(false))
  dp[0][0] = true
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (obstacleGrid[i][j] === 0) {
        if (i === 0 && j === 0) continue
        if (i === 0) dp[i][j] = dp[i][j - 1]
        else if (j === 0) dp[i][j] = dp[i - 1][j]
        else dp[i][j] = dp[i - 1][j] || dp[i][j - 1]
      }
    }
  }

  if (!dp[n - 1][m - 1]) return []

  const ans = []
  let i = n - 1
  let j = m - 1
  while (i !== 0 || j !== 0) {
    ans.push([i, j])
    if (i >= 1 && dp[i - 1][j]) {
      i--
    } else {
      j--
    }
  }
  ans.push([0, 0])
  return ans.reverse()
}

pathWithObstacles([
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
])
