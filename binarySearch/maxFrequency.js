/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
  nums.sort((a, b) => a - b)
  const n = nums.length
  const prefixSum = Array(n + 1).fill(0)

  for (let i = 0; i < n; i++) prefixSum[i + 1] = prefixSum[i] + nums[i]

  let max = 0

  for (let i = 0; i < n; i++) {
    let l = 0
    let r = i
    let ans = -1

    while (l <= r) {
      const mid = (l + r) >> 1
      const diff = nums[i] * (i - mid + 1) - (prefixSum[i + 1] - prefixSum[mid])

      if (diff <= k) {
        ans = mid
        r = mid - 1
      } else {
        l = mid + 1
      }
    }

    if (ans !== -1) max = Math.max(max, i - ans + 1)
  }

  return max
}
