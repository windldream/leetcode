/**
 * @param {string} s
 * @return {number}
 */
// var strangePrinter = function (s) {
//   const n = s.length
//   if (n < 2) return n

//   const dp = Array(n)
//     .fill(0)
//     .map(() => Array(n).fill(0))
//   return dfs(s, 0, n - 1)

//   function dfs(s, i, j) {
//     if (i > j) return 0

//     if (dp[i][j] === 0) {
//       let min = 1 + dfs(s, i + 1, j)
//       for (let k = i + 1; k <= j; k++) {
//         if (s[i] === s[k]) {
//           min = Math.min(min, dfs(s, i, k - 1) + dfs(s, k + 1, j))
//         }
//       }
//       dp[i][j] = min
//     }

//     return dp[i][j]
//   }
// }

var strangePrinter = function (s) {
  const n = s.length
  const dp = Array(n + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0))
  for (let i = 0; i < n; i++) {
    dp[i][i] = 1
  }

  for (let len = 2; len <= n; len++) {
    for (let i = 0; i + len - 1 < n; i++) {
      let j = i + len - 1
      dp[i][j] = dp[i + 1][j] + 1
      for (let k = i + 1; k < j; k++) {
        if (s[i] === s[k]) {
          dp[i][j] = Math.min(dp[i][j], dp[i][k - 1] + dp[k + 1][j])
        }
      }
    }
  }
  return dp[0][n - 1]
}
