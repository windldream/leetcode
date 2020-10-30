/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function (target) {
  const len = target.length
  const dp = Array(len).fill(0)
  dp[len - 1] = target[len - 1] === '1' ? 1 : 0
  for (let i = len - 2; i >= 0; i--) {
    if (target[i] === '0') {
      dp[i] = dp[i + 1]
    } else {
      if (target[i + 1] === '1') {
        dp[i] = dp[i + 1]
      } else {
        dp[i] = dp[i + 1] + 2
      }
    }
  }
  return dp[0]
}
