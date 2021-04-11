/**
 * @param {number} n
 * @return {number[]}
 */
var dicesProbability = function (n) {
  const dp = Array(n)
    .fill(0)
    .map(() => Array(6 * n + 1).fill(0))
  for (let i = 1; i <= 6; i++) {
    dp[0][i] = 1
  }
  for (let i = 1; i < n; i++) {
    for (let j = i + 1; j <= 6 * (i + 1); j++) {
      for (let k = 1; k <= 6; k++) {
        if (j < k) break
        dp[i][j] += dp[i - 1][j - k]
      }
    }
  }

  const total = 6 ** n
  const ans = []
  for (let i = n; i <= 6 * n; i++) {
    ans.push(dp[n - 1][i] / total)
  }
  return ans
}

dicesProbability(2)
// 1 2 3 4 5 6
