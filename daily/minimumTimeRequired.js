/**
 * @param {number[]} jobs
 * @param {number} k
 * @return {number}
 */
var minimumTimeRequired = function (jobs, k) {
  const n = jobs.length
  const mask = 1 << n
  const total = Array(mask).fill(0)
  for (let i = 0; i < mask; i++) {
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        total[i] = total[i - (1 << j)] + jobs[j]
        break
      }
    }
  }

  // 一个工人完成这些任务需要多长时间
  const dp = Array(k)
    .fill(0)
    .map(() => Array(mask).fill(Infinity))
  for (let i = 0; i < mask; i++) {
    dp[0][i] = total[i]
  }

  for (let i = 1; i < k; i++) {
    for (let j = 0; j < mask; j++) {
      // 求 j 的子集
      let min = Infinity
      for (let s = j; s; s = (s - 1) & j) {
        const val = Math.max(dp[i - 1][j - s], total[s])
        min = Math.min(min, val)
      }
      dp[i][j] = min
    }
  }

  return dp[k - 1][mask - 1]
}

// i [1, 3, 6]
//
