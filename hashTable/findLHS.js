/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  nums.sort((a, b) => a - b)
  let l = 0
  let r = 0
  let ans = 0
  while (r < nums.length) {
    while (nums[r] - nums[l] > 1) {
      l++
    }
    if (nums[r] - nums[l] === 1) {
      ans = Math.max(ans, r - l + 1)
    }
    r++
  }
  return ans
}
