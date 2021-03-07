/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
  const n = s.length
  if (n < 2) return 0

  const dp = Array(n)
    .fill(0)
    .map(() => Array(n).fill(false))
  for (let len = 1; len <= n; len++) {
    for (let i = 0; i + len - 1 < n; i++) {
      const j = i + len - 1
      if (s[i] === s[j]) {
        dp[i][j] = len < 3 ? true : dp[i + 1][j - 1]
      } else {
        dp[i][j] = false
      }
    }
  }

  const ans = Array(n).fill(Infinity)
  ans[0] = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      if (dp[j][i]) {
        ans[i] = Math.min(ans[i], j < 1 ? 0 : ans[j - 1] + 1)
      }
    }
  }
  return ans[n - 1]
}

minCut('aab')

// j - i + 1 === len
// j = i + len - 1
// 如果dp[i]
