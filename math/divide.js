/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var divide = function (a, b) {
  if (b === 1) return a

  const max = 2 ** 31 - 1
  const min = -(2 ** 31)
  let isNeg = (a > 0 && b < 0) || (a < 0 && b > 0)
  let x = a > 0 ? a : -a
  let y = b > 0 ? b : -b
  let l = 0
  let r = x
  let ans = 0

  while (l <= r) {
    const mid = Math.trunc((l + r) / 2)

    if (mul(y, mid) <= x) {
      ans = mid
      l = mid + 1
    } else {
      r = mid - 1
    }
  }

  if (isNeg) ans = -ans

  return ans >= min && ans <= max ? ans : max

  function mul(y, k) {
    let ans = 0

    while (k > 0) {
      if (k & 1) ans += y
      k >>= 1
      y += y
    }

    return ans
  }
}
