/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function (s) {
  const n = s.length
  if (n < 2) return n

  const dp = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0))
  return dfs(s, 0, n - 1)

  function dfs(s, i, j) {
    if (i > j) return 0

    if (dp[i][j] === 0) {
      let min = 1 + dfs(s, i + 1, j)
      for (let k = i + 1; k <= j; k++) {
        if (s[i] === s[k]) {
          min = Math.min(min, dfs(s, i, k - 1) + dfs(s, k + 1, j))
        }
      }
      dp[i][j] = min
    }

    return dp[i][j]
  }
}
