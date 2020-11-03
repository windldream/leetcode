/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  const len = nums.length
  const prefixSum = Array(len + 1).fill(0)
  for (let i = 0; i < len; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i]
  }
  let ans = -Infinity
  for (let i = 0; i <= len - k; i++) {
    let j = 0
    ans = Math.max(ans, (prefixSum[i + k] - prefixSum[i]) / k)
  }
  return ans
}

findMaxAverage([1, 12, -5, -6, 50, 3], 4)
