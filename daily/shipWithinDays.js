/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function (weights, D) {
  let lo = Math.max(...weights)
  let hi = 50000 * 500
  while (lo <= hi) {
    const mid = (lo + hi) >> 1
    if (canResolve(mid, weights, D)) {
      hi = mid - 1
    } else {
      lo = mid + 1
    }
  }
  return lo

  function canResolve(cap, weights, day) {
    let w = 0
    for (let i = 0; i < weights.length; i++) {
      if (w + weights[i] <= cap) {
        w += weights[i]
      } else {
        day--
        w = weights[i]
        if (day < 0) return false
      }
    }
    if (w) day--
    return day >= 0
  }
}
