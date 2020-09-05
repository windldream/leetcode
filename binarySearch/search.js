/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let lo = 0
  let hi = nums.length - 1
  while (lo <= hi) {
    const mid = lo + ((hi - lo) >> 1)
    if (nums[mid] === target) return mid
    if (nums[mid] < target) {
      lo = mid + 1
    } else {
      hi = mid - 1
    }
  }
  return -1
}
