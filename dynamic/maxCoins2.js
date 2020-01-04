/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  let len = nums.length,
    dp = [];

  nums = [1, ...nums, 1];
  len = nums.length;

  for (let i = 0; i < len; i++) {
    dp[i] = [];
    for (let j = 0; j < len; j++) {
      dp[i][j] = 0;
    }
  }

  // 假设不戳破k以及边界i,j位置的气球
  for (let i = len - 2; i > -1; i--) {
    for (let j = i + 2; j < len; j++) {
      let max = 0;
      for (let k = i + 1; k < j; k++) {
        max = Math.max(dp[i][k] + dp[k][j] + nums[i] * nums[k] * nums[j], max);
      }
      dp[i][j] = max;
    }
  }

  return dp[0][len - 1];
};

console.log(maxCoins([3, 1, 5, 8]));