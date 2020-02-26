/**
 * @param {number[]} nums
 * @return {boolean}
 */
var makesquare = function(nums) {
  const sum = nums.reduce((prev, cur) => prev + cur, 0);
  if (sum % 4 || sum === 0) {
    return false;
  }

  const aver = sum / 4;
  if (nums.some(item => item > aver)) {
    return false;
  }
  nums.sort((a, b) => b - a);
  return dfs(nums, 0, aver, aver, aver, aver);

  function dfs(nums, index, u, d, l, r) {
    if (u < 0 || d < 0 || l < 0 || r < 0 || index > nums.length) {
      return false;
    }
    if (u === 0 && d === 0 && l === 0 && r === 0) {
      return true;
    }
    if (dfs(nums, index + 1, u - nums[index], d, l, r)) {
      return true;
    }
    if (dfs(nums, index + 1, u, d - nums[index], l, r)) {
      return true;
    }
    if (dfs(nums, index + 1, u, d, l - nums[index], r)) {
      return true;
    }
    if (dfs(nums, index + 1, u, d, l, r - nums[index])) {
      return true;
    }
    return false;
  }
};

makesquare([1, 1, 2, 2, 2]);
