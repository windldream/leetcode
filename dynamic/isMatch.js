/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const m = s.length
  const n = p.length
  const dp = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(false))
  dp[0][0] = true
  for (let i = 0; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === '*') {
        dp[i][j] = dp[i][j - 2] || (i > 0 && dp[i - 1][j] && (s[i - 1] === p[j - 2] || p[j - 2] === '.'))
      } else {
        dp[i][j] = i > 0 && dp[i - 1][j - 1] && (s[i - 1] === p[j - 1] || p[j - 1] === '.')
      }
    }
  }
  return dp[m][n]
}
