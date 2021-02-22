/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var longestPalindrome = function (word1, word2) {
  const m = word1.length
  const word = word1 + word2
  const len = word.length
  const dp = Array(len + 1)
    .fill(0)
    .map(() => Array(len + 1).fill(0))
  for (let i = 0; i < len; i++) {
    dp[i][i] = 1
  }
  let ans = 0
  for (let i = len - 1; i >= 0; i--) {
    for (let j = i + 1; j < len; j++) {
      if (word[i] === word[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2
        if (i < m && j >= m) {
          ans = Math.max(ans, dp[i][j])
        }
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
      }
    }
  }
  return ans
}
longestPalindrome('ceebeddc', 'd')
// dp[m][n] =

// cacb cbba => bcb =>
