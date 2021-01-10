/**
 * @param {number[]} arr
 * @return {number}
 */
const minimumMoves = function (arr) {
  const n = arr.length
  const dp = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0))
  for (let len = 1; len <= n; len++) {
    for (let i = 0; i + len <= n; i++) {
      const j = i + len - 1
      if (arr[i] === arr[j]) {
        if (i + 1 >= j - 1) dp[i][j] = 1
        else {
          dp[i][j] = dp[i + 1][j - 1]
        }
      } else {
        dp[i][j] = Math.min(dp[i + 1][j] + 1, dp[i][j - 1] + 1)
      }
      for (let k = i; k < j; k++) {
        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k + 1][j])
      }
    }
  }

  return dp[0][n - 1]
}

minimumMoves([1, 4, 1, 1, 2, 3, 2, 1])
