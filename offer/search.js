/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let count = 0
  helper(nums, target, 0, nums.length - 1)
  return count

  function helper(nums, target, l, r) {
    if (l <= r) {
      const mid = (l + r) >> 1
      if (nums[mid] < target) {
        helper(nums, target, mid + 1, r)
      } else if (nums[mid] > target) {
        helper(nums, target, l, mid - 1)
      } else {
        count++
        helper(nums, target, l, mid - 1)
        helper(nums, target, mid + 1, r)
      }
    }
  }
}
