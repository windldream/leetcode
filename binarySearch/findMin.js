/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums.length === 1) return nums[0]
  let l = 0
  let r = nums.length - 1
  while (l < r) {
    const mid = l + ((r - l) >> 1)
    if (nums[mid] < nums[r]) {
      r = mid
    } else {
      l = mid + 1
    }
  }
  return nums[l]
}
