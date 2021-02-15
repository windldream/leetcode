/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const n = s.length
  const m = p.length
  const dp = Array(n + 1)
    .fill(0)
    .map(() => Array(m + 1).fill(false))
  dp[0][0] = true

  for (let i = 0; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (p[j - 1] === '*') {
        if (j >= 2) {
          dp[i][j] = dp[i][j - 2] || (i > 0 && (p[j - 2] === s[i - 1] || p[j - 2] === '.') && dp[i - 1][j])
        }
      } else {
        if (i > 0 && (s[i - 1] === p[j - 1] || p[j - 1] === '.')) {
          dp[i][j] = dp[i - 1][j - 1]
        }
      }
    }
  }
  return dp[n][m]
}

isMatch('ab', '.*')
