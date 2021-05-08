/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
  const n = bloomDay.length
  if (n < m * k) return -1

  let l = 1
  let r = 1e9
  let ans = -1
  while (l <= r) {
    const mid = (l + r) >> 1
    if (canPickFlower(bloomDay, m, k, mid)) {
      r = mid - 1
      ans = mid
    } else {
      l = mid + 1
    }
  }
  return ans

  function canPickFlower(bloomDay, m, k, time) {
    const n = bloomDay.length
    let pick = 0
    let num = 0
    for (let i = 0; i < n; i++) {
      if (bloomDay[i] <= time) {
        num++
        if (num === k) {
          pick++
          num = 0
          if (pick === m) return true
        }
      } else {
        num = 0
      }
    }
    return false
  }
}
