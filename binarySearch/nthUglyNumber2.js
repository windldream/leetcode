/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var nthUglyNumber = function (n, a, b, c) {
  let l = 1
  let r = n * Math.min(a, b, c)
  let res = -1

  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    const cnt = countK(mid, a, b, c)

    if (cnt > n) {
      r = mid - 1
    } else if (cnt < n) {
      l = mid + 1
    } else {
      res = mid
      break
    }
  }

  return res - Math.min(res % a, res % b, res % c)

  function countK(k, a, b, c) {
    const lcm_ab = lcm(a, b)
    const lcm_ac = lcm(a, c)
    const lcm_bc = lcm(b, c)
    const lcm_abc = lcm(lcm_ab, c)

    return (
      Math.trunc(k / a) +
      Math.trunc(k / b) +
      Math.trunc(k / c) -
      Math.trunc(k / lcm_ab) -
      Math.trunc(k / lcm_ac) -
      Math.trunc(k / lcm_bc) +
      Math.trunc(k / lcm_abc)
    )
  }

  function gcd(a, b) {
    if (a === 0) return b
    return gcd(b % a, a)
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b)
  }
}
