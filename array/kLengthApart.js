/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
  if (k === 0) return true
  let curLen = 0
  let first = true
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (curLen < k) {
        if (first) {
          first = false
        } else {
          return false
        }
      }
      curLen = 0
    } else {
      curLen++
    }
  }
  return true
}
