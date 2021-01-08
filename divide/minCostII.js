/**
 * @param {number[][]} costs
 * @return {number}
 */
const minCostII = function(costs) {
  const n = costs.length
  if (n === 0) return 0
  const k = costs[0].length

  const dp = Array(n).fill(0).map(() => Array(k).fill(0))
  for (let i = 0; i < k; i++) {
    dp[0][i] = costs[0][i]
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < k; j++) {
      dp[i][j] = Math.min(...dp[i - 1].slice(0, j), ...dp[i - 1].slice(j + 1)) + costs[i][j]
    }
  }

  return Math.min(...dp[n - 1])
};