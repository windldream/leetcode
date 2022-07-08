/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  const n = nums.length
  let sum = 0
  let max = -Infinity
  let min = Infinity
  let maxSum = 0
  let minSum = 0

  for (let i = 0; i < n; i++) {
    sum += nums[i]
    maxSum = maxSum >= 0 ? maxSum + nums[i] : nums[i]
    max = Math.max(max, maxSum)
    minSum = minSum <= 0 ? minSum + nums[i] : nums[i]
    min = Math.min(min, minSum)
  }

  return max < 0 ? max : Math.max(max, sum - min)
}
