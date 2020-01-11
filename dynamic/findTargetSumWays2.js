/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  const sum = nums.reduce((prev, curr) => prev + curr, 0);
  if (sum < S || (sum + S) % 2) {
    return 0;
  }

  let target = (sum + S) / 2,
    len = nums.length,
    dp = Array(target + 1).fill(0);

  dp[0] = 1;
  for (let i = 0; i < len; i++) {
    for (let j = target; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]];
    }
  }

  return dp[target];
};

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));
