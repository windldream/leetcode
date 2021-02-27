/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  const rows = matrix.length
  if (rows === 0) return 0
  const cols = matrix[0].length
  const dp = Array(rows)
    .fill(0)
    .map(() => Array(cols).fill(0))

  let ans = 0
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === '1') {
        dp[i][j] = j === 0 ? 1 : dp[i][j - 1] + 1
        let width = dp[i][j]
        for (let k = i; k >= 0; k--) {
          width = Math.min(width, dp[k][j])
          ans = Math.max(ans, width * (i - k + 1))
        }
      }
    }
  }
  return ans
}
