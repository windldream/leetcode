/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  let dp = [],
    len = nums.length

  if (len === 0) {
    return 0
  }

  dp[0] = 1
  for (let i = 1; i < len; i++) {
    dp[i] = 1
    for (let j = 0; j <= i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }

  return Math.max.apply(null, dp)
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]))
