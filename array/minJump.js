/**
 * @param {number[]} jump
 * @return {number}
 */
var minJump = function (jump) {
  const n = jump.length
  const dp = Array(n).fill(0)
  dp[n - 1] = 1
  for (let i = n - 2; i >= 0; i--) {
    dp[i] = i + jump[i] >= n ? 1 : dp[i + jump[i]] + 1
    for (let j = i + 1; j < n && dp[j] >= dp[i] + 1; j++) {
      dp[j] = dp[i] + 1
    }
  }
  return dp[0]
}

minJump([3, 7, 6, 1, 4, 3, 7, 8, 1, 2, 8, 5, 9, 8, 3, 2, 7, 5, 1, 1])
