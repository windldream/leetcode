/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  let l = 0
  let r = 0
  let arr = []
  let sum = 1
  let ans = 0
  while (r < nums.length) {
    if (nums[r] >= k) {
      l = ++r
      sum = 1
      arr.length = 0
      continue
    }
    arr.push(nums[r])
    sum *= nums[r]
    while (sum >= k) {
      sum /= nums[l++]
      arr.shift()
    }
    ans++
    ans += arr.length - 1
    r++
  }
  return ans
}

numSubarrayProductLessThanK([10, 5, 2, 6, 6], 100)
