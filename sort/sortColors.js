/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  const colorMap = {};
  for (const num of nums) {
    if (colorMap[num] === undefined) {
      colorMap[num] = 0;
    }
    colorMap[num] += 1;
  }

  if (colorMap[0]) {
    nums.fill(0, 0, colorMap[0]);
  }
  if (colorMap[1]) {
    nums.fill(1, colorMap[0] || 0, colorMap[1] + (colorMap[0] || 0));
  }
  if (colorMap[2]) {
    nums.fill(2, nums.length - colorMap[2], nums.length);
  }
};