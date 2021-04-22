/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
  nums.sort((a, b) => a - b)
  const n = nums.length
  const dp = Array(n)
    .fill(0)
    .map(() => [])
  let ans = []
  for (let i = 0; i < n; i++) {
    dp[i] = [nums[i]]
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] === 0 && dp[j].length + 1 > dp[i].length) {
        dp[i] = [...dp[j], nums[i]]
      }
    }
    if (dp[i].length > ans.length) {
      ans = dp[i]
    }
  }
  return ans
}
