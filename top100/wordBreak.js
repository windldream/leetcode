/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const n = s.length
  const dp = Array(n + 1).fill(false)
  dp[0] = true

  for (let i = 0; i <= n; i++) {
    for (const word of wordDict) {
      const len = word.length
      if (i >= len && !dp[i]) {
        dp[i] = dp[i - len] && s.substring(i - len, i) === word
      }
    }
  }

  return dp[n]
}
