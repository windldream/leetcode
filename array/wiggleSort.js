/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const wiggleSort = function(nums) {
  const len = nums.length
  for (let i = 1; i < len; i++) {
    if (i % 2 === 0) {
      if (nums[i] < nums[i - 1]) {
        ;[nums[i], nums[i - 1]] = [nums[i - 1], nums[i]]
      }
    } else {
      if (nums[i] > nums[i - 1]) {
        ;[nums[i], nums[i - 1]] = [nums[i - 1], nums[i]]
      }
    }
  }
};