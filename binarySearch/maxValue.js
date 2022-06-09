/**
 * @param {number[][]} events
 * @param {number} k
 * @return {number}
 */
var maxValue = function (events, k) {
  events.sort((a, b) => a[1] - b[1])
  const n = events.length
  const f = Array(n + 1)
    .fill(0)
    .map(() => Array(k + 1).fill(0))

  for (let i = 1; i <= n; i++) {
    const [start, end, value] = events[i - 1]
    let last = 0
    let l = 1
    let r = i - 1

    while (l <= r) {
      const mid = (l + r) >> 1

      if (events[mid - 1][1] < start) {
        last = mid
        l = mid + 1
      } else {
        r = mid - 1
      }
    }

    // for (let p = i - 1; p >= 1; p--) {
    //   if (events[p - 1][1] < start) {
    //     last = p
    //     break
    //   }
    // }

    for (let j = 1; j <= k; j++) {
      f[i][j] = Math.max(f[i - 1][j], f[last][j - 1] + value)
    }
  }

  return f[n][k]
}
