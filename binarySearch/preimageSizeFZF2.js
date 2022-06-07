/**
 * @param {number} k
 * @return {number}
 */
var preimageSizeFZF = function (k) {
  let l = BigInt(k)
  let r = BigInt(10 * k + 1)

  while (l <= r) {
    const mid = l + ((r - l) >> 1n)
    const cnt = getCount(mid)

    if (cnt === BigInt(k)) return 5
    else if (cnt < BigInt(k)) l = mid + 1n
    else r = mid - 1n
  }

  return 0

  function getCount(x, count = 0n) {
    if (x === 0n) return count

    return getCount(x / 5n, x / 5n + count)
  }
}
