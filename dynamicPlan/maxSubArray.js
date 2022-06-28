/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const n = nums.length
  let sum = 0
  let max = -Infinity

  for (let i = 0; i < n; i++) {
    sum = sum >= 0 ? sum + nums[i] : nums[i]
    max = Math.max(max, sum)
  }

  return max
}
