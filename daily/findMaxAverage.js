/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let l = 0
  let r = 0
  let sum = 0
  let avg = -Infinity
  while (r < nums.length) {
    sum += nums[r++]
    if (r - l > k) {
      sum -= nums[l++]
    }
    if (r - l === k) {
      avg = Math.max(avg, sum / k)
    }
  }
  return avg
}
