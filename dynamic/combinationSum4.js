/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  const len = nums.length,
    dp = [];
  if (len === 0) {
    return 0;
  }

  dp[0] = 1;
  for (let i = 1; i <= target; i++) {
    dp[i] = 0;
    for (let j = 0; j < len; j++) {
      if (i - nums[j] >= 0) {
        dp[i] += dp[i - nums[j]];
      }
    }
  }

  return dp[target];
};

console.log(combinationSum4([1, 2, 3], 4));