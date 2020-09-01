/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function (difficulty, profit, worker) {
  const arr = []
  for (let i = 0; i < difficulty.length; i++) {
    arr.push([difficulty[i], profit[i]])
  }
  arr.sort((a, b) => a[0] - b[0])
  let ans = 0
  for (const ability of worker) {
    let max = 0
    for (const [diff, pro] of arr) {
      if (diff > ability) break
      max = Math.max(max, pro)
    }
    ans += max
  }
  return ans
}

maxProfitAssignment([2, 4, 6, 8, 10], [10, 20, 30, 40, 50], [4, 5, 6, 7])
