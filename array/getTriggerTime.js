/**
 * @param {number[][]} increase
 * @param {number[][]} requirements
 * @return {number[]}
 */
var getTriggerTime = function (increase, requirements) {
  const n = increase.length
  const prefixSum = Array(n + 1)
    .fill(0)
    .map(() => Array(3).fill(0))
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 3; j++) {
      prefixSum[i + 1][j] = prefixSum[i][j] + increase[i][j]
    }
  }

  const ans = []
  for (const v of requirements) {
    let l = 0
    let r = n
    while (l <= r) {
      const mid = (l + r) >> 1
      const sum = prefixSum[mid]
      if (sum[0] >= v[0] && sum[1] >= v[1] && sum[2] >= v[2]) {
        r = mid - 1
      } else {
        l = mid + 1
      }
    }
    if (l <= n && prefixSum[l][0] >= v[0] && prefixSum[l][1] >= v[1] && prefixSum[l][2] >= v[2]) {
      ans.push(l)
    } else {
      ans.push(-1)
    }
  }
  return ans
}
