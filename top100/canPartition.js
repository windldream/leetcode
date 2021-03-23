/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const n = nums.length
  if (n < 2) return false
  const sum = nums.reduce((prev, curr) => prev + curr, 0)
  if (sum % 2) return false

  const avg = sum >> 1
  const dp = Array(1 + avg).fill(false)
  dp[0] = true
  for (let i = 0; i < n; i++) {
    for (let j = avg; j >= nums[i]; j--) {
      if (dp[avg]) return true
      dp[j] = dp[j] || dp[j - nums[i]]
    }
  }
  return dp[avg]
}
