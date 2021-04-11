/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let l = 0
  let r = nums.length - 1
  while (l < r) {
    const sum = nums[l] + nums[r]
    if (sum === target) return [nums[l], nums[r]]
    if (sum > target) r--
    else l++
  }
  return []
}
