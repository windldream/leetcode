/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const m = word1.length
  const n = word2.length
  const dp = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(Infinity))
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i
  }
  for (let i = 0; i <= n; i++) {
    dp[0][i] = i
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        // 插入, 删除, 替换
        dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1
      }
    }
  }
  return dp[m][n]
}
