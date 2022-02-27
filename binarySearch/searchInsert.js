/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (nums[0] >= target) return 0
  else if (nums[nums.length - 1] < target) return nums.length

  let lo = 0
  let hi = nums.length

  while (lo < hi) {
    const mid = (lo + hi) >> 1

    if (nums[mid] === target || (nums[mid] > target && nums[mid - 1] < target)) {
      return mid
    } else if (nums[mid] < target && target < nums[mid + 1]) {
      return mid + 1
    } else if (nums[mid] < target) {
      lo = mid + 1
    } else if (nums[mid] > target) {
      hi = mid
    }
  }

  return -1
}
