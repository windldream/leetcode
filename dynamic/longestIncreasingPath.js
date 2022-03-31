/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  const dp = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0))
  let max = 0

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      max = Math.max(max, dfs(i, j, matrix, dp, -1))
    }
  }

  return max

  function dfs(i, j, matrix, dp, pre) {
    const m = matrix.length
    const n = matrix[0].length

    if (i < 0 || i >= m || j < 0 || j >= n) return 0

    const val = matrix[i][j]

    if (val <= pre) return 0

    if (dp[i][j] !== 0) return dp[i][j]

    dp[i][j] =
      1 +
      Math.max(
        dfs(i - 1, j, matrix, dp, val),
        dfs(i + 1, j, matrix, dp, val),
        dfs(i, j - 1, matrix, dp, val),
        dfs(i, j + 1, matrix, dp, val)
      )

    return dp[i][j]
  }
}
