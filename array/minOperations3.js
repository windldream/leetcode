/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  const n = nums.length
  if (n < 2) return 0
  let count = 0
  for (let i = 1; i < n; i++) {
    if (nums[i] <= nums[i - 1]) {
      count += nums[i - 1] + 1 - nums[i]
      nums[i] = nums[i - 1] + 1
    }
  }
  return count
}
