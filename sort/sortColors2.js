/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  const start = 0;
  const end = nums.length - 1;
  const cur = 0;
  
  while (cur <= end) {
    if (nums[cur] === 0) {
      [nums[cur], nums[start]] = [nums[start], nums[cur]];
      start++;
      cur++;
    } else if (nums[cur] === 2) {
      [nums[cur], nums[end]] = [nums[end], nums[cur]];
      end--;
    } else {
      cur++;
    }
  }
};