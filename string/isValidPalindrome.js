/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
const isValidPalindrome = function(s, k) {
  const len = s.length
  const dp = Array(len).fill(0).map(() => Array(len).fill(0))
  for (let i = 0; i < len; i++) dp[i][i] = 1

  let max = 1
  for (let i = len - 1; i >= 0; i--) {
    for (let j = i + 1; j < len; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
      }
      max = Math.max(max, dp[i][j])
    }
  }

  return max >= len - k
};

// dp[i][j] 表示以 i 开始 以 j 结尾的最大回文字串
// dp[i][j] === dp[i + 1][j - 1] + 1