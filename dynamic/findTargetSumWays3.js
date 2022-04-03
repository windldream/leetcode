/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  const sum = nums.reduce((sum, cur) => sum + cur, 0)

  if ((sum + target) & 1) return 0

  const x = (sum + target) / 2
  const n = nums.length
  const dp = Array(n + 1)
    .fill(0)
    .map(() => Array(x + 1).fill(0))

  for (let i = 0; i <= n; i++) {
    dp[i][0] = 1
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= x; j++) {
      dp[i][j] = dp[i - 1][j]
      if (j >= nums[i - 1]) {
        dp[i][j] += dp[i - 1][j - nums[i - 1]]
      }
    }
  }

  return dp[n][x]
}

// x - y = target
// x + y = sum
// x = (target + sum) / 2
