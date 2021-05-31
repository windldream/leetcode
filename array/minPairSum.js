/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
  nums.sort((a, b) => a - b)
  const n = nums.length
  let l = 0
  let r = n - 1
  let ans = 0
  while (l < r) {
    ans = Math.max(ans, nums[l++] + nums[r--])
  }
  return ans
}
