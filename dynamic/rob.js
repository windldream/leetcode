/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let len = nums.length,
    dp = [];

  if (len === 0) {
    return 0;
  }

  // 0 表示不偷 1表示偷
  for (let i = 0; i < len; i++) {
    dp[i] = [];
    if (i === 0) {
      dp[i][0] = 0;
      dp[i][1] = nums[i];
      continue;
    }
    dp[i][0] = Math.max(dp[i - 1][1], dp[i - 1][0]);
    dp[i][1] = Math.max(dp[i - 1][0] + nums[i], dp[i - 1][1]);
  }

  return Math.max(dp[len - 1][0], dp[len - 1][1]);
};

console.log(rob([1, 2, 3, 1]))