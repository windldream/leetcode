/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (m, n, k) {
  if (k === 1 || k === m * n) return k

  let lo = 1
  let hi = m * n
  let ans = 1

  while (lo <= hi) {
    const mid = (lo + hi) >> 1
    const count = countNum(m, n, mid)

    if (count >= k) {
      ans = mid
      hi = mid - 1
    } else {
      lo = mid + 1
    }
  }

  return ans

  function countNum(m, n, num) {
    let count = 0

    for (let i = 1; i <= m; i++) {
      count += Math.min(Math.floor(num / i), n)
    }

    return count
  }
}
