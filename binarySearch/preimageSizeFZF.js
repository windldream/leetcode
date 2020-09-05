/**
 * @param {number} K
 * @return {number}
 */
var preimageSizeFZF = function (K) {
  let lo = BigInt(K)
  let hi = BigInt(10 * K + 1)
  while (lo < hi) {
    const mid = lo + ((hi - lo) >> BigInt(1))
    const count = getCount(mid)
    if (count === BigInt(K)) return 5
    else if (count < K) lo = mid + BigInt(1)
    else hi = mid
  }
  return 0

  function getCount(x, count = BigInt(0)) {
    if (x === BigInt(0)) return count
    return getCount(x / BigInt(5), x / BigInt(5) + count)
  }
}
