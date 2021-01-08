/**
 * @param {string} s
 * @return {string}
 */
const encode = function(s) {
  const len = s.length
  if (len <= 4) return s
  const dp = Array(len).fill(0).map(() => Array(len).fill(''))
  for (let n = 1; n <= len; n++) {
    for (let i = 0; i + n <= len; i++) {
      const j = i + n - 1
      let ans = s.substr(i, n)
      if (ans.length >= 5) {
        const p = (ans + ans).indexOf(ans, 1)
        if (p !== -1 && p < ans.length) {
          ans = (ans.length / p) + '[' + dp[i][i + p - 1] + ']'
        }
        for (let k = i; k < j; k++) {
          if (dp[i][k].length + dp[k + 1][j].length < ans.length) {
            ans = dp[i][k] + dp[k + 1][j]
          }
        }
      }
      dp[i][j] = ans
    }
  }

  return dp[0][len - 1]
};