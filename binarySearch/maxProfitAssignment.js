/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function (difficulty, profit, worker) {
  const n = difficulty.length
  const m = worker.length
  const list = []

  for (let i = 0; i < n; i++) {
    list.push([difficulty[i], profit[i]])
  }

  list.sort((a, b) => a[0] - b[0])
  worker.sort((a, b) => a - b)

  let top = 0
  let ans = 0

  for (let i = 0, j = 0; i < n; i++) {
    while (j < m && worker[j] < list[i][0]) j++

    if (j === m) break

    ans -= (m - j) * top
    top = Math.max(top, list[i][1])
    ans += (m - j) * top
  }

  return ans
}
