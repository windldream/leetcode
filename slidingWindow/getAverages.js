/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function (nums, k) {
  const n = nums.length
  const prefixSum = Array(n + 1).fill(0)

  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i]
  }

  const ans = Array(n).fill(-1)

  for (let i = 0; i < n; i++) {
    if (i - k < 0 || i + k >= n) continue
    ans[i] = ~~((prefixSum[i + k + 1] - prefixSum[i - k]) / (2 * k + 1))
  }

  return ans
}
