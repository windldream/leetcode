/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
var maximumScore = function (nums, multipliers) {
  const n = nums.length
  const m = multipliers.length
  const dp = Array(m + 1)
    .fill(0)
    .map(() => Array(m + 1).fill(0))
  let ans = -Infinity
  for (let k = 1; k <= m; k++) {
    for (let i = 0; i <= k; i++) {
      if (i === 0) {
        dp[i][k - i] = dp[i][k - i - 1] + nums[n - k + i] * multipliers[k - 1]
      } else if (i === k) {
        dp[i][k - i] = dp[i - 1][k - i] + nums[i - 1] * multipliers[k - 1]
      } else {
        dp[i][k - i] = Math.max(
          dp[i][k - i - 1] + nums[n - k + i] * multipliers[k - 1],
          dp[i - 1][k - i] + nums[i - 1] * multipliers[k - 1]
        )
      }
      if (k === m) {
        ans = Math.max(ans, dp[i][k - i])
      }
    }
  }
  return ans
}

maximumScore([1, 2, 3], [3, 2, 1])

// dp[i][j][m] = max(dp[i - 1][j][m - 1] + nums[i - 1] * multipliers[m - 1],
//                   dp[i][j + 1][m - 1] + nums[i - 1] * multipliers[m - 1]
