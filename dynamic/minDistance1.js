/**
 * @param {number[]} houses
 * @param {number} k
 * @return {number}
 */
var minDistance = function (houses, k) {
  houses.sort((a, b) => a - b)
  const len = houses.length
  const rec = Array(len)
    .fill(0)
    .map(() => Array(len).fill(0))
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      const mid = (i + j) >> 1
      for (let pos = i; pos <= j; pos++) {
        rec[i][j] += Math.abs(houses[pos] - houses[mid])
      }
    }
  }

  const dp = Array(len)
    .fill(0)
    .map(() => Array(k + 1).fill(Infinity))
  for (let i = 0; i < len; i++) dp[i][1] = rec[0][i]
  for (let i = 0; i < len; i++) {
    for (let j = 2; j <= Math.min(i + 1, k); j++) {
      for (let pos = j - 1; pos <= i; pos++) {
        dp[i][j] = Math.min(dp[i][j], dp[pos - 1][j - 1] + rec[pos][i])
      }
    }
  }

  return dp[len - 1][k]
}
