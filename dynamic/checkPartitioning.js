/**
 * @param {string} s
 * @return {boolean}
 */
var checkPartitioning = function (s) {
  const n = s.length
  if (n === 3) return true

  const dp = Array(n + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(false))
  for (let i = 0; i <= n; i++) {
    dp[i][i] = true
  }
  for (let len = 1; len <= n; len++) {
    for (let i = 0; i + len <= n; i++) {
      const j = i + len
      if (len === 1) {
        dp[i][j] = true
      } else {
        if (s[i] === s[j - 1]) {
          dp[i][j] = dp[i + 1][j - 1]
        } else {
          dp[i][j] = false
        }
      }
    }
  }

  for (let i = 1; i < n; i++) {
    if (!dp[0][i]) continue
    for (let j = i + 1; j < n; j++) {
      if (!dp[i][j]) continue
      if (dp[j][n]) return true
    }
  }
  return false
}

// dp[i][j] 表示从i到j这部分字符串是回文字符串
