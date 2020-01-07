/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  const len = nums.length,
    dp = [];

  if (len < 2) {
    return len;
  }

  dp[0] = 1;
  for (let i = 1; i < len; i++) {
    dp[i] = 1;
    for (let j = 0; j <= i; j++) {
      if ((nums[j] > nums[i] && (dp[j] != 1 ? nums[j - 1] < nums[j] : 1)) ||
        (nums[j] < nums[i] && (dp[j] != 1 ? nums[j - 1] > nums[j] : 1))) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max.apply(null, dp);
};

console.log(wiggleMaxLength([3, 3, 3, 2, 5]))