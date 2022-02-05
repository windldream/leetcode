/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let l = 0
  let r = 0
  let ans = 0
  let sum = 0

  while (r < nums.length) {
    sum += nums[r]

    while (sum >= target) {
      if (ans === 0) {
        ans = r - l + 1
      } else {
        ans = Math.min(ans, r - l + 1)
      }

      sum -= nums[l++]
    }

    r++
  }

  return ans
}
