/**
 * @param {number[]} time
 * @param {number} m
 * @return {number}
 */
var minTime = function (time, m) {
  const n = time.length
  if (n <= m) return 0
  let l = 0
  let r = time.reduce((prev, curr) => prev + curr) - Math.max(...time)
  while (l < r) {
    const mid = (l + r) >> 1
    if (canDone(mid, time, m)) {
      r = mid
    } else {
      l = mid + 1
    }
  }

  return l

  function canDone(num, time, m) {
    let ans = 1
    const n = time.length
    let cost = 0
    let flag = true
    let max = 0
    for (let i = 0; i < n; i++) {
      max = Math.max(max, time[i])
      cost += time[i]
      if (cost > num) {
        if (flag) {
          cost -= max
          flag = false
        } else {
          ans++
          flag = true
          cost = 0
          max = 0
          i--
        }
      }
    }

    return ans <= m
  }
}

minTime([1, 2, 7, 4, 7, 7], 2)
