/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLengthOfOptimalCompression = function (s, k) {
  const n = s.length
  const dp = Array(n + 1)
    .fill(0)
    .map(() => Array(k + 2).fill(Infinity))
  dp[0][0] = 0

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= Math.min(k, i); j++) {
      // 删除第 i 个字符
      if (j < k) dp[i][j + 1] = Math.min(dp[i][j + 1], dp[i - 1][j])
      // 保留第 i 个字符
      let same = 0
      let del = 0
      for (let m = i; m <= n; m++) {
        if (s[m - 1] === s[i - 1]) same++
        else del++
        if (j + del <= k) {
          dp[m][j + del] = Math.min(dp[m][j + del], calc(same) + 1 + dp[i - 1][j])
        } else {
          break
        }
      }
    }
  }

  return dp[n][k]

  function calc(x) {
    if (x <= 1) return 0
    else if (x < 10) return 1
    else if (x < 100) return 2
    else return 3
  }
}
