/**
 * @param {number[]} nums
 * @return {number}
 */
// var lengthOfLIS = function (nums) {
//   const n = nums.length
//   const dp = Array(n).fill(1)
//   let ans = 0
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[j] < nums[i]) {
//         dp[i] = Math.max(dp[i], dp[j] + 1)
//       }
//     }
//     ans = Math.max(ans, dp[i])
//   }
//   return ans
// }

var lengthOfLIS = function (nums) {
  const n = nums.length
  if (n < 2) return n
  const dp = Array(n + 1).fill(0)
  let len = 1
  dp[len] = nums[0]
  for (let i = 1; i < n; i++) {
    if (nums[i] > dp[len]) {
      len += 1
      dp[len] = nums[i]
    } else {
      let l = 1
      let r = len
      let pos = 0
      while (l <= r) {
        const mid = (l + r) >> 1
        if (dp[mid] < nums[i]) {
          pos = mid
          l = mid + 1
        } else {
          r = mid - 1
        }
      }
      dp[pos + 1] = nums[i]
    }
  }
  return len
}
