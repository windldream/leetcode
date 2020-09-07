/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
  const n = bloomDay.length
  if (n < m * k) return -1
  let lo = 1
  let hi = Math.max.apply(null, bloomDay)
  while (lo < hi) {
    const mid = lo + ((hi - lo) >> 1)
    if (canPick(bloomDay, mid, k, m)) {
      hi = mid
    } else {
      lo = mid + 1
    }
  }
  return lo

  function canPick(arr, val, k, m) {
    const res = []
    for (let i = 0; i < arr.length; i++) {
      if (val >= arr[i]) {
        res.push('x')
      } else {
        res.push('-')
      }
    }

    let ans = 0
    let i = 0
    while (i < res.length) {
      if (res[i] === 'x') {
        let j = i
        let s = k
        while (res[j] === 'x' && s > 0) {
          j++
          s--
        }
        if (s === 0) {
          ans++
        }
        i = j
      } else {
        i++
      }
    }
    return ans >= m
  }
}

minDays([1, 10, 3, 10, 2], 3, 1)
