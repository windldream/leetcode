/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let lo = 0
  let hi = nums.length
  let set = new Set()
  while (lo < hi) {
    const mid = lo + ((hi - lo) >> 1)
    if (nums[mid] === target) {
      let l = mid
      while (nums[l] === target && l >= 0) {
        l--
      }
      let r = mid
      while (nums[r] === target && r < nums.length) {
        r++
      }
      return r - l - 1
    } else if (nums[mid] < target) {
      lo = mid + 1
    } else if (nums[mid] > target) {
      hi = mid
    }
  }
  return 0
}
