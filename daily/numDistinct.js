/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  const n = s.length
  const m = t.length
  const dp = Array(n + 1)
    .fill(0)
    .map(() => Array(m + 1).fill(0))
  dp[0][0] = 1
  for (let i = 1; i <= n; i++) {
    dp[i][0] = 1
  }
  for (let i = 1; i <= m; i++) {
    dp[0][i] = 0
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
      } else {
        dp[i][j] = dp[i - 1][j]
      }
    }
  }
  return dp[n][m]
}

numDistinct('abdcc', 'ac')

// dp[n][m] -> s[i] === t[i] -> dp[n - 1][m - 1]
// dp[n][m] -> s[i] !== t[i] -> dp[n - 1][m]

// abdcc
// ac
// abd a
// abdc ac
// abbdc
