/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
  const len = nums.length,
    arr = Array(10001).fill(0),
    dp = [];
  let maxlen = 0;

  for (let i = 0; i < len; i++) {
    maxlen = Math.max(maxlen, nums[i]);
    arr[nums[i]] += nums[i];
  }

  dp[0] = 0;
  dp[1] = arr[1];
  for (let i = 2; i <= maxlen; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i]);
  }

  return dp[maxlen];
};

console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]));
