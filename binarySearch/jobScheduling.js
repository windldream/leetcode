/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function (startTime, endTime, profit) {
  const n = startTime.length
  const list = []

  for (let i = 0; i < n; i++) {
    list.push([startTime[i], endTime[i], profit[i]])
  }

  list.sort((a, b) => a[1] - b[1])

  const f = Array(n + 1).fill(0)

  for (let i = 1; i <= n; i++) {
    const [start, end, profit] = list[i - 1]
    let last = 0
    let l = 1
    let r = i - 1

    while (l <= r) {
      const mid = (l + r) >> 1

      if (list[mid - 1][1] <= start) {
        last = mid
        l = mid + 1
      } else {
        r = mid - 1
      }
    }

    f[i] = Math.max(f[i - 1], profit)

    if (last !== 0) {
      f[i] = Math.max(f[i - 1], f[last] + profit)
    }
  }

  return f[n]
}
