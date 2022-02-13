/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const n = nums.length
  const prefixSum = Array(n + 1).fill(0)

  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] += prefixSum[i] + nums[i]
  }

  for (let i = 0; i < n; i++) {
    const left = prefixSum[i]
    const right = prefixSum[n] - prefixSum[i + 1]

    if (left === right) return i
  }

  return -1
}
