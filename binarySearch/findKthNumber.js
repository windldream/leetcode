/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (m, n, k) {
  if (k === 1) return k
  if (k === m * n) return k
  let lo = 1
  let hi = m * n
  while (lo < hi) {
    const mid = lo + ((hi - lo) >> 1)
    const count = getCount(m, n, mid)
    if (count < k) {
      lo = mid + 1
    } else {
      hi = mid
    }
  }
  return lo

  function getCount(m, n, num) {
    let count = 0
    for (let i = 1; i <= m; i++) {
      // 在当前的第 i 行有多少个值是不大于 num 的
      count += Math.min(Math.floor(num / i), n)
    }
    return count
  }
}

findKthNumber(3, 3, 5)
