/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const len = nums.length,
    sum = nums.reduce((prev, curr) => prev + curr, 0) / 2,
    dp = [];

  if (!Number.isInteger(sum)) {
    return false;
  }

  for (let i = 0; i <= len; i++) {
    dp[i] = [];
  }

  for (let i = 0; i <= len; i++) {
    for (let j = 0; j <= sum; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = false;
      } else if (nums[i - 1] === j) {
        dp[i][j] = true;
      } else if (nums[i - 1] < j) {
        dp[i][j] = dp[i - 1][j - nums[i - 1]] || dp[i - 1][j]
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[len][sum];
};

console.log(canPartition([1, 2, 5]))