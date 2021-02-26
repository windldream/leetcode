/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let ans = -Infinity
  let sum = 0
  for (const num of nums) {
    sum = sum > 0 ? sum + num : num
    ans = Math.max(ans, sum)
  }
  return ans
}
