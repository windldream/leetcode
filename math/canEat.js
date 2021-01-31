/**
 * @param {number[]} candiesCount
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canEat = function (candiesCount, queries) {
  const ans = []
  const len = candiesCount.length
  const prefixSum = Array(len + 1).fill(0)
  for (let i = 0; i < len; i++) {
    prefixSum[i + 1] = prefixSum[i] + candiesCount[i]
  }
  for (const [favoriteType, favoriteDay, dailyCap] of queries) {
    ans.push(check(candiesCount, favoriteType, favoriteDay, dailyCap, prefixSum))
  }
  return ans

  function check(count, type, day, cap, sum) {
    const total = sum[type]
    const earliest = Math.floor(total / cap)
    const latest = total + count[type] - 1
    return day >= earliest && day <= latest
  }
}

canEat(
  [7, 4, 5, 3, 8],
  [
    [0, 2, 2],
    [4, 2, 4],
    [2, 13, 1000000000]
  ]
)
