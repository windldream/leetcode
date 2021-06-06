/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var findTargetSumWays = function (nums, target) {
//   let ans = 0
//   backtracking(0, 0)
//   return ans

//   function backtracking(sum, idx) {
//     if (idx === nums.length) {
//       if (sum === target) ans++
//       return
//     }
//     backtracking(sum + nums[idx], idx + 1)
//     backtracking(sum - nums[idx], idx + 1)
//   }
// }

var findTargetSumWays = function (nums, target) {
  const sum = nums.reduce((prev, curr) => prev + curr, 0)
  if (sum < target || (sum + target) % 2) return 0

  const t = (sum + target) >> 1
  const dp = Array(t + 1).fill(0)
  dp[0] = 1
  for (const n of nums) {
    for (let i = t; i >= n; i--) {
      dp[i] += dp[i - n]
    }
  }
  return dp[t]
}
