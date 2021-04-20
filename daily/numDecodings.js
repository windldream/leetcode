/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const n = s.length
  if (n === 0 || s[0] === '0') return 0

  const dp = Array(n + 1).fill(0)
  dp[0] = 1
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    if (s[i - 1] === '0') {
      if (s[i - 2] >= 3 || s[i - 2] === '0') return 0
      else dp[i] = dp[i - 2]
    } else if (s[i - 2] !== '0' && s.substring(i - 2, i) <= 26) {
      dp[i] = dp[i - 1] + dp[i - 2]
    } else {
      dp[i] = dp[i - 1]
    }
  }
  return dp[n]
}

numDecodings('1102')
// dp[n] = dp[n - 1] + dp[n - 2]
