/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  const n = nums.length
  nums = [1, ...nums, 1]
  const dp = Array(n + 2)
    .fill(0)
    .map(() => Array(n + 2).fill(0))
  for (let len = 1; len <= n; len++) {
    for (let i = 1; len + i - 1 <= n; i++) {
      const j = len + i - 1
      for (let k = i; k <= j; k++) {
        dp[i][j] = Math.max(dp[i][j], dp[i][k - 1] + dp[k + 1][j] + nums[k] * nums[i - 1] * nums[j + 1])
      }
    }
  }
  return dp[1][n]
}

maxCoins([3, 1, 5, 8])
