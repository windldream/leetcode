/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  const n = nums.length
  const dp = Array(target + 1).fill(0)
  dp[0] = 1
  for (let i = 1; i <= target; i++) {
    for (let j = 1; j <= n; j++) {
      if (i >= nums[j - 1]) {
        dp[i] += dp[i - nums[j - 1]]
      }
    }
  }

  return dp[target]
}

combinationSum4([1, 2, 3], 4)
