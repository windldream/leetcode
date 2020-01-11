/**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function(nums) {
  if (nums.length < 3) {
    return true;
  }

  const len = nums.length,
    dp = [];

  // dp[i][j] 表示从 i 到 j 位置先手玩家比后手玩家多的分数
  for (let i = 0; i < len; i++) {
    dp[i] = Array(len - 1).fill(0);
    dp[i][i] = nums[i];
  }

  for (let i = len - 1; i >= 0; i--) {
    for (let j = i + 1; j < len; j++) {
      dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);
    }
  }

  return dp[0][len - 1] >= 0;
};

console.log(predictTheWinner([1, 5, 233, 7]));
