/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function (nums) {
  const len = nums.length
  if (len === 0) return 0
  const dp = Array(len + 1)
    .fill(0)
    .map(() => Array(2).fill(0))
  dp[1][0] = 0
  dp[1][1] = nums[0]
  for (let i = 2; i <= len; i++) {
    dp[i][0] = Math.max(dp[i - 1][1], dp[i - 1][0])
    dp[i][1] = Math.max(dp[i - 1][0] + nums[i - 1], dp[i - 1][1])
  }
  return Math.max(dp[len][0], dp[len][1])
}

massage([2, 1, 4, 5, 3, 1, 1, 3])
