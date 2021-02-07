/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function (nums) {
  let maxSum = nums[0]
  let minSum = nums[0]
  let ans = Math.abs(nums[0])
  for (let i = 1; i < nums.length; i += 1) {
    maxSum = Math.max(maxSum + nums[i], nums[i])
    minSum = Math.min(minSum + nums[i], nums[i])
    ans = Math.max(ans, Math.abs(maxSum), Math.abs(minSum))
  }
  return ans
}

maxAbsoluteSum([1, -3, 2, 3, -4])
