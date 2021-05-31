/**
 * @param {number[]} candiesCount
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canEat = function (candiesCount, queries) {
  const ans = []
  const n = candiesCount.length
  const presum = Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    presum[i + 1] = presum[i] + candiesCount[i]
  }

  for (const [type, day, cap] of queries) {
    ans.push(check(candiesCount, type, day, cap, presum[type]))
  }
  return ans

  function check(candiesCount, type, day, cap, total) {
    const earliest = Math.floor(total / cap)
    const latest = total + candiesCount[type] - 1
    return day >= earliest && day <= latest
  }
}
