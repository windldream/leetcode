/**
 * @param {number[]} ribbons
 * @param {number} k
 * @return {number}
 */
var maxLength = function (ribbons, k) {
  let l = 0
  let r = Math.min(...ribbons)
  let ans = 0

  while (l <= r) {
    const mid = (l + r) >> 1

    if (canDivide(ribbons, mid, k)) {
      ans = mid
      l = mid + 1
    } else {
      r = mid - 1
    }
  }

  return ans

  function canDivide(ribbons, t, k) {
    return ribbons.reduce((count, cur) => count + Math.floor(cur / t), 0) >= k
  }
}
