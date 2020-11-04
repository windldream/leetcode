/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  const max = Math.max(...nums)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === max) continue
    if (nums[i] * 2 > max) return -1
  }
  return nums.indexOf(max)
}
