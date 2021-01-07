/**
 * @param {string} s
 * @return {number}
 */
const longestPalindromeSubseq = function (s) {
  const len = s.length
  const dp = Array(len)
    .fill(0)
    .map(() =>
      Array(len)
        .fill(0)
        .map(() => Array(26).fill(0))
    )
  for (let n = 2; n <= len; n++) {
    for (let i = 0; i + n - 1 < len; i++) {
      const j = i + n - 1
      if (n === 2) {
        if (s[i] === s[j]) {
          dp[i][j][convertCharToIndex(s[i])] = 2
        }
      } else {
        if (s[i] === s[j]) {
          const index = convertCharToIndex(s[i])
          for (let c = 0; c < 26; c++) {
            if (c === index) continue
            dp[i][j][index] = Math.max(dp[i][j][index], dp[i + 1][j - 1][c] + 2)
            dp[i][j][c] = dp[i + 1][j - 1][c]
          }
        } else {
          const indexI = convertCharToIndex(s[i])
          const indexJ = convertCharToIndex(s[j])
          dp[i][j][indexI] = dp[i][j - 1][indexI]
          dp[i][j][indexJ] = dp[i + 1][j][indexJ]
          for (let c = 0; c < 26; c++) {
            if (c !== indexI && c !== indexJ) {
              dp[i][j][c] = dp[i + 1][j - 1][c]
            }
          }
        }
      }
    }
  }

  let ans = 0
  for (let c = 0; c < 26; c++) {
    ans = Math.max(ans, dp[0][len - 1][c])
  }
  return ans

  function convertCharToIndex(c) {
    return c.charCodeAt() - 'a'.charCodeAt()
  }
}
