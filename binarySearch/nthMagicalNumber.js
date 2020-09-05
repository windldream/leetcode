/**
 * @param {number} N
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var nthMagicalNumber = function (N, A, B) {
  const MOD = 10 ** 9 + 7
  const L = (A * B) / gcd(A, B)
  let lo = 0
  let hi = Math.max(A, B) * N
  while (lo < hi) {
    const mid = lo + Math.trunc((hi - lo) / 2)
    if (Math.trunc(mid / A) + Math.trunc(mid / B) - Math.trunc(mid / L) < N) {
      lo = mid + 1
    } else {
      hi = mid
    }
  }

  return lo % MOD

  function gcd(x, y) {
    if (x === 0) return y
    return gcd(y % x, x)
  }
}

nthMagicalNumber(1000000000, 40000, 40000)
