/**
 * @param {number[]} ribbons
 * @param {number} k
 * @return {number}
 */
var maxLength = function (ribbons, k) {
  let lo = 1
  let hi = Math.max(...ribbons)
  let ans = 0
  while (lo <= hi) {
    const mid = (lo + hi) >> 1
    const cnt = count(ribbons, mid)
    if (cnt >= k) {
      ans = mid
      lo = mid + 1
    } else {
      hi = mid - 1
    }
  }
  return ans

  function count(ribbons, len) {
    let cnt = 0
    for (const ribbon of ribbons) {
      cnt += ~~(ribbon / len)
    }
    return cnt
  }
}
