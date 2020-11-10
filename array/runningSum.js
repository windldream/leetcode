/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const len = nums.length
  const sum = Array(len).fill(0)
  for (let i = 0; i < len; i++) {
    sum[i] = nums[i] + (i > 0 ? sum[i - 1] : 0)
  }
  return sum
}
