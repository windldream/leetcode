/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function (n, cuts) {
  const len = cuts.length
  cuts.sort((a, b) => a - b)
  cuts.unshift(0)
  cuts.push(n)
  const dp = Array(len + 2)
    .fill(0)
    .map(() => Array(len + 2).fill(0))
  for (let i = len; i >= 1; i--) {
    for (let j = i; j <= len; j++) {
      dp[i][j] = i === j ? 0 : Infinity
      for (let k = i; k <= j; k++) {
        dp[i][j] = Math.min(dp[i][j], dp[i][k - 1] + dp[k + 1][j])
      }
      dp[i][j] += cuts[j + 1] - cuts[i - 1]
    }
  }
  return dp[1][len]
}

minCost(9, [5, 6, 1, 4, 2])
