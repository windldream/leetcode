/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
  const len = nums.length;
  if (len < 2) {
    return 0;
  }
  nums.sort((a, b) => a - b);
  let res = 0;
  for (let i = 0; i < len - 1; i++) {
    res = Math.max(res, nums[i + 1] - nums[i]);
  }
  return res;
};
