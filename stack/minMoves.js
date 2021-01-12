/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minMoves = function (nums, k) {
  if (k === 1) return 0
  const n = nums.length
  const g = []
  const sum = [0]
  let count = -1
  for (let i = 0; i < n; i++) {
    if (nums[i] === 1) {
      count++
      g.push(i - count)
      sum.push(sum[sum.length - 1] + g[g.length - 1])
    }
  }

  let m = g.length
  let ans = Infinity
  for (let i = 0; i + k <= m; i++) {
    const mid = (i + i + k - 1) >> 1
    const q = g[mid]
    ans = Math.min(ans, (2 * (mid - i) - k + 1) * q + (sum[i + k] - sum[mid + 1]) - (sum[mid] - sum[i]))
  }
  return ans
}

minMoves([1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1], 7)
