/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
  const len = nums.length, dp = [], sub = [0];

  if (len < m) {
    return;
  }

  if (len === m) {
    return Math.max.apply(null, nums);
  }

  for (let i = 0; i < len; i++) {
    sub[i + 1] = sub[i] + nums[i];
  }

  for (let i = 0; i <= len; i++) {
    dp[i] = [];
    for (let j = 0; j <= m; j++) {
      dp[i][j] = Infinity;
    }
  }

  dp[0][0] = 0;
  for (let i = 1; i <= len; i++) {
    for (let j = 1; j <= m; j++) {
      // dp[i][j]表示数组nums(0, i) 拆分成j份时所能得到最优解
      // k表示第j份的支点
      for (let k = 0; k < i; k++) {
        dp[i][j] = Math.min(dp[i][j], Math.max(dp[k][j - 1], sub[i] - sub[k]));
      }
    }
  }

  return dp[len][m];
};

console.log(splitArray([7, 2, 5, 10, 8], 2));