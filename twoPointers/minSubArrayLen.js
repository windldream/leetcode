/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  let l = 0
  let r = 0
  let ans = Infinity
  let sum = 0
  while (r < nums.length) {
    sum += nums[r++]
    if (sum >= s) {
      while (sum >= s) {
        sum -= nums[l++]
      }
      sum += nums[--l]
      ans = Math.min(ans, r - l)
    }
  }
  return ans === Infinity ? 0 : ans
}

minSubArrayLen(7, [2, 3, 1, 2, 4, 3])
