/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  const dp = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0))
  for (const str of strs) {
    const [zeros, ones] = count(str)
    for (let i = m; i >= zeros; i--) {
      for (let j = n; j >= ones; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - zeros][j - ones] + 1)
      }
    }
  }
  return dp[m][n]

  function count(str) {
    let zeros = 0
    let ones = 0
    for (const c of str) {
      if (c === '0') zeros++
      else ones++
    }
    return [zeros, ones]
  }
}
