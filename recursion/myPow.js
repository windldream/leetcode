/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (x === 0) return 0
  if (x === 1) return 1
  if (n === 0) return 1
  if (n === 1) return x
  if (n < 0) return myPow(1 / x, -n)
  if (n & 1) {
    return x * myPow(x * x, Math.trunc(n / 2))
  }
  return myPow(x * x, Math.trunc(n / 2))
}
