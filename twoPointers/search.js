/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  const len = nums.length
  let l = 0,
    r = len - 1
  while (l <= r) {
    const mid = (l + r) >> 1
    if (nums[mid] === target) return mid
    if (nums[l] <= nums[mid]) {
      if (nums[l] <= target && target < nums[mid]) {
        r = mid - 1
      } else {
        l = mid + 1
      }
    } else {
      if (nums[mid] < target && nums[r] >= target) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }
  }

  return -1
}
