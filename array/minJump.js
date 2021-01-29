/**
 * @param {number[]} jump
 * @return {number}
 */
var minJump = function (jump) {
  const n = jump.length
  const dp = Array(n + 1).fill(Infinity)
  dp[0] = 0
  for (let i = 0; i < n; i++) {
    if (i + jump[i] >= n) {
      dp[n] = Math.min(dp[n], dp[i] + 1)
    } else {
      dp[i + jump[i]] = Math.min(dp[i + jump[i]], dp[i] + 1)
    }
    for (let j = 1; j < i; j++) {
      dp[j] = Math.min(dp[j], dp[i] + 1)
      if (j + jump[j] >= n) {
        dp[n] = Math.min(dp[n], dp[j] + 1)
      } else {
        dp[j + jump[j]] = Math.min(dp[j + jump[j]], dp[j] + 1)
      }
    }
  }
  return dp[n]
}

minJump([3, 7, 6, 1, 4, 3, 7, 8, 1, 2, 8, 5, 9, 8, 3, 2, 7, 5, 1, 1])
