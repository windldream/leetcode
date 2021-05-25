/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minChanges = function (nums, k) {
  const n = nums.length
  const groups = Array(k)
    .fill(0)
    .map(() => new Map())
  const sizes = Array(k).fill(0)

  for (let i = 0; i < k; i++) {
    for (let j = i; j < n; j += k) {
      groups[i].set(nums[j], (groups[i].get(nums[j]) || 0) + 1)
      sizes[i] += 1
    }
  }

  let dp = Array(1 << 10).fill(Infinity)
  dp[0] = 0
  for (let i = 0; i < k; i++) {
    const low = Math.min(...dp)
    const ndp = Array(1 << 10).fill(low + sizes[i])
    for (let j = 0; j < 1 << 10; j++) {
      if (dp[j] === Infinity) continue
      for (const [num, freq] of groups[i]) {
        const next = num ^ j
        ndp[next] = Math.min(ndp[next], dp[j] + sizes[i] - freq)
      }
    }
    dp = ndp
  }
  return dp[0]
}
