/**
 * @param {character[][]} matrix
 * @return {number}
 */
// var maximalSquare = function (matrix) {
//   const m = matrix.length
//   const n = matrix[0].length
//   const dp = Array(m + 1)
//     .fill(0)
//     .map(() => Array(n + 1).fill(0))
//   let max = 0

//   for (let i = 1; i <= m; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (matrix[i - 1][j - 1] === '1') {
//         dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
//         max = Math.max(max, dp[i][j])
//       }
//     }
//   }
//   return max * max
// }

var maximalSquare = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  const dp = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0))
  let max = 0

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === '1') {
        dp[i][j] = j > 0 ? dp[i][j - 1] + 1 : 1
        let width = dp[i][j]
        for (let k = i; k >= 0; k--) {
          width = Math.min(dp[k][j], width)
          if (width === i - k + 1) {
            max = Math.max(max, width)
          }
        }
      }
    }
  }
  return max * max
}

// dp[i][j] === martix[i][j] === 1 ? dp[i - 1][j]
