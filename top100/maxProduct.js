/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (nums.length === 0) return 0

  const n = nums.length
  let max = nums[0]
  let min = nums[0]
  let ans = nums[0]
  for (let i = 1; i < n; i++) {
    let temp = max
    max = Math.max(nums[i], nums[i] * max, nums[i] * min)
    min = Math.min(nums[i], nums[i] * temp, nums[i] * min)
    ans = Math.max(ans, max)
  }
  return ans
}

maxProduct([-4, -3, -2])

// 正数 * 正数
// 负数 * 负数
