/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  const len = nums.length
  let lo = 0
  let hi = len - 1
  while (lo <= hi) {
    const mid = (lo + hi) >> 1
    if (nums[mid] === nums[mid - 1]) {
      if ((mid - lo) % 2 === 0) {
        hi = mid - 2
      } else {
        lo = mid + 1
      }
    } else if (nums[mid] === nums[mid + 1]) {
      if ((hi - mid) % 2 === 0) {
        lo = mid + 2
      } else {
        hi = mid - 1
      }
    } else {
      return nums[mid]
    }
  }
  return nums[hi]
}

singleNonDuplicate([1, 1, 2, 2, 3])
