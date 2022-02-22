/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function (nums) {
  if (nums.length < 3) return 0

  nums.sort((a, b) => a - b)

  let count = 0
  const n = nums.length

  for (let i = 1; i < n - 1; i++) {
    if (nums[i] !== nums[0] && nums[i] !== nums[n - 1]) count++
  }

  return count
}
