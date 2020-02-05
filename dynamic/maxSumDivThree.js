/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function(nums) {
  const len = nums.length,
    dp = [0, 0, 0];
  for (let i = 0; i < len; i++) {
    const num = nums[i];
    if (nums[i] % 3 === 0) {
      dp[0] += num;
      dp[1] += num;
      dp[2] += num;
    } else if (nums[i] % 3 === 1) {
      let temp = dp[0];
      if ((dp[2] + num) % 3 === 0) {
        dp[0] = Math.max(dp[0], dp[2] + num);
      }
      if ((dp[1] + num) % 3 === 2) {
        dp[2] = Math.max(dp[2], dp[1] + num);
      }
      if ((temp + num) % 3 === 1) {
        dp[1] = Math.max(dp[1], temp + num);
      }
    } else {
      let temp = dp[0];
      if ((dp[1] + num) % 3 === 0) {
        dp[0] = Math.max(dp[0], dp[1] + num);
      }
      if ((dp[2] + num) % 3 === 1) {
        dp[1] = Math.max(dp[1], dp[2] + num);
      }
      if ((temp + num) % 3 === 2) {
        dp[2] = Math.max(dp[2], temp + num);
      }
    }
  }
  return dp[0];
};
