/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function (piles, H) {
  const len = piles.length
  if (len === 1) return Math.ceil(piles / H)
  piles.sort((a, b) => a - b)

  let lo = 1
  let hi = piles[piles.length - 1]

  while (lo < hi) {
    const mid = lo + ((hi - lo) >> 1)
    const less = piles.filter((pile) => pile <= mid)
    const more = piles.slice(less.length).reduce((pre, cur) => pre + Math.ceil(cur / mid), 0)
    if (less.length + more > H) {
      lo = mid + 1
    } else {
      hi = mid
    }
  }

  return lo
}

minEatingSpeed([3, 6, 7, 11], 8)
