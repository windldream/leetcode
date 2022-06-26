/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const n = cost.length
  // f[i] 表示从第i层向上爬所需支付的费用
  const f = Array(n).fill(0)
  f[0] = cost[0]
  f[1] = cost[1]

  for (let i = 2; i < n; i++) {
    f[i] = Math.min(f[i - 1], f[i - 2]) + cost[i]
  }

  return Math.min(f[n - 1], f[n - 2])
}
