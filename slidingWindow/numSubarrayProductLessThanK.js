/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  if (k < 2) return 0

  let l = 0
  let r = 0
  let ans = 0
  let product = 1

  while (r < nums.length) {
    product *= nums[r]

    while (product >= k && l < r) {
      product /= nums[l]
      l++
    }

    r++
    ans += r - l
  }

  return ans
}
