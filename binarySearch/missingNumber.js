/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let lo = 0
  let hi = nums.length + 1

  while (lo < hi) {
    const mid = lo + ((hi - lo) >> 1)
    if (nums[mid] === mid) {
      lo = mid + 1
    } else {
      hi = mid
    }
  }

  return lo
}
