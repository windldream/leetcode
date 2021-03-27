/**
 * @param {string} s
 * @return {number}
 */
// var countSubstrings = function (s) {
//   const n = s.length
//   const dp = Array(n)
//     .fill(0)
//     .map(() => Array(n).fill(false))
//   let ans = 0
//   for (let len = 1; len <= n; len++) {
//     for (let i = 0; i + len - 1 < n; i++) {
//       const j = i + len - 1
//       if (s[i] === s[j]) {
//         dp[i][j] = len < 3 ? true : dp[i + 1][j - 1]
//         ans += dp[i][j]
//       } else {
//         dp[i][j] = false
//       }
//     }
//   }
//   return ans
// }

var countSubstrings = function (s) {
  let ans = 0
  for (let i = 0; i < s.length; i++) {
    countStr(i, i, s)
    countStr(i, i + 1, s)
  }
  return ans

  function countStr(l, r, s) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--
      r++
      ans += 1
    }
  }
}
