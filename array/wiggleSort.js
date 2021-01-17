/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const wiggleSort = function(nums) {
  const len = nums.length
  if (len < 3) return
  nums.sort((a, b) => a - b)
  for (let i = 0; i < len; i += 2) {
    if (i + 1 < len) {
      ;[nums[i], nums[i + 1]] = [nums[i + 1], nums[i]]
    }
  }
  return
};