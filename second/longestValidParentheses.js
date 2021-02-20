/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  const n = s.length
  let max = 0
  const dp = Array(n).fill(0)
  for (let i = 1; i < n; i++) {
    if (s[i] === ')') {
      if (s[i - 1] === '(') {
        dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2
      } else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] === '(') {
        dp[i] = dp[i - 1] + (i - dp[i - 1] >= 2 ? dp[i - dp[i - 1] - 2] : 0) + 2
      }
      max = Math.max(max, dp[i])
    }
  }
  return max
}

longestValidParentheses('()(())')

// j - i + 1 = len => j = i + len - 1
