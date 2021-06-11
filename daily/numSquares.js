/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const nums = []
  for (let i = 1; i * i <= n; i++) {
    nums.push(i * i)
  }

  const dp = Array(n + 1).fill(Infinity)
  dp[0] = 0
  for (const num of nums) {
    for (let i = 1; i <= n; i++) {
      if (i < num) continue
      dp[i] = Math.min(dp[i], dp[i - num] + 1)
    }
  }
  return dp[n]
}
