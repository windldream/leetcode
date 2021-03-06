/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let cur = nums[0]
  let len = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === cur) {
      len++
    } else {
      len--
      if (len === 0) {
        cur = nums[i]
        len = 1
      }
    }
  }
  return cur
}
