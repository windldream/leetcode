/**
 * @param {number[]} jobs
 * @param {number} k
 * @return {number}
 */
const minimumTimeRequired = function (jobs, k) {
  const len = jobs.length
  const mask = 1 << len
  const total = Array(mask).fill(0)
  for (let i = 1; i < mask; i++) {
    for (let j = 0; j < len; j++) {
      if ((i & (1 << j)) === 0) continue
      const left = i - (1 << j)
      total[i] = total[left] + jobs[j]
      break
    }
  }

  const dp = Array(k)
    .fill(0)
    .map(() => Array(mask).fill(-1))
  for (let i = 0; i < mask; i++) {
    dp[0][i] = total[i]
  }

  for (let j = 1; j < k; j++) {
    for (let i = 0; i < mask; i++) {
      let min = Infinity
      for (let s = i; s; s = (s - 1) & i) {
        const left = i - s
        const val = Math.max(dp[j - 1][left], total[s])
        min = Math.min(min, val)
      }
      dp[j][i] = min
    }
  }
  return dp[k - 1][mask - 1]
}
