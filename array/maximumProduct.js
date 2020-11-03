/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  nums.sort((a, b) => a - b)
  const len = nums.length
  return Math.max(
    nums[0] * nums[1] * nums[2],
    nums[len - 3] * nums[len - 2] * nums[len - 1],
    nums[0] * nums[1] * nums[len - 1]
  )
}
