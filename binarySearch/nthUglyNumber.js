/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var nthUglyNumber = function (n, a, b, c) {
  const lab = (a * b) / gcd(a, b)
  const lac = (a * c) / gcd(a, c)
  const lbc = (b * c) / gcd(b, c)
  const lcm = (lab * c) / gcd(lab, c)
  let lo = 0
  let hi = Math.max(a, b, c) * n
  while (lo < hi) {
    const mid = lo + Math.trunc((hi - lo) / 2)
    if (
      Math.trunc(mid / a) +
        Math.trunc(mid / b) +
        Math.trunc(mid / c) -
        Math.trunc(mid / lab) -
        Math.trunc(mid / lac) -
        Math.trunc(mid / lbc) +
        Math.trunc(mid / lcm) <
      n
    ) {
      lo = mid + 1
    } else {
      hi = mid
    }
  }

  return lo

  function gcd(x, y) {
    if (x === 0) return y
    return gcd(y % x, x)
  }
}
