/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  const len = nums.length
  if (len === 1) return 0
  let l = 0
  let r = len - 1
  while (l < r) {
    const mid = l + ((r - l) >> 1)
    if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
      return mid
    } else if (nums[mid] > nums[mid + 1]) {
      r = mid - 1
    } else if (nums[mid] > nums[mid - 1]) {
      l = mid + 1
    } else {
      l = mid + 1
    }
  }
  return l
}

findPeakElement([1, 2, 3, 1])
