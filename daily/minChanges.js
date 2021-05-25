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
    // 第i列 整列替换
    const ndp = Array(1 << 10).fill(low + sizes[i])
    // 修改第i列部分数
    for (let j = 0; j < 1 << 10; j++) {
      if (dp[j] === Infinity) continue
      // 第i列为num的数不替换，剩余的数替换次数为sizes[i] - freq
      for (const [num, freq] of groups[i]) {
        const next = num ^ j
        // ndp[next] 表示前i列异或值为next的最小修改次数
        // dp[j] 表示前i-1列异或值为j的最小修改次数
        ndp[next] = Math.min(ndp[next], dp[j] + sizes[i] - freq)
      }
    }
    dp = ndp
  }
  return dp[0]
}
