/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  const len = nums.length
  const dp = Array(len).fill(1)
  for (let i = 0; i < len; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
        if (dp[i] >= 3) return true
      }
    }
  }
  return false
}

increasingTriplet([1, 2, 3, 4, 5])
