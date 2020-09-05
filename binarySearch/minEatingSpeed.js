/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function (piles, H) {
  const len = piles.length
  if (len === 1) return Math.ceil(piles / H)

  let lo = 1
  let hi = 10 ** 9

  while (lo < hi) {
    const mid = lo + ((hi - lo) >> 1)
    const total = piles.reduce((pre, cur) => {
      if (cur <= mid) {
        pre + 1
      } else {
        pre + Math.ceil(cur / mid)
      }
    }, 0)
    if (total > H) {
      lo = mid + 1
    } else {
      hi = mid
    }
  }

  return lo
}

minEatingSpeed([3, 6, 7, 11], 8)
