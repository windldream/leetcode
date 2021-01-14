/**
 * @param {number[]} nums
 * @return {number[]}
 */
const exchange = function(nums) {
  let low = 0
  let fast = 0
  while (fast < nums.length) {
    if (nums[fast] & 1) {
      ;[nums[fast], nums[low]] = [nums[low], nums[fast]]
      low++
    }
    fast++
  }
  return nums
};