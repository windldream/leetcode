/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
  if (nums.length < 2) {
    return nums;
  }
  nums.sort((a, b) => a - b);

  const len = nums.length,
    dp = [],
    res = [];
  dp[0] = 1;
  res[0] = [nums[0]];
  for (let i = 1; i < len; i++) {
    dp[i] = 1;
    res[i] = [nums[i]];
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] === 0) {
        // dp[i] = Math.max(dp[i], dp[j] + 1);
        if (dp[i] < dp[j] + 1) {
          res[i].push(nums[j]);
          dp[i] = dp[j] + 1;
        }
      }
    }
  }

  const max = Math.max.apply(null, dp);
  const index = dp.indexOf(max);
  return res[index].sort((a, b) => a - b);
};

console.log(largestDivisibleSubset([2, 3, 4, 9, 8]))