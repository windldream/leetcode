/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var maxUncrossedLines = function (A, B) {
  const m = A.length
  const n = B.length
  const dp = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0))
  for (let i = 0; i < m; i++) {
    dp[i][0] = 0
  }
  for (let i = 0; i < n; i++) {
    dp[0][i] = 0
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (A[i - 1] === B[j - 1]) {
        dp[i][j] = Math.max(dp[i - 1][j - 1] + 1, dp[i - 1][j], dp[i][j - 1])
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[m][n]
}

maxUncrossedLines([1, 4, 2], [1, 2, 4])
