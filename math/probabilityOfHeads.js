/**
 * @param {number[]} prob
 * @param {number} target
 * @return {number}
 */
const probabilityOfHeads = function(prob, target) {
  const len = prob.length
  const dp = Array(len + 1).fill(0).map(() => Array(target + 1).fill(0))
  dp[0][0] = 1
  for (let i = 0; i < len; i++) {
    for (let j = 0; j <= Math.min(i, target); j++) {
      dp[i + 1][j] += dp[i][j] * (1 - prob[i])
      if (j + 1 <= target) {
        dp[i + 1][j + 1] += dp[i][j] * prob[i]
      }
    }
  }
  return dp[len][target]
};