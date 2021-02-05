/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumAfterOperation = function (nums) {
  const len = nums.length
  const dp = Array(len)
    .fill(0)
    .map(() => Array(2).fill(-Infinity))
  dp[0][0] = nums[0]
  dp[0][1] = nums[0] * nums[0]
  let ans = nums[0] * nums[0]
  for (let i = 1; i < len; i++) {
    dp[i][0] = (dp[i - 1][0] > 0 ? dp[i - 1][0] : 0) + nums[i]
    dp[i][1] = Math.max(dp[i - 1][1] + nums[i], dp[i - 1][0] + nums[i] * nums[i], nums[i] * nums[i])
    ans = Math.max(ans, dp[i][1])
  }
  return ans
}
