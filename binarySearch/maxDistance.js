/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function (position, m) {
  position.sort((a, b) => a - b)
  let lo = 1
  let hi = Math.trunc((position[position.length - 1] - position[0]) / (m - 1)) + 1
  let ans = 1
  while (lo < hi) {
    const mid = lo + ((hi - lo) >> 1)
    if (check(position, mid, m)) {
      lo = mid + 1
    } else {
      hi = mid
    }
  }
  return lo - 1

  function check(position, dis, m) {
    let count = 1
    let i = 0
    for (let j = 1; j < position.length; j++) {
      if (position[j] - position[i] >= dis) {
        i = j
        count++
      }
      if (count >= m) return true
    }
    return false
  }
}
