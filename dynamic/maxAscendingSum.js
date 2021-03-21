/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
  const n = nums.length
  if (n < 2) return nums[0]
  let ans = nums[0]
  let sum = nums[0]
  for (let i = 1; i < n; i++) {
    sum = nums[i] > nums[i - 1] ? sum + nums[i] : nums[i]
    ans = Math.max(ans, sum)
  }
  return ans
}
