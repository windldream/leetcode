/**
 * @param {number} n
 * @return {number[]}
 */
const dicesProbability = function (n) {
  const dp = Array(n + 1)
    .fill(0)
    .map(() => Array(n * 6 + 1).fill(0))
  for (let i = 1; i <= 6; i++) {
    dp[1][i] = 1
  }
  for (let i = 2; i <= n; i++) {
    for (let j = i; j <= 6 * i; j++) {
      for (let cur = 1; cur <= 6; cur++) {
        if (j <= cur) break
        dp[i][j] += dp[i - 1][j - cur]
      }
    }
  }

  const total = 6 ** n
  const ans = []
  for (let i = n; i <= 6 * n; i++) {
    ans.push(dp[n][i] / total)
  }
  return ans
}

dicesProbability(2)

// 2
//
