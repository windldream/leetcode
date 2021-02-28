/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const dp = Array(n + 1).fill(0)
  dp[0] = 1
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    let count = 0
    for (let j = i; j > 0; j--) {
      count += dp[j - 1] * dp[i - j]
    }
    dp[i] = count
  }
  return dp[n]
}

numTrees(2)
