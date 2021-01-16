/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  let l = 0
  let r = nums.length - 1
  while (l < r) {
    if (nums[l] + nums[r] === target) {
      return [nums[l], nums[r]]
    } else if (nums[l] + nums[r] > target) {
      r--
    } else {
      l++
    }
  }
  return []
};