/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
  if (nums.length === 0) {
    return 0
  }

  let len = nums.length,
    dp = [],
    res = 0,
    counts = [];

  for (let i = 0; i < len; i++) {
    dp[i] = 1;
    counts[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (dp[i] <= dp[j]) {
          dp[i] = dp[j] + 1;
          counts[i] = counts[j];
        } else if (dp[j] + 1 === dp[i]) {
          counts[i] += counts[j]
        }
      }
    }
  }

  max = Math.max.apply(null, dp);

  for (let i = 0; i < len; i++) {
    if (dp[i] === max) {
      res += counts[i];
    }
  }

  return res;
}

console.log(findNumberOfLIS([1, 1, 1, 2, 2, 2, 3, 3, 3]))