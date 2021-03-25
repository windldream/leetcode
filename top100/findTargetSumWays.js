/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
// var findTargetSumWays = function (nums, S) {
//   let count = 0
//   backtracking(nums, 0, 0, S)
//   return count

//   function backtracking(nums, index, sum, target) {
//     if (index === nums.length) {
//       if (sum === target) count++
//       return
//     }
//     backtracking(nums, index + 1, sum - nums[index], target)
//     backtracking(nums, index + 1, sum + nums[index], target)
//   }
// }

var findTargetSumWays = function (nums, S) {
  const sum = nums.reduce((prev, curr) => prev + curr, 0)
  if (sum < S || (sum + S) % 2) return 0

  const target = (sum + S) >> 1
  const dp = Array(target + 1).fill(0)
  dp[0] = 1
  for (let i = 0; i < nums.length; i++) {
    for (let j = target; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]]
    }
  }
  return dp[target]
}

// t - (sum - t) = S  ---> 2t = sum + S
