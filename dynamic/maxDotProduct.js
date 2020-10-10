/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDotProduct = function (nums1, nums2) {
  const m = nums1.length
  const n = nums2.length
  const dp = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0))
  let ans = -Infinity
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      ans = Math.max(ans, dp[i - 1][j - 1] + nums1[i - 1] * nums2[j - 1])
      dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1] + nums1[i - 1] * nums2[j - 1])
    }
  }
  return ans
}
