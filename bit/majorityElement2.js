/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let maj = nums[0]
  let count = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === maj) {
      count++
    } else {
      count--
      if (count === 0) {
        maj = nums[i + 1]
      }
    }
  }
  return maj
}
