/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function (weights, D) {
  const len = weights.length
  const sum = Array(len).fill(0)
  for (let i = 0; i < len; i++) {
    sum[i + 1] = sum[i] + weights[i]
  }

  let lo = 0
  let hi = sum[len] - sum[0]
  const max = Math.max.apply(null, weights)
  while (lo < hi) {
    const mid = lo + ((hi - lo) >> 1)
    if (mid < max) {
      lo = mid + 1
      continue
    }
    const day = getCount(weights, mid)
    if (day > D) {
      lo = mid + 1
    } else {
      hi = mid
    }
  }
  return lo

  function getCount(weights, val) {
    let ans = 0
    let count = 0
    for (const w of weights) {
      count += w
      if (count === val) {
        ans++
        count = 0
      } else if (count > val) {
        ans++
        count = w
      }
    }
    return count === 0 ? ans : ans + 1
  }
}

shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)
