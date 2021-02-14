/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const n = s.length
  const dp = Array(n)
    .fill(0)
    .map(() => Array(n).fill(false))
  let ans = ''
  for (let len = 1; len <= n; len++) {
    for (let i = 0; len - 1 + i < n; i++) {
      const j = len - 1 + i
      if (s[i] === s[j]) {
        dp[i][j] = len < 3 ? true : dp[i + 1][j - 1]
        if (dp[i][j]) {
          const str = s.substring(i, j + 1)
          if (str.length > ans.length) {
            ans = str
          }
        }
      }
    }
  }
  return ans
}

longestPalindrome('cbbd')
// j - i + 1 = len
// j = len - 1 + i
