/**
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function (s) {
//   const n = s.length
//   const dp = Array(n)
//     .fill(0)
//     .map(() => Array(n).fill(false))
//   let ans = ''
//   for (let len = 1; len <= n; len++) {
//     for (let i = 0; len - 1 + i < n; i++) {
//       const j = len - 1 + i
//       if (s[i] === s[j]) {
//         dp[i][j] = len < 3 ? true : dp[i + 1][j - 1]
//         if (dp[i][j]) {
//           const str = s.substring(i, j + 1)
//           if (str.length > ans.length) {
//             ans = str
//           }
//         }
//       }
//     }
//   }
//   return ans
// }

var longestPalindrome = function (s) {
  const n = s.length
  if (n < 2) return s

  let maxLen = 0
  let start = 0
  for (let i = 0; i < n; i++) {
    extendPalindrome(s, i, i)
    if (s[i] === s[i + 1]) {
      extendPalindrome(s, i, i + 1)
    }
  }
  return s.substr(start, maxLen)

  function extendPalindrome(s, i, j) {
    while (s[i] === s[j] && i >= 0 && j < s.length) {
      i--
      j++
    }
    if (maxLen < j - i - 1) {
      maxLen = j - i - 1
      start = i + 1
    }
  }
}

longestPalindrome('cbbd')
// j - i + 1 = len
// j = len - 1 + i
