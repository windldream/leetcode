/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
// var oneEditAway = function (first, second) {
//   const m = first.length
//   const n = second.length
//   const dp = Array(m + 1)
//     .fill(0)
//     .map(() => Array(n + 1).fill(Infinity))
//   for (let i = 0; i <= m; i++) {
//     dp[i][0] = i
//   }
//   for (let i = 0; i <= n; i++) {
//     dp[0][i] = i
//   }
//   for (let i = 1; i <= m; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (first[i - 1] === second[j - 1]) {
//         dp[i][j] = dp[i - 1][j - 1]
//       } else {
//         // 1.删除
//         // 2.插入
//         // 3.替换
//         dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
//       }
//     }
//   }
//   return dp[m][n] <= 1
// }

var oneEditAway = function (first, second) {
  const m = first.length
  const n = second.length
  if (Math.abs(m - n) > 1) return false
  if (n > m) return oneEditAway(second, first)

  for (let i = 0; i < n; i++) {
    if (first[i] !== second[i]) {
      return first.substring(i + 1) === second.substring(m === n ? i + 1 : i)
    }
  }
  return true
}
