/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 1
  let init = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (init === nums[i]) {
      count++
    } else {
      count--
      if (count === 0) {
        init = nums[i + 1]
      }
    }
  }
  return init
}
