/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function (nums, k) {
  const n = nums.length
  let l = k
  let r = k
  let ans = 0

  for (let val = nums[k]; val > 0; val--) {
    while (l > 0 && nums[l - 1] >= val) l--
    while (r < n - 1 && nums[r + 1] >= val) r++
    ans = Math.max(ans, val * (r - l + 1))
  }

  return ans
}
